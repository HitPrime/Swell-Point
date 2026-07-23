export interface ModuleItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  iconName: string;
  summary: string;
  bullets: string[];
  keyTakeaway: string;
  readTime: string;
  chapterExcerpt: {
    heading: string;
    content: string;
    checklist: string[];
  };
}

export interface TestimonialItem {
  id: string;
  name: string;
  title: string;
  quote: string;
  winRate: string;
  timeSaved: string;
  verified: boolean;
  avatarSeed: string;
  tradingStyle: string;
}

export interface CryptoTicker {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  high24h: number;
  low24h: number;
  volume: string;
  sparkline: number[];
}

export interface LeadFormData {
  fullName: string;
  email: string;
  experienceLevel: string;
  tradingGoal: string;
}

export interface ModalState {
  isOpen: boolean;
  type: 'lead' | 'preview' | 'contact' | 'terms' | 'privacy' | 'success';
  moduleData?: ModuleItem | null;
}
