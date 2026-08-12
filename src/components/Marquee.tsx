const ITEMS = [
  "MULTIJUGADOR EN TIEMPO REAL",
  "SALAS PRIVADAS CON CÓDIGO",
  "MODO CARRERA",
  "MODO ELIMINACIÓN",
  "SIN DESCARGAS",
  "LEADERBOARD EN VIVO",
  "PARTIDAS DE 1-3 MIN",
];

export default function Marquee() {
  const line = [...ITEMS, ...ITEMS];

  return (
    <div className="relative z-10 overflow-hidden border-y border-white/10 bg-geo-bg-alt/80 py-3 backdrop-blur-sm">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
        {line.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 font-display text-sm font-bold tracking-widest text-white/70"
          >
            {item}
            <span className="text-geo-pink">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
