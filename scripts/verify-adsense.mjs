import { readFile } from "node:fs/promises";

const expectedEntry = "google.com, pub-2707974712919773, DIRECT, f08c47fec0942fa0";
const adsTxt = (await readFile(new URL("../public/ads.txt", import.meta.url), "utf8")).trim();

if (adsTxt !== expectedEntry) {
  console.error("AdSense ads.txt verification failed.");
  console.error(`Expected: ${expectedEntry}`);
  console.error(`Found:    ${adsTxt || "<empty>"}`);
  process.exit(1);
}

console.log("AdSense ads.txt verification passed.");
