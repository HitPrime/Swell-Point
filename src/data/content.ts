import { ModuleItem, TestimonialItem, CryptoTicker } from '../types';

export const HERO_CONTENT = {
  badge: "STARTER KIT - 600+ TRADERS STARTED HERE",
  headline: "TRADE WITH STRUCTURE. FINALLY UNDERSTAND IT.",
  body: "Get the Starter Kit that walks you through trading from step one, in plain English. If you've watched fifty videos and still feel lost, that's not on you. Nobody is born knowing this stuff.",
  ctaText: "PURCHASE NOW",
  disclaimer: "TRADING STARTER KIT - INSTANT ACCESS",
  asSeenOnHeader: "AS SEEN ON WSJ / CNBC / SQUAWK ON THE STREET",
  mediaLogos: [
    { name: "WALL STREET JOURNAL", code: "WSJ", quote: "Simplifying market structure for retail traders" },
    { name: "CNBC", code: "CNBC", quote: "The structured blueprint breaking down crypto volatility" },
    { name: "SQUAWK ON THE STREET", code: "SQUAWK", quote: "Actionable risk rules over speculative hype" },
    { name: "BLOOMBERG MARKETS", code: "BLOOMBERG", quote: "A masterclass in mechanical execution" }
  ]
};

export const MODULES_DATA: ModuleItem[] = [
  {
    id: "module-1",
    number: "01",
    title: "THE MAP",
    subtitle: "Your step-by-step trading blueprint.",
    iconName: "Map",
    summary: "Stop entering trades blind. Learn how to map higher-timeframe market structure, locate true institutional supply & demand zones, and establish clear directional bias before placing a single order.",
    bullets: [
      "Identify swing highs & lows with mathematical precision rather than guessing",
      "Master Break of Structure (BOS) vs Change of Character (CHOCH) signals",
      "Map institutional liquidity pools & fair value gaps (FVG) across all timeframes",
      "Establish a non-negotiable daily bias to align with major market drivers"
    ],
    keyTakeaway: "Never trade against higher-timeframe momentum again.",
    readTime: "12 min read",
    chapterExcerpt: {
      heading: "Chapter 1: The Blueprint to Market Direction",
      content: "Market structure is the skeleton of price action. Price moves in predictable cycles of expansion, retracement, consolidation, and reversal. When you learn to identify whether the market is building structure or engineering liquidity, chart chaos disappears.",
      checklist: [
        "Step 1: Identify 4H Swing Points (Highs & Lows)",
        "Step 2: Mark Unfilled Fair Value Gaps (FVGs)",
        "Step 3: Confirm 15M Structural Shift Before Entry",
        "Step 4: Align Entry With Daily Bias"
      ]
    }
  },
  {
    id: "module-2",
    number: "02",
    title: "THE KIT",
    subtitle: "Essential tools and charts explained.",
    iconName: "BarChart3",
    summary: "Strip away the indicator noise. Get the exact mechanical toolkit used to interpret volume profiles, order flow depth, and key support & resistance zones without lagging indicators.",
    bullets: [
      "Read volume profile clusters & point of control (POC) to find true value",
      "Understand order book depth & stop-loss hunting mechanisms in crypto",
      "Set up dynamic moving average clouds for trend filter validation",
      "Decode multi-timeframe candlestick patterns that actually print edges"
    ],
    keyTakeaway: "Trade raw price action and volume—ditch lagging indicators.",
    readTime: "15 min read",
    chapterExcerpt: {
      heading: "Chapter 2: The Core Technical Toolkit",
      content: "Indicators react to price; order flow creates price. By focusing on volume clusters, open interest, and liquidity sweep zones, you gain an unfair advantage over retail traders relying on lagging moving average crossovers.",
      checklist: [
        "Step 1: Map Point of Control (POC) on 1D Volume Profile",
        "Step 2: Highlight Buy-Side & Sell-Side Liquidity Sweeps",
        "Step 3: Overlay 20/50 Exponential Moving Averages for Filter",
        "Step 4: Execute on 5M/1M Trigger Candle Confirmation"
      ]
    }
  },
  {
    id: "module-3",
    number: "03",
    title: "THE MINDSET",
    subtitle: "Overcoming psychological pitfalls.",
    iconName: "Key",
    summary: "The best strategy fails without emotional discipline. Master the mental rules that eliminate FOMO, revenge trading, position oversizing, and panic closing.",
    bullets: [
      "Eliminate trade anxiety by pre-calculating maximum loss before entering",
      "Construct a mechanical execution routine to remove emotional guesswork",
      "Develop a bulletproof trading journal to track probabilistic win rate",
      "Master the 'Probability Mindset' used by prop firm managers"
    ],
    keyTakeaway: "Trade like a casino: cold, calculated, and strictly mechanical.",
    readTime: "10 min read",
    chapterExcerpt: {
      heading: "Chapter 3: The Psychology of Consistency",
      content: "90% of trading losses stem from emotional deviations from the plan. When you treat every trade as a single outcome in a series of 100 statistical events, fear and greed lose their power over your execution.",
      checklist: [
        "Rule 1: Never risk more than 1-2% of total capital per trade",
        "Rule 2: Walk away for 2 hours after two consecutive losses",
        "Rule 3: Log every setup with screenshot & emotional score",
        "Rule 4: Accept the outcome BEFORE placing the stop-loss"
      ]
    }
  },
  {
    id: "module-4",
    number: "04",
    title: "THE EXECUTION",
    subtitle: "Risk management & position sizing mastery.",
    iconName: "ShieldAlert",
    summary: "Protect your capital at all costs. Learn the non-negotiable 1:3 Risk-to-Reward ratio matrix and exact position sizing formulas that guarantee longevity in volatile crypto markets.",
    bullets: [
      "Use fixed Risk-to-Reward (R:R) ratios minimum 1:3 on every setup",
      "Calculate exact lot / contract sizes based on stop-loss distance in dollars",
      "Implement trailing stop strategies to lock in profit during explosive runs",
      "Manage leverage safely without risking liquidation cascades"
    ],
    keyTakeaway: "Risk management is how you survive; reward ratios are how you scale.",
    readTime: "14 min read",
    chapterExcerpt: {
      heading: "Chapter 4: Capital Preservation & Math Engine",
      content: "If you win 40% of your trades with a 1:3 Risk-to-Reward ratio, you are heavily profitable. Trading is not about being right 100% of the time—it's about managing asymmetry.",
      checklist: [
        "Calculate Position Size = (Account $ * Risk %) / (Entry - Stop Loss)",
        "Set Take-Profit 1 at 1:2 R:R (Lock in 50% & move Stop to Breakeven)",
        "Set Take-Profit 2 at 1:3.5 R:R (Full Target)",
        "Never adjust Stop Loss further away once trade is active"
      ]
    }
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Sarah K.",
    title: "New Trader • Formerly Overwhelmed",
    quote: "I spent 6 months watching YouTube videos getting contradictory advice. The Starter Kit gave me a clear, 4-step checklist. My very first week trading with structure, I stopped panic-selling at the bottom.",
    winRate: "Win Rate: 38% → 64%",
    timeSaved: "Saved 60+ Hours",
    verified: true,
    avatarSeed: "sarah",
    tradingStyle: "Crypto Swing Trader"
  },
  {
    id: "test-2",
    name: "Marcus T.",
    title: "Swing Trader • 2 Years Experience",
    quote: "The section on liquidity sweeps and fair value gaps opened my eyes completely. I finally understood why my stop losses kept getting hit right before price reversed. This is the missing link.",
    winRate: "R:R Avg: 1:1.2 → 1:3.4",
    timeSaved: "Consistent Profitability",
    verified: true,
    avatarSeed: "marcus",
    tradingStyle: "Bitcoin & SOL Specialist"
  },
  {
    id: "test-3",
    name: "David L.",
    title: "Part-time Investor • Tech Engineer",
    quote: "No fluff, no lambo promises—just clean, logical market mechanics. The Risk & Position Calculator alone paid back my time tenfold. Absolutely essential for anyone serious about capital preservation.",
    winRate: "Risk Management: 100% Rule Adherence",
    timeSaved: "Zero Liquidation Incidents",
    verified: true,
    avatarSeed: "david",
    tradingStyle: "Eth & Macro Structure"
  }
];

