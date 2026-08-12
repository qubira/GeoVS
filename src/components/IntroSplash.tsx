"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SEEN_KEY = "geovs-intro-seen";

export default function IntroSplash() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const seen = sessionStorage.getItem(SEEN_KEY);

    if (reduced || seen) {
      sessionStorage.setItem(SEEN_KEY, "1");
      return;
    }

    setShow(true);
    document.body.style.overflow = "hidden";

    const fillTimer = window.setTimeout(() => setProgress(100), 60);
    const doneTimer = window.setTimeout(finish, 1500);

    return () => {
      window.clearTimeout(fillTimer);
      window.clearTimeout(doneTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function finish() {
    setFading(true);
    sessionStorage.setItem(SEEN_KEY, "1");
    window.setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 500);
  }

  if (!show) return null;

  return (
    <div
      role="presentation"
      onClick={finish}
      className={`fixed inset-0 z-[100] flex cursor-pointer flex-col items-center justify-center bg-geo-bg transition-opacity duration-500 ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-game-grid opacity-20" />

      <Image
        src="/imagen/logo_geovs.png"
        alt="GeoVS"
        width={320}
        height={213}
        priority
        className="relative w-40 animate-float drop-shadow-[0_0_35px_rgba(139,47,224,0.65)] sm:w-52"
      />

      <div className="relative mt-8 h-2 w-56 overflow-hidden rounded-full bg-white/10 sm:w-72">
        <div
          className="h-full rounded-full bg-geo-cta transition-[width] duration-[1400ms] ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="relative mt-4 font-display text-xs font-bold tracking-[0.3em] text-white/50">
        CARGANDO NIVEL...
      </p>

      <p className="absolute bottom-8 font-display text-[11px] font-bold tracking-widest text-white/25">
        TOCA PARA SALTAR
      </p>
    </div>
  );
}
