import { KundliResult, CompatibilityResult } from '../types';

const RASHIS = [
  { name: 'Mesha (Aries)', element: 'Fire', lord: 'Mars (Mangal)', gem: 'Red Coral', color: 'Crimson Red', day: 'Tuesday', num: 9 },
  { name: 'Vrishabha (Taurus)', element: 'Earth', lord: 'Venus (Shukra)', gem: 'Diamond / Opal', color: 'White / Pink', day: 'Friday', num: 6 },
  { name: 'Mithuna (Gemini)', element: 'Air', lord: 'Mercury (Budha)', gem: 'Emerald (Panna)', color: 'Green', day: 'Wednesday', num: 5 },
  { name: 'Karka (Cancer)', element: 'Water', lord: 'Moon (Chandra)', gem: 'Natural Pearl (Moti)', color: 'Silver / White', day: 'Monday', num: 2 },
  { name: 'Simha (Leo)', element: 'Fire', lord: 'Sun (Surya)', gem: 'Ruby (Manik)', color: 'Gold / Saffron', day: 'Sunday', num: 1 },
  { name: 'Kanya (Virgo)', element: 'Earth', lord: 'Mercury (Budha)', gem: 'Emerald (Panna)', color: 'Dark Green', day: 'Wednesday', num: 7 },
  { name: 'Tula (Libra)', element: 'Air', lord: 'Venus (Shukra)', gem: 'White Sapphire / Opal', color: 'Sky Blue / Rose', day: 'Friday', num: 6 },
  { name: 'Vrishchika (Scorpio)', element: 'Water', lord: 'Mars (Mangal)', gem: 'Red Coral (Moonga)', color: 'Maroon / Coral', day: 'Tuesday', num: 9 },
  { name: 'Dhanu (Sagittarius)', element: 'Fire', lord: 'Jupiter (Guru)', gem: 'Yellow Sapphire (Pukhraj)', color: 'Yellow / Gold', day: 'Thursday', num: 3 },
  { name: 'Makara (Capricorn)', element: 'Earth', lord: 'Saturn (Shani)', gem: 'Blue Sapphire (Neelam)', color: 'Blue / Black', day: 'Saturday', num: 8 },
  { name: 'Kumbha (Aquarius)', element: 'Air', lord: 'Saturn (Shani)', gem: 'Blue Sapphire / Amethyst', color: 'Cyan / Electric Blue', day: 'Saturday', num: 4 },
  { name: 'Meena (Pisces)', element: 'Water', lord: 'Jupiter (Guru)', gem: 'Yellow Sapphire (Pukhraj)', color: 'Golden Yellow / Sea Green', day: 'Thursday', num: 3 }
];

const NAKSHATRAS_LIST = [
  'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra',
  'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni',
  'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha',
  'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha',
  'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
];

const DASHAS = ['Ketu', 'Venus (Shukra)', 'Sun (Surya)', 'Moon (Chandra)', 'Mars (Mangal)', 'Rahu', 'Jupiter (Guru)', 'Saturn (Shani)', 'Mercury (Budha)'];

