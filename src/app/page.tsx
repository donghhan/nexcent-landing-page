import HeroSection from "@/components/home/hero/HeroSection";
import OurClientsSection from "@/components/home/clients/OurClientsSection";
import ManageSection from "@/components/home/manage/ManageSection";
import PixelgradeSection from "@/components/home/pixelgrade/PixelgradeSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurClientsSection />
      <ManageSection />
      <PixelgradeSection />
    </main>
  );
}
