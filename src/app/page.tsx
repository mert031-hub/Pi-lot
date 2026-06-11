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
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ROICalculatorSection from "@/components/sections/ROICalculatorSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import FloatingElements from "@/components/ui/FloatingElements";
import MobileCTABar from "@/components/ui/MobileCTABar";
import CookieBanner from "@/components/ui/CookieBanner";
import CustomCursor from "@/components/ui/CustomCursor";

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
        <TestimonialsSection />
        <ROICalculatorSection />
        <ValuePropositionSection />
        <CaseStudiesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingElements />
      <MobileCTABar />
      <CookieBanner />
      <CustomCursor />
    </ClientRoot>
  );
}
