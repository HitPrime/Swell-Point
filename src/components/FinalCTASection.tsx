import React from 'react';

interface FinalCTASectionProps {
  onOpenLeadModal: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenLeadModal }) => {
  return (
    <section className="relative py-12 sm:py-20 bg-noir-gradient border-t border-purple-900/40">
      {/* Background wireframe grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-circuit-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-purple-900/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-sans">
          ACCESS THE <span className="text-purple-400">SWELL POINT</span> INDICATOR
        </h2>

        {/* Body Text */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Swell Point is ready for instant access. Complete this short form to continue.
        </p>

        {/* Survey — embedded directly below the button, themed to match page */}
        <div id="survey-section" className="survey-wrapper w-full mt-8 mx-0" style={{ background: '#1B0E30' }}>
          {/* Corner glows — pointer-events none so they don't block touch */}
          <div className="survey-corner-tl" style={{ pointerEvents: 'none' }} />
          <div className="survey-corner-br" style={{ pointerEvents: 'none' }} />

          {/* Header bar */}
          <div className="survey-header">
            <span className="survey-header-title">Get Swell Point Indicator</span>
          </div>

          {/* Survey iframe */}
          <iframe
            src="https://api.leadconnectorhq.com/widget/survey/clj5Aho9QmskN6uqe3ht"
            style={{ border: 'none', width: '100%', minHeight: '600px' }}
            scrolling="yes"
            id="clj5Aho9QmskN6uqe3ht"
            title="survey"
          />
        </div>

      </div>
    </section>
  );
};
