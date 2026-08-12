import type { Metadata } from "next";
import { Baloo_2, Inter } from "next/font/google";
import "./globals.css";
import GameBackground from "@/components/GameBackground";
import Header from "@/components/Header";
import IntroSplash from "@/components/IntroSplash";
import CursorGlow from "@/components/CursorGlow";
import MobileCTA from "@/components/MobileCTA";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "GeoVS — Multijugador competitivo en tiempo real",
  description:
    "GeoVS es Geometry Dash, pero compites en vivo contra otros jugadores. Crea salas, corre el mismo nivel en tiempo real y domina el leaderboard. Sin descargas, directo en el navegador.",
  openGraph: {
    title: "GeoVS — Multijugador competitivo en tiempo real",
    description:
      "Geometry Dash, pero compites en vivo contra otros jugadores. Únete a la lista de espera.",
    images: ["/imagen/logo_geovs.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${baloo.variable} ${inter.variable}`}>
      <body className="relative font-body antialiased">
        <IntroSplash />
        <GameBackground />
        <CursorGlow />
        <Header />
        <div className="relative z-10 pb-16 sm:pb-0">{children}</div>
        <MobileCTA />
      </body>
    </html>
  );
}
