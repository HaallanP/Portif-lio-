
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </PageLayout>
  );
};

export default Index;
