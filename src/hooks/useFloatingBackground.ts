"use client";

import { useEffect, useState } from "react";

export interface FloatingDot {
  id: number;
  left: string;
  animationDelay: string;
  size: string;
}

export function useFloatingBackground(count = 50) {
  const [dots, setDots] = useState<FloatingDot[]>([]);

  useEffect(() => {
    const generated: FloatingDot[] = Array.from({ length: count }, (_, i) => {
      const size = `${Math.random() * 20 + 10}px`;
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 15}s`,
        size,
      };
    });
    setDots(generated);
  }, [count]);

  return dots;
}
