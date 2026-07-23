import React, { useState } from 'react';
import { ShieldAlert, ArrowRight, DollarSign, Percent, TrendingUp, RefreshCw } from 'lucide-react';

interface PositionCalculatorProps {
  onOpenLeadModal: () => void;
}

export const PositionCalculator: React.FC<PositionCalculatorProps> = ({ onOpenLeadModal }) => {
  const [accountSize, setAccountSize] = useState<number>(10000);
  const [riskPercent, setRiskPercent] = useState<number>(1.5);
  const [entryPrice, setEntryPrice] = useState<number>(94000);
  const [stopLoss, setStopLoss] = useState<number>(92500);
  const [takeProfit, setTakeProfit] = useState<number>(98500);

  // Math Calculations
  const maxRiskAmount = (accountSize * (riskPercent / 100));
  const stopDistance = Math.abs(entryPrice - stopLoss);
  const tpDistance = Math.abs(takeProfit - entryPrice);
  
  const positionUnits = stopDistance > 0 ? (maxRiskAmount / stopDistance) : 0;
  const positionNotional = positionUnits * entryPrice;
  const riskRewardRatio = stopDistance > 0 ? (tpDistance / stopDistance) : 0;
  const potentialGain = maxRiskAmount * riskRewardRatio;

  return (
    <section id="calculator" className="relative py-16 bg-[#06020c] border-b border-purple-900/40">
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-noir-card rounded-3xl p-6 sm:p-10 border border-purple-500/30 shadow-2xl">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pb-6 border-b border-purple-900/40">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                INSTITUTIONAL POSITION & RISK CALCULATOR
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Calculate exact position sizes and Risk-to-Reward ratios in seconds before entering any trade.
              </p>
            </div>

            <button
              onClick={() => {
                setAccountSize(10000);
                setRiskPercent(1.5);
                setEntryPrice(94000);
                setStopLoss(92500);
                setTakeProfit(98500);
              }}
              className="text-xs font-mono text-purple-300 hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-950/50 border border-purple-800/40"
            >
              <RefreshCw className="w-3.5 h-3.5 text-purple-400" />
              <span>Reset Parameters</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Parameters Controls */}
            <div className="lg:col-span-6 space-y-4 font-mono text-xs text-slate-200">
              
              {/* Account Size */}
              <div>
                <label className="block text-slate-300 font-bold mb-1 uppercase">
                  Account Capital ($ USD)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-purple-400 font-bold">$</span>
                  <input
                    type="number"
                    value={accountSize}
                    onChange={(e) => setAccountSize(Number(e.target.value))}
                    className="w-full bg-[#0a0414] border border-purple-500/40 rounded-xl py-2 pl-8 pr-3 text-white focus:outline-none focus:border-purple-400 font-bold text-sm"
                  />
                </div>
              </div>

              {/* Risk Percentage Slider */}
              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-slate-300 font-bold uppercase">Risk Per Trade (%)</label>
                  <span className="text-amber-300 font-bold">{riskPercent}% (${maxRiskAmount.toFixed(0)})</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="5.0"
                  step="0.25"
                  value={riskPercent}
                  onChange={(e) => setRiskPercent(Number(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer"
                />
              </div>

              {/* Entry / Stop / Take Profit Grid */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div>
                  <label className="block text-[10px] text-slate-400 mb-1 uppercase">Entry Price ($)</label>
                  <input
                    type="number"
                    value={entryPrice}
                    onChange={(e) => setEntryPrice(Number(e.target.value))}
                    className="w-full bg-[#0a0414] border border-purple-500/40 rounded-lg p-2 text-white text-xs font-bold"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-rose-400 mb-1 uppercase">Stop Loss ($)</label>
                  <input
                    type="number"
                    value={stopLoss}
                    onChange={(e) => setStopLoss(Number(e.target.value))}
                    className="w-full bg-[#0a0414] border border-rose-500/40 rounded-lg p-2 text-rose-200 text-xs font-bold"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-emerald-400 mb-1 uppercase">Take Profit ($)</label>
                  <input
                    type="number"
                    value={takeProfit}
                    onChange={(e) => setTakeProfit(Number(e.target.value))}
                    className="w-full bg-[#0a0414] border border-emerald-500/40 rounded-lg p-2 text-emerald-200 text-xs font-bold"
                  />
                </div>
              </div>

            </div>

            {/* Live Calculation Results Output Panel */}
            <div className="lg:col-span-6 bg-[#0a0414] border border-purple-500/40 rounded-2xl p-6 relative overflow-hidden font-mono space-y-4">
              <div className="text-xs uppercase font-bold text-purple-400 flex items-center justify-between border-b border-purple-900/40 pb-3">
                <span>EXECUTION PARAMETERS OUTPUT</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/40">
                  <div className="text-[10px] text-slate-400 uppercase">Max Allowed Loss</div>
                  <div className="text-lg font-black text-rose-400">${maxRiskAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                  <div className="text-[9px] text-slate-400">{riskPercent}% Capital Protected</div>
                </div>

                <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/40">
                  <div className="text-[10px] text-slate-400 uppercase">Risk : Reward Ratio</div>
                  <div className={`text-lg font-black ${riskRewardRatio >= 3 ? 'text-emerald-400' : 'text-amber-300'}`}>
                    1 : {riskRewardRatio.toFixed(2)}
                  </div>
                  <div className="text-[9px] text-slate-400">{riskRewardRatio >= 3 ? '✓ Institutional Standard' : '⚠️ Below 1:3 Target'}</div>
                </div>

                <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/40">
                  <div className="text-[10px] text-slate-400 uppercase">Position Size (Units)</div>
                  <div className="text-lg font-black text-white">{positionUnits.toFixed(4)} BTC</div>
                  <div className="text-[9px] text-slate-400">${positionNotional.toLocaleString(undefined, { maximumFractionDigits: 0 })} Value</div>
                </div>

                <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/40">
                  <div className="text-[10px] text-slate-400 uppercase">Target Potential Profit</div>
                  <div className="text-lg font-black text-emerald-400">+${potentialGain.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                  <div className="text-[9px] text-emerald-300">+{((potentialGain / accountSize) * 100).toFixed(1)}% Account Growth</div>
                </div>
              </div>

              <button
                onClick={onOpenLeadModal}
                className="w-full neon-glow-btn text-white text-xs font-bold uppercase py-3 rounded-xl flex items-center justify-center gap-2 border border-purple-400/40 cursor-pointer mt-2"
              >
                <span>GET THE FULL RISK MANAGEMENT BLUEPRINT →</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
