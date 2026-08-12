import Reveal from "./Reveal";
import SpikeDivider from "./SpikeDivider";

export default function VideoSection() {
  return (
    <section id="video" className="relative bg-geo-bg-alt/80 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="text-center">
          <span className="font-display text-xs font-bold tracking-[0.3em] text-geo-pink">
            GAMEPLAY
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">
            Mira GeoVS en <span className="text-geo-cyan">acción</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 rounded-2xl bg-geo-conic bg-[length:200%_200%] p-[3px] shadow-neon animate-gradient-text">
            <div className="overflow-hidden rounded-2xl bg-black">
              <video
                className="aspect-video w-full bg-black"
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/videos/geovs-gameplay.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-white/60">
            Varios jugadores corren el mismo nivel al mismo tiempo, en la misma
            sala: cada salto, cada choque y cada racha se ve en vivo mientras
            el leaderboard se actualiza en tiempo real.
          </p>
        </Reveal>
      </div>

      <div className="mt-20">
        <SpikeDivider color="blue" />
      </div>
    </section>
  );
}
