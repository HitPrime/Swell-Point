import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenLeadModal: () => void;
}

const quotes = [
  {
    name: "ATGL MOD",
    date: "7:03 PM",
    text: "thankyou so much btw your advice and facts on stream helped me so much started making so much progress recent past days",
  },
  {
    name: "DiamondsHandsJackpot",
    date: "8:12 AM",
    text: "If you are not in premium you are missing out. @Cassius Cuvée TA is the real deal — top class strategy and framework.",
  },
  {
    name: "Bankai-CoLo",
    date: "May 6, 2025",
    text: "best discord guys... Cassius Cuvee is the real deal. Top class strategy learnt alot about the short weakness and long strength. More greatness to come.",
  },
];

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenLeadModal }) => {
  return (
    <section className="relative py-20 bg-[#08030f] border-t border-purple-900/40 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-purple-900/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight font-sans">
            COMMUNITY <span className="text-purple-400">FEEDBACK</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            What traders are saying about the Swell Point educational framework.
          </p>
        </div>

        {/* Quote Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="glass-noir-card rounded-2xl border border-purple-500/25 p-6 flex flex-col gap-4 shadow-xl hover:border-purple-400/50 transition-all"
            >
              <Quote className="w-6 h-6 text-purple-400 shrink-0" />
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans flex-grow">
                "{q.text}"
              </p>
              <div className="pt-3 border-t border-purple-900/40">
                <div className="font-extrabold text-sm text-white font-mono">{q.name}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
