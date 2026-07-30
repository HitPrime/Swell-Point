import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SurveyModal: React.FC<SurveyModalProps> = ({ isOpen, onClose }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

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
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            key="survey-modal"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute inset-x-0 bottom-0 sm:relative sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2
              w-full sm:max-w-2xl
              bg-[#0c051a] border border-purple-500/40 shadow-2xl shadow-purple-950
              rounded-t-2xl sm:rounded-2xl
              flex flex-col"
            style={{ maxHeight: '92vh' }}
          >
            {/* Close button — floating, always on top */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-50 w-10 h-10 rounded-full bg-[#0c051a] border-2 border-purple-500/60 flex items-center justify-center text-white hover:bg-purple-800 active:bg-purple-700 transition-colors cursor-pointer shadow-xl"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="px-5 pt-4 pb-3 border-b border-purple-900/40 shrink-0 pr-14">
              <h2 className="text-sm font-black text-white uppercase tracking-wider font-sans">
                Get Swell Point Indicator
              </h2>
              <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                Complete the form below to continue
              </p>
            </div>

            {/* Survey iframe — fills remaining space */}
            <div className="flex-1 overflow-hidden p-3 sm:p-4">
              <iframe
                src="https://api.leadconnectorhq.com/widget/survey/clj5Aho9QmskN6uqe3ht"
                style={{
                  border: 'none',
                  width: '100%',
                  height: '100%',
                  minHeight: '480px',
                  borderRadius: '12px',
                  display: 'block',
                }}
                scrolling="yes"
                id="clj5Aho9QmskN6uqe3ht"
                title="Swell Point Survey"
              />
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
