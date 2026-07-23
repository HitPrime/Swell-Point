import React from 'react';
import logoImg from '../assets/images/Logo.png';

export const FooterSection: React.FC = () => {
  return (
    <footer className="bg-[#050209] border-t border-purple-900/40 py-10 text-slate-400 font-sans relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6">

        {/* Logo */}
        <img src={logoImg} alt="Trade Structure Pro" className="h-16 w-auto object-contain" />

        {/* Risk Warning */}
        <p className="text-[11px] leading-relaxed max-w-2xl text-center text-slate-400 font-mono">
          <strong>Risk Warning:</strong> Trading crypto assets, equities, and derivatives involves substantial risk of loss and is not suitable for every investor. Content in the Starter Kit is for educational purposes only and does not constitute financial or investment advice.
        </p>

        {/* Copyright */}
        <div className="text-[11px] text-slate-500 font-mono">
          © 2024 Trade Structure Pro. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
