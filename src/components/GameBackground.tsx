export default function GameBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-geo-bg">
      {/* Scrolling neon floor grid */}
      <div className="absolute inset-0 bg-game-grid opacity-[0.35] animate-grid-move" />

      {/* Soft moving color blobs */}
      <div className="absolute -left-32 top-[-10%] h-[420px] w-[420px] rounded-full bg-geo-purple/25 blur-[110px] animate-drift" />
      <div
        className="absolute right-[-10%] top-[15%] h-[380px] w-[380px] rounded-full bg-geo-blue/25 blur-[110px] animate-drift"
        style={{ animationDelay: "-3s" }}
      />
      <div
        className="absolute bottom-[-10%] left-[30%] h-[460px] w-[460px] rounded-full bg-geo-pink/20 blur-[120px] animate-drift"
        style={{ animationDelay: "-6s" }}
      />

      {/* Floating obstacle shapes, echoing the game's geometry */}
      <div
        className="absolute left-[8%] top-[22%] h-8 w-8 rotate-45 bg-geo-yellow/40 shadow-neon-sm animate-float-slow"
        aria-hidden
      />
      <div
        className="absolute right-[12%] top-[38%] h-0 w-0 border-x-[16px] border-b-[26px] border-x-transparent border-b-geo-cyan/40 animate-float"
        style={{ animationDelay: "-1.5s" }}
        aria-hidden
      />
      <div
        className="absolute left-[18%] bottom-[18%] h-6 w-6 rounded-sm bg-geo-pink/40 shadow-neon-sm animate-float"
        style={{ animationDelay: "-2.5s" }}
        aria-hidden
      />
      <div
        className="absolute right-[22%] bottom-[30%] h-0 w-0 border-x-[14px] border-b-[22px] border-x-transparent border-b-geo-purple/50 animate-float-slow"
        style={{ animationDelay: "-4s" }}
        aria-hidden
      />
      <div
        className="absolute left-[45%] top-[8%] h-5 w-5 rotate-12 rounded-sm bg-geo-blue/40 animate-float"
        style={{ animationDelay: "-1s" }}
        aria-hidden
      />

      {/* Vignette so content stays readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,11,30,0.35)_65%,rgba(10,11,30,0.85)_100%)]" />
    </div>
  );
}
