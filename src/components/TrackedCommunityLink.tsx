"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

export default function TrackedCommunityLink({
  href,
  placement,
  className,
  children,
}: {
  href: string;
  placement: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackEvent("community_join_click", { placement, destination: "whatsapp" })}
    >
      {children}
    </a>
  );
}
