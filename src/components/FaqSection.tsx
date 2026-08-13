import React, { useState } from 'react';
import { HelpCircle, Sparkles, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { FAQS_DATA } from '../data/content';

interface FaqSectionProps {
  onOpenLeadModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenLeadModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 bg-[#08030f] border-t border-b border-purple-900/40">
      {/* Background wireframe grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-purple-900/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          className="text-center space-y-4 mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-mono uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-purple-400" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight font-sans">
            FREQUENTLY ASKED <span className="text-purple-400">QUESTIONS</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Common questions about the Swell Point Indicator answered clearly.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1, delay: index * 0.05 }}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-purple-500/60 bg-purple-950/30 shadow-[0_0_20px_rgba(168,85,247,0.15)]'
                    : 'border-purple-900/40 bg-[#0a0414]/60 hover:border-purple-700/50'
                }`}
              >
                {/* Question Row */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer group"
                >
                  <span className="font-extrabold text-sm sm:text-base text-white tracking-wider uppercase font-sans group-hover:text-purple-300 transition-colors">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.15 }}
                    className="shrink-0"
                  >
                    <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? 'text-purple-400' : 'text-slate-500'}`} />
                  </motion.div>
                </button>

                {/* Answer — animated slide down */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 border-t border-purple-900/30">
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans font-normal pt-4">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner inside FAQ section */}
        <motion.div
          className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-r from-purple-950/60 via-indigo-950/40 to-purple-950/60 border border-purple-500/30 shadow-xl space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h3 className="text-xl font-black text-white uppercase tracking-tight">
            Ready to Catch the Wave?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Swell Point is ready. Get access now!
          </p>
          <div>
            <button
              onClick={onOpenLeadModal}
              className="neon-glow-btn text-white text-xs sm:text-sm font-extrabold uppercase px-8 py-3.5 rounded-xl inline-flex items-center gap-2 border border-purple-400/40 cursor-pointer shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>GET SWELL POINT INDICATOR</span>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
