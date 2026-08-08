import { NextResponse } from "next/server";
import { Resend } from "resend";
import { resolveAllowedOrigins } from "@/lib/site-url";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  message: string;
  website?: string;
};

const MAX_CONTENT_LENGTH_BYTES = 20_000;

function jsonNoStore(body: unknown, init?: ResponseInit) {
  const response = NextResponse.json(body, init);
  response.headers.set("Cache-Control", "no-store, max-age=0");
  return response;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isTrustedRequestOrigin(request: Request) {
  const allowedOrigins = resolveAllowedOrigins(request.url);
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");

  if (origin) {
    return allowedOrigins.has(origin);
  }

  if (referer) {
    try {
      return allowedOrigins.has(new URL(referer).origin);
    } catch {
      return false;
    }
  }

  return false;
}

function getClientIdentifier(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp;

  return "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const timestamps = (requestLog.get(key) ?? []).filter((ts) => ts >= windowStart);

  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(key, timestamps);
    return true;
  }

  timestamps.push(now);
  requestLog.set(key, timestamps);
  return false;
}

function validatePayload(payload: ContactPayload) {
  const errors: Record<string, string> = {};

  if (!payload.name?.trim()) errors.name = "Name is required.";
  if (!/^\d{10}$/.test(payload.phone ?? "")) errors.phone = "Phone must be 10 digits.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email ?? "")) errors.email = "Valid email is required.";
  if (!payload.message?.trim()) errors.message = "Message is required.";

  if ((payload.name ?? "").length > 120) errors.name = "Name is too long.";
  if ((payload.message ?? "").length > 5000) errors.message = "Message is too long.";

  return errors;
}

export async function POST(request: Request) {
  try {
    if (!isTrustedRequestOrigin(request)) {
      return jsonNoStore(
        { message: "ही विनंती मंजूर केली जाऊ शकली नाही. कृपया पुन्हा प्रयत्न करा." },
        { status: 403 },
      );
    }

    const contentLength = Number(request.headers.get("content-length") ?? "0");
    if (Number.isFinite(contentLength) && contentLength > MAX_CONTENT_LENGTH_BYTES) {
      return jsonNoStore(
        { message: "विनंतीचा आकार जास्त आहे. कृपया कमी माहिती पाठवा." },
        { status: 413 },
      );
    }

    const body = (await request.json()) as Partial<ContactPayload>;
    const payload: ContactPayload = {
      name: (body.name ?? "").toString().trim(),
      phone: (body.phone ?? "").toString().trim(),
      email: (body.email ?? "").toString().trim(),
      message: (body.message ?? "").toString().trim(),
      website: (body.website ?? "").toString().trim(),
    };

    // Honeypot field: silently accept to avoid teaching bots.
    if (payload.website) {
      return jsonNoStore({ message: "तुमचा संदेश यशस्वीरीत्या पाठवला गेला आहे." });
    }

    const clientId = `${getClientIdentifier(request)}:${payload.email.toLowerCase()}`;
    if (isRateLimited(clientId)) {
      const response = jsonNoStore(
        { message: "खूप जलद विनंत्या आल्या आहेत. कृपया काही वेळाने पुन्हा प्रयत्न करा." },
        { status: 429 },
      );
      response.headers.set("Retry-After", "900");
      return response;
    }

    const errors = validatePayload(payload);
    if (Object.keys(errors).length > 0) {
      return jsonNoStore({ message: "Invalid form data.", errors }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = (process.env.CONTACT_FORM_TO ?? "nilvirajc@gmail.com")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean);
    const from = process.env.CONTACT_FORM_FROM ?? "Healthy Community <onboarding@resend.dev>";

    if (!apiKey) {
      return jsonNoStore(
        {
          message: "सध्या संदेश सेवा उपलब्ध नाही. कृपया थोड्या वेळाने पुन्हा प्रयत्न करा.",
        },
        { status: 500 },
      );
    }

    if (to.length === 0) {
      return jsonNoStore(
        {
          message: "सध्या संदेश सेवा उपलब्ध नाही. कृपया थोड्या वेळाने पुन्हा प्रयत्न करा.",
        },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);
    const safeName = escapeHtml(payload.name);
    const safePhone = escapeHtml(payload.phone);
    const safeEmail = escapeHtml(payload.email);
    const safeMessage = escapeHtml(payload.message).replace(/\n/g, "<br />");
    const subject = `New Contact Form Message from ${payload.name}`;

    await resend.emails.send({
      from,
      to,
      replyTo: payload.email,
      subject,
      text: [
        `Name: ${payload.name}`,
        `Phone: ${payload.phone}`,
        `Email: ${payload.email}`,
        "",
        "Message:",
        payload.message,
      ].join("\n"),
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return jsonNoStore({
      message: "तुमचा संदेश यशस्वीरीत्या पाठवला गेला आहे.",
    });
  } catch (error) {
    const message =
      error instanceof Error && error.message.includes("You can only send testing emails")
        ? "सध्या संदेश सेवा उपलब्ध नाही. कृपया थोड्या वेळाने पुन्हा प्रयत्न करा."
        : "सध्या संदेश पाठवता आला नाही. कृपया थोड्या वेळाने पुन्हा प्रयत्न करा.";

    return jsonNoStore({ message }, { status: 500 });
  }
}
