import Image from "next/image";

const socials = [
  { label: "X / Twitter", href: "#" },
  { label: "Discord", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-geo-bg-alt/90 py-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-geo-purple/60 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <Image
            src="/imagen/logo_geovs.png"
            alt="GeoVS"
            width={64}
            height={64}
            className="h-9 w-9 rounded-lg object-cover"
          />
          <span className="font-display text-lg font-bold text-white">GeoVS</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-5 text-sm text-white/60">
          {socials.map((s) => (
            <a key={s.label} href={s.href} className="transition-colors hover:text-geo-cyan">
              {s.label}
            </a>
          ))}
        </nav>

        <div className="text-xs text-white/40">
          <p>© {new Date().getFullYear()} GeoVS. Todos los derechos reservados.</p>
          <a href="mailto:contacto@geovs.gg" className="transition-colors hover:text-geo-cyan">
            contacto@geovs.gg
          </a>
        </div>
      </div>
    </footer>
  );
}
