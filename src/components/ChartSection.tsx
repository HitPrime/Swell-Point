import React from 'react';
import chartImage from '../assets/images/chart screenshot2.png';

export const ChartSection: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-[#06020c] border-t border-purple-900/40 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-900/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight font-sans">
            THE FRAMEWORK IN <span className="text-purple-400">PRACTICE</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            A real example of the Swell Point structure applied to a live chart setup.
          </p>
        </div>

        {/* Chart Image */}
        <div className="relative rounded-2xl overflow-hidden border border-purple-500/40 shadow-2xl shadow-purple-950/60 group">
          {/* Neon glow on hover */}
          <div className="absolute inset-0 rounded-2xl border-2 border-purple-500/0 group-hover:border-purple-500/30 transition-all duration-500 pointer-events-none z-10" />
          {/* Top fade overlay */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#06020c] to-transparent pointer-events-none z-10" />
          {/* Bottom fade overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#06020c] to-transparent pointer-events-none z-10" />

          <img
            src={chartImage}
            alt="Swell Point Indicator — Live Chart Example"
            className="w-full h-auto block group-hover:scale-[1.01] transition-transform duration-700"
          />
        </div>

      </div>
    </section>
  );
};
