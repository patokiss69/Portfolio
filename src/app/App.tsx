import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { WhatICanHelpWith } from './components/WhatICanHelpWith';
import { TrustSection } from './components/TrustSection';
import { ProjectsGrouped } from './components/ProjectsGrouped';
import { BrandingGallery } from './components/BrandingGallery';
import { SocialMediaGallery } from './components/SocialMediaGallery';
import { AvailableForWork } from './components/AvailableForWork';
import { HowIWork } from './components/HowIWork';
import { AIWorkflow } from './components/AIWorkflow';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FundsWinCaseStudy } from './components/FundsWinCaseStudy';
import { LanguageProvider } from './hooks/useLanguage';

export default function App() {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Hero
          onViewWork={() => scrollToSection('work')}
          onContact={() => scrollToSection('contact')}
        />
        <WhatICanHelpWith />
        <TrustSection />
        <ProjectsGrouped onOpenCaseStudy={() => setCaseStudyOpen(true)} />
        <BrandingGallery />
        <SocialMediaGallery />
        <AvailableForWork onContact={() => scrollToSection('contact')} />
        <HowIWork />
        <AIWorkflow />
        <About />
        <Contact />
        <Footer />

        {caseStudyOpen && (
          <FundsWinCaseStudy onClose={() => setCaseStudyOpen(false)} />
        )}
      </div>
    </LanguageProvider>
  );
}