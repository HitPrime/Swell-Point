import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ChartSection } from './components/ChartSection';
import { FaqSection } from './components/FaqSection';
import { FinalCTASection } from './components/FinalCTASection';
import { FooterSection } from './components/FooterSection';
import { StarterKitModal } from './components/StarterKitModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePurchase = () => {
    window.open('https://go.getswellpoint.com/swell-point', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#08030f] text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white overflow-x-hidden">
      <Navbar
        onOpenLeadModal={handlePurchase}
        onOpenCalculator={handlePurchase}
      />

      <main className="flex-grow">
        <HeroSection
          onOpenLeadModal={handlePurchase}
        />

        <ChartSection />

        {/* <TestimonialsSection onOpenLeadModal={handlePurchase} /> */}

        <FinalCTASection onOpenLeadModal={handlePurchase} />

        <FaqSection onOpenLeadModal={handlePurchase} />
      </main>

      <FooterSection />

      <StarterKitModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialModule={null}
      />
    </div>
  );
}
