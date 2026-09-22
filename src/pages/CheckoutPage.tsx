import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Zap, Waves } from 'lucide-react';
import { loadWhop } from '@whop/elements';
import { Checkout, CheckoutElement, WhopElements } from '@whop/elements-react';
import logoImg from '../assets/images/Logo.png';

const features = [
  {
    num: '01',
    icon: <CheckCircle2 className="w-8 h-8 text-green-400" />,
    title: 'Instant Clarity',
    desc: 'Stop staring at confusing charts. Swell Point marks the exact moment structure shifts, so you know where you stand.',
  },
  {
    num: '02',
    icon: <Waves className="w-8 h-8 text-blue-400" />,
    title: 'Visual Alerts',
    desc: "Chart markers clearly flag structure changes. No stacking ten indicators just to guess what you're looking at.",
  },
  {
    num: '03',
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: 'Ready In Seconds',
    desc: "Drop it on your TradingView chart and you're live!",
  },
];

interface EmbeddedCheckoutProps {
  email: string;
}

function EmbeddedCheckout({ email }: EmbeddedCheckoutProps) {
  const returnUrl = `https://go.getswellpoint.com/unlock-your-video?email=${encodeURIComponent(email)}`;

  return (
    <WhopElements elements={loadWhop()}>
      <Checkout
        plan="plan_eE9xzX0T1a7AA"
        returnUrl={returnUrl}
      >
        <CheckoutElement />
      </Checkout>
    </WhopElements>
  );
}

export const CheckoutPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    setTimeout(() => {
      document.getElementById('checkout-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#08030f] text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white overflow-x-hidden">

      {/* ── NAVBAR ── */}
      <header className="sticky top-0 z-40 w-full bg-[#08030f]/90 backdrop-blur-md border-b border-purple-900/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-center py-2">
          <img src={logoImg} alt="Swell Point" className="h-14 w-auto object-contain" />
        </div>
      </header>

      <main className="flex-grow">

        {/* ── HERO ── */}
        <section className="relative py-14 sm:py-16 bg-noir-gradient text-center">
          <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
          <div className="absolute inset-0 bg-circuit-pattern opacity-15 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-900/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
            <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-tight">
              Catch The <span className="text-purple-400">Wave</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
              Built for traders who want clarity, not complexity.
            </p>
            <div className="flex justify-center pt-2">
              <a href="#checkout-form" className="neon-glow-btn text-white text-sm font-extrabold uppercase px-8 py-4 rounded-xl flex items-center gap-2 border border-purple-300/40 cursor-pointer group">
                <span>Get Swell Point</span>
                <ArrowRight className="w-5 h-5 text-purple-200 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-12 bg-[#08030f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.num} className="glass-noir-card rounded-2xl p-6 flex flex-col items-center gap-3 text-center">
                <div className="p-3 rounded-full bg-purple-900/30 border border-purple-700/40">{f.icon}</div>
                <span className="text-[10px] font-mono text-purple-400 font-bold tracking-widest">{f.num}</span>
                <h3 className="text-white font-black uppercase tracking-wide text-sm">{f.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CHECKOUT ── */}
        <section id="checkout-form" className="py-14 bg-[#08030f] border-t border-purple-900/30">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-6">

            {/* Step indicators */}
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all ${step >= 1 ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.6)]' : 'bg-purple-900/40 border border-purple-700 text-slate-400'}`}>1</div>
                <span className={`text-xs font-bold uppercase tracking-wide ${step >= 1 ? 'text-white' : 'text-slate-500'}`}>Your Email</span>
              </div>
              <div className="w-10 h-px bg-purple-800" />
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all ${step >= 2 ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.6)]' : 'bg-purple-900/40 border border-purple-700 text-slate-400'}`}>2</div>
                <span className={`text-xs font-bold uppercase tracking-wide ${step >= 2 ? 'text-white' : 'text-slate-500'}`}>Payment</span>
              </div>
            </div>

            {/* STEP 1 — Email capture */}
            {step === 1 && (
              <form onSubmit={handleEmailSubmit} className="glass-noir-card rounded-2xl p-8 space-y-5">
                <h2 className="text-lg font-black text-white uppercase tracking-wide text-center">
                  Step #1 — <span className="text-purple-400">Enter Your Email</span>
                </h2>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    required
                    className="bg-[#120A24] text-white border border-purple-500/40 rounded-xl px-4 py-3 text-sm outline-none focus:border-purple-500 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.2)] transition-all placeholder:text-slate-600"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full neon-glow-btn text-white font-black uppercase tracking-wider px-8 py-4 rounded-xl flex items-center justify-center gap-2 border border-purple-300/40 cursor-pointer text-sm"
                >
                  Continue to Payment
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* STEP 2 — Whop Checkout */}
            {step === 2 && (
              <div className="space-y-4">
                <div className="bg-white/95 rounded-2xl p-6 sm:p-8 space-y-4 border-2 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                  <h2 className="text-lg font-black text-[#08030f] uppercase tracking-wide text-center">
                    Step #2 — <span className="text-purple-600">Complete Payment</span>
                  </h2>
                  <EmbeddedCheckout email={email} />
                  <p className="text-center text-[11px] text-gray-500 font-mono">
                    All sales are final. Due to the nature of digital products and educational content, no refunds are issued once a purchase is complete.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full text-center text-xs text-purple-400 hover:text-purple-300 transition-colors"
                >
                  ← Back to Step 1
                </button>
              </div>
            )}

          </div>
        </section>

        {/* ── TRADINGVIEW CTA ── */}
        <section className="py-10 bg-[#08030f] border-t border-purple-900/30">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center space-y-4">
            <p className="text-sm font-black text-white uppercase tracking-wide">Don't Have a TradingView Account Yet?</p>
            <p className="text-xs text-slate-400">Sign up free with our exclusive link, save $15 when you're ready to upgrade.</p>
            <a href="https://www.tradingview.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 neon-glow-btn text-white text-xs font-extrabold uppercase px-6 py-3 rounded-xl border border-purple-400/40 cursor-pointer">
              Get TradingView Free
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* ── STOP GUESSING ── */}
        <section className="relative py-16 bg-noir-gradient border-t border-purple-900/40 text-center">
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10 space-y-5">
            <p className="text-xs font-mono text-purple-400 uppercase tracking-widest">Stop Guessing. Start Trading.</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
              One tool. One time.<br />
              <span className="text-purple-400">Yours forever.</span>
            </h2>
            <p className="text-sm text-slate-400 max-w-md mx-auto">Mentorship and community for traders who want to build a real, durable skill.</p>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#050209] border-t border-purple-900/40 py-10 text-slate-400 font-sans">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-5">
          <img src={logoImg} alt="Swell Point" className="h-14 w-auto object-contain" />
          <p className="text-[10px] leading-snug max-w-2xl text-center font-mono">
            <strong className="text-white font-bold">Disclaimer.</strong>{' '}
            <span className="text-purple-400">
              The Swell Point indicator is an educational resource provided for informational and learning purposes only. It does not constitute financial advice of any kind. Trading involves substantial risk and is not suitable for every investor. No specific outcomes, results, or performance levels are promised or implied. Past performance does not indicate future results. All trading decisions made using this material are the sole responsibility of the individual user.
            </span>
          </p>
          <p className="text-[11px] text-slate-500 font-mono">© 2026 Cassius Cuvée. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};
