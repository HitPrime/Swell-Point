import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const CookiesBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookies_accepted');
    if (!accepted) {
      // Small delay so page loads first
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookies_accepted', 'true');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookies_accepted', 'false');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] px-4 pb-4 sm:px-6">
      <div
        className="max-w-4xl mx-auto rounded-2xl border border-purple-500/40 shadow-[0_0_40px_rgba(109,40,217,0.3)]"
        style={{ background: 'linear-gradient(135deg, #0e0620 0%, #130a24 100%)' }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 sm:p-6">

          {/* Cookie icon */}
          <div className="shrink-0 w-10 h-10 rounded-full bg-purple-900/50 border border-purple-700/50 flex items-center justify-center text-xl">
            🍪
          </div>

          {/* Text */}
          <div className="flex-1 space-y-1">
            <p className="text-sm font-bold text-white">We use cookies</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              We use cookies to improve your experience, analyze site traffic, and personalize content. By continuing to use this site, you agree to our use of cookies.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
            <button
              onClick={handleDecline}
              className="flex-1 sm:flex-none text-xs font-bold text-slate-400 hover:text-white uppercase tracking-wide px-4 py-2.5 rounded-xl border border-purple-900/60 hover:border-purple-700/60 transition-all"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 sm:flex-none neon-glow-btn text-white text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-xl border border-purple-300/40 cursor-pointer"
            >
              Accept All
            </button>
            <button
              onClick={handleAccept}
              className="text-slate-500 hover:text-white transition-colors p-1.5"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
