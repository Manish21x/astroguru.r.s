import { ServiceItem, ZodiacSign, NakshatraItem, TestimonialItem, BlogPostItem } from '../types';
import blogImageB1 from '../assets/images/regenerated_image_1787574835628.png';
import blogImageB2 from '../assets/images/regenerated_image_1787574845183.png';

export interface AwardItem {
  id: string;
  title: string;
  ceremony: string;
  year: string;
  presenter: string;
  category: string;
  description: string;
  highlightTag: string;
  significance: string;
}

export const GUIDANCE_TOPICS = [
  "Career / Business",
  "Marriage / Relationship",
  "Finance",
  "Education",
  "Family",
  "Health",
  "Other"
] as const;

export const ASTROLOGER_PROFILE = {
  name: "Astro Love Guru Pt. Rohit Sharma",
  shortName: "Astro Love Guru",
  websiteName: "Astro_love_guru",
  title: "National Awardee Vedic Jyotish Acharya & Love Relationship Specialist",
  tagline: "Astro_love_guru | Trusted Vedic Astrology & Spiritual Guidance in Pune, Maharashtra",
  experienceYears: 15,
  consultationsCount: "15,000+",
  satisfactionRate: "99.2%",
  countriesServed: "42+",
  locations: ["Pune, Maharashtra", "Mumbai", "Nashik", "Global Online Consultations"],
  phone: "+91 93524 79593",
  rawPhone: "9352479593",
  whatsapp: "+919352479593",
  email: "consultation@astroloveguru.com",
  instagram: "https://www.instagram.com/astro_rohit_sharma_jiii?stkn=aHFvb3Z0MDEwNTd1",
  instagramHandle: "@astro_rohit_sharma_jiii",
  officeAddress: "Astro_love_guru Sansthan, Koregaon Park / FC Road, Pune, Maharashtra 411001",
  shortBio: "Astro Love Guru Pt. Rohit Sharma is one of India's most trusted and felicitated Vedic Astrologers, recognized for transformative guidance in Love, Relationship, Career, Business, Finance, Education, Family, and Health issues. Based in Pune, Maharashtra, Pt. Rohit Sharma seamlessly integrates authentic Parashari principles, KP astrology, and scientifically aligned remedial measures to bring clarity, peace, and prosperity to thousands of seekers worldwide.",
  highlights: [
    "National Pride Icon Awardee in Vedic Jyotish & Love Relationship Guidance",
    "Felicitation at Jaipur Green Developers National Excellence Ceremony",
    "Gold Medalist in Vedic Jyotish & Siddhanta Astrology (Sanskrit Mahavidyalaya)",
    "Specialist in Love Reconciliation, Marriage Compatibility & Career Success",
    "Practical, ethical, and non-superstitious remedies tailored to contemporary lifestyles"
  ],
  credentials: [
    "Pride National Award in Astrology (National Icon Forum)",
    "Jyotish Ratna & Gold Medalist (All India Vedic Federation)",
    "Vastu Acharya (Sanskrit Mahavidyalaya)",
    "Certified Vedic Gemologist (GIA Standard)"
  ]
};

