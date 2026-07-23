import React from 'react';
import { ShieldCheck, Sparkles } from 'lucide-react';
import { CRYPTO_TICKERS } from '../data/content';
import logoImg from '../assets/images/Logo.png';

interface NavbarProps {
  onOpenLeadModal: () => void;
  onOpenCalculator: () => void;
  activeTicker: string;
  setActiveTicker: (symbol: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenLeadModal,
  onOpenCalculator,
  activeTicker,
  setActiveTicker,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#08030f]/90 backdrop-blur-md border-b border-purple-900/40">
      {/* Top Live Crypto Price Ticker Bar */}
      <div className="bg-[#120724] border-b border-purple-900/30 py-1.5 px-4 text-xs font-mono text-slate-300 overflow-x-auto whitespace-nowrap scrollbar-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-purple-400 font-semibold shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px] uppercase tracking-wider text-purple-300">Live Structure Feed:</span>
          </div>

          <div className="flex items-center gap-8 shrink-0">
            {CRYPTO_TICKERS.map((item) => (
              <button
                key={item.symbol}
                onClick={() => setActiveTicker(item.symbol)}
                className={`flex items-center gap-2 px-2.5 py-1 rounded transition-all ${
                  activeTicker === item.symbol
                    ? 'bg-purple-900/50 border border-purple-500/50 text-white'
                    : 'hover:bg-purple-950/40 text-slate-300'
                }`}
              >
                <span className="font-bold">{item.symbol}</span>
                <span>${item.price.toLocaleString()}</span>
                <span className={item.change24h >= 0 ? 'text-emerald-400' : 'text-rose-400'}>
                  {item.change24h >= 0 ? '+' : ''}{item.change24h}%
                </span>
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2 text-slate-400 text-[11px] shrink-0">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
            <span>INSTITUTIONAL LIQUIDITY TRACKER • 24H VOL: $70.3B</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center">
          <img src={logoImg} alt="Trade Structure Pro" className="h-16 w-auto object-contain" />
        </div>

        {/* Header Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenLeadModal}
            id="nav-cta-btn"
            className="neon-glow-btn text-white text-xs sm:text-sm font-bold tracking-wide uppercase px-4 sm:px-5 py-2.5 rounded-lg flex items-center gap-2 border border-purple-400/40"
          >
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>PURCHASE NOW</span>
          </button>
        </div>
      </div>
    </header>
  );
};
