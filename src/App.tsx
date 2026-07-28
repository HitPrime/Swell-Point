import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VideoSection } from './components/VideoSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCTASection } from './components/FinalCTASection';
import { FooterSection } from './components/FooterSection';
import { StarterKitModal } from './components/StarterKitModal';
import { SurveyModal } from './components/SurveyModal';

export default function App() {
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePurchase = () => {
    setIsSurveyOpen(true);
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

        <VideoSection />

        <TestimonialsSection onOpenLeadModal={handlePurchase} />

        <FinalCTASection onOpenLeadModal={handlePurchase} />

        <FaqSection onOpenLeadModal={handlePurchase} />
      </main>

      <FooterSection />

      <StarterKitModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialModule={null}
      />

      <SurveyModal
        isOpen={isSurveyOpen}
        onClose={() => setIsSurveyOpen(false)}
      />
    </div>
  );
}