export const HONORS_AND_AWARDS: AwardItem[] = [
  {
    id: "national-pride-award",
    title: "National Pride Excellence Award in Vedic Jyotish",
    ceremony: "Pride National Icon Awards Gala",
    year: "National Felicitation",
    presenter: "Insight Success & National Dignitaries",
    category: "Predictive Astrology & Kundli Milan",
    description: "Bestowed for unprecedented diagnostic accuracy in Janam Kundli analysis, resolving critical marital delays, and providing ethical spiritual guidance without superstitious fear.",
    highlightTag: "National Honor",
    significance: "Conferred on the grand stage under the National Emblem & Pride Tricolour backdrop."
  },
  {
    id: "jaipur-green-award",
    title: "National Jyotish Pratibha Puraskar & Excellence Trophy",
    ceremony: "Jaipur Green Developers Annual National Convention",
    year: "Excellence in Vedic Sciences",
    presenter: "Distinguished Leaders & Cultural Patrons",
    category: "Vedic Wisdom & Community Service",
    description: "Honored with the prestigious Golden Trophy for exceptional contributions toward preserving classical Parashari Jyotish and providing philanthropic astrological remedies.",
    highlightTag: "Prestigious Trophy",
    significance: "Recognized for combining sacred Vedic heritage with modern psychological empathy."
  },
  {
    id: "jyotish-ratna-gold",
    title: "Jyotish Ratna & Gold Medalist in Siddhanta Astrology",
    ceremony: "All India Federation of Astrologers & Sanskrit Mahavidyalaya",
    year: "Academic & Scriptural Honor",
    presenter: "Senior Vedic Shankaracharyas & Scholar Jury",
    category: "Siddhanta & Mathematical Astrology",
    description: "Awarded top academic honors for comprehensive thesis research on Vimshottari Mahadasha transitions and subtle planetary transit nuances.",
    highlightTag: "Gold Medalist",
    significance: "Highest scriptural distinction in traditional Vedic scholarship."
  },
  {
    id: "global-nri-citation",
    title: "Global Vedic Ambassador & NRI Counselor Citation",
    ceremony: "International Vedic Astrology Forum",
    year: "Serving 38+ Nations",
    presenter: "Global Sanatan Heritage Society",
    category: "International Vedic Outreach",
    description: "Applauded for conducting over 12,500+ successful virtual consultations for Indian diaspora families across the USA, UK, UAE, Australia, Canada, and Singapore.",
    highlightTag: "Global Reach",
    significance: "Bridging international NRI families with authentic Vedic rituals and guidance."
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "love-relationship",
    title: "Love & Relationship Astrology",
    subtitle: "Resolve misunderstandings, emotional blockages & soulmate compatibility",
    iconName: "HeartHandshake",
    category: "Relationship",
    popular: true,
    duration: "45 Mins Session + Remedy Chart",
    shortDesc: "In-depth astrological analysis of Venus, 5th and 7th houses to heal broken bonds, resolve partner conflict, and find true emotional harmony.",
    fullDesc: "Love and relationships are deeply influenced by the placement of Venus (Shukra), Mars (Mangal), the 5th house of romance, and the 7th house of lifelong partnership. Astro Love Guru Pt. Rohit Sharma conducts an uncompromising analysis of both partners' planetary charts to identify karmic debts, communication traps, and planetary clashes.",
    benefits: [
      "Clarity on emotional compatibility and marriage potential",
      "Identification of timing for reconciliation or meeting ideal partner",
      "Analysis of Venus and Moon placements for emotional synchrony",
      "Remedies for third-party interference and family approval"
    ],
    remedies: [
      "Shukra Shanti and Kamakhya Beej Mantra recitation guide",
      "Natural Rose Quartz or Diamond/White Sapphire suitability check",
      "Favourable Muhurat for crucial conversations and meetings"
    ]
  },
  {
    id: "marriage-prediction",
    title: "Marriage Prediction & Kundli Milan",
    subtitle: "Complete 36-Guna analysis, Mangal Dosha check & marital timeline",
    iconName: "Flame",
    category: "Relationship",
    popular: true,
    duration: "60 Mins Detailed Session",
    shortDesc: "Authentic Ashtakoot Kundli Milan, Manglik Dosha evaluation, delay in marriage analysis, and longevity of conjugal happiness.",
    fullDesc: "Marriage is the most sacred union in Vedic philosophy. Pt. Rohit Sharma goes beyond superficial computer Guna scores by evaluating the crucial Navamsha (D-9) chart, 7th house lord, Jupiter's aspect, and subtle Nadi Dosha cancellations that generic calculators miss.",
    benefits: [
      "Precise estimation of marriage timing and age period",
      "Deep 36-Guna matching with Nadi and Bhakoot cancellation checks",
      "Accurate Manglik Dosha degree evaluation (Anshik vs Purna Manglik)",
      "Characteristics, direction, and profession of your prospective spouse"
    ],
    remedies: [
      "Kumbh Vivah or Vishnu Vivah guidance for intense Mangal Dosha",
      "Katyayani Vrata / Jupiter strengthening remedies for delayed marriage",
      "Customized Yantra sanctification for pre-marital peace"
    ]
  },
  {
    id: "career-business",
    title: "Career & Business Astrology",
    subtitle: "Unlock career growth, job switch timings, startup success & investments",
    iconName: "TrendingUp",
    category: "Career",
    popular: true,
    duration: "45 Mins Session + Career Blueprint",
    shortDesc: "Strategic examination of 10th house (Karma Bhava), Sun, Saturn, and Mercury to align your professional decisions with cosmic timing.",
    fullDesc: "Whether facing stagnation in a corporate job, deciding between employment vs entrepreneurship, or choosing the right business partners, your 10th House (Karma) and 11th House (Labha) hold the cosmic blueprint. Pt. Rohit Sharma helps you make decisive, profitable career moves.",
    benefits: [
      "Optimal periods for job promotions, increments, or foreign assignments",
      "Best business sectors suited to your planetary strengths",
      "Assessment of partnership risks and trustworthy business collaborators",
      "Resolution of workplace politics, legal delays, and boss conflicts"
    ],
    remedies: [
      "Surya Arghya with customized Aditya Hridaya Stotram methodology",
      "Budha/Shani planetary strengthening gemstones (Emerald / Blue Sapphire evaluation)",
      "Vastu alignment for office desks and cash box orientations"
    ]
  },
  {
    id: "kundli-reading",
    title: "Comprehensive Kundli Reading",
    subtitle: "Lifetime Janam Kundli analysis with 12 Houses & Vimshottari Dasha",
    iconName: "Scroll",
    category: "Kundli",
    popular: false,
    duration: "60 Mins Deep Session + PDF Chart",
    shortDesc: "Holistic lifetime analysis decoding physical health, wealth, family lineage, children, spiritual growth, and upcoming major Dasha periods.",
    fullDesc: "Your Janam Kundli is the exact snapshot of the cosmos at the moment of your first breath. Pt. Rohit Sharma conducts an exhaustive reading spanning Lagna chart, Navamsha chart, Moon chart, and running Vimshottari Mahadasha-Antardasha cycles.",
    benefits: [
      "Complete understanding of your life purpose, strengths, and vulnerabilities",
      "Timeline of Golden Periods and precautionary phases for the next 5–10 years",
      "Clarity on health predispositions, chronic vulnerabilities, and wellness",
      "Inheritance, ancestral blessings (Pitri Dosha check), and spiritual destiny"
    ],
    remedies: [
      "Ishta Devata identification and personalized Sadhana regimen",
      "Vedic Dana (charity) recommendations aligned with debilitated planets",
      "Certified Rudraksha recommendation based on Lagna Lord"
    ]
  },
  {
    id: "horoscope-analysis",
    title: "Horoscope & Annual Varshphal Analysis",
    subtitle: "Yearly solar return roadmap and planetary transit (Gochar) guidance",
    iconName: "Sparkles",
    category: "Kundli",
    popular: false,
    duration: "45 Mins Session",
    shortDesc: "Annual Solar Return (Varshphal / Tajika) and major transits of Saturn, Jupiter, and Rahu-Ketu to navigate the upcoming 12 months with confidence.",
    fullDesc: "Understand how the ongoing celestial transit of Saturn (Shani Gochar), Jupiter (Guru Gochar), and Lunar Nodes interact with your natal birth chart. Receive quarter-by-quarter actionable predictions for key financial, personal, and family milestones.",
    benefits: [
      "Quarterly roadmap for investments, travel, and personal commitments",
      "Preparation for challenging transit periods like Sade Sati or Dhaiya",
      "Identification of peak lucky months for new ventures",
      "Specific precautionary advice for health and financial liquidity"
    ],
    remedies: [
      "Customized monthly Navagraha Jaap procedures",
      "Specific fasting days (Vrat) for mitigating transit stress",
      "Protective Kavach energized specifically for your current annual chart"
    ]
  },
  {
    id: "birth-chart-dosha",
    title: "Birth Chart & Dosha Nivaran",
    subtitle: "Scientific mitigation of Kaal Sarp, Manglik, Pitri & Sade Sati Dosha",
    iconName: "ShieldAlert",
    category: "Kundli",
    popular: false,
    duration: "45 Mins + Remedial Consultation",
    shortDesc: "Identification and authentic Vedic remedial processes for chronic planetary afflictions, obstacles, and recurring delays.",
    fullDesc: "Doshas are not curses; they are specific planetary tensions representing unfinished karmas. Pt. Rohit Sharma prescribes non-fear-mongering, scripture-rooted remedies focusing on mental fortitude, ethical living, sacred mantra vibrations, and authentic Vedic Havans.",
    benefits: [
      "Scientific differentiation between real Dosha vs false commercial claims",
      "Analysis of Kaal Sarp variations (Anant, Kulik, Vasuki, Shankhpal, etc.)",
      "Relief from chronic mental anxiety, sudden financial losses, and family disputes",
      "Long-term spiritual protection and peace of mind"
    ],
    remedies: [
      "Authentic Vedic Rudrabhishek and Maha Mrityunjaya Jaap recommendations",
      "Pitri Tarpan and Amavasya charity protocols",
      "Ethical gemstone prescription only if strictly necessary"
    ]
  },
  {
    id: "financial-astrology",
    title: "Financial & Wealth Astrology",
    subtitle: "Maximize wealth accumulation, debt relief, property & investments",
    iconName: "Coins",
    category: "Finance",
    popular: false,
    duration: "45 Mins Consultation",
    shortDesc: "Decoding the 2nd house (Dhana Bhava) and 11th house (Labha Bhava) to resolve debt, unlock stuck funds, and expand your prosperity consciousness.",
    fullDesc: "Wealth potential is governed by the interplay of Jupiter (Guru), Venus (Lakshmi Karaka), and the lords of the 2nd, 5th, 9th, and 11th houses. Discover your Dhana Yogas, speculative market suitability, and auspicious timing for property purchases.",
    benefits: [
      "Assessment of stock market, real estate, and crypto risk appetite",
      "Timing for buying ancestral or new residential/commercial property",
      "Strategies to recover blocked payments and overcome chronic debt",
      "Identification of favorable financial partners and investment sectors"
    ],
    remedies: [
      "Shri Suktam chanting and Kuber Yantra sthapana guidelines",
      "Lakshmi-Narayan Beej mantra schedule for Friday mornings",
      "North-East (Ishan) financial corner correction at home/office"
    ]
  },
  {
    id: "vastu-guidance",
    title: "Vedic Vastu Shastra Guidance",
    subtitle: "Harmonize home, office & commercial spaces without structural demolition",
    iconName: "Compass",
    category: "Vastu",
    popular: true,
    duration: "Detailed Floorplan Audit + 60 Mins Session",
    shortDesc: "Ancient architectural alchemy balancing the 5 elements (Pancha Mahabhuta) to attract health, peace, prosperity, and family harmony.",
    fullDesc: "Vastu Shastra connects cosmic spatial energies with terrestrial architecture. Pt. Rohit Sharma provides practical non-destructive Vastu solutions using energy mirrors, elemental colors, pyramid yantras, and room-purpose reassignments.",
    benefits: [
      "In-depth analysis of residential flats, bungalows, and industrial plots",
      "Master bedroom, kitchen (Agni corner), and entrance (Dwar) energy corrections",
      "Office seating arrangements to maximize sales, decision-making, and staff loyalty",
      "Zero-demolition remedies using sacred geometry and elemental balancing"
    ],
    remedies: [
      "Brass, Copper, and Silver Vastu energy strip placements",
      "Directional color coding and Pancha Dhatu pyramid installations",
      "Sacred plant placements and positive energetic sound resonance"
    ]
  }
];