export function calculateKundli(name: string, dob: string, tob: string, pob: string): KundliResult {
  const dateObj = new Date(dob);
  const day = isNaN(dateObj.getDate()) ? 15 : dateObj.getDate();
  const month = isNaN(dateObj.getMonth()) ? 5 : dateObj.getMonth() + 1;
  const year = isNaN(dateObj.getFullYear()) ? 1995 : dateObj.getFullYear();

  let hour = 12;
  let minute = 0;
  if (tob) {
    const parts = tob.split(':');
    if (parts.length >= 2) {
      hour = parseInt(parts[0], 10) || 12;
      minute = parseInt(parts[1], 10) || 0;
    }
  }

  // Calculate Ascendant (Lagna) based on hour & month
  const ascIndex = (Math.floor(hour / 2) + month + Math.floor(minute / 30)) % 12;
  const ascendantInfo = RASHIS[ascIndex];

  // Calculate Moon Sign (Rashi) based on day + month + year
  const rashiIndex = (day * 3 + month * 7 + (year % 100)) % 12;
  const rashiInfo = RASHIS[rashiIndex];

  // Calculate Sun Sign (Surya Rashi)
  const sunSignIndex = (month + (day > 15 ? 0 : 11)) % 12;
  const sunSignInfo = RASHIS[sunSignIndex];

  // Calculate Nakshatra
  const nakshatraIndex = (day * 2 + month * 5 + hour) % 27;
  const nakshatraName = NAKSHATRAS_LIST[nakshatraIndex];
  const nakshatraPada = ((minute + day) % 4) + 1;

  // Dasha calculation
  const dashaIndex = (nakshatraIndex + Math.floor(year / 10)) % DASHAS.length;
  const currentDasha = DASHAS[dashaIndex];

  // Mangal Dosha check
  const mangalSeed = (day + hour + ascIndex) % 10;
  const mangalDosha: 'None' | 'Mild' | 'Present' = mangalSeed < 4 ? 'None' : mangalSeed < 7 ? 'Mild' : 'Present';

  // Kaal Sarp Dosha check
  const kaalSarpDosha = (day + month) % 5 === 0;

  // Planetary house positions (12 houses)
  const planets = [
    { name: 'Sun (Surya)', signOffset: sunSignIndex, house: ((sunSignIndex - ascIndex + 12) % 12) + 1, state: 'Benefic' },
    { name: 'Moon (Chandra)', signOffset: rashiIndex, house: ((rashiIndex - ascIndex + 12) % 12) + 1, state: 'Strong' },
    { name: 'Mars (Mangal)', signOffset: (ascIndex + 3) % 12, house: 4, state: mangalDosha !== 'None' ? 'Active' : 'Exalted' },
    { name: 'Mercury (Budha)', signOffset: (sunSignIndex + 1) % 12, house: ((sunSignIndex + 1 - ascIndex + 12) % 12) + 1, state: 'Favourable' },
    { name: 'Jupiter (Guru)', signOffset: (ascIndex + 8) % 12, house: 9, state: 'Auspicious' },
    { name: 'Venus (Shukra)', signOffset: (rashiIndex + 2) % 12, house: 7, state: 'Creative' },
    { name: 'Saturn (Shani)', signOffset: (ascIndex + 9) % 12, house: 10, state: 'Disciplined' },
    { name: 'Rahu (North Node)', signOffset: (ascIndex + 5) % 12, house: 6, state: 'Karmic' },
    { name: 'Ketu (South Node)', signOffset: (ascIndex + 11) % 12, house: 12, state: 'Moksha Karaka' }
  ];

  const planetaryPositions = planets.map(p => ({
    planet: p.name,
    sign: RASHIS[p.signOffset].name,
    house: p.house,
    state: p.state
  }));

  const personalityOverview = `Born under ${ascendantInfo.name} Ascendant and ${rashiInfo.name} Moon sign, you possess a dynamic synthesis of ${ascendantInfo.element} and ${rashiInfo.element} cosmic energies. Your ruling lord ${ascendantInfo.lord} grants natural determination, analytical depth, and an intrinsic desire to lead with integrity. In your birth star ${nakshatraName} (Pada ${nakshatraPada}), you carry the blessing of quick comprehension and magnetic speech.`;

  const careerGuidance = `With your 10th House (Karma) activated by ${planets[6].name} and supported by ${ascendantInfo.lord}, you will excel in advisory roles, leadership, technology, financial investments, management, or creative entrepreneurship. The ongoing ${currentDasha} Mahadasha favors bold professional upgrades, strategic networking, and geographic expansion.`;

  const relationshipOutlook = `Venus occupies an auspicious position relative to your Lagna, ensuring warm emotional depth and loyalty. ${mangalDosha === 'Present' ? 'A moderate Manglik influence is present, which is harmonized by mutual understanding, calm communication, and performing Tuesday Hanuman Chalisa.' : 'Your 7th house shows harmonious marital prospects with deep spiritual compatibility.'}`;

  return {
    name: name || 'Seeker',
    dob,
    tob: tob || '12:00 PM',
    pob: pob || 'Gujarat, India',
    ascendant: ascendantInfo.name,
    rashi: rashiInfo.name,
    nakshatra: nakshatraName,
    nakshatraPada,
    sunSign: sunSignInfo.name,
    currentDasha,
    luckyGemstone: ascendantInfo.gem,
    luckyNumber: ascendantInfo.num,
    luckyColor: ascendantInfo.color,
    luckyDay: ascendantInfo.day,
    mangalDosha,
    kaalSarpDosha,
    personalityOverview,
    careerGuidance,
    relationshipOutlook,
    planetaryPositions
  };
}

