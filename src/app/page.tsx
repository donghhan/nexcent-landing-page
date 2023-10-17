import HeroSection from "@/components/home/hero/HeroSection";
import OurClientsSection from "@/components/home/clients/OurClientsSection";
import ManageSection from "@/components/home/manage/ManageSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurClientsSection />
      <ManageSection />
    </main>
  );
}