export const ZODIAC_SIGNS_DATA: ZodiacSign[] = [
  {
    id: "aries",
    name: "Aries",
    sanskritName: "Mesha (मेष)",
    symbol: "♈",
    dates: "Mar 21 - Apr 19",
    element: "Fire",
    rulingPlanet: "Mars (Mangal)",
    luckyNumber: 9,
    luckyColor: "Crimson Red & Coral",
    dailyHoroscope: {
      overview: "Dynamic Mars energizes your 1st house today, bringing high initiative and clear decision-making capacity.",
      love: "Open communication will melt minor ego clashes. Plan a quiet evening with your beloved.",
      career: "Leadership opportunities emerge at work. Take charge of complex project deliverables.",
      finance: "Favourable for reviewing long-term savings; avoid impulse luxury purchases today.",
      health: "High physical stamina; channel extra energy into yoga or moderate cardiovascular workouts.",
      rating: 5
    }
  },
  {
    id: "taurus",
    name: "Taurus",
    sanskritName: "Vrishabha (वृषभ)",
    symbol: "♉",
    dates: "Apr 20 - May 20",
    element: "Earth",
    rulingPlanet: "Venus (Shukra)",
    luckyNumber: 6,
    luckyColor: "Ivory White & Lotus Pink",
    dailyHoroscope: {
      overview: "Venus illuminates your realm of value and domestic serenity, inviting peaceful family interactions.",
      love: "Warm affection and mutual appreciation strengthen your emotional partnership.",
      career: "Consistent patience yields respect among seniors. Creative ideas receive early validation.",
      finance: "Steady financial stability. Ideal day for concluding pending banking or asset documentation.",
      health: "Focus on throat and neck relaxation; drink warm herbal teas during evening hours.",
      rating: 4
    }
  },
  {
    id: "gemini",
    name: "Gemini",
    sanskritName: "Mithuna (मिथुन)",
    symbol: "♊",
    dates: "May 21 - Jun 20",
    element: "Air",
    rulingPlanet: "Mercury (Budha)",
    luckyNumber: 5,
    luckyColor: "Emerald Green & Mint",
    dailyHoroscope: {
      overview: "Mercury stimulates intellectual sharpness. Excellent day for negotiations, writing, and client meetings.",
      love: "Playful banter enlivens your bond. Singles may receive intriguing messages from old friends.",
      career: "Multitasking comes naturally today. Pitch new collaborative proposals with clarity.",
      finance: "Gains through communication, trading, or media sectors look promising.",
      health: "Calm restless mental energy with 10 minutes of deep Pranayama before sleep.",
      rating: 4
    }
  },
  {
    id: "cancer",
    name: "Cancer",
    sanskritName: "Karka (कर्क)",
    symbol: "♋",
    dates: "Jun 21 - Jul 22",
    element: "Water",
    rulingPlanet: "Moon (Chandra)",
    luckyNumber: 2,
    luckyColor: "Pearl White & Silver",
    dailyHoroscope: {
      overview: "The Moon enhances your intuitive empathy. Trust your gut feeling when making personal choices.",
      love: "Deep heart-to-heart dialogue resolves a longstanding unspoken concern with your partner.",
      career: "Supportive atmosphere at work. Collaborators turn to you for balanced problem-solving.",
      finance: "Good day for investments in home decor or long-term family welfare plans.",
      health: "Maintain emotional equilibrium; stay well-hydrated with pure water and coconut water.",
      rating: 5
    }
  },
  {
    id: "leo",
    name: "Leo",
    sanskritName: "Simha (सिंह)",
    symbol: "♌",
    dates: "Jul 23 - Aug 22",
    element: "Fire",
    rulingPlanet: "Sun (Surya)",
    luckyNumber: 1,
    luckyColor: "Royal Gold & Saffron",
    dailyHoroscope: {
      overview: "Radiant Sun bestows charisma and authority. Your natural magnetic presence commands attention.",
      love: "Generosity and thoughtful compliments will make your partner feel cherished.",
      career: "High visibility day. Ideal for executive presentations and meeting decision-makers.",
      finance: "Favourable prospects for business revenue expansion and prestige investments.",
      health: "Cardiovascular vitality is strong; avoid excessive spicy food during lunchtime.",
      rating: 5
    }
  },
  {
    id: "virgo",
    name: "Virgo",
    sanskritName: "Kanya (कन्या)",
    symbol: "♍",
    dates: "Aug 23 - Sep 22",
    element: "Earth",
    rulingPlanet: "Mercury (Budha)",
    luckyNumber: 7,
    luckyColor: "Forest Green & Sand",
    dailyHoroscope: {
      overview: "Methodical Mercury brings precision to complex calculations and problem solving.",
      love: "Show your love through practical acts of care and listening rather than overthinking.",
      career: "Audit and refine existing workflows. Flaws in spreadsheets or code are easily caught.",
      finance: "Sensible budgeting pays dividends. Avoid speculative stock bets today.",
      health: "Digestive system responds well to light, sattvic homemade meals.",
      rating: 4
    }
  },
  {
    id: "libra",
    name: "Libra",
    sanskritName: "Tula (तुला)",
    symbol: "♎",
    dates: "Sep 23 - Oct 22",
    element: "Air",
    rulingPlanet: "Venus (Shukra)",
    luckyNumber: 6,
    luckyColor: "Pastel Blue & Rose Gold",
    dailyHoroscope: {
      overview: "Venus brings aesthetic grace, harmony in relationships, and balanced diplomacy.",
      love: "Romantic vibes are exceptionally high. Perfect evening for candlelight dinners or gifts.",
      career: "Contractual negotiations and client relations run smoothly with your natural charm.",
      finance: "Steady cash inflow; good time to invest in art, wardrobe, or self-grooming.",
      health: "Maintain kidney hydration; gentle stretching helps relieve lower back stiffness.",
      rating: 5
    }
  },
  {
    id: "scorpio",
    name: "Scorpio",
    sanskritName: "Vrishchika (वृश्चिक)",
    symbol: "♏",
    dates: "Oct 23 - Nov 21",
    element: "Water",
    rulingPlanet: "Mars & Ketu",
    luckyNumber: 9,
    luckyColor: "Deep Maroon & Midnight Black",
    dailyHoroscope: {
      overview: "Intense transformational energy empowers you to resolve persistent hidden obstacles.",
      love: "Passion and soulful honesty deepen bonds. Release past resentments completely.",
      career: "Research, confidential negotiations, and investigative tasks yield breakthroughs.",
      finance: "Unexpected financial gains or settlement of ancestral dues may materialize soon.",
      health: "Detoxify your daily routine; spend time in peaceful meditation near water.",
      rating: 4
    }
  },
  {
    id: "sagittarius",
    name: "Sagittarius",
    sanskritName: "Dhanu (धनु)",
    symbol: "♐",
    dates: "Nov 22 - Dec 21",
    element: "Fire",
    rulingPlanet: "Jupiter (Guru)",
    luckyNumber: 3,
    luckyColor: "Turmeric Yellow & Amber",
    dailyHoroscope: {
      overview: "Expansive Jupiter showers blessings on higher learning, travel, and spiritual optimism.",
      love: "Inspiring conversations about future goals bring you and your partner closer.",
      career: "Mentorship and strategic planning thrive. Opportunities for overseas collaboration grow.",
      finance: "Auspicious day for educational investments, gold purchases, and charitable donations.",
      health: "Vitality is robust; ensure good posture during prolonged reading or desk work.",
      rating: 5
    }
  },
  {
    id: "capricorn",
    name: "Capricorn",
    sanskritName: "Makara (मकर)",
    symbol: "♑",
    dates: "Dec 22 - Jan 19",
    element: "Earth",
    rulingPlanet: "Saturn (Shani)",
    luckyNumber: 8,
    luckyColor: "Charcoal Slate & Navy Blue",
    dailyHoroscope: {
      overview: "Disciplined Saturn rewards perseverance. Solid progress on foundational long-term objectives.",
      love: "Committed loyalty and steady support outweigh flashy words in your relationship.",
      career: "Your organizational authority is recognized by senior leadership. Stay focused.",
      finance: "Safe, compounded growth instruments are favored. Real estate evaluations look positive.",
      health: "Joints and knees benefit from warm sesame oil massage and regular morning walking.",
      rating: 4
    }
  },
  {
    id: "aquarius",
    name: "Aquarius",
    sanskritName: "Kumbha (कुम्भ)",
    symbol: "♒",
    dates: "Jan 20 - Feb 18",
    element: "Air",
    rulingPlanet: "Saturn & Rahu",
    luckyNumber: 4,
    luckyColor: "Electric Cyan & Steel Grey",
    dailyHoroscope: {
      overview: "Visionary insights inspire innovative approaches to modern social and technical problems.",
      love: "Intellectual connection and freedom of expression spark mutual attraction.",
      career: "Team projects gain momentum. Your out-of-the-box suggestions solve a team bottleneck.",
      finance: "Diversified investments and digital technology sectors show promising returns.",
      health: "Pay attention to ankle circulation; take frequent screen breaks for eye rest.",
      rating: 4
    }
  },
  {
    id: "pisces",
    name: "Pisces",
    sanskritName: "Meena (मीन)",
    symbol: "♓",
    dates: "Feb 19 - Mar 20",
    element: "Water",
    rulingPlanet: "Jupiter (Guru)",
    luckyNumber: 3,
    luckyColor: "Sea Green & Golden Saffron",
    dailyHoroscope: {
      overview: "Spiritual Jupiter brings serenity, creative inspiration, and compassionate understanding.",
      love: "Romantic daydreams and poetic tenderness make your connection truly magical.",
      career: "Artistic, healing, and consulting fields experience fruitful breakthroughs.",
      finance: "Trustworthy advice from elders helps in preserving wealth and avoiding speculative traps.",
      health: "Soothing foot baths and restful sleep will deeply rejuvenate your body.",
      rating: 5
    }
  }
];

