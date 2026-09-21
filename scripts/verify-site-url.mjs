import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

const moduleUrl = new URL("../src/lib/site-url.ts", import.meta.url).href;

function resolveWithEnv(env) {
  const script = `
    const { resolveSiteUrl } = await import(${JSON.stringify(moduleUrl)});
    console.warn = () => {};
    process.stdout.write(resolveSiteUrl());
  `;

  return execFileSync(process.execPath, ["--experimental-strip-types", "--input-type=module", "--eval", script], {
    encoding: "utf8",
    env: { ...env, NODE_NO_WARNINGS: "1" },
  }).trim();
}

assert.equal(
  resolveWithEnv({
    NODE_ENV: "production",
    VERCEL_PROJECT_PRODUCTION_URL: "healthy-community-navy.vercel.app",
    VERCEL_URL: "healthy-community-git-preview.vercel.app",
  }),
  "https://www.healthycommunity.in",
  "Vercel deployment URLs must never become the production canonical origin.",
);

assert.equal(
  resolveWithEnv({
    NODE_ENV: "production",
    NEXT_PUBLIC_SITE_URL: "https://www.healthycommunity.in/",
  }),
  "https://www.healthycommunity.in",
  "The configured canonical origin should be normalized.",
);

assert.equal(
  resolveWithEnv({ NODE_ENV: "development" }),
  "http://localhost:3000",
  "Local development should keep using the local origin.",
);

console.log("Site URL verification passed.");
