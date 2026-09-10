"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

let lastTrackedUrl = "";

export default function AnalyticsPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;
    const pageLocation = new URL(pagePath, window.location.origin).toString();

    if (pageLocation === lastTrackedUrl) return;
    lastTrackedUrl = pageLocation;

    trackEvent("page_view", {
      page_location: pageLocation,
      page_path: pagePath,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}
