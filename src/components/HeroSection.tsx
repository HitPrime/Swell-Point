import React from 'react';
import { ArrowRight } from 'lucide-react';
import { InteractiveChartHUD } from './InteractiveChartHUD';

// Import image generated specifically for hero figure
import heroSilhouetteImage from '../assets/images/noir_trader_hero_1784829945407.jpg';

interface HeroSectionProps {
  onOpenLeadModal: () => void;
  activeTicker?: string;
  setActiveTicker?: (symbol: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenLeadModal,
  activeTicker,
  setActiveTicker,
}) => {
  return (
    <section id="hero" className="relative pt-0 pb-16 lg:pb-24 overflow-hidden bg-noir-gradient">
      {/* Background wireframe grid & circuit traces */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-circuit-pattern opacity-15 pointer-events-none" />

      {/* Radial Neon Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-purple-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-800/25 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start pt-6 lg:pt-8">
          
          {/* LEFT SIDE: Hero Text Content */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 sm:space-y-7 mt-4 lg:mt-6">
            
            {/* Main Hero Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white uppercase leading-[1.08] font-sans">
              TRADE WITH STRUCTURE.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-indigo-300 drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                FINALLY UNDERSTAND IT.
              </span>
            </h1>

            {/* Body Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Get the Swell Point that walks you through trading from step one, in plain English. If you've watched fifty videos and still feel lost, that's not on you. Nobody is born knowing this stuff.
            </p>

            {/* Prominent Call-to-Action (CTA) Button */}
            <div className="w-full sm:w-auto flex flex-col items-start gap-3 pt-2">
              {/* CTA Button */}
              <button
                onClick={onOpenLeadModal}
                id="hero-cta-btn"
                className="w-full sm:w-auto neon-glow-btn text-white text-sm sm:text-base font-extrabold tracking-wider uppercase px-8 py-4 rounded-xl flex items-center justify-center gap-3 border border-purple-300/40 cursor-pointer group"
              >
                <span>GET YOUR SWELL POINT</span>
                <ArrowRight className="w-5 h-5 text-purple-200 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

            {/* As Seen On Section - removed */}

          </div>

          {/* RIGHT SIDE: Character Silhouette & Interactive Chart */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center gap-6">

            {/* Character Silhouette Image */}
            <div className="relative w-full max-w-lg">
              {/* Halo rings */}
              <div className="absolute inset-2 sm:inset-4 rounded-full border-2 border-purple-500/60 shadow-[0_0_80px_rgba(168,85,247,0.5),inset_0_0_60px_rgba(168,85,247,0.3)] animate-pulse-glow pointer-events-none" />
              <div className="absolute inset-8 sm:inset-10 rounded-full border border-purple-400/40 shadow-[0_0_40px_rgba(192,132,252,0.4)] pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-950 bg-[#0d0517] group aspect-square">
                <img
                  src={heroSilhouetteImage}
                  alt="Noir Trader Silhouette"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-110 brightness-95 transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Interactive Structure Chart HUD */}
            <div className="w-full max-w-xl relative z-20">
              <InteractiveChartHUD activeSymbol={activeTicker} onSelectSymbol={setActiveTicker} />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
