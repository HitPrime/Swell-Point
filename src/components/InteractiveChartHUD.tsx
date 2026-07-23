import React, { useState } from 'react';
import { TrendingUp, Layers, Activity, Eye, Zap, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { CRYPTO_TICKERS } from '../data/content';

interface InteractiveChartHUDProps {
  activeSymbol: string;
  onSelectSymbol: (symbol: string) => void;
}

export const InteractiveChartHUD: React.FC<InteractiveChartHUDProps> = ({
  activeSymbol,
  onSelectSymbol,
}) => {
  const [showEMA, setShowEMA] = useState(true);
  const [showFVG, setShowFVG] = useState(true);
  const [showVolume, setShowVolume] = useState(true);
  const [selectedTimeframe, setSelectedTimeframe] = useState('15M');

  const ticker = CRYPTO_TICKERS.find((t) => t.symbol === activeSymbol) || CRYPTO_TICKERS[0];

  // Mock Candlesticks generator for active symbol
  const generateCandles = () => {
    const base = ticker.price;
    const factor = base * 0.008;
    return [
      { open: base - factor * 2, high: base - factor * 0.5, low: base - factor * 2.5, close: base - factor * 1, bull: true },
      { open: base - factor * 1, high: base + factor * 0.2, low: base - factor * 1.8, close: base - factor * 1.5, bull: false },
      { open: base - factor * 1.5, high: base - factor * 0.8, low: base - factor * 3.0, close: base - factor * 2.8, bull: false, isLiquiditySweep: true },
      { open: base - factor * 2.8, high: base + factor * 0.5, low: base - factor * 2.9, close: base + factor * 0.2, bull: true, isBOS: true },
      { open: base + factor * 0.2, high: base + factor * 1.8, low: base, close: base + factor * 1.5, bull: true },
      { open: base + factor * 1.5, high: base + factor * 1.6, low: base + factor * 0.8, close: base + factor * 1.1, bull: false },
      { open: base + factor * 1.1, high: base + factor * 2.5, low: base + factor * 0.9, close: base + factor * 2.2, bull: true },
      { open: base + factor * 2.2, high: base + factor * 3.1, low: base + factor * 2.0, close: base + factor * 2.9, bull: true },
    ];
  };

  const candles = generateCandles();

  return (
    <div className="w-full rounded-2xl glass-noir-card border border-purple-500/30 p-4 sm:p-5 shadow-2xl shadow-purple-950/80 relative overflow-hidden font-mono">
      {/* Background wireframe circuit subtle glow */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-15 pointer-events-none" />
      <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Chart Header HUD */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-purple-900/40">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-purple-950/80 border border-purple-500/40 rounded-lg px-2.5 py-1 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white font-bold">{ticker.symbol}</span>
          </div>

          <div className="text-sm font-bold text-emerald-400 flex items-center gap-1">
            ${ticker.price.toLocaleString()}
            <span className="text-xs text-emerald-400/80">+{ticker.change24h}%</span>
          </div>
        </div>

        {/* Timeframe Selector */}
        <div className="flex items-center gap-1 bg-[#0a0414] p-1 rounded-lg border border-purple-900/50 text-[11px]">
          {['5M', '15M', '1H', '4H'].map((tf) => (
            <button
              key={tf}
              onClick={() => setSelectedTimeframe(tf)}
              className={`px-2 py-0.5 rounded transition-all ${
                selectedTimeframe === tf
                  ? 'bg-purple-600 text-white font-bold shadow-sm shadow-purple-600/50'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Indicator Toggles */}
      <div className="relative z-10 flex flex-wrap items-center gap-2 py-2 text-[11px] text-slate-300 border-b border-purple-900/20">
        <span className="text-purple-400 font-sans font-medium text-xs">Structure Filters:</span>
        <button
          onClick={() => setShowEMA(!showEMA)}
          className={`px-2 py-0.5 rounded border transition-all flex items-center gap-1 ${
            showEMA ? 'bg-purple-900/40 border-purple-500 text-purple-200' : 'border-purple-900/40 text-slate-500'
          }`}
        >
          <Activity className="w-3 h-3 text-purple-400" />
          <span>EMA 20/50</span>
        </button>

        <button
          onClick={() => setShowFVG(!showFVG)}
          className={`px-2 py-0.5 rounded border transition-all flex items-center gap-1 ${
            showFVG ? 'bg-amber-950/40 border-amber-500/60 text-amber-200' : 'border-purple-900/40 text-slate-500'
          }`}
        >
          <Layers className="w-3 h-3 text-amber-400" />
          <span>FVG / Liquidity</span>
        </button>

        <button
          onClick={() => setShowVolume(!showVolume)}
          className={`px-2 py-0.5 rounded border transition-all flex items-center gap-1 ${
            showVolume ? 'bg-purple-900/40 border-purple-500 text-purple-200' : 'border-purple-900/40 text-slate-500'
          }`}
        >
          <TrendingUp className="w-3 h-3 text-emerald-400" />
          <span>Vol Profile</span>
        </button>
      </div>

      {/* Main Candlestick Chart Area */}
      <div className="relative z-10 my-3 h-48 sm:h-52 w-full bg-[#07020d]/80 rounded-xl border border-purple-900/40 p-3 flex flex-col justify-between overflow-hidden">
        {/* Wireframe background grid lines */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

        {/* Resistance Level Line */}
        <div className="absolute top-6 left-0 right-0 border-b border-dashed border-rose-500/50 flex items-center justify-between px-2 text-[9px] text-rose-400 font-sans">
          <span className="bg-[#07020d] px-1 rounded border border-rose-900/60">INSTITUTIONAL SUPPLY ZONE (${(ticker.price * 1.018).toFixed(0)})</span>
          <span className="text-rose-400/80">REJECTION LEVEL</span>
        </div>

        {/* Fair Value Gap Zone */}
        {showFVG && (
          <div className="absolute top-20 left-[25%] right-[20%] h-10 bg-amber-500/10 border-y border-amber-500/30 flex items-center justify-center text-[10px] text-amber-300/80 font-sans uppercase tracking-wider">
            Fair Value Gap (FVG)
          </div>
        )}

        {/* Support Level Line */}
        <div className="absolute bottom-12 left-0 right-0 border-b border-dashed border-emerald-500/50 flex items-center justify-between px-2 text-[9px] text-emerald-400 font-sans">
          <span className="bg-[#07020d] px-1 rounded border border-emerald-900/60">LIQUIDITY SWEEP & DEMAND ZONE (${(ticker.price * 0.982).toFixed(0)})</span>
          <span className="text-emerald-400">STRUCTURE ENTRY</span>
        </div>

        {/* Candles Canvas representation using SVG */}
        <svg className="w-full h-full relative z-10 overflow-visible" preserveAspectRatio="none" viewBox="0 0 320 120">
          {/* EMA Trendline overlay */}
          {showEMA && (
            <path
              d="M 10 95 Q 80 85 150 50 T 310 25"
              fill="none"
              stroke="#c084fc"
              strokeWidth="2"
              strokeDasharray="4 2"
              className="drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]"
            />
          )}

          {/* Render Candlesticks */}
          {candles.map((c, i) => {
            const x = 20 + i * 36;
            // Map values to y (range 15 to 105)
            const minP = ticker.price * 0.97;
            const maxP = ticker.price * 1.025;
            const range = maxP - minP;

            const getY = (val: number) => 110 - ((val - minP) / range) * 90;

            const yHigh = getY(c.high);
            const yLow = getY(c.low);
            const yOpen = getY(c.open);
            const yClose = getY(c.close);

            const topY = Math.min(yOpen, yClose);
            const height = Math.max(Math.abs(yOpen - yClose), 3);
            const color = c.bull ? '#10b981' : '#f43f5e';

            return (
              <g key={i} className="cursor-pointer group">
                {/* Wick */}
                <line x1={x + 7} y1={yHigh} x2={x + 7} y2={yLow} stroke={color} strokeWidth="1.5" opacity="0.8" />
                {/* Body */}
                <rect
                  x={x}
                  y={topY}
                  width="14"
                  height={height}
                  fill={color}
                  rx="1.5"
                  className="transition-all hover:opacity-100 group-hover:scale-110"
                />

                {/* Annotation Badges */}
                {c.isLiquiditySweep && (
                  <g>
                    <circle cx={x + 7} cy={yLow + 12} r="9" fill="#eab308" opacity="0.2" />
                    <text x={x + 7} y={yLow + 15} textAnchor="middle" fill="#fef08a" fontSize="8" fontWeight="bold">
                      SWEEP
                    </text>
                  </g>
                )}

                {c.isBOS && (
                  <g>
                    <rect x={x - 10} y={yHigh - 16} width="34" height="12" rx="3" fill="#7c3aed" opacity="0.8" />
                    <text x={x + 7} y={yHigh - 7} textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="bold">
                      BOS ↑
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>

        {/* Volume Bars */}
        {showVolume && (
          <div className="absolute bottom-1 left-3 right-3 h-8 flex items-end justify-between pointer-events-none opacity-40">
            {[40, 25, 90, 85, 45, 30, 65, 95].map((h, idx) => (
              <div
                key={idx}
                className={`w-3.5 rounded-t ${idx === 3 || idx === 7 ? 'bg-purple-500' : 'bg-slate-700'}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Live Order Depth & Confirmation Footer */}
      <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-300 pt-2 border-t border-purple-900/30">
        <div className="flex items-center gap-2 text-purple-300">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>Structure Bias: <strong className="text-emerald-400 uppercase">Bullish Continuation</strong></span>
        </div>
        <div className="flex items-center gap-2 font-sans text-slate-400 text-[10px]">
          <ShieldAlert className="w-3.5 h-3.5 text-purple-400" />
          <span>1:3 Risk-to-Reward Ratio Preset</span>
        </div>
      </div>
    </div>
  );
};
