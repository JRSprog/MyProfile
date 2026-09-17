"use client";

import { ReactNode } from "react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

interface RevealSectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export function RevealSection({ id, className = "", children }: RevealSectionProps) {
  const { ref, revealed } = useRevealOnScroll<HTMLElement>(0.15);

  return (
    <section
      id={id}
      ref={ref}
      className={`${className} ${revealed ? "section-scroll" : "section-hidden"}`}
    >
      {children}
    </section>
  );
}