export const NAKSHATRAS_DATA: NakshatraItem[] = [
  { name: "Ashwini", ruler: "Ketu", deity: "Ashwini Kumaras", symbol: "Horse's Head", characteristics: "Dynamic, quick healer, energetic, pioneering spirit", luckyGem: "Cat's Eye (Lehsuniya)" },
  { name: "Bharani", ruler: "Venus", deity: "Yama", symbol: "Yoni / Triangle", characteristics: "Passionate, transformative, deeply loyal, artistic", luckyGem: "Diamond / White Sapphire" },
  { name: "Krittika", ruler: "Sun", deity: "Agni", symbol: "Razor / Flame", characteristics: "Sharp intellect, heroic, protective, uncompromising truth", luckyGem: "Ruby (Manik)" },
  { name: "Rohini", ruler: "Moon", deity: "Brahma / Prajapati", symbol: "Cart / Temple", characteristics: "Charming, charismatic, prosperous, deeply sensual", luckyGem: "Natural Pearl (Moti)" },
  { name: "Mrigashira", ruler: "Mars", deity: "Soma", symbol: "Deer's Head", characteristics: "Curious seeker, gentle, poetic, love for travel", luckyGem: "Red Coral (Moonga)" },
  { name: "Ardra", ruler: "Rahu", deity: "Rudra", symbol: "Teardrop / Jewel", characteristics: "Intellectually deep, transformative resilience, tech-savvy", luckyGem: "Hessonite (Gomed)" },
  { name: "Punarvasu", ruler: "Jupiter", deity: "Aditi", symbol: "Bow & Quiver", characteristics: "Nurturing, benevolent, philosophical, renewal ability", luckyGem: "Yellow Sapphire (Pukhraj)" },
  { name: "Pushya", ruler: "Saturn", deity: "Brihaspati", symbol: "Cow's Udder / Lotus", characteristics: "Most auspicious, dharmic, generous mentor, spiritual", luckyGem: "Blue Sapphire (Neelam)" },
  { name: "Ashlesha", ruler: "Mercury", deity: "Nagas", symbol: "Coiled Serpent", characteristics: "Mystical, hypnotic focus, strategic, protective of family", luckyGem: "Emerald (Panna)" },
  { name: "Magha", ruler: "Ketu", deity: "Pitris (Ancestors)", symbol: "Royal Throne", characteristics: "Majestic, traditional leader, ancestral pride, dignified", luckyGem: "Cat's Eye" },
  { name: "Purva Phalguni", ruler: "Venus", deity: "Bhaga", symbol: "Front legs of bed", characteristics: "Sociable, luxurious lifestyle, sweet speech, loving", luckyGem: "Diamond" },
  { name: "Uttara Phalguni", ruler: "Sun", deity: "Aryaman", symbol: "Back legs of bed", characteristics: "Reliable, noble philanthropist, devoted spouse, respected", luckyGem: "Ruby" },
  { name: "Hasta", ruler: "Moon", deity: "Savitur", symbol: "Open Hand", characteristics: "Master craftsman, skillful healer, humorous, witty", luckyGem: "Natural Pearl" },
  { name: "Chitra", ruler: "Mars", deity: "Vishwakarma", symbol: "Bright Pearl", characteristics: "Brilliant designer, magnetic aesthetic sense, courageous", luckyGem: "Red Coral" },
  { name: "Swati", ruler: "Rahu", deity: "Vayu", symbol: "Young Shoot / Coral", characteristics: "Independent, diplomatic, adaptable, trade expert", luckyGem: "Hessonite" },
  { name: "Vishakha", ruler: "Jupiter", deity: "Indra-Agni", symbol: "Triumphal Arch", characteristics: "Goal-oriented, ambitious victor, disciplined, philosophical", luckyGem: "Yellow Sapphire" },
  { name: "Anuradha", ruler: "Saturn", deity: "Mitra", symbol: "Lotus Flower", characteristics: "Devoted friend, global traveler, deep resilience, loving", luckyGem: "Blue Sapphire" },
  { name: "Jyeshtha", ruler: "Mercury", deity: "Indra", symbol: "Round Talisman", characteristics: "Senior authority, protective guardian, courageous intellect", luckyGem: "Emerald" },
  { name: "Mula", ruler: "Ketu", deity: "Nirriti", symbol: "Tied Bundle of Roots", characteristics: "Philosophical investigator, profound truth-teller, direct", luckyGem: "Cat's Eye" },
  { name: "Purva Ashadha", ruler: "Venus", deity: "Apas (Water)", symbol: "Elephant Tusk / Fan", characteristics: "Invincible confidence, persuasive speaker, loyal ally", luckyGem: "Diamond" },
  { name: "Uttara Ashadha", ruler: "Sun", deity: "Vishwadevas", symbol: "Small Planks", characteristics: "Humble, righteous, enduring victory, leadership grace", luckyGem: "Ruby" },
  { name: "Shravana", ruler: "Moon", deity: "Vishnu", symbol: "Three Footprints / Ear", characteristics: "Profound listener, eternal student, wise counselor", luckyGem: "Natural Pearl" },
  { name: "Dhanishta", ruler: "Mars", deity: "Eight Vasus", symbol: "Drum (Damru)", characteristics: "Musical rhythm, abundant wealth, charitable leader", luckyGem: "Red Coral" },
  { name: "Shatabhisha", ruler: "Rahu", deity: "Varuna", symbol: "Empty Circle / 100 Physicians", characteristics: "Visionary healer, truth lover, solitary contemplative", luckyGem: "Hessonite" },
  { name: "Purva Bhadrapada", ruler: "Jupiter", deity: "Aja Ekapada", symbol: "Sword / Front of Funeral Cot", characteristics: "Spiritual warrior, transformative dedication, sincere", luckyGem: "Yellow Sapphire" },
  { name: "Uttara Bhadrapada", ruler: "Saturn", deity: "Ahirbudhnya", symbol: "Back of Cot / Snake in Water", characteristics: "Peaceful sage, benevolent teacher, deep wisdom, calm", luckyGem: "Blue Sapphire" },
  { name: "Revati", ruler: "Mercury", deity: "Pushan", symbol: "Fish / Drum", characteristics: "Compassionate guide, prosperous traveler, poetic kindness", luckyGem: "Emerald" }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    name: "Dr. Rajeshwar Kulkarni",
    city: "Pune, Maharashtra",
    country: "India",
    service: "Career & Business Astrology",
    rating: 5,
    date: "14 Feb 2026",
    text: "Pandit Rohit Sharma Ji's prediction regarding my Pune IT venture expansion and investor funding timeline was extraordinarily accurate. His guidance on planetary timings brought noticeable harmony and financial ease. Truly Maharashtra's finest astrologer.",
    verified: true,
    avatarText: "RK"
  },
  {
    id: "t2",
    name: "Pooja & Sameer Deshmukh",
    city: "Pune, Maharashtra",
    country: "India",
    service: "Marriage Prediction & Kundli Milan",
    rating: 5,
    date: "28 Jan 2026",
    text: "We were troubled by a severe Nadi Dosha and Manglik conflict indicated by generic online apps. Astro Love Guru Pt. Rohit Sharma analyzed our D-9 charts and explained the exact cancellation factors with deep scriptural authority. Today we are happily married for 3 years without fear.",
    verified: true,
    avatarText: "PD"
  },
  {
    id: "t3",
    name: "Anandita Desai",
    city: "London",
    country: "United Kingdom",
    service: "Love & Relationship Astrology",
    rating: 5,
    date: "04 Feb 2026",
    text: "Living in the UK, I was hesitant about long-distance consultation. But Pt. Rohit Sharma Ji's warm demeanor, precise insight into my relationship hurdles, and practical mantra remedies gave me immediate mental peace. Highly recommended for international NRIs.",
    verified: true,
    avatarText: "AD"
  },
  {
    id: "t4",
    name: "Kiranbhai Patil",
    city: "Mumbai, Maharashtra",
    country: "India",
    service: "Financial & Wealth Astrology",
    rating: 5,
    date: "19 Dec 2025",
    text: "Stuck with severe business debts and cash flow delays for 18 months, Pt. Rohit Sharma identified an affliction to my 11th lord Mercury. His simple remedies and recommended emerald brought a dramatic revival within 90 days. He is honest and does not sell fear.",
    verified: true,
    avatarText: "KP"
  },
  {
    id: "t5",
    name: "Vikram Malhotra",
    city: "Pune / Dubai",
    country: "UAE",
    service: "Comprehensive Kundli Reading",
    rating: 5,
    date: "10 Jan 2026",
    text: "The 60-minute reading was like having a crystal clear roadmap of my entire life. Pt. Rohit Sharma told me about past life events that no stranger could have known. His predictions regarding my overseas relocation came true to the exact week.",
    verified: true,
    avatarText: "VM"
  },
  {
    id: "t6",
    name: "Meenakshi Joshi",
    city: "Nagpur, Maharashtra",
    country: "India",
    service: "Birth Chart & Dosha Nivaran",
    rating: 5,
    date: "12 Nov 2025",
    text: "Many astrologers scared me regarding Kaal Sarp and Sade Sati. Pt. Rohit Sharma calmly dispelled the myths, explained the spiritual purpose of Saturn, and gave simple daily prayers. My anxiety vanished completely.",
    verified: true,
    avatarText: "MJ"
  }
];

