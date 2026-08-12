import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import VideoSection from "@/components/VideoSection";
import LiveRoomPreview from "@/components/LiveRoomPreview";
import HowToPlay from "@/components/HowToPlay";
import Features from "@/components/Features";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <VideoSection />
      <LiveRoomPreview />
      <HowToPlay />
      <Features />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
