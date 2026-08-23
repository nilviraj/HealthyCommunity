const ADSENSE_CLIENT_ID_PATTERN = /^ca-pub-\d{16}$/;

export function normalizeAdSenseClientId(value?: string) {
  const candidate = value?.trim();

  if (!candidate) {
    return undefined;
  }

  const normalized = candidate.startsWith("ca-pub-")
    ? candidate
    : candidate.startsWith("pub-")
      ? `ca-${candidate}`
      : `ca-pub-${candidate}`;

  return ADSENSE_CLIENT_ID_PATTERN.test(normalized) ? normalized : undefined;
}
