import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CurriculumSection } from './components/CurriculumSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCTASection } from './components/FinalCTASection';
import { FooterSection } from './components/FooterSection';
import { StarterKitModal } from './components/StarterKitModal';
import { ModuleItem } from './types';

const PURCHASE_URL = 'https://buyswellpoint.com/swell-point';

export default function App() {
  const [selectedModule, setSelectedModule] = useState<ModuleItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePurchase = () => {
    window.open(PURCHASE_URL, '_blank', 'noopener,noreferrer');
  };

  const handleSelectModule = (module: ModuleItem) => {
    setSelectedModule(module);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#08030f] text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      <Navbar
        onOpenLeadModal={handlePurchase}
        onOpenCalculator={handlePurchase}
      />

      <main className="flex-grow">
        <HeroSection
          onOpenLeadModal={handlePurchase}
        />

        <CurriculumSection
          onSelectModule={handleSelectModule}
          onOpenLeadModal={handlePurchase}
        />

        <TestimonialsSection onOpenLeadModal={handlePurchase} />

        <FinalCTASection onOpenLeadModal={handlePurchase} />

        <FaqSection onOpenLeadModal={handlePurchase} />
      </main>

      <FooterSection />

      <StarterKitModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialModule={selectedModule}
      />
    </div>
  );
}
