export default function VsBattle() {
  return (
    <div className="relative mt-8 flex items-center justify-center gap-3 sm:gap-5">
      <div className="animate-slide-in-left flex items-center gap-2">
        <div className="relative h-10 w-10 rotate-3 rounded-lg bg-geo-yellow shadow-neon-sm sm:h-12 sm:w-12">
          <div className="absolute inset-0 flex items-center justify-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-geo-bg" />
            <span className="h-1.5 w-1.5 rounded-full bg-geo-bg" />
          </div>
        </div>
        <span className="hidden font-display text-xs font-bold tracking-widest text-white/50 sm:inline">
          TÚ
        </span>
      </div>

      <div className="relative flex h-12 w-12 shrink-0 animate-vs-clash items-center justify-center rounded-full bg-geo-cta shadow-neon-pink sm:h-14 sm:w-14">
        <span className="font-display text-lg font-extrabold text-geo-bg sm:text-xl">
          VS
        </span>
      </div>

      <div className="animate-slide-in-right flex items-center gap-2">
        <span className="hidden font-display text-xs font-bold tracking-widest text-white/50 sm:inline">
          RIVAL
        </span>
        <div className="relative h-10 w-10 -rotate-3 rounded-lg bg-geo-blue shadow-neon-cyan sm:h-12 sm:w-12">
          <div className="absolute inset-0 flex items-center justify-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-geo-bg" />
            <span className="h-1.5 w-1.5 rounded-full bg-geo-bg" />
          </div>
        </div>
      </div>
    </div>
  );
}
