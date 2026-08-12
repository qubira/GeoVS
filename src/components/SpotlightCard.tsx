"use client";

import { useRef } from "react";

export default function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;

    node.style.setProperty("--x", `${px}px`);
    node.style.setProperty("--y", `${py}px`);

    const rotateY = ((px / rect.width) - 0.5) * 14;
    const rotateX = (0.5 - py / rect.height) * 14;
    node.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
  }

  function handleMouseLeave() {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0)";
  }

  return (
    <div className="tilt-perspective">
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`spotlight-card tilt-card ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
