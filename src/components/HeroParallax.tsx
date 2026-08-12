"use client";

import { useEffect, useRef } from "react";

export default function HeroParallax() {
  const backRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    let nx = 0;
    let ny = 0;

    const apply = () => {
      ticking = false;
      if (backRef.current) {
        backRef.current.style.transform = `translate3d(${nx * -10}px, ${
          ny * -6
        }px, 0)`;
      }
      if (frontRef.current) {
        frontRef.current.style.transform = `translate3d(${nx * -20}px, ${
          ny * -10
        }px, 0)`;
      }
    };

    const onMove = (e: MouseEvent) => {
      nx = e.clientX / window.innerWidth - 0.5;
      ny = e.clientY / window.innerHeight - 0.5;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(apply);
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div
        ref={backRef}
        aria-hidden
        className="mountain-back absolute inset-x-0 bottom-0 z-0 h-40 bg-geo-purple/25 transition-transform duration-200 ease-out sm:h-56"
      />
      <div
        ref={frontRef}
        aria-hidden
        className="mountain-front absolute inset-x-0 bottom-0 z-0 h-28 bg-geo-blue/30 transition-transform duration-200 ease-out sm:h-40"
      />
    </>
  );
}
