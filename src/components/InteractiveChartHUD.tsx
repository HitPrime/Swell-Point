import React, { useState } from 'react';
import { Zap, ShieldCheck, Activity, Layers, BarChart2 } from 'lucide-react';
import { CRYPTO_TICKERS } from '../data/content';

interface InteractiveChartHUDProps {
  activeSymbol?: string;
  onSelectSymbol?: (symbol: string) => void;
}

export const InteractiveChartHUD: React.FC<InteractiveChartHUDProps> = ({
  activeSymbol = 'BTC/USD',
  onSelectSymbol,
}) => {
  const [selectedSymbol, setSelectedSymbol] = useState(activeSymbol);
  const [timeframe, setTimeframe] = useState<'5M' | '15M' | '1H' | '4H'>('15M');
  const [showEMA, setShowEMA] = useState(true);
  const [showFVG, setShowFVG] = useState(true);
  const [showVol, setShowVol] = useState(true);

  const currentAsset = CRYPTO_TICKERS.find((t) => t.symbol === selectedSymbol) || CRYPTO_TICKERS[0];

  const handleSymbolChange = (symbol: string) => {
    setSelectedSymbol(symbol);
    if (onSelectSymbol) onSelectSymbol(symbol);
  };

  return (
    <div className="glass-noir-card rounded-2xl border border-purple-500/40 p-4 sm:p-5 shadow-2xl relative overflow-hidden bg-[#0c051a]/95 backdrop-blur-xl">
      {/* Background glow behind HUD */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Top Header Row: Timeframe only */}
      <div className="flex flex-wrap items-center justify-end gap-3 mb-4 pb-3 border-b border-purple-900/40">
        {/* Timeframe Selectors */}
        <div className="flex items-center gap-1 bg-[#120726] p-1 rounded-xl border border-purple-900/50">
          {(['5M', '15M', '1H', '4H'] as const).map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                timeframe === tf
                  ? 'bg-purple-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Toggles Row */}
      <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1 scrollbar-none text-xs font-mono">
        <span className="text-purple-300 font-bold shrink-0 mr-1">Structure Filters:</span>

        <button
          onClick={() => setShowEMA(!showEMA)}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border transition-all cursor-pointer shrink-0 ${
            showEMA
              ? 'bg-purple-950/90 border-purple-400/60 text-purple-200'
              : 'bg-purple-950/20 border-purple-950 text-slate-500'
          }`}
        >
          <Activity className="w-3.5 h-3.5 text-purple-400" />
          <span>EMA 20/50</span>
        </button>

        <button
          onClick={() => setShowFVG(!showFVG)}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border transition-all cursor-pointer shrink-0 ${
            showFVG
              ? 'bg-amber-950/60 border-amber-500/60 text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.2)]'
              : 'bg-purple-950/20 border-purple-950 text-slate-500'
          }`}
        >
          <Layers className="w-3.5 h-3.5 text-amber-400" />
          <span>FVG / Liquidity</span>
        </button>

        <button
          onClick={() => setShowVol(!showVol)}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border transition-all cursor-pointer shrink-0 ${
            showVol
              ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-300'
              : 'bg-purple-950/20 border-purple-950 text-slate-500'
          }`}
        >
          <BarChart2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>Vol Profile</span>
        </button>
      </div>

      {/* SVG Interactive Chart Box */}
      <div className="relative w-full h-56 sm:h-64 rounded-xl bg-[#080212] border border-purple-900/60 p-3 overflow-hidden">
        {/* Subtle Chart Gridlines */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

        {/* Institutional Supply Zone (Dashed Top Line) */}
        <div className="absolute top-6 left-0 right-0 border-b border-dashed border-rose-500/60 flex items-center justify-between px-3">
          <span className="text-[10px] font-mono text-rose-400 font-bold bg-rose-950/80 px-2 py-0.5 rounded border border-rose-800/40">
            INSTITUTIONAL SUPPLY ZONE (${(currentAsset.price * 1.02).toFixed(0)})
          </span>
          <span className="text-[9px] font-mono text-rose-400/80">REJECTION LEVEL</span>
        </div>

        {/* Demand & Liquidity Sweep Zone (Dashed Bottom Line) */}
        <div className="absolute bottom-12 left-0 right-0 border-b border-dashed border-emerald-500/60 flex items-center justify-between px-3">
          <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">
            LIQUIDITY SWEEP & DEMAND ZONE (${(currentAsset.price * 0.98).toFixed(0)})
          </span>
          <span className="text-[9px] font-mono text-emerald-400/80">STRUCTURE ENTRY</span>
        </div>

        {/* FVG Highlight Box Overlay */}
        {showFVG && (
          <div className="absolute top-24 left-[28%] right-[15%] h-14 bg-amber-500/15 border border-amber-500/40 rounded flex items-center justify-center pointer-events-none">
            <span className="text-[11px] font-mono font-black text-amber-300 uppercase tracking-widest bg-amber-950/90 px-2 py-0.5 rounded border border-amber-500/50">
              FAIR VALUE GAP (FVG)
            </span>
          </div>
        )}

        {/* SVG Candlestick & Structure Drawing */}
        <svg className="w-full h-full relative z-10" viewBox="0 0 600 220" preserveAspectRatio="none">
          {/* EMA Curved Line */}
          {showEMA && (
            <path
              d="M 20 160 Q 150 140 250 110 T 580 40"
              fill="none"
              stroke="#a855f7"
              strokeWidth="2.5"
              strokeDasharray="6 4"
              className="opacity-90"
            />
          )}

          {/* Volume Profile Bars at Bottom */}
          {showVol && (
            <g className="opacity-40">
              <rect x="30" y="180" width="16" height="25" fill="#334155" rx="3" />
              <rect x="100" y="185" width="16" height="20" fill="#334155" rx="3" />
              <rect x="170" y="165" width="16" height="40" fill="#9333ea" rx="3" />
              <rect x="240" y="150" width="16" height="55" fill="#9333ea" rx="3" />
              <rect x="320" y="175" width="16" height="30" fill="#334155" rx="3" />
              <rect x="400" y="170" width="16" height="35" fill="#334155" rx="3" />
              <rect x="470" y="160" width="16" height="45" fill="#334155" rx="3" />
              <rect x="540" y="145" width="16" height="60" fill="#9333ea" rx="3" />
            </g>
          )}

          {/* Candlesticks */}
          {/* Candle 1 - Bullish */}
          <line x1="65" y1="120" x2="65" y2="160" stroke="#10b981" strokeWidth="1.5" />
          <rect x="58" y="130" width="14" height="20" fill="#10b981" rx="2" />

          {/* Candle 2 - Bearish (Sweep Candle) */}
          <line x1="125" y1="125" x2="125" y2="170" stroke="#f43f5e" strokeWidth="1.5" />
          <rect x="118" y="130" width="14" height="25" fill="#f43f5e" rx="2" />

          {/* Candle 3 - Sweep Drop */}
          <line x1="185" y1="135" x2="185" y2="182" stroke="#f43f5e" strokeWidth="1.5" />
          <rect x="178" y="142" width="14" height="22" fill="#f43f5e" rx="2" />

          {/* Candle 4 - Massive Institutional Impulse Green Candle */}
          <line x1="245" y1="90" x2="245" y2="165" stroke="#10b981" strokeWidth="2" />
          <rect x="237" y="100" width="16" height="58" fill="#10b981" rx="2" />

          {/* Candle 5 - Break of Structure Continuation */}
          <line x1="305" y1="80" x2="305" y2="140" stroke="#10b981" strokeWidth="1.5" />
          <rect x="298" y="90" width="14" height="35" fill="#10b981" rx="2" />

          {/* Candle 6 - Small retracement */}
          <line x1="365" y1="95" x2="365" y2="120" stroke="#f43f5e" strokeWidth="1.5" />
          <rect x="358" y="100" width="14" height="12" fill="#f43f5e" rx="2" />

          {/* Candle 7 - Strong Continuation Green */}
          <line x1="425" y1="70" x2="425" y2="125" stroke="#10b981" strokeWidth="1.5" />
          <rect x="418" y="80" width="14" height="32" fill="#10b981" rx="2" />

          {/* Candle 8 - High target green */}
          <line x1="485" y1="50" x2="485" y2="95" stroke="#10b981" strokeWidth="2" />
          <rect x="477" y="58" width="16" height="25" fill="#10b981" rx="2" />
        </svg>

        {/* BOS Badge Overlay */}
        <div className="absolute top-[82px] left-[225px] bg-purple-600 text-white font-mono font-bold text-[10px] px-2 py-0.5 rounded shadow-lg border border-purple-300 flex items-center gap-1 z-20">
          <span>BOS</span>
          <span>↑</span>
        </div>

        {/* SWEEP Badge */}
        <div className="absolute bottom-[28px] left-[165px] bg-amber-400 text-black font-mono font-black text-[10px] px-2 py-0.5 rounded shadow-lg border border-amber-200 z-20">
          SWEEP
        </div>
      </div>

      {/* Bottom Footer Row inside HUD */}
      <div className="mt-3 pt-3 border-t border-purple-900/40 flex flex-wrap items-center justify-between text-xs font-mono gap-2">
        <div className="flex items-center gap-2 text-emerald-400 font-bold">
          <Zap className="w-4 h-4 text-amber-300" />
          <span>Structure Bias: <span className="text-emerald-300 underline">BULLISH CONTINUATION</span></span>
        </div>

        <div className="flex items-center gap-2 text-slate-400 text-[11px]">
          <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
          <span>1:3 Risk-to-Reward Ratio Preset</span>
        </div>
      </div>
    </div>
  );
};
