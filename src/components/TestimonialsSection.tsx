import React from 'react';
import t1 from '../assets/images/t1.png';
import t2 from '../assets/images/t2.png';
import t3 from '../assets/images/t3.png';
import t4 from '../assets/images/t4.png';
import t5 from '../assets/images/t5.jpg';
import t6 from '../assets/images/t6.png';

interface TestimonialsSectionProps {
  onOpenLeadModal: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenLeadModal }) => {
  return (
    <section className="relative py-20 bg-[#08030f] border-t border-purple-900/40 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-purple-900/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight font-sans">
            WHAT THEY SAY <span className="text-purple-400">(REAL RESULTS)</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Real feedback from traders in the community.
          </p>
        </div>

        {/* ROW 1: Wide/landscape images — t4, t2, t5 — each shows fully */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 items-start">
          <div className="rounded-2xl overflow-hidden border border-purple-500/25 shadow-xl hover:border-purple-400/50 transition-all">
            <img src={t4} alt="Testimonial 4" className="w-full h-auto block" />
          </div>
          <div className="rounded-2xl overflow-hidden border border-purple-500/25 shadow-xl hover:border-purple-400/50 transition-all">
            <img src={t2} alt="Testimonial 2" className="w-full h-auto block" />
          </div>
          <div className="rounded-2xl overflow-hidden border border-purple-500/25 shadow-xl hover:border-purple-400/50 transition-all">
            <img src={t5} alt="Testimonial 5" className="w-full h-auto block" />
          </div>
        </div>

        {/* ROW 2: Same-size square images — t1 & t6 side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 items-start">
          <div className="rounded-2xl overflow-hidden border border-purple-500/25 shadow-xl hover:border-purple-400/50 transition-all">
            <img src={t1} alt="Testimonial 1" className="w-full h-auto block" />
          </div>
          <div className="rounded-2xl overflow-hidden border border-purple-500/25 shadow-xl hover:border-purple-400/50 transition-all">
            <img src={t6} alt="Testimonial 6" className="w-full h-auto block" />
          </div>
        </div>

        {/* ROW 3: Tall portrait image — t3 centered */}
        <div className="flex justify-center">
          <div className="w-full sm:w-1/2 lg:w-2/5 rounded-2xl overflow-hidden border border-purple-500/25 shadow-xl hover:border-purple-400/50 transition-all">
            <img src={t3} alt="Testimonial 3" className="w-full h-auto block" />
          </div>
        </div>

      </div>
    </section>
  );
};
