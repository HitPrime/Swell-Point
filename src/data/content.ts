import { ModuleItem, TestimonialItem, CryptoTicker } from '../types';

export const HERO_CONTENT = {
  badge: "OFFICIAL SWELL POINT INDICATOR — INSTANT ACCESS",
  headline: "THE SWELL POINT INDICATOR",
  body: "A structured educational tool built to help traders develop a clear, repeatable approach to reading market conditions. Used by traders who want process over guesswork.",
  ctaText: "GET SWELL POINT INDICATOR",
  disclaimer: "SWELL POINT INDICATOR — INSTANT ACCESS UPON PURCHASE",
};

export const MODULES_DATA: ModuleItem[] = [
  {
    id: "module-1",
    number: "01",
    title: "THE MAP",
    subtitle: "A clear starting point for every analysis session.",
    iconName: "Map",
    summary: "Before applying any concept, understand the full picture. This section walks you through how to read market structure from the top down — identifying key levels, directional context, and where meaningful activity is likely to occur.",
    bullets: [
      "Read market structure clearly using a consistent, top-down process",
      "Identify Break of Structure (BOS) and Change of Character (CHOCH) patterns",
      "Locate liquidity areas and fair value gaps with a repeatable method",
      "Build a daily analysis routine that supports confident decision-making"
    ],
    keyTakeaway: "A clear starting point leads to more consistent decisions.",
    readTime: "12 min read",
    chapterExcerpt: {
      heading: "Chapter 1: Reading Market Direction",
      content: "Understanding market structure gives you context. When you know whether price is building, extending, or reversing, every decision becomes clearer. This section teaches you how to establish that context before anything else.",
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
    subtitle: "Every tool included, explained clearly.",
    iconName: "BarChart3",
    summary: "Access the full set of tools and resources included with the Swell Point Indicator. Each element is explained in context — what it does, why it matters, and how it fits into a structured analysis process.",
    bullets: [
      "Understand volume profile and point of control in practical terms",
      "Learn how order flow concepts support structural decision-making",
      "Apply moving average overlays as reliable trend confirmation filters",
      "Read multi-timeframe patterns within a consistent analytical framework"
    ],
    keyTakeaway: "The right tools, applied consistently, build a process you can trust.",
    readTime: "15 min read",
    chapterExcerpt: {
      heading: "Chapter 2: Tools That Support Structured Analysis",
      content: "The Swell Point toolkit removes complexity and focuses on what matters. Volume, structure, and confirmation — each tool is included because it serves a specific purpose within the framework, not as noise.",
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
    subtitle: "Build the habits that support consistent execution.",
    iconName: "Key",
    summary: "The Swell Point Indicator is built on the idea that structure begins in the mind. This section focuses on developing the habits, routines, and decision-making processes that allow traders to apply the framework with discipline and clarity.",
    bullets: [
      "Pre-define your process before every session to reduce reactive decisions",
      "Build a structured execution routine that removes emotional guesswork",
      "Track your analysis using a structured journal built into the framework",
      "Apply a process-first mindset supported by consistent review habits"
    ],
    keyTakeaway: "Consistent habits create consistent outcomes over time.",
    readTime: "10 min read",
    chapterExcerpt: {
      heading: "Chapter 3: Building a Process-Driven Approach",
      content: "Most execution errors come from a lack of process, not a lack of knowledge. This section provides a repeatable structure for how you approach each session — from preparation to review — so every decision is grounded in your framework.",
      checklist: [
        "Rule 1: Define your process parameters before each session",
        "Rule 2: Step back and review after two consecutive missed setups",
        "Rule 3: Log every setup with a screenshot and structured notes",
        "Rule 4: Commit to the defined plan before executing any position"
      ]
    }
  },
  {
    id: "module-4",
    number: "04",
    title: "THE EXECUTION",
    subtitle: "Apply the full framework from start to finish.",
    iconName: "ShieldAlert",
    summary: "This section brings everything together. Learn how to apply the Swell Point framework as a complete, end-to-end process — from identifying a setup to planning the entry, managing the position, and reviewing the outcome.",
    bullets: [
      "Plan structured entries and exits as part of a defined process",
      "Size positions based on a consistent, rules-based exposure approach",
      "Manage open positions using trailing concepts built into the framework",
      "Review and refine your execution using the structured feedback loop"
    ],
    keyTakeaway: "Execution is where learning becomes application.",
    readTime: "14 min read",
    chapterExcerpt: {
      heading: "Chapter 4: End-to-End Execution Framework",
      content: "The Swell Point framework is designed to be applied start to finish. This chapter walks you through a complete trade cycle — from setup identification to outcome review — so you always know where you are in the process.",
      checklist: [
        "Calculate Position Size = (Account Size * Risk %) / (Entry - Stop Level)",
        "Set Exit Target 1 at 1:2 R:R (Reduce exposure & move Stop to Breakeven)",
        "Set Exit Target 2 at 1:3.5 R:R (Full structured target)",
        "Review outcome against your pre-defined plan after every session"
      ]
    }
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Sarah K.",
    title: "Trader • Seeking Structure",
    quote: "I spent months watching videos and getting contradictory advice. The Swell Point Indicator gave me a clear framework I could actually follow. For the first time, my analysis felt structured and repeatable.",
    winRate: "Clarity: Significantly Improved",
    timeSaved: "Saved Hours of Research",
    verified: true,
    avatarSeed: "sarah",
    tradingStyle: "Swing Trader"
  },
  {
    id: "test-2",
    name: "Marcus T.",
    title: "Swing Trader • 2 Years Experience",
    quote: "The section on liquidity and fair value gaps changed how I read charts entirely. I finally had the structural vocabulary to understand what price was doing. The framework filled in every gap.",
    winRate: "Structure Clarity: Highly Improved",
    timeSaved: "Consistent Process Applied",
    verified: true,
    avatarSeed: "marcus",
    tradingStyle: "Market Structure Trader"
  },
  {
    id: "test-3",
    name: "David L.",
    title: "Trader • Tech Background",
    quote: "Clean, logical, and straightforward. No hype — just a well-structured educational framework that teaches you how to think about market conditions. Exactly what I was looking for.",
    winRate: "Process Adherence: Consistent",
    timeSaved: "Structured Every Session",
    verified: true,
    avatarSeed: "david",
    tradingStyle: "Structural Analysis"
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
    q: "WHAT IS SWELL POINT?",
    a: "The Swell Point Indicator is a structured educational tool designed to help traders develop a consistent, process-driven approach to market analysis. It includes a step-by-step framework, supporting resources, and guidance materials — all organized to support clearer thinking and more structured decision-making."
  },
  {
    q: "DO I NEED ANY EXPERIENCE?",
    a: "No prior experience is required. The content is organized progressively — starting from foundational concepts and building toward full framework application. Everything is explained in plain language so you can follow along at your own pace."
  }
];
