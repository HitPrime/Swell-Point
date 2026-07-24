import React, { useState } from 'react';
import { BookOpen, Clock, Sparkles, ShieldCheck, Map, BarChart3, Key, ShieldAlert } from 'lucide-react';
import { MODULES_DATA } from '../data/content';
import { ModuleItem } from '../types';

interface CurriculumSectionProps {
  onSelectModule: (module: ModuleItem) => void;
  onOpenLeadModal: () => void;
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({
  onSelectModule,
  onOpenLeadModal,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Map':
        return <Map className="w-5 h-5 text-purple-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-purple-400" />;
      case 'Key':
        return <Key className="w-5 h-5 text-purple-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-purple-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-purple-400" />;
    }
  };

  const currentModule = MODULES_DATA[activeTab];

  return (
    <section id="curriculum" className="relative py-20 bg-[#06020c] border-t border-purple-900/40 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-sans">
            WHAT'S <span className="text-purple-400">INCLUDED</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Explore the educational framework, tools, and resources included with the Swell Point Indicator.
          </p>
        </div>

        {/* Module Tabs Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {MODULES_DATA.map((mod, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-xl text-left border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'bg-purple-950/80 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)] text-white'
                    : 'glass-noir-card border-purple-900/40 text-slate-400 hover:text-slate-200 hover:border-purple-500/40'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    isActive ? 'bg-purple-500 text-black' : 'bg-purple-950 border border-purple-800/40 text-purple-300'
                  }`}>
                    MOD {mod.number}
                  </span>
                  {getModuleIcon(mod.iconName)}
                </div>
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base uppercase tracking-tight text-white mb-1">
                    {mod.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-1">{mod.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Module Detailed Showcase Card */}
        <div className="glass-noir-card rounded-2xl border border-purple-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-purple-950 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold rounded-md">
                  MODULE {currentModule.number}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Clock className="w-3.5 h-3.5 text-purple-400" />
                  {currentModule.readTime}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
                  {currentModule.title}: <span className="text-purple-300">{currentModule.subtitle}</span>
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  {currentModule.summary}
                </p>
              </div>



              {/* Takeaway banner & actions */}
              <div className="pt-4 flex justify-center">
                <button
                  onClick={onOpenLeadModal}
                  className="neon-glow-btn px-8 py-3 rounded-xl text-white text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 cursor-pointer border border-purple-400/40 shadow-lg"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>GET SWELL POINT INDICATOR</span>
                </button>
              </div>

            </div>

            {/* Right Interactive Preview Card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-xl bg-[#0d051a] border border-purple-500/30 space-y-4">
                <div className="flex items-center justify-between border-b border-purple-900/40 pb-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-mono font-bold text-slate-200">STRUCTURED CHECKLIST</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                    VERIFIED FRAMEWORK
                  </span>
                </div>

                <div className="space-y-2.5">
                  {currentModule.chapterExcerpt.checklist.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-purple-950/40 border border-purple-900/40">
                      <div className="w-6 h-6 rounded-full bg-purple-800/50 border border-purple-400/30 flex items-center justify-center text-[11px] font-mono font-bold text-purple-300 shrink-0">
                        {idx + 1}
                      </div>
                      <span className="text-xs font-mono text-slate-300 font-medium">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-500/30 text-amber-300 text-xs font-mono text-center">
                  💡 <span className="font-bold">Core Rule:</span> {currentModule.keyTakeaway}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
