import ClientRoot from "@/components/ClientRoot";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TeamSection from "@/components/sections/TeamSection";
import WhyPiLotSection from "@/components/sections/WhyPiLotSection";
import ValuePropositionSection from "@/components/sections/ValuePropositionSection";
import ContactSection from "@/components/sections/ContactSection";
import FloatingElements from "@/components/ui/FloatingElements";

export default function Home() {
  return (
    <ClientRoot>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ProcessSection />
        <TeamSection />
        <WhyPiLotSection />
        <ValuePropositionSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingElements />
    </ClientRoot>
  );
}
