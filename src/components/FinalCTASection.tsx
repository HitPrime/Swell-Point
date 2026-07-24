import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Lock } from 'lucide-react';

interface FinalCTASectionProps {
  onOpenLeadModal: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenLeadModal }) => {
  return (
    <section className="relative py-20 bg-noir-gradient border-t border-purple-900/40 overflow-hidden">
      {/* Background wireframe grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-circuit-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-purple-900/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-sans">
          ACCESS THE <span className="text-purple-400">SWELL POINT INDICATOR</span>
        </h2>

        {/* Body Text */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          The Swell Point Indicator is ready for instant access. Complete your purchase and begin working through the full educational framework today.
        </p>

        {/* CTA Button */}
        <div className="pt-4 flex flex-col items-center gap-4">
          <button
            onClick={onOpenLeadModal}
            id="final-cta-btn"
            className="w-full sm:w-auto neon-glow-btn text-white text-base sm:text-lg font-black tracking-wider uppercase px-10 py-5 rounded-2xl flex items-center justify-center gap-3 border border-purple-300/50 shadow-2xl shadow-purple-900/80 cursor-pointer group hover:scale-[1.02] transition-all"
          >
            <span>GET STARTED TODAY</span>
            <ArrowRight className="w-6 h-6 text-purple-200 group-hover:translate-x-2 transition-transform" />
          </button>

        
        </div>

      </div>
    </section>
  );
};
