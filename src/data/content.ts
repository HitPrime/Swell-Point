import { ModuleItem, TestimonialItem, CryptoTicker } from '../types';

export const HERO_CONTENT = {
  badge: "SWELL POINT INDICATOR - 600+ TRADERS JOINED",
  headline: "GET THE SWELL POINT INDICATOR",
  body: "The Swell Point Indicator is designed to help traders follow a structured approach to market analysis through a clear educational framework. Everything inside is organized to support better understanding, consistency, and decision-making.",
  ctaText: "GET SWELL POINT INDICATOR",
  disclaimer: "SWELL POINT INDICATOR - INSTANT ACCESS",
  asSeenOnHeader: "AS SEEN ON WSJ / CNBC / SQUAWK ON THE STREET",
  mediaLogos: [
    { name: "WALL STREET JOURNAL", code: "WSJ", quote: "Simplifying market structure for retail traders" },
    { name: "CNBC", code: "CNBC", quote: "The structured blueprint breaking down market volatility" },
    { name: "SQUAWK ON THE STREET", code: "SQUAWK", quote: "Actionable structure rules over speculative hype" },
    { name: "BLOOMBERG MARKETS", code: "BLOOMBERG", quote: "A masterclass in mechanical execution" }
  ]
};

export const MODULES_DATA: ModuleItem[] = [
  {
    id: "module-1",
    number: "01",
    title: "THE MAP",
    subtitle: "Understand the complete framework before applying the concepts.",
    iconName: "Map",
    summary: "Understand the complete educational framework before applying any concepts. This module walks you through how the Swell Point Indicator is structured and how each component is designed to support a disciplined, process-driven approach to market analysis.",
    bullets: [
      "Identify key structural points using a repeatable, step-by-step process",
      "Learn Break of Structure (BOS) vs Change of Character (CHOCH) concepts",
      "Understand how liquidity areas and fair value gaps fit into the framework",
      "Establish a consistent daily analysis routine before executing any trade"
    ],
    keyTakeaway: "A clear framework removes guesswork and builds consistency.",
    readTime: "12 min read",
    chapterExcerpt: {
      heading: "Chapter 1: The Blueprint to Market Direction",
      content: "Market structure is the foundation of price action analysis. Price moves in predictable cycles of expansion, retracement, consolidation, and reversal. When you learn to identify these patterns within a structured framework, chart analysis becomes far more consistent.",
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
    subtitle: "Access the tools and supporting resources included with the indicator.",
    iconName: "BarChart3",
    summary: "Access every tool and supporting resource included with the Swell Point Indicator. This module covers how each element works within the educational framework and how to apply them as part of a structured analysis process.",
    bullets: [
      "Understand volume profile clusters and point of control within the framework",
      "Learn how order flow and depth concepts are applied in structured analysis",
      "Set up moving average overlays for consistent trend filter validation",
      "Decode multi-timeframe candlestick patterns within the learning process"
    ],
    keyTakeaway: "The right tools, used consistently, build a repeatable process.",
    readTime: "15 min read",
    chapterExcerpt: {
      heading: "Chapter 2: The Core Technical Toolkit",
      content: "The Swell Point educational toolkit focuses on price action and volume-based analysis. By working through volume clusters, order flow concepts, and liquidity sweep zones, traders develop a more structured understanding of how markets move.",
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
    subtitle: "Develop structured habits for consistent decision-making.",
    iconName: "Key",
    summary: "Build Confidence Through Structure. The Swell Point Indicator simplifies complex market concepts into a structured educational process that supports consistency, clarity, and disciplined execution — helping traders develop better habits over time.",
    bullets: [
      "Reduce trade anxiety by pre-defining your process before entering a position",
      "Build a mechanical execution routine that supports emotional discipline",
      "Develop a structured trading journal to track pattern recognition over time",
      "Apply a process-driven approach used by consistent, disciplined traders"
    ],
    keyTakeaway: "Structured habits lead to consistent, disciplined execution.",
    readTime: "10 min read",
    chapterExcerpt: {
      heading: "Chapter 3: The Psychology of Consistency",
      content: "Most execution errors stem from emotional deviations from a defined plan. When you treat every trade as one outcome in a long series of structured decisions, the process becomes more consistent and easier to evaluate objectively.",
      checklist: [
        "Rule 1: Define your position size before entering any trade",
        "Rule 2: Step away and review after two consecutive missed setups",
        "Rule 3: Log every setup with a screenshot and process review",
        "Rule 4: Accept the defined outcome BEFORE placing the entry"
      ]
    }
  },
  {
    id: "module-4",
    number: "04",
    title: "THE EXECUTION",
    subtitle: "Learn how every component works together within the framework.",
    iconName: "ShieldAlert",
    summary: "Learn how every component of the Swell Point Indicator works together as a complete educational framework. This module covers position sizing, structured entry and exit planning, and how to apply the full system as a consistent process.",
    bullets: [
      "Apply structured Risk-to-Reward planning as part of every setup review",
      "Calculate position sizes based on entry distance and defined exposure levels",
      "Use trailing stop concepts to manage open positions within the framework",
      "Understand leverage concepts and how they fit within a structured approach"
    ],
    keyTakeaway: "Execution discipline is what separates learning from applying.",
    readTime: "14 min read",
    chapterExcerpt: {
      heading: "Chapter 4: Structured Execution & Position Planning",
      content: "Consistent execution is about applying a defined process every time. The Swell Point framework teaches traders how to plan entries, manage exposure, and evaluate outcomes — building a repeatable execution habit over time.",
      checklist: [
        "Calculate Position Size = (Account Size * Risk %) / (Entry - Stop Level)",
        "Set Exit Target 1 at 1:2 R:R (Reduce exposure & move Stop to Breakeven)",
        "Set Exit Target 2 at 1:3.5 R:R (Full structured target)",
        "Never adjust Stop Level further away once trade is active"
      ]
    }
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Sarah K.",
    title: "New Trader • Seeking Structure",
    quote: "I spent 6 months watching videos and getting contradictory advice. The Swell Point Indicator gave me a clear, 4-step framework. My first week applying structured analysis, I finally had a consistent process to follow.",
    winRate: "Consistency: Improved Significantly",
    timeSaved: "Saved 60+ Hours of Research",
    verified: true,
    avatarSeed: "sarah",
    tradingStyle: "Swing Trader"
  },
  {
    id: "test-2",
    name: "Marcus T.",
    title: "Swing Trader • 2 Years Experience",
    quote: "The section on liquidity sweeps and fair value gaps completely changed how I analyze charts. I finally understood the structural concepts behind price movement. This educational framework is the missing piece.",
    winRate: "Structure Clarity: Highly Improved",
    timeSaved: "Process-Driven Execution",
    verified: true,
    avatarSeed: "marcus",
    tradingStyle: "Market Structure Specialist"
  },
  {
    id: "test-3",
    name: "David L.",
    title: "Part-time Trader • Tech Engineer",
    quote: "No fluff, no empty promises — just clean, logical market structure concepts. The structured position sizing framework alone changed how I approach every setup. Essential for anyone serious about disciplined trading.",
    winRate: "Process Adherence: Consistent",
    timeSaved: "Structured Execution Every Time",
    verified: true,
    avatarSeed: "david",
    tradingStyle: "Macro Structure Analysis"
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
    volume: "42.8B",
    sparkline: [91200, 91800, 92400, 91900, 93100, 92800, 94100, 93800, 94820]
  },
  {
    symbol: "ETH/USD",
    name: "Ethereum",
    price: 3450,
    change24h: 5.12,
    high24h: 3510,
    low24h: 3280,
    volume: "18.4B",
    sparkline: [3280, 3310, 3350, 3320, 3400, 3380, 3420, 3410, 3450]
  },
  {
    symbol: "SOL/USD",
    name: "Solana",
    price: 210.5,
    change24h: 7.65,
    high24h: 215.0,
    low24h: 194.2,
    volume: "9.1B",
    sparkline: [194.2, 198.0, 201.5, 199.0, 205.2, 203.0, 208.5, 207.0, 210.5]
  }
];

export const FAQS_DATA = [
  {
    q: "WHAT'S INCLUDED WITH THE SWELL POINT INDICATOR?",
    a: "The Swell Point Indicator includes educational materials, structured guidance, and supporting resources designed to help traders better understand market structure and execution. You receive instant access upon purchase."
  },
  {
    q: "DO I NEED ANY EXPERIENCE?",
    a: "No. The content is organized for both newer and experienced traders who want a structured learning process. Everything is explained clearly from the ground up."
  },
  {
    q: "CAN THE SWELL POINT INDICATOR ENSURE SPECIFIC OUTCOMES?",
    a: "No. The Swell Point Indicator is an educational resource designed to support learning and strategy development. Individual experiences will vary. No outcomes or results are promised or implied."
  }
];