export function calculateCompatibility(boyName: string, boyDob: string, girlName: string, girlDob: string): CompatibilityResult {
  const bDate = new Date(boyDob);
  const gDate = new Date(girlDob);

  const bDay = isNaN(bDate.getDate()) ? 12 : bDate.getDate();
  const gDay = isNaN(gDate.getDate()) ? 18 : gDate.getDate();
  const bMonth = isNaN(bDate.getMonth()) ? 3 : bDate.getMonth() + 1;
  const gMonth = isNaN(gDate.getMonth()) ? 8 : gDate.getMonth() + 1;

  const hash = (bDay * 7 + gDay * 11 + bMonth * 13 + gMonth * 17) % 100;

  // Calculate 8 Kootas (Total 36 Gunas)
  const varnaScore = hash % 2 === 0 ? 1 : 1; // 1
  const vashyaScore = hash % 3 === 0 ? 1 : 2; // 2
  const taraScore = (hash % 4) === 0 ? 1.5 : (hash % 2 === 0 ? 3 : 2); // 3
  const yoniScore = (hash % 5) === 0 ? 2 : 4; // 4
  const maitriScore = (hash % 3 === 0) ? 3 : 5; // 5
  const ganaScore = (hash % 4 === 0) ? 4 : 6; // 6
  const bhakootScore = (hash % 6 === 0) ? 0 : 7; // 7
  const nadiScore = (hash % 7 === 0) ? 0 : 8; // 8

  const totalScore = Math.round((varnaScore + vashyaScore + taraScore + yoniScore + maitriScore + ganaScore + bhakootScore + nadiScore) * 10) / 10;
  const mangalMatch = hash % 3 !== 0;

  let verdict = 'Excellent & Highly Auspicious Match';
  if (totalScore < 18) {
    verdict = 'Requires Specific Vedic Remedial Pujas (Under 18 Gunas)';
  } else if (totalScore < 24) {
    verdict = 'Good Match with Favourable Prospects (18–24 Gunas)';
  } else if (totalScore < 30) {
    verdict = 'Very Auspicious & Harmonious Union (25–30 Gunas)';
  } else {
    verdict = 'Uttam (Supreme) Cosmic Match (31–36 Gunas)';
  }

  const detailedAnalysis = `The Ashtakoot Kundli Milan between ${boyName || 'Boy'} and ${girlName || 'Girl'} scores ${totalScore} out of 36 Gunas. Varna and Vashya denote shared cultural resonance; Graha Maitri (${maitriScore}/5) confirms deep intellectual harmony and emotional mutual respect. ${nadiScore === 8 ? 'Nadi Milan is fully balanced (8/8), indicating excellent genetic compatibility and healthy lineage.' : 'Nadi points show mild tension, which is neutralized through Vishnu Sahasranama and gold charity.'}`;

  const recommendedRemedies = [
    'Perform joint Gauri-Shankar Puja before solemnizing the engagement.',
    'Chant the sacred Shukra Beej Mantra (Om Shum Shukraya Namaha) on Friday mornings.',
    'Keep a pair of energized Rose Quartz crystals or Lakshmi-Narayan Yantra in the North-East bedroom.'
  ];

  return {
    boyName: boyName || 'Partner 1',
    girlName: girlName || 'Partner 2',
    totalScore,
    varnaScore,
    vashyaScore,
    taraScore,
    yoniScore,
    maitriScore,
    ganaScore,
    bhakootScore,
    nadiScore,
    mangalMatch,
    verdict,
    detailedAnalysis,
    recommendedRemedies
  };
}

