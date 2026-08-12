const COLORS = {
  purple: "bg-geo-purple",
  blue: "bg-geo-blue",
  pink: "bg-geo-pink",
  cyan: "bg-geo-cyan",
} as const;

export default function SpikeDivider({
  color = "purple",
  flip = false,
}: {
  color?: keyof typeof COLORS;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={`relative z-10 h-5 w-full ${COLORS[color]} spike-divider shadow-neon-sm ${
        flip ? "rotate-180" : ""
      }`}
    />
  );
}
