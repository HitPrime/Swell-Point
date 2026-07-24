import React from 'react';
import { Sparkles } from 'lucide-react';
import logoImg from '../assets/images/Logo.png';

interface NavbarProps {
  onOpenLeadModal: () => void;
  onOpenCalculator?: () => void;
  activeTicker?: string;
  setActiveTicker?: (symbol: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenLeadModal,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#08030f]/90 backdrop-blur-md border-b border-purple-900/40">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center">
          <img src={logoImg} alt="Cassius Cuvee" className="h-16 w-auto object-contain" />
        </div>

        {/* Header Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenLeadModal}
            id="nav-cta-btn"
            className="neon-glow-btn text-white text-xs sm:text-sm font-bold tracking-wide uppercase px-4 sm:px-5 py-2.5 rounded-lg flex items-center gap-2 border border-purple-400/40"
          >
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>GET YOUR SWELL POINT</span>
          </button>
        </div>
      </div>
    </header>
  );
};
