import React, { useState } from 'react';
import { X, Download, CheckCircle2, Sparkles, Lock, ShieldCheck } from 'lucide-react';
import { MODULES_DATA } from '../data/content';
import { ModuleItem } from '../types';

interface StarterKitModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialModule?: ModuleItem | null;
}

export const StarterKitModal: React.FC<StarterKitModalProps> = ({
  isOpen,
  onClose,
  initialModule,
}) => {
  const [step, setStep] = useState<'form' | 'reader'>('form');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('Beginner (0-6 months)');
  const [activeTab, setActiveTab] = useState<string>(initialModule?.id || 'module-1');

  if (!isOpen) return null;

  const activeModule = MODULES_DATA.find((m) => m.id === activeTab) || MODULES_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStep('reader');
  };

  const handleDownloadPDF = () => {
    const textContent = `
CASSIUS CUVEE - SWELL POINT
===========================================
Downloaded for: ${fullName || 'Valued Trader'} (${email || 'Direct Download'})
Date: ${new Date().toLocaleDateString()}

CHAPTER 1: THE MAP - STEP-BY-STEP TRADING BLUEPRINT
---------------------------------------------------
- Identify 4H Swing Highs & Lows to establish daily bias.
- Locate Fair Value Gaps (FVG) and Liquidity Sweep zones.
- Never trade against higher-timeframe momentum.

CHAPTER 2: THE KIT - ESSENTIAL TOOLS & CHARTS
---------------------------------------------------
- Focus on Point of Control (POC) on Volume Profile.
- Use 20/50 Exponential Moving Averages for dynamic trend filters.
- Ditch lagging indicators; read raw order flow and volume depth.

CHAPTER 3: THE MINDSET - OVERCOMING PSYCHOLOGY PITFALLS
---------------------------------------------------
- Risk maximum 1-2% per trade.
- Treat every trade as 1 outcome in a series of 100 statistical events.
- Never revenge trade after a loss. Walk away for 2 hours.

CHAPTER 4: THE EXECUTION - RISK & POSITION SIZING
---------------------------------------------------
- Maintain a minimum 1:3 Risk-to-Reward ratio.
- Position Size = (Account Balance * Risk %) / (Entry - Stop Loss).
- Take 50% profit at 1:2 R:R and move Stop Loss to Breakeven.

© 2026 Cassius Cuvee. All rights reserved.
    `.trim();

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Cassius_Cuvee_Swell_Point.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl glass-noir-card rounded-3xl border border-purple-500/40 shadow-2xl shadow-purple-950 overflow-hidden my-8">
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-slate-300 hover:text-white hover:bg-purple-900 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {step === 'form' ? (
          <div className="p-6 sm:p-10">
            
            {/* Lead Capture Form */}
            <div className="space-y-5">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950 border border-purple-500/40 text-purple-300 text-xs font-mono mb-2">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>SWELL POINT — INSTANT ACCESS</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                  GET YOUR SWELL POINT NOW
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Enter your details below to unlock the 4-part PDF blueprint and interactive chapter reader instantly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 mb-1 uppercase">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Mercer"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#0a0414] border border-purple-500/40 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-purple-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 mb-1 uppercase">Email Address (Where to send PDF)</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#0a0414] border border-purple-500/40 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-purple-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 mb-1 uppercase">Trading Experience Level</label>
                  <select
                    value={experienceLevel}
                    onChange={(e) => setExperienceLevel(e.target.value)}
                    className="w-full bg-[#0a0414] border border-purple-500/40 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-purple-400"
                  >
                    <option value="Beginner (0-6 months)">Beginner (0-6 months)</option>
                    <option value="Intermediate (6-2 years)">Intermediate (6 months - 2 years)</option>
                    <option value="Advanced (2+ years)">Advanced (2+ years looking for structure)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full neon-glow-btn text-white text-sm font-extrabold uppercase py-3.5 rounded-xl flex items-center justify-center gap-2 border border-purple-400/40 cursor-pointer shadow-lg mt-2"
                >
                  <span>GET YOUR SWELL POINT</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-mono pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Secure Payment • Instant Access</span>
                </div>
              </form>
            </div>

          </div>
        ) : (
          /* Reader Screen after submit */
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-purple-900/40">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-mono mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>SWELL POINT UNLOCKED FOR {fullName.toUpperCase() || 'TRADER'}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
                  INTERACTIVE SWELL POINT READER
                </h3>
              </div>

              <button
                onClick={handleDownloadPDF}
                className="neon-glow-btn text-white text-xs font-bold uppercase px-4 py-2.5 rounded-xl flex items-center gap-2 border border-purple-400/40"
              >
                <Download className="w-4 h-4 text-amber-300" />
                <span>DOWNLOAD PDF FILE</span>
              </button>
            </div>

            {/* Chapter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs font-mono">
              {MODULES_DATA.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setActiveTab(m.id)}
                  className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all border ${
                    activeTab === m.id
                      ? 'bg-purple-600 text-white border-purple-400 font-bold shadow-md shadow-purple-600/40'
                      : 'bg-[#0a0414] text-slate-400 border-purple-900/50 hover:text-white'
                  }`}
                >
                  {m.number}. {m.title}
                </button>
              ))}
            </div>

            {/* Active Chapter Content */}
            <div className="bg-[#090312] border border-purple-500/30 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-black text-white uppercase font-sans">
                  {activeModule.chapterExcerpt.heading}
                </h4>
                <span className="text-xs text-purple-300 font-mono">{activeModule.readTime}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {activeModule.chapterExcerpt.content}
              </p>

              <div className="pt-3 border-t border-purple-900/30">
                <div className="text-xs font-mono font-bold text-purple-300 mb-2 uppercase">
                  Execution Checklist:
                </div>
                <div className="space-y-2">
                  {activeModule.chapterExcerpt.checklist.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-200 font-mono">
                      <div className="w-4 h-4 rounded bg-purple-900 border border-purple-500 flex items-center justify-center text-[10px] text-purple-300 font-bold">
                        {i + 1}
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs text-slate-400 font-mono pt-2">
              <span>PDF document sent to <strong className="text-purple-300">{email}</strong></span>
              <button
                onClick={onClose}
                className="text-purple-400 hover:text-white font-bold uppercase underline"
              >
                Close & Return to Page
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
