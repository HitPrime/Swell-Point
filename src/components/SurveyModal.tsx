import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SurveyModal: React.FC<SurveyModalProps> = ({ isOpen, onClose }) => {

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="survey-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            key="survey-modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-2xl rounded-2xl border border-purple-500/40 shadow-2xl shadow-purple-950 overflow-hidden bg-[#0c051a]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-purple-900/40">
              <div>
                <h2 className="text-base font-black text-white uppercase tracking-wider font-sans">
                  Get Swell Point Indicator
                </h2>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Complete the form below to continue
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-slate-300 hover:text-white hover:bg-purple-900 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Survey Embed */}
            <div className="p-4 bg-[#0c051a]">
              {/* Purple glow ambient */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-purple-900/20 rounded-full blur-[60px] pointer-events-none" />

              <div className="relative rounded-xl overflow-hidden border border-purple-900/30">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/survey/clj5Aho9QmskN6uqe3ht"
                  style={{ border: 'none', width: '100%', minHeight: '480px' }}
                  scrolling="no"
                  id="clj5Aho9QmskN6uqe3ht"
                  title="Swell Point Survey"
                />
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
