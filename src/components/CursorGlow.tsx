"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const node = ref.current;
    if (!node) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      node.style.opacity = "1";
    };

    const tick = () => {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[45] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 mix-blend-screen transition-opacity duration-500"
      style={{
        background:
          "radial-gradient(circle, rgba(34,211,238,0.18) 0%, rgba(139,47,224,0.12) 40%, transparent 70%)",
      }}
    />
  );
}