export const CRYPTO_TICKERS: CryptoTicker[] = [
  {
    symbol: "BTC/USD",
    name: "Bitcoin",
    price: 94820,
    change24h: 3.84,
    high24h: 95400,
    low24h: 91200,
    volume: "$42.8B",
    sparkline: [91200, 91800, 92400, 91900, 93100, 92800, 94100, 93800, 94820]
  },
  {
    symbol: "ETH/USD",
    name: "Ethereum",
    price: 3450,
    change24h: 5.12,
    high24h: 3510,
    low24h: 3280,
    volume: "$18.4B",
    sparkline: [3280, 3310, 3350, 3320, 3400, 3380, 3420, 3410, 3450]
  },
  {
    symbol: "SOL/USD",
    name: "Solana",
    price: 210.5,
    change24h: 7.65,
    high24h: 215.0,
    low24h: 194.2,
    volume: "$9.1B",
    sparkline: [194.2, 198.0, 201.5, 199.0, 205.2, 203.0, 208.5, 207.0, 210.5]
  }
];

export const FAQS_DATA = [
  {
    q: "What is included in the Trading Starter Kit?",
    a: "The Starter Kit includes 4 complete modules covering market structure, essential tools, trading psychology, and risk management. You also get interactive chapter access and a downloadable PDF guide."
  },
  {
    q: "Do I need prior trading experience to understand this?",
    a: "Not at all. The Starter Kit is written specifically in plain, step-by-step English for beginners and intermediate traders who feel lost in technical jargon."
  },
  {
    q: "What markets does this structure apply to?",
    a: "Market structure is universal across all liquid asset classes. While our examples feature Bitcoin and Ethereum, the principles apply identically to Crypto, Forex, Stocks, and Futures."
  },
  {
    q: "How long will it take to read and apply?",
    a: "The entire guide can be read in under 45 minutes. You can start applying the 4-step checklist to live charts immediately."
  }
];
