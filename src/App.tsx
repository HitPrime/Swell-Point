import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FinalCTASection } from './components/FinalCTASection';
import { FooterSection } from './components/FooterSection';

const PURCHASE_URL = 'https://learn.cassiuscuvee.com/swell-point';

export default function App() {
  const [activeTicker, setActiveTicker] = useState('BTC/USD');

  const handlePurchase = () => {
    window.open(PURCHASE_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#08030f] text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      <Navbar
        onOpenLeadModal={handlePurchase}
        onOpenCalculator={handlePurchase}
        activeTicker={activeTicker}
        setActiveTicker={setActiveTicker}
      />

      <main className="flex-grow">
        <HeroSection
          onOpenLeadModal={handlePurchase}
          activeTicker={activeTicker}
          setActiveTicker={setActiveTicker}
        />

        <TestimonialsSection onOpenLeadModal={handlePurchase} />

        <FinalCTASection onOpenLeadModal={handlePurchase} />
      </main>

      <FooterSection />
    </div>
  );
}
