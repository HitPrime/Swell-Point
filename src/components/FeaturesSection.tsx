import React from 'react';
import { Map, BarChart3, Key, ShieldAlert, ArrowRight, Check, BookOpen, Clock } from 'lucide-react';
import { MODULES_DATA } from '../data/content';
import { ModuleItem } from '../types';

interface FeaturesSectionProps {
  onSelectModule: (module: ModuleItem) => void;
  onOpenLeadModal: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  onSelectModule,
  onOpenLeadModal,
}) => {
  // Helper to render illustrative icon per module
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Map':
        return <Map className="w-6 h-6 text-purple-300" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-purple-300" />;
      case 'Key':
        return <Key className="w-6 h-6 text-purple-300" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-purple-300" />;
      default:
        return <BookOpen className="w-6 h-6 text-purple-300" />;
    }
  };

  return (
    <section id="modules" className="relative py-20 bg-[#08030f] border-t border-b border-purple-900/40 overflow-hidden">
      {/* Background Wireframe Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-900/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight font-sans">
            FOUR MODULES. <span className="text-purple-400">ZERO GUESSWORK.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Everything you need to transform random chart viewing into a repeatable, high-probability execution strategy.
          </p>
        </div>

        {/* 4 Card-Based Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {MODULES_DATA.map((module) => (
            <div
              key={module.id}
              className="glass-noir-card-interactive rounded-2xl p-6 flex flex-col justify-between border border-purple-500/25 relative group hover:border-purple-400/60"
            >
              {/* Top Card Badge & Number */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/50 flex items-center justify-center shadow-lg shadow-purple-950 group-hover:scale-110 transition-transform">
                    {renderIcon(module.iconName)}
                  </div>
                  <span className="text-2xl font-black text-purple-500/40 font-mono tracking-wider group-hover:text-purple-400 transition-colors">
                    {module.number}
                  </span>
                </div>

                {/* Module Title */}
                <h3 className="text-xl font-black text-white uppercase tracking-wider mb-2 font-sans">
                  {module.title}
                </h3>

                {/* Clear, Purple-Highlighted Subtitle */}
                <div className="text-xs sm:text-sm font-bold text-purple-300 bg-purple-950/60 border-l-2 border-purple-500 px-3 py-1.5 rounded-r-md mb-4 font-mono">
                  {module.subtitle}
                </div>

                {/* Summary */}
                <p className="text-xs text-slate-300 leading-relaxed mb-5 font-sans">
                  {module.summary}
                </p>

                {/* Short Bullet Points Explaining Benefit */}
                <div className="space-y-2.5 mb-6 pt-3 border-t border-purple-900/30">
                  {module.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <div className="w-4 h-4 rounded-full bg-purple-900/80 border border-purple-400/60 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-purple-300" />
                      </div>
                      <span className="leading-snug">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-purple-900/30 flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-purple-300/80 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-purple-400" />
                  {module.readTime}
                </span>

                <button
                  onClick={() => onSelectModule(module)}
                  className="text-xs font-bold text-purple-300 hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-all"
                >
                  <span>Preview Chapter</span>
                  <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenLeadModal}
            className="neon-glow-btn text-white text-xs sm:text-sm font-extrabold uppercase px-8 py-3.5 rounded-xl inline-flex items-center gap-2 border border-purple-400/40 shadow-xl"
          >
            <span>GET SWELL POINT INDICATOR</span>
          </button>
        </div>

      </div>
    </section>
  );
};
