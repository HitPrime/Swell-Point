import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenLeadModal: () => void;
  activeTicker?: string;
  setActiveTicker?: (symbol: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenLeadModal,
}) => {
  return (
    <section id="hero" className="relative pt-0 pb-8 lg:pb-12 bg-noir-gradient">
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-circuit-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-purple-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-800/25 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-7 pt-10 lg:pt-14">

          {/* Main Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.08] font-sans">
            GET SWELL POINT{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-indigo-300 drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              INDICATOR
            </span>
          </h1>

          {/* Body Paragraph */}
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
            A structured educational tool built to help traders develop a clear, repeatable approach to reading market conditions. Used by traders who want process over guesswork.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-3 pt-2">
            <button
              onClick={onOpenLeadModal}
              id="hero-cta-btn"
              className="w-full sm:w-auto neon-glow-btn text-white text-sm sm:text-base font-extrabold tracking-wider uppercase px-8 py-4 rounded-xl flex items-center justify-center gap-3 border border-purple-300/40 cursor-pointer group"
            >
              <span>CONTINUE WITH SWELL POINT</span>
              <ArrowRight className="w-5 h-5 text-purple-200 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};