export const BLOG_POSTS_DATA: BlogPostItem[] = [
  {
    id: "b1",
    title: "Understanding Manglik Dosha: Myths, Reality & Vedic Remedies",
    category: "Marriage Astrology",
    readTime: "5 min read",
    date: "20 Feb 2026",
    image: blogImageB1,
    excerpt: "Why Mangal Dosha is widely misunderstood by modern matchmaking software, and how high planetary cancellations protect marital bliss.",
    author: "Pt. Rohit Sharma",
    tags: ["Kundli Milan", "Mangal Dosha", "Vedic Marriage", "Remedies"],
    content: `Manglik Dosha (Kuja Dosha) is perhaps the most sensationalized and unnecessarily feared concept in contemporary Vedic astrology. Occurring when Mars (Mangal) resides in the 1st, 4th, 7th, 8th, or 12th houses from the Ascendant, Moon, or Venus, it is often blamed for relationship turbulence.

However, classical Brihat Parashara Hora Shastra details over 24 distinct cancellation conditions (Mangal Dosha Bhanga). For instance:
1. If Mars is in its own signs (Aries or Scorpio) or exalted sign (Capricorn).
2. If Jupiter or Venus aspects the 7th house with full strength.
3. If both partners possess Mars in similar houses, the energetic intensity harmonizes rather than destroys.

Before falling prey to expensive rituals, a comprehensive examination of the Navamsha (D-9) and Shodashvarga charts is indispensable.`
  },
  {
    id: "b2",
    title: "Navigating Saturn's Sade Sati: A Period of Spiritual Transformation",
    category: "Planetary Transits",
    readTime: "6 min read",
    date: "15 Feb 2026",
    image: blogImageB2,
    excerpt: "Discover why Saturn (Shani Dev) is not a punisher but the great cosmic purifier and teacher of endurance and humility.",
    author: "Pt. Rohit Sharma",
    tags: ["Shani", "Sade Sati", "Karma", "Remedies"],
    content: `When Saturn transits through the 12th, 1st, and 2nd houses from your natal Moon sign, this 7.5-year cycle is known as Sade Sati. Popular folklore paints this as a phase of doom, but ancient sages revered Shani Dev as 'Karma Phala Data'—the impartial judge who strips away illusions.

How to thrive during Sade Sati:
- Practice unconditional honesty and ethical dealings in business.
- Perform seva (selfless service) for the elderly, disabled, and laborers on Saturdays.
- Chant the sacred Dasharatha Shani Stotram and Hanuman Chalisa.
- Refrain from gambling, speculative trading, or haughtiness.`
  },
  {
    id: "b3",
    title: "Vedic Vastu Tips for Office & Work-from-Home Prosperity",
    category: "Vastu Shastra",
    readTime: "4 min read",
    date: "08 Feb 2026",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
    excerpt: "Simple, practical directional alignments to clear financial blockages, boost sales conversion, and enhance focus.",
    author: "Pt. Rohit Sharma",
    tags: ["Vastu", "Office", "Prosperity", "Wealth"],
    content: `In the modern era of remote work and entrepreneurial ventures, the micro-energies of your workspace dictate mental clarity and revenue flow.

Key non-demolition alignments:
- Facing Direction: Always sit facing East or North while working to align with geomagnetic currents.
- Desk Placement: Never sit directly beneath an exposed overhead concrete beam; it induces mental fatigue.
- North-East (Ishan Corner): Keep this sacred zone clutter-free and place a small bowl of clean water or a brass Lord Ganesha.
- Cash Box / Financial Records: Position the safe in the South-West facing North to invite Lord Kuber's blessings.`
  },
  {
    id: "b4",
    title: "When Will Your Career Boom? Decoding the 10th House & Dasha",
    category: "Career Astrology",
    readTime: "5 min read",
    date: "01 Feb 2026",
    image: "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?q=80&w=1000&auto=format&fit=crop",
    excerpt: "How the Mahadasha of favorable Yogakaraka planets creates explosive career jumps and international prestige.",
    author: "Pt. Rohit Sharma",
    tags: ["Career", "Job Switch", "10th House", "Dasha"],
    content: `Career trajectory is governed primarily by the 10th House (Karma Bhava), its lord (Dashamesh), the Amatyakaraka in Jaimini astrology, and the running Vimshottari Dasha sequence.

Understanding your peak phases:
- Sun Mahadasha: Unlocks government tenders, corporate leadership, and public recognition.
- Mercury Mahadasha: Supercharges IT, financial trading, media, and e-commerce ventures.
- Jupiter Mahadasha: Excellent for consulting, teaching, legal, and multi-national advisory roles.
- Saturn Mahadasha: Demands patience but delivers unbreakable long-term empire building.`
  }
];

