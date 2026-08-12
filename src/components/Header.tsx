"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#video", label: "Gameplay" },
  { href: "#como-se-juega", label: "Cómo se juega" },
  { href: "#features", label: "Características" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-geo-bg/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/imagen/logo_geovs.png"
            alt="GeoVS"
            width={40}
            height={40}
            className="h-9 w-9 rounded-lg object-cover shadow-neon-sm"
          />
          <span className="font-display text-lg font-extrabold text-white">
            Geo<span className="text-geo-cyan">VS</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm font-bold text-white/70 transition-colors hover:text-geo-cyan"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#waitlist"
            className="hidden rounded-full bg-geo-cta px-5 py-2 font-display text-sm font-bold text-geo-bg transition-transform hover:scale-105 sm:inline-block"
          >
            Únete ahora
          </a>
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
          >
            <span className="sr-only">Menú</span>
            <div className="flex flex-col gap-1.5">
              <span
                className={`h-0.5 w-5 bg-white transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-white transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-white transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-geo-bg/95 px-6 py-4 backdrop-blur-md md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 font-display text-sm font-bold text-white/80 hover:bg-white/5 hover:text-geo-cyan"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-geo-cta px-5 py-2.5 text-center font-display text-sm font-bold text-geo-bg"
          >
            Únete ahora
          </a>
        </nav>
      )}

      <div className="h-[3px] w-full bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-geo-yellow via-geo-pink to-geo-blue shadow-neon-sm transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
}
