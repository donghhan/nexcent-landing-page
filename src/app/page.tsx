import HeroSection from "@/components/home/hero/HeroSection";
import OurClientsSection from "@/components/home/clients/OurClientsSection";
import ManageSection from "@/components/home/manage/ManageSection";
import PixelgradeSection from "@/components/home/pixelgrade/PixelgradeSection";
import StatusSection from "@/components/home/status/StatusSection";
import TestimonialSection from "@/components/home/testimonial/TestimonialSection";
import MiniBlogSection from "@/components/home/blog/MiniBlogSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurClientsSection />
      <ManageSection />
      <PixelgradeSection />
      <StatusSection />
      <TestimonialSection />
      <MiniBlogSection />
    </main>
  );
}
