import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const productionOrigin = "https://www.healthycommunity.in";
const outputRoot = new URL("../.next/server/app/", import.meta.url);
const outputRootPath = fileURLToPath(outputRoot);

async function readOutput(relativePath) {
  try {
    return await readFile(new URL(relativePath, outputRoot), "utf8");
  } catch (error) {
    if (error?.code === "ENOENT") {
      assert.fail(`Missing generated output: ${relativePath}. Run npm run build before this check.`);
    }
    throw error;
  }
}

async function listHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) return listHtmlFiles(entryPath);
      return entry.isFile() && entry.name.endsWith(".html") ? [entryPath] : [];
    }),
  );

  return files.flat();
}

const sitemap = await readOutput("sitemap.xml.body");
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);

assert.ok(sitemapUrls.length > 0, "The generated sitemap must contain URLs.");
assert.equal(new Set(sitemapUrls).size, sitemapUrls.length, "The sitemap must not contain duplicate URLs.");
assert.ok(
  sitemapUrls.every((url) => url === productionOrigin || url.startsWith(`${productionOrigin}/`)),
  "Every sitemap URL must use the Healthy Community production origin.",
);
assert.ok(
  !sitemapUrls.includes(`${productionOrigin}/articles/diabetes-diet-tips-marathi`),
  "The redirected legacy diabetes article must not be submitted in the sitemap.",
);
assert.ok(
  !sitemapUrls.some((url) => url === `${productionOrigin}/&amp;` || url === `${productionOrigin}/&`),
  "The malformed /& URL must not be submitted in the sitemap.",
);

const robots = await readOutput("robots.txt.body");
assert.match(robots, new RegExp(`^Host: ${productionOrigin.replaceAll(".", "\\.")}$`, "m"));
assert.match(
  robots,
  new RegExp(`^Sitemap: ${productionOrigin.replaceAll(".", "\\.")}\\/sitemap\\.xml$`, "m"),
);

const representativePages = [
  ["diabetes/exercise.html", "/diabetes/exercise"],
  ["diabetes/diet.html", "/diabetes/diet"],
  ["exercise.html", "/exercise"],
  ["millets.html", "/millets"],
  ["articles/dengue-symptoms-marathi.html", "/articles/dengue-symptoms-marathi"],
];

for (const [file, route] of representativePages) {
  const html = await readOutput(file);
  const expectedUrl = `${productionOrigin}${route}`;
  const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(
    (match) => match[1],
  );

  assert.ok(
    html.includes(`<link rel="canonical" href="${expectedUrl}"`),
    `${route} must declare its production canonical URL.`,
  );
  assert.ok(
    html.includes(`<meta property="og:url" content="${expectedUrl}"`),
    `${route} must declare its production Open Graph URL.`,
  );
  assert.ok(jsonLdBlocks.length > 0, `${route} must include structured data.`);
  assert.ok(
    jsonLdBlocks.some((block) => block.includes(productionOrigin)),
    `${route} structured data must use the production origin.`,
  );
  assert.ok(!html.includes(".vercel.app"), `${route} must not expose a Vercel origin in SEO output.`);
}

const htmlFiles = await listHtmlFiles(outputRootPath);
for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  assert.ok(!html.includes('href="/&"'), `${file} contains the malformed /& internal link.`);
  assert.ok(!html.includes('href="/%26"'), `${file} contains an encoded malformed /& internal link.`);
  assert.ok(
    !html.includes('href="/articles/diabetes-diet-tips-marathi"'),
    `${file} links internally to the redirected legacy diabetes article.`,
  );
}

console.log("Generated SEO output verification passed.");
