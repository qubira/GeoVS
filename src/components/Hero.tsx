import Image from "next/image";
import HeroParallax from "./HeroParallax";
import VsBattle from "./VsBattle";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      <div className="absolute inset-0 bg-geo-gradient" />
      <HeroParallax />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pb-16 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-geo-cyan/40 bg-geo-cyan/10 px-4 py-1.5 font-display text-xs font-bold tracking-widest text-geo-cyan">
          <span className="h-2 w-2 rounded-full bg-geo-cyan animate-blink" />
          EARLY ACCESS ABIERTO
        </span>

        <Image
          src="/imagen/logo_geovs.png"
          alt="GeoVS Multiplayer"
          width={480}
          height={320}
          priority
          className="mt-6 w-56 animate-float drop-shadow-[0_0_35px_rgba(139,47,224,0.55)] sm:w-72"
        />

        <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
          <span className="text-extrude">Corre. Esquiva.</span>{" "}
          <span className="animate-text-glow bg-gradient-to-r from-geo-yellow via-geo-pink to-geo-blue bg-clip-text text-transparent">
            Gana en vivo.
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-balance text-lg text-white/70 sm:text-xl">
          Geometry Dash, pero compites en vivo contra otros jugadores. Entra a una
          sala, corre el mismo nivel en tiempo real y demuestra quién domina el
          leaderboard.
        </p>

        <VsBattle />

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#waitlist"
            className="animate-pulse-glow rounded-full bg-geo-cta bg-[length:200%_200%] px-8 py-3.5 font-display text-base font-bold text-geo-bg transition-transform hover:scale-105"
          >
            Únete a la lista de espera
          </a>
          <a
            href="#video"
            className="group rounded-full border border-white/20 px-8 py-3.5 font-display text-base font-bold text-white/90 transition-colors hover:border-geo-cyan/60 hover:bg-white/5"
          >
            <span className="mr-1 inline-block transition-transform group-hover:translate-x-0.5">
              ▶
            </span>{" "}
            Ver gameplay
          </a>
        </div>

        <p className="mt-6 text-sm uppercase tracking-[0.2em] text-white/40">
          Sin descargas · Directo en el navegador · Partidas de 1-3 min
        </p>
      </div>

      <div className="spike-divider relative z-10 h-5 w-full bg-geo-purple shadow-neon-sm" />
    </section>
  );
}
