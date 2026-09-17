"use client";

export function scrollToAnchor(targetId: string, offset = 80) {
  if (targetId === "#") return;
  const targetElement = document.querySelector(targetId);
  if (!targetElement) return;

  const top =
    targetElement.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}
