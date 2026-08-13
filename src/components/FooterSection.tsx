import React from 'react';
import logoImg from '../assets/images/Logo.png';

export const FooterSection: React.FC = () => {
  return (
    <footer className="bg-[#050209] border-t border-purple-900/40 py-10 text-slate-400 font-sans relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6">

        {/* Logo */}
        <img src={logoImg} alt="Trade Structure Pro" className="h-16 w-auto object-contain" />

        {/* Disclaimer */}
        <p className="text-[10px] leading-snug max-w-2xl text-center font-mono">
          <strong className="text-white font-bold">Disclaimer.</strong> <span className="text-purple-400 font-normal">The Swell Point indicator is an educational resource provided for informational and learning purposes only. It does not constitute financial advice of any kind. Trading involves substantial risk and is not suitable for every investor. No specific outcomes, results, or performance levels are promised or implied. Past performance does not indicate future results. All trading decisions made using this material are the sole responsibility of the individual user.</span>
        </p>

        {/* Copyright */}
        <div className="text-[11px] text-slate-500 font-mono">
          © 2026 Cassius Cuvee. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
