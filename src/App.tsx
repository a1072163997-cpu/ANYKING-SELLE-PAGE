import React, { useState, useEffect } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { ProductOverviewSection } from './components/ProductOverviewSection';
import { ScenarioCarouselSection } from './components/ScenarioCarouselSection';
import { BentoHighlightsSection } from './components/BentoHighlightsSection';
import { ScrollRotationSection } from './components/ScrollRotationSection';
import { HingeDynamicSellingPoints } from './components/HingeDynamicSellingPoints';
import { OledScrollRevealSection } from './components/OledScrollRevealSection';
import { OledVsLcdComparisonSection } from './components/OledVsLcdComparisonSection';
import { SeamlessCapabilityScrollSection } from './components/SeamlessCapabilityScrollSection';
import { EffortlessSetupSection } from './components/EffortlessSetupSection';
import { ExtensiveConnectivitySection } from './components/ExtensiveConnectivitySection';
import { WorkflowParallaxGridSection } from './components/WorkflowParallaxGridSection';
import { PlanetSustainabilitySection } from './components/PlanetSustainabilitySection';
import { VideoSpecsInBoxSection } from './components/VideoSpecsInBoxSection';
import { SelfHelpCenterSection } from './components/SelfHelpCenterSection';
import { BuyNowModal } from './components/BuyNowModal';
import { CustomerSupportChat } from './components/CustomerSupportChat';
import { Footer } from './components/Footer';

export default function App() {
  const [buyModalOpen, setBuyModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview-summary');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview-summary', 'possibilities-banner', 'bento-highlights', 'scroll-3d-showcase', 'seamless-capability', 'effortless-setup', 'extensive-connectivity', 'workflow-parallax', 'sustainability'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F4EF] text-[#25282B] font-sans selection:bg-[#E6DDCE] selection:text-[#25282B] antialiased">
      {/* Top Header Navigation */}
      <HeaderNav 
        onOpenBuyModal={() => setBuyModalOpen(true)} 
        activeSection={activeSection}
      />

      {/* Main Product Showcase Sections */}
      <main>
        {/* Section 1: Standard E-Commerce Product Detail Hero Section */}
        <ProductOverviewSection onOpenBuyModal={() => setBuyModalOpen(true)} />

        {/* Section 2: Multi-Scene Productivity Carousel (Hotel, Airport, Café, Office) */}
        <ScenarioCarouselSection />

        {/* Section 3: Bento Grid Feature Highlights Wall */}
        <BentoHighlightsSection />

        {/* Section 4: Product 3D Scroll Rotation & Selling Points */}
        <ScrollRotationSection />

        {/* Section 5: Waterdrop Hinge & 30,000 Cycles Dynamic Selling Points */}
        <HingeDynamicSellingPoints />

        {/* Section 6: OLED Vibrant Color Scroll Reveal Experience */}
        <OledScrollRevealSection />

        {/* Section 7: OLED vs LCD High Contrast Comparison Slider */}
        <OledVsLcdComparisonSection />

        {/* Section 8: "SEAMLESSLY INTUITIVE AND EXPANSIVE CAPABILITY" Scroll Reveal Headline */}
        <SeamlessCapabilityScrollSection />

        {/* Section 9: Effortless Setup with USB-C Video Signal & Power Transmission */}
        <EffortlessSetupSection />

        {/* Section 10: Extensive Connectivity with Interactive Port Magnifier Loupe */}
        <ExtensiveConnectivitySection />

        {/* Section 11: "Designed for every workflow" Left Text & Right Asymmetric Parallax UI Grid */}
        <WorkflowParallaxGridSection />

        {/* Section 12: "Designed with the planet in mind" Interactive Scroll-Rotating Earth (Planet Sustainability) */}
        <PlanetSustainabilitySection />

        {/* Section 13: Hero Lifestyle Video CTA Banner & Technical Specifications + IN THE BOX */}
        <VideoSpecsInBoxSection />

        {/* Section 14: Self-Help Center (Support Team, Need Help, FAQs) */}
        <SelfHelpCenterSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Buy Now Modal */}
      <BuyNowModal 
        isOpen={buyModalOpen} 
        onClose={() => setBuyModalOpen(false)} 
      />

      {/* Floating Online Customer Support AI Bot */}
      <CustomerSupportChat 
        onOpenBuyModal={() => setBuyModalOpen(true)} 
      />
    </div>
  );
}
