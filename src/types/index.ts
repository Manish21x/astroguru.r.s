export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  remedies: string[];
  duration: string;
  popular?: boolean;
  category: 'Relationship' | 'Career' | 'Kundli' | 'Vastu' | 'Finance';
}

export interface ZodiacSign {
  id: string;
  name: string;
  sanskritName: string;
  symbol: string;
  dates: string;
  element: 'Fire' | 'Earth' | 'Air' | 'Water';
  rulingPlanet: string;
  luckyNumber: number;
  luckyColor: string;
  dailyHoroscope: {
    overview: string;
    love: string;
    career: string;
    finance: string;
    health: string;
    rating: number; // 1-5
  };
}

export interface NakshatraItem {
  name: string;
  ruler: string;
  deity: string;
  symbol: string;
  characteristics: string;
  luckyGem: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  city: string;
  country?: string;
  service: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
  avatarText: string;
}

export interface BlogPostItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
  author: string;
  tags: string[];
}

export interface KundliResult {
  name: string;
  dob: string;
  tob: string;
  pob: string;
  ascendant: string;
  rashi: string;
  nakshatra: string;
  nakshatraPada: number;
  sunSign: string;
  currentDasha: string;
  luckyGemstone: string;
  luckyNumber: number;
  luckyColor: string;
  luckyDay: string;
  mangalDosha: 'None' | 'Mild' | 'Present';
  kaalSarpDosha: boolean;
  personalityOverview: string;
  careerGuidance: string;
  relationshipOutlook: string;
  planetaryPositions: {
    planet: string;
    sign: string;
    house: number;
    state: string;
  }[];
}

export interface CompatibilityResult {
  boyName: string;
  girlName: string;
  totalScore: number; // out of 36
  varnaScore: number; // out of 1
  vashyaScore: number; // out of 2
  taraScore: number; // out of 3
  yoniScore: number; // out of 4
  maitriScore: number; // out of 5
  ganaScore: number; // out of 6
  bhakootScore: number; // out of 7
  nadiScore: number; // out of 8
  mangalMatch: boolean;
  verdict: string;
  detailedAnalysis: string;
  recommendedRemedies: string[];
}

export type GuidanceTopic =
  | 'Career / Business'
  | 'Marriage / Relationship'
  | 'Finance'
  | 'Education'
  | 'Family'
  | 'Health'
  | 'Other';

export interface ConsultationBooking {
  serviceId: string;
  clientName: string;
  email: string;
  phone: string;
  dob: string;
  tob: string;
  pob: string;
  guidanceTopic: GuidanceTopic;
  consultationType: 'Phone Call' | 'In-Person (Pune)' | 'Detailed PDF Kundli';
  preferredDate: string;
  preferredTimeSlot: string;
  queryTopic?: string;
  notes?: string;
}
