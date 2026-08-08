const LOCAL_DEV_URL = "http://localhost:3000";
let hasWarnedMissingSiteUrl = false;

function normalizeSiteUrl(rawUrl: string) {
  const trimmed = rawUrl.trim().replace(/\/$/, "");
  if (!trimmed) return "";

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  return `https://${trimmed}`;
}

function getConfiguredSiteUrl() {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined,
  ];

  for (const candidate of candidates) {
    if (!candidate) continue;
    const normalized = normalizeSiteUrl(candidate);
    if (normalized) return normalized;
  }

  return "";
}

export function resolveSiteUrl() {
  const configured = getConfiguredSiteUrl();
  if (configured) return configured;

  if (process.env.NODE_ENV === "production") {
    if (!hasWarnedMissingSiteUrl) {
      console.warn("NEXT_PUBLIC_SITE_URL is not configured. Falling back to localhost URL.");
      hasWarnedMissingSiteUrl = true;
    }
  }

  return LOCAL_DEV_URL;
}

export function resolveAllowedOrigins(requestUrl?: string) {
  const origins = new Set<string>();
  const configured = getConfiguredSiteUrl();

  if (configured) {
    origins.add(new URL(configured).origin);
  }

  if (requestUrl) {
    origins.add(new URL(requestUrl).origin);
  }

  return origins;
}