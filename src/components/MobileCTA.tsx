"use client";

import { useEffect, useState } from "react";

export default function MobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-geo-bg/95 p-3 backdrop-blur-md transition-transform duration-300 sm:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href="#waitlist"
        className="block w-full rounded-full bg-geo-cta py-3 text-center font-display text-sm font-bold text-geo-bg shadow-neon-pink"
      >
        Únete a la lista de espera
      </a>
    </div>
  );
}