export function calculateNumerology(name: string, dob: string) {
  const dateObj = new Date(dob);
  const day = isNaN(dateObj.getDate()) ? 1 : dateObj.getDate();
  const month = isNaN(dateObj.getMonth()) ? 1 : dateObj.getMonth() + 1;
  const year = isNaN(dateObj.getFullYear()) ? 1990 : dateObj.getFullYear();

  // Reduce single number
  const sumDigits = (n: number): number => {
    let s = 0;
    while (n > 0 || s > 9) {
      if (n === 0) {
        n = s;
        s = 0;
      }
      s += n % 10;
      n = Math.floor(n / 10);
    }
    return s;
  };

  const mulank = sumDigits(day);
  const totalDobSum = day + month + year;
  const bhagyank = sumDigits(totalDobSum);

  const numDetails: Record<number, { planet: string; traits: string; career: string; remedy: string; friendly: string }> = {
    1: { planet: 'Sun (Surya)', traits: 'Leader, ambitious, authoritative, trailblazer, self-reliant', career: 'Executive, entrepreneur, politics, civil services, administration', remedy: 'Offer Surya Arghya in copper lota with kumkum daily', friendly: '1, 2, 4, 7' },
    2: { planet: 'Moon (Chandra)', traits: 'Intuitive, empathetic, creative, peace-maker, diplomatic', career: 'Arts, psychology, hospitality, medicine, design, counseling', remedy: 'Respect mother and offer water to Shiva on Mondays', friendly: '1, 2, 4, 7' },
    3: { planet: 'Jupiter (Guru)', traits: 'Wise, expansive, optimistic, teacher, philosopher, jovial', career: 'Teaching, finance, law, advisory, author, spirituality', remedy: 'Apply saffron/turmeric tilak on forehead on Thursdays', friendly: '3, 6, 9' },
    4: { planet: 'Rahu', traits: 'Visionary, rebellious, tactical, tech-savvy, non-conformist', career: 'Technology, research, aviation, stock trading, logistics', remedy: 'Feed street dogs and keep silver coin in wallet', friendly: '1, 4, 6, 8' },
    5: { planet: 'Mercury (Budha)', traits: 'Quick-witted, versatile, communicator, merchant, adaptable', career: 'Sales, media, IT, marketing, commerce, diplomacy', remedy: 'Feed green grass/spinach to cows on Wednesdays', friendly: '1, 5, 6' },
    6: { planet: 'Venus (Shukra)', traits: 'Charming, luxury lover, artistic, magnetic, gracious', career: 'Fashion, luxury goods, entertainment, architecture, beauty', remedy: 'Wear clean white clothes and donate white sweets on Fridays', friendly: '5, 6, 8, 3' },
    7: { planet: 'Ketu', traits: 'Mystical, spiritual seeker, analytical, solitary thinker, intuitive', career: 'Astrology, research, cybersecurity, philosophy, natural sciences', remedy: 'Meditate in silence and chant Om Namah Shivaya', friendly: '1, 2, 4, 7' },
    8: { planet: 'Saturn (Shani)', traits: 'Resilient, disciplined, builder, karmic justice, hard worker', career: 'Real estate, manufacturing, mining, law, governance', remedy: 'Light mustard oil lamp under Peepal tree on Saturday evenings', friendly: '4, 5, 6, 8' },
    9: { planet: 'Mars (Mangal)', traits: 'Passionate, courageous, protective, dynamic, energetic', career: 'Defense, sports, surgery, construction, leadership', remedy: 'Recite Hanuman Chalisa every Tuesday morning', friendly: '1, 3, 9' }
  };

  return {
    name: name || 'Seeker',
    mulank,
    bhagyank,
    mulankDetails: numDetails[mulank] || numDetails[1],
    bhagyankDetails: numDetails[bhagyank] || numDetails[1]
  };
}
