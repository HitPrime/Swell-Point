import React from 'react';
import { motion } from 'motion/react';
import { Info, Quote } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenLeadModal: () => void;
}

const quotes = [
  {
    name: "Alexander",
    text: "Cassius is a great educator, you will learn a lot from him! He's such a genuine dude! And I'm sure you will get a lot of info from him!",
  },
  {
    name: "Matthew",
    text: "His dedication to continuously refining Swell Point into a powerful yet SIMPLE tool has been impressive.",
  },
];

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-[#08030f] border-t border-purple-900/40 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-900/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute right-0 top-0 w-72 h-72 bg-fuchsia-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-purple-400/70" />
            <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.3em] text-purple-300">
              Member Feedback
            </span>
            <span className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-purple-400/70" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight font-sans">
            WHAT TRADERS{' '}
            <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              ARE SAYING
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Real feedback from members learning the Swell Point framework.
          </p>
        </motion.div>

        {/* Quote Cards */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(50%-1rem)] max-w-xl"
            >
            <div
              className="group relative h-full rounded-2xl p-px bg-gradient-to-br from-purple-500/50 via-purple-900/30 to-fuchsia-600/40 hover:from-purple-400/80 hover:to-fuchsia-500/70 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(124,58,237,0.3)]"
            >
              <div className="relative h-full rounded-2xl bg-[#0f0619]/95 backdrop-blur-xl p-7 sm:p-9 flex flex-col gap-6 overflow-hidden">
                {/* Inner glow on hover */}
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Quote badge */}
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-400/30 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <Quote className="w-5 h-5 text-purple-300 fill-purple-300/30" />
                </div>

                <p className="relative text-lg sm:text-xl text-slate-100 leading-relaxed font-sans font-medium flex-grow">
                  {q.text}
                </p>

                <div className="flex items-center gap-4 pt-5 border-t border-purple-900/50">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-purple-500/40 blur-md" />
                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-700 flex items-center justify-center text-white font-black text-lg ring-2 ring-purple-300/40">
                      {q.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <div className="font-extrabold text-base sm:text-lg text-white">{q.name}</div>
                    <div className="text-xs text-purple-300/80 font-mono uppercase tracking-wider">Swell Point Member</div>
                  </div>
                </div>
              </div>
            </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-800/40 bg-purple-950/30 px-4 py-2">
            <Info className="w-3.5 h-3.5 text-purple-400/70 shrink-0" />
            <p className="text-xs sm:text-sm italic text-slate-400">
              Testimonials reflect individual experiences and do not guarantee any specific result.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
