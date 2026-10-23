import React, { Suspense, lazy, useState } from 'react';
import { LazyMotion, domAnimation } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ChartSection } from './components/ChartSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCTASection } from './components/FinalCTASection';
import { FooterSection } from './components/FooterSection';
import { CookiesBanner } from './components/CookiesBanner';

const StarterKitModal = lazy(() =>
  import('./components/StarterKitModal').then((m) => ({ default: m.StarterKitModal })),
);

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePurchase = () => {
    window.location.href = '/checkout';
  };

  return (
    <LazyMotion features={domAnimation} strict>
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

        <TestimonialsSection onOpenLeadModal={handlePurchase} />

        <FinalCTASection onOpenLeadModal={handlePurchase} />

        <FaqSection onOpenLeadModal={handlePurchase} />
      </main>

      <FooterSection />

      {isModalOpen && (
        <Suspense fallback={null}>
          <StarterKitModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            initialModule={null}
          />
        </Suspense>
      )}

      <CookiesBanner />
    </div>
    </LazyMotion>
  );
}