export const TRUST_PILLARS = [
  {
    icon: "Sparkles",
    title: "Personalized Vedic Predictions",
    description: "Every birth chart is manually calculated and scrutinized using authentic Parashari and KP principles—never generic automated template copy."
  },
  {
    icon: "Award",
    title: "15+ Years Scriptural Rigor",
    description: "Gold Medalist Acharya with deep roots in Varanasi & Gujarat classical Vedic institutions and thousands of verified life predictions."
  },
  {
    icon: "Lock",
    title: "100% Confidential Consultation",
    description: "Your birth data, sensitive personal questions, and family dilemmas are protected with strict non-disclosure privacy."
  },
  {
    icon: "Compass",
    title: "Detailed Dasha & Transit Timelines",
    description: "Precise estimation of peak opportunity windows, cautionary phases, and actionable milestones for career, marriage, and wealth."
  },
  {
    icon: "ShieldCheck",
    title: "Practical, Non-Fear-Mongering Remedies",
    description: "Ethical, scripture-based remedial measures focusing on daily mantras, meditation, positive karma, and affordable authentic pujas."
  },
  {
    icon: "Globe",
    title: "Seamless Global & Local Connect",
    description: "Direct telephonic consultations, instant WhatsApp accessibility, and in-person consultations at our flagship Pune center."
  }
];

export const CONSULTATION_PROCESS_STEPS = [
  {
    stepNumber: "01",
    title: "Book Your Consultation",
    description: "Select your preferred consultation topic (Marriage, Career, Kundli, Vastu), choose an available slot, and confirm your preferred mode (Phone, In-Person, or PDF Report).",
    iconName: "CalendarClock"
  },
  {
    stepNumber: "02",
    title: "Share Your Birth Details",
    description: "Provide your accurate Date of Birth, Exact Time of Birth, and Place of Birth along with your top 3 specific life dilemmas or questions.",
    iconName: "FileSpreadsheet"
  },
  {
    stepNumber: "03",
    title: "Receive Personalized Guidance",
    description: "Engage in a 1-on-1 private session with Pt. Rohit Sharma, receive your custom Kundli breakdown, exact timelines, and tailored Vedic remedial path.",
    iconName: "Sparkle"
  }
];
