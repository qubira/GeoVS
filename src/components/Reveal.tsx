"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let done = false;
    let ticking = false;

    const check = () => {
      ticking = false;
      if (done || !node) return;
      // Anything that has already scrolled past the bottom edge of the
      // viewport (top < innerHeight) has had its chance to be seen —
      // reveal it. This also covers large/instant scroll jumps (deep
      // links, quick nav clicks) that skip past a section without ever
      // triggering an IntersectionObserver entry for it.
      if (node.getBoundingClientRect().top < window.innerHeight) {
        done = true;
        setVisible(true);
        cleanup();
      }
    };

    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(check);
    };

    function cleanup() {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    }

    check();
    if (!done) {
      window.addEventListener("scroll", onScrollOrResize, { passive: true });
      window.addEventListener("resize", onScrollOrResize);
    }

    return cleanup;
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
