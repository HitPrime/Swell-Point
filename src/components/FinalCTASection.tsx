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
          READY TO <span className="text-purple-400">ACTUALLY LEARN?</span>
        </h2>

        {/* Body Text */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Get the Swell Point that walks you through trading from step one, in plain English. Stop watching random videos—start executing with structure today.
        </p>

        {/* CTA Button */}
        <div className="pt-4 flex flex-col items-center gap-4">
          <button
            onClick={onOpenLeadModal}
            id="final-cta-btn"
            className="w-full sm:w-auto neon-glow-btn text-white text-base sm:text-lg font-black tracking-wider uppercase px-10 py-5 rounded-2xl flex items-center justify-center gap-3 border border-purple-300/50 shadow-2xl shadow-purple-900/80 cursor-pointer group hover:scale-[1.02] transition-all"
          >
            <span>GET YOUR SWELL POINT</span>
            <ArrowRight className="w-6 h-6 text-purple-200 group-hover:translate-x-2 transition-transform" />
          </button>

          {/* Guarantee Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-300 pt-2">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-purple-400" />
              <span>Secure Checkout</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>PDF & Interactive Reader</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
