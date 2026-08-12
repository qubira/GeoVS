import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";
import SpikeDivider from "./SpikeDivider";

const features = [
  {
    icon: "⚡",
    title: "Multijugador en tiempo real",
    description: "Corre contra rivales reales en la misma sala, sin retrasos.",
  },
  {
    icon: "🔒",
    title: "Salas privadas con código",
    description: "Invita a tus amigos con un código y juega solo entre ustedes.",
  },
  {
    icon: "🎮",
    title: "Modos Carrera y Eliminación",
    description: "Elige velocidad pura o supervivencia hasta el último jugador.",
  },
  {
    icon: "🌐",
    title: "Sin descargas",
    description: "Se juega directo en el navegador, en PC o móvil.",
  },
  {
    icon: "✨",
    title: "Estética neón adictiva",
    description: "Niveles vibrantes que se sienten tan bien como se ven.",
  },
  {
    icon: "⏱️",
    title: "Partidas cortas",
    description: "Rondas de 1 a 3 minutos, perfectas para una más.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-geo-bg/75 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <span className="font-display text-xs font-bold tracking-[0.3em] text-geo-blue">
            VENTAJAS
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">
            Por qué jugar GeoVS
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 100}>
              <SpotlightCard className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6 transition-transform hover:-translate-y-1">
                <span className="relative z-10 text-3xl">{feature.icon}</span>
                <h3 className="relative z-10 mt-4 font-display text-lg font-bold text-white">
                  {feature.title}
                </h3>
                <p className="relative z-10 mt-2 text-sm text-white/60">
                  {feature.description}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <SpikeDivider color="cyan" />
      </div>
    </section>
  );
}
