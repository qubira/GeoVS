import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";
import SpikeDivider from "./SpikeDivider";

const steps = [
  {
    icon: "🚪",
    title: "Crea o únete a una sala",
    description: "Genera un código de sala o entra con el de un amigo en segundos.",
  },
  {
    icon: "🏁",
    title: "Compite en tiempo real",
    description: "Todos corren el mismo nivel a la vez, viendo a los demás en vivo.",
  },
  {
    icon: "📊",
    title: "Sigue el leaderboard",
    description: "El ranking se actualiza al instante con cada intento y cada caída.",
  },
  {
    icon: "🏆",
    title: "Gana la ronda",
    description: "El más rápido —o el último en pie— se lleva la victoria.",
  },
];

export default function HowToPlay() {
  return (
    <section id="como-se-juega" className="relative bg-geo-bg-alt/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <span className="font-display text-xs font-bold tracking-[0.3em] text-geo-yellow">
            GUÍA RÁPIDA
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">
            Cómo se juega
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            Cuatro pasos y ya estás compitiendo.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-9 hidden h-0.5 bg-gradient-to-r from-geo-yellow via-geo-pink to-geo-blue opacity-40 lg:block"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <SpotlightCard className="group relative flex h-full flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-transform hover:-translate-y-1.5">
                  <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-geo-cta font-display text-sm font-bold text-geo-bg shadow-neon-pink">
                    {i + 1}
                  </span>
                  <span className="relative z-10 mt-4 text-4xl transition-transform group-hover:scale-110">
                    {step.icon}
                  </span>
                  <h3 className="relative z-10 mt-4 font-display text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="relative z-10 mt-2 text-sm text-white/60">
                    {step.description}
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <SpikeDivider color="pink" flip />
      </div>
    </section>
  );
}
