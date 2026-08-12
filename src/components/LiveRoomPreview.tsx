import Reveal from "./Reveal";
import SpikeDivider from "./SpikeDivider";

const ROWS = [
  { rank: "🥇", color: "bg-geo-yellow", name: "Jugador_04", pct: 92, time: "0:48" },
  { rank: "🥈", color: "bg-geo-blue", name: "Jugador_11", pct: 81, time: "0:53" },
  { rank: "🥉", color: "bg-geo-pink", name: "Jugador_02", pct: 74, time: "0:57" },
  { rank: "4", color: "bg-geo-purple", name: "Tú", pct: 63, time: "1:02" },
];

export default function LiveRoomPreview() {
  return (
    <section className="relative bg-geo-bg/75 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal className="text-center">
          <span className="font-display text-xs font-bold tracking-[0.3em] text-geo-cyan">
            LEADERBOARD
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">
            Así se ve tu sala en vivo
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            Cada jugador avanza en tiempo real y el ranking se reordena al
            instante con cada intento.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 rounded-2xl border border-white/10 bg-geo-bg/70 p-5 shadow-neon sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-display text-sm font-bold text-white/80">
                SALA #482
              </span>
              <span className="flex items-center gap-2 font-display text-xs font-bold tracking-widest text-geo-pink">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-live-ping rounded-full bg-geo-pink" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-geo-pink" />
                </span>
                EN VIVO
              </span>
            </div>

            <ul className="mt-4 flex flex-col gap-3">
              {ROWS.map((row) => (
                <li key={row.name} className="flex items-center gap-3">
                  <span className="w-6 text-center font-display text-sm font-bold text-white/60">
                    {row.rank}
                  </span>
                  <span className={`h-6 w-6 shrink-0 rounded ${row.color}`} />
                  <span className="w-24 shrink-0 font-display text-sm font-bold text-white/85 sm:w-32">
                    {row.name}
                  </span>
                  <span className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                    <span
                      className="block h-full rounded-full bg-gradient-to-r from-geo-yellow via-geo-pink to-geo-blue"
                      style={{ width: `${row.pct}%` }}
                    />
                  </span>
                  <span className="w-10 shrink-0 text-right font-display text-xs font-bold text-white/50">
                    {row.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-3 text-center text-xs text-white/35">
            Vista previa ilustrativa de la interfaz de sala en tiempo real.
          </p>
        </Reveal>
      </div>

      <div className="mt-20">
        <SpikeDivider color="purple" flip />
      </div>
    </section>
  );
}
