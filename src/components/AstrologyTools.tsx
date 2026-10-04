import React, { useState } from 'react';
import { 
  Sparkles, 
  Compass, 
  Calendar, 
  Heart, 
  Hash, 
  Moon, 
  Sun, 
  RotateCw, 
  ShieldCheck, 
  Download, 
  Share2, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight,
  Flame,
  Star,
  MessageCircle,
  Phone
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ZODIAC_SIGNS_DATA, NAKSHATRAS_DATA, ASTROLOGER_PROFILE } from '../data/astrologyData';
import { calculateKundli, calculateCompatibility, calculateNumerology } from '../utils/astrologyCalculations';
import { KundliResult, CompatibilityResult } from '../types';

interface AstrologyToolsProps {
  onOpenWhatsApp: (topic?: string) => void;
}

export const AstrologyTools: React.FC<AstrologyToolsProps> = ({ onOpenWhatsApp }) => {
  const [activeTab, setActiveTab] = useState<'kundli' | 'horoscope' | 'compatibility' | 'numerology' | 'nakshatra'>('kundli');

  // Kundli Form State
  const [kundliName, setKundliName] = useState('Rahul Patil');
  const [kundliDob, setKundliDob] = useState('1996-08-15');
  const [kundliTob, setKundliTob] = useState('14:30');
  const [kundliPob, setKundliPob] = useState('Pune, Maharashtra');
  const [kundliResult, setKundliResult] = useState<KundliResult | null>(() => 
    calculateKundli('Rahul Patil', '1996-08-15', '14:30', 'Pune, Maharashtra')
  );
  const [isCalculatingKundli, setIsCalculatingKundli] = useState(false);

  // Horoscope State
  const [selectedZodiacId, setSelectedZodiacId] = useState('aries');
  const selectedZodiac = ZODIAC_SIGNS_DATA.find(z => z.id === selectedZodiacId) || ZODIAC_SIGNS_DATA[0];

  // Compatibility Form State
  const [boyName, setBoyName] = useState('Aarav Patel');
  const [boyDob, setBoyDob] = useState('1994-11-20');
  const [girlName, setGirlName] = useState('Priya Joshi');
  const [girlDob, setGirlDob] = useState('1996-05-14');
  const [compatResult, setCompatResult] = useState<CompatibilityResult | null>(() => 
    calculateCompatibility('Aarav Patel', '1994-11-20', 'Priya Joshi', '1996-05-14')
  );
  const [isCalculatingCompat, setIsCalculatingCompat] = useState(false);

  // Numerology Form State
  const [numName, setNumName] = useState('Sneha Shah');
  const [numDob, setNumDob] = useState('1998-03-24');
  const [numResult, setNumResult] = useState(() => calculateNumerology('Sneha Shah', '1998-03-24'));

  // Nakshatra Search State
  const [nakshatraSearch, setNakshatraSearch] = useState('');
  const [selectedNakshatra, setSelectedNakshatra] = useState(NAKSHATRAS_DATA[0]);

  // Handle Kundli Submission
  const handleGenerateKundli = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculatingKundli(true);
    setTimeout(() => {
      const res = calculateKundli(kundliName, kundliDob, kundliTob, kundliPob);
      setKundliResult(res);
      setIsCalculatingKundli(false);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // silent fallback
      }
    }, 600);
  };

  // Handle Compatibility Submission
  const handleGenerateCompatibility = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculatingCompat(true);
    setTimeout(() => {
      const res = calculateCompatibility(boyName, boyDob, girlName, girlDob);
      setCompatResult(res);
      setIsCalculatingCompat(false);
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // silent
      }
    }, 600);
  };

  // Handle Numerology Submission
  const handleGenerateNumerology = (e: React.FormEvent) => {
    e.preventDefault();
    const res = calculateNumerology(numName, numDob);
    setNumResult(res);
  };

  return (
    <section id="tools" className="py-20 bg-[#0B0914] relative border-t border-[#D4AF37]/15">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#673AB7]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Vedic Portal</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F3EFE6] tracking-tight">
            Free Vedic <span className="text-gold-gradient">Astrology Tools</span>
          </h2>
          <p className="text-[#CBBCA0] text-base sm:text-lg">
            Instant, mathematically authentic planetary calculations based on ancient Siddhanta & Parashari principles.
          </p>
        </div>

        {/* Main Tool Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {[
            { id: 'kundli', label: 'Free Kundli Generator', icon: Compass },
            { id: 'horoscope', label: 'Daily Horoscope', icon: Sun },
            { id: 'compatibility', label: 'Marriage Compatibility (36 Gunas)', icon: Heart },
            { id: 'numerology', label: 'Numerology (Mulank/Bhagyank)', icon: Hash },
            { id: 'nakshatra', label: '27 Nakshatras Guide', icon: Moon },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                id={`astro-tool-tab-${tab.id}`}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center space-x-2 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#B38E1B] text-[#0B0914] shadow-lg shadow-[#D4AF37]/25 font-sans-ui'
                    : 'bg-[#18112E] text-[#D8CCA8] hover:bg-[#251B47] hover:text-[#F3EFE6] border border-[#D4AF37]/20'
                }`}
              >
                <Icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-[#0B0914]' : 'text-[#D4AF37]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TOOL 1: FREE KUNDLI GENERATOR */}
        {activeTab === 'kundli' && (
          <div className="bg-[#120D26] border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Form Input Column */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-xs text-[#D4AF37] font-semibold uppercase tracking-wider mb-2">
                    <Compass className="w-4 h-4" />
                    <span>Janam Kundli Calculation</span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F3EFE6] mb-2">
                    Generate Your Birth Chart
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C4B79E] mb-6">
                    Enter your birth details to calculate your Ascendant (Lagna), Rashi, Nakshatra, ongoing Vimshottari Mahadasha, and lucky cosmic elements.
                  </p>

                  <form onSubmit={handleGenerateKundli} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#E5D7B7] mb-1">Full Name</label>
                      <input
                        type="text"
                        value={kundliName}
                        onChange={(e) => setKundliName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#1B1435] border border-[#D4AF37]/30 text-sm text-[#F3EFE6] focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#E5D7B7] mb-1">Date of Birth</label>
                        <input
                          type="date"
                          value={kundliDob}
                          onChange={(e) => setKundliDob(e.target.value)}
                          required
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#1B1435] border border-[#D4AF37]/30 text-sm text-[#F3EFE6] focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#E5D7B7] mb-1">Exact Time of Birth</label>
                        <input
                          type="time"
                          value={kundliTob}
                          onChange={(e) => setKundliTob(e.target.value)}
                          required
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#1B1435] border border-[#D4AF37]/30 text-sm text-[#F3EFE6] focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#E5D7B7] mb-1">Place of Birth (City / State)</label>
                      <input
                        type="text"
                        value={kundliPob}
                        onChange={(e) => setKundliPob(e.target.value)}
                        placeholder="e.g. Pune, Maharashtra"
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#1B1435] border border-[#D4AF37]/30 text-sm text-[#F3EFE6] focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isCalculatingKundli}
                      id="generate-kundli-btn"
                      className="w-full py-3.5 rounded-xl text-sm font-bold text-[#0B0914] bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#B38E1B] hover:from-[#FFF1B8] hover:to-[#C69C20] shadow-lg flex items-center justify-center space-x-2 transition-all cursor-pointer font-sans-ui mt-2"
                    >
                      {isCalculatingKundli ? (
                        <>
                          <RotateCw className="w-4 h-4 animate-spin text-[#0B0914]" />
                          <span>Calculating Celestial Coordinates...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-[#0B0914]" />
                          <span>Calculate Free Janam Kundli</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>

                {/* Accuracy Note */}
                <div className="mt-6 pt-4 border-t border-[#D4AF37]/15 flex items-center space-x-2 text-[11px] text-[#A89C86]">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Calculated using Vedic Lahiri Ayanamsa & Parashari algorithms.</span>
                </div>
              </div>

              {/* Result Display Column */}
              <div className="lg:col-span-7 bg-[#171030] rounded-2xl p-6 border border-[#D4AF37]/25 flex flex-col justify-between">
                {kundliResult && (
                  <div className="space-y-6">
                    {/* Top Result Banner */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#D4AF37]/20">
                      <div>
                        <div className="text-xs text-[#D4AF37] font-semibold">KUNDLI REPORT FOR:</div>
                        <h4 className="font-heading text-lg font-bold text-[#F3EFE6]">{kundliResult.name}</h4>
                        <p className="text-xs text-[#A89C86]">DOB: {kundliResult.dob} | Time: {kundliResult.tob} | Place: {kundliResult.pob}</p>
                      </div>
                      <div className="px-3 py-1 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#FFDF78] text-xs font-bold flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Dasha: {kundliResult.currentDasha}</span>
                      </div>
                    </div>

                    {/* Key Cosmic Identifiers Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="bg-[#1F173C] p-3 rounded-xl border border-[#D4AF37]/15">
                        <div className="text-[10px] text-[#D4AF37] uppercase font-semibold">Lagna (Ascendant)</div>
                        <div className="text-sm font-bold text-[#F3EFE6] truncate">{kundliResult.ascendant}</div>
                      </div>
                      <div className="bg-[#1F173C] p-3 rounded-xl border border-[#D4AF37]/15">
                        <div className="text-[10px] text-[#D4AF37] uppercase font-semibold">Rashi (Moon Sign)</div>
                        <div className="text-sm font-bold text-[#F3EFE6] truncate">{kundliResult.rashi}</div>
                      </div>
                      <div className="bg-[#1F173C] p-3 rounded-xl border border-[#D4AF37]/15">
                        <div className="text-[10px] text-[#D4AF37] uppercase font-semibold">Nakshatra</div>
                        <div className="text-sm font-bold text-[#F3EFE6] truncate">{kundliResult.nakshatra} (P{kundliResult.nakshatraPada})</div>
                      </div>
                      <div className="bg-[#1F173C] p-3 rounded-xl border border-[#D4AF37]/15">
                        <div className="text-[10px] text-[#D4AF37] uppercase font-semibold">Lucky Gemstone</div>
                        <div className="text-sm font-bold text-[#D4AF37] truncate">{kundliResult.luckyGemstone}</div>
                      </div>
                    </div>

                    {/* Dosha Status Bar */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className={`p-3 rounded-xl border flex items-center space-x-2.5 ${
                        kundliResult.mangalDosha === 'None' 
                          ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300' 
                          : 'bg-amber-950/40 border-amber-500/30 text-amber-300'
                      }`}>
                        {kundliResult.mangalDosha === 'None' ? <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> : <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />}
                        <div>
                          <div className="text-xs font-bold">Mangal Dosha: {kundliResult.mangalDosha}</div>
                          <div className="text-[10px] opacity-80">{kundliResult.mangalDosha === 'None' ? 'No adverse marital afflictions detected.' : 'Mild Martian energy harmonized with standard remedies.'}</div>
                        </div>
                      </div>

                      <div className={`p-3 rounded-xl border flex items-center space-x-2.5 ${
                        !kundliResult.kaalSarpDosha 
                          ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300' 
                          : 'bg-amber-950/40 border-amber-500/30 text-amber-300'
                      }`}>
                        {!kundliResult.kaalSarpDosha ? <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> : <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />}
                        <div>
                          <div className="text-xs font-bold">Kaal Sarp Dosha: {kundliResult.kaalSarpDosha ? 'Active' : 'Not Present'}</div>
                          <div className="text-[10px] opacity-80">{!kundliResult.kaalSarpDosha ? 'Planets are free from nodal axis entrapment.' : 'Rahu-Ketu balance remedies recommended.'}</div>
                        </div>
                      </div>
                    </div>

                    {/* Vedic Insights Breakdown */}
                    <div className="space-y-3 bg-[#130E26] p-4 rounded-xl border border-[#D4AF37]/15 text-xs text-[#D8CCA8] leading-relaxed">
                      <div>
                        <strong className="text-[#F3EFE6] block mb-1 text-sm font-heading">✨ Personality & Spiritual Blueprint:</strong>
                        <p>{kundliResult.personalityOverview}</p>
                      </div>
                      <div>
                        <strong className="text-[#F3EFE6] block mb-1 text-sm font-heading">💼 Professional & Career Direction:</strong>
                        <p>{kundliResult.careerGuidance}</p>
                      </div>
                    </div>

                    {/* Detailed Consultation CTA */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="text-xs text-[#A89C86]">
                        Want full 12-House planetary analysis & exact yearly dates?
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onOpenWhatsApp('Kundli Reading & Planetary Analysis')}
                          className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md flex items-center space-x-1.5 shrink-0 cursor-pointer"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-white" />
                          <span>WhatsApp</span>
                        </button>
                        <a
                          href={`tel:${ASTROLOGER_PROFILE.phone}`}
                          className="px-4 py-2 rounded-xl text-xs font-bold text-[#0B0914] bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#B38E1B] hover:from-[#FFF1B8] shadow-md flex items-center space-x-1.5 shrink-0 cursor-pointer font-sans-ui"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#0B0914]" />
                          <span>Call</span>
                        </a>
                      </div>
                    </div>

                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {/* TOOL 2: DAILY & WEEKLY HOROSCOPE */}
        {activeTab === 'horoscope' && (
          <div className="bg-[#120D26] border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl animate-in fade-in duration-300">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F3EFE6] mb-2">
                Select Your Rashi / Zodiac Sign
              </h3>
              <p className="text-xs sm:text-sm text-[#C4B79E]">
                Today's celestial transits decoded for all 12 Rashis by Pt. Rohit Sharma Ji.
              </p>
            </div>

            {/* 12 Zodiac Sign Grid Selector */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-8">
              {ZODIAC_SIGNS_DATA.map((zodiac) => (
                <button
                  key={zodiac.id}
                  onClick={() => setSelectedZodiacId(zodiac.id)}
                  id={`zodiac-btn-${zodiac.id}`}
                  className={`p-3 rounded-2xl flex flex-col items-center justify-center transition-all duration-200 cursor-pointer ${
                    selectedZodiacId === zodiac.id
                      ? 'bg-gradient-to-b from-[#2E2055] to-[#1F153C] border-2 border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20 scale-105'
                      : 'bg-[#18112E] hover:bg-[#221842] border border-[#D4AF37]/20'
                  }`}
                >
                  <span className="text-2xl sm:text-3xl mb-1">{zodiac.symbol}</span>
                  <span className="text-xs font-bold text-[#F3EFE6] text-center">{zodiac.name}</span>
                  <span className="text-[10px] text-[#D4AF37] text-center truncate w-full">{zodiac.sanskritName.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            {/* Selected Zodiac Deep Dive Card */}
            <div className="bg-[#171030] rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/30">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#D4AF37]/20">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-4xl">
                    {selectedZodiac.symbol}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-heading text-2xl font-bold text-[#F3EFE6]">{selectedZodiac.name}</h4>
                      <span className="text-sm font-semibold text-[#D4AF37]">({selectedZodiac.sanskritName})</span>
                    </div>
                    <p className="text-xs text-[#A89C86]">{selectedZodiac.dates} | Element: {selectedZodiac.element} | Lord: {selectedZodiac.rulingPlanet}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-[#1F173C] px-4 py-2 rounded-xl border border-[#D4AF37]/20">
                  <div className="text-right">
                    <div className="text-[10px] text-[#D4AF37] uppercase font-semibold">Today's Cosmic Rating</div>
                    <div className="flex items-center space-x-1 text-[#D4AF37]">
                      {[...Array(selectedZodiac.dailyHoroscope.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Overview & Core Quadrants */}
              <div className="py-6 space-y-6">
                <div>
                  <h5 className="text-sm font-heading font-bold text-[#D4AF37] uppercase tracking-wider mb-2">Today's Planetary Overview</h5>
                  <p className="text-sm text-[#F3EFE6] leading-relaxed bg-[#120D24] p-4 rounded-xl border border-[#D4AF37]/15">
                    {selectedZodiac.dailyHoroscope.overview}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-[#1F173C] p-4 rounded-xl border border-[#D4AF37]/15">
                    <div className="text-xs font-bold text-rose-300 mb-1 flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5" />
                      <span>Love & Relationships</span>
                    </div>
                    <p className="text-xs text-[#CBBCA0] leading-relaxed">{selectedZodiac.dailyHoroscope.love}</p>
                  </div>

                  <div className="bg-[#1F173C] p-4 rounded-xl border border-[#D4AF37]/15">
                    <div className="text-xs font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Career & Work</span>
                    </div>
                    <p className="text-xs text-[#CBBCA0] leading-relaxed">{selectedZodiac.dailyHoroscope.career}</p>
                  </div>

                  <div className="bg-[#1F173C] p-4 rounded-xl border border-[#D4AF37]/15">
                    <div className="text-xs font-bold text-emerald-300 mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Wealth & Finance</span>
                    </div>
                    <p className="text-xs text-[#CBBCA0] leading-relaxed">{selectedZodiac.dailyHoroscope.finance}</p>
                  </div>

                  <div className="bg-[#1F173C] p-4 rounded-xl border border-[#D4AF37]/15">
                    <div className="text-xs font-bold text-cyan-300 mb-1 flex items-center gap-1.5">
                      <Moon className="w-3.5 h-3.5" />
                      <span>Health & Vitality</span>
                    </div>
                    <p className="text-xs text-[#CBBCA0] leading-relaxed">{selectedZodiac.dailyHoroscope.health}</p>
                  </div>
                </div>

                {/* Lucky Elements */}
                <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#E5D7B7]">
                  <span className="px-3 py-1.5 rounded-lg bg-[#120D24] border border-[#D4AF37]/20">
                    <strong className="text-[#D4AF37]">Lucky Color:</strong> {selectedZodiac.luckyColor}
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#120D24] border border-[#D4AF37]/20">
                    <strong className="text-[#D4AF37]">Lucky Number:</strong> {selectedZodiac.luckyNumber}
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#120D24] border border-[#D4AF37]/20">
                    <strong className="text-[#D4AF37]">Ruling Planet:</strong> {selectedZodiac.rulingPlanet}
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TOOL 3: MARRIAGE COMPATIBILITY (36 GUNAS / KUNDLI MILAN) */}
        {activeTab === 'compatibility' && (
          <div className="bg-[#120D26] border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Form Input Column */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-xs text-[#D4AF37] font-semibold uppercase tracking-wider mb-2">
                    <Heart className="w-4 h-4 text-rose-400" />
                    <span>Ashtakoot Guna Milan</span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F3EFE6] mb-2">
                    36-Guna Marriage Matcher
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C4B79E] mb-6">
                    Evaluate marital harmony, Nadi Dosha, Bhakoot, and psychological alignment between both partners.
                  </p>

                  <form onSubmit={handleGenerateCompatibility} className="space-y-4">
                    {/* Partner 1 (Boy) */}
                    <div className="p-4 rounded-xl bg-[#1B1435] border border-[#D4AF37]/20 space-y-3">
                      <div className="text-xs font-bold text-[#D4AF37] uppercase flex items-center gap-1.5">
                        <span>Partner 1 Details</span>
                      </div>
                      <div>
                        <input
                          type="text"
                          value={boyName}
                          onChange={(e) => setBoyName(e.target.value)}
                          placeholder="Boy's Name"
                          required
                          className="w-full px-3 py-2 rounded-lg bg-[#120D24] border border-[#D4AF37]/30 text-xs text-[#F3EFE6] focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                      <div>
                        <input
                          type="date"
                          value={boyDob}
                          onChange={(e) => setBoyDob(e.target.value)}
                          required
                          className="w-full px-3 py-2 rounded-lg bg-[#120D24] border border-[#D4AF37]/30 text-xs text-[#F3EFE6] focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                    </div>

                    {/* Partner 2 (Girl) */}
                    <div className="p-4 rounded-xl bg-[#1B1435] border border-[#D4AF37]/20 space-y-3">
                      <div className="text-xs font-bold text-[#D4AF37] uppercase flex items-center gap-1.5">
                        <span>Partner 2 Details</span>
                      </div>
                      <div>
                        <input
                          type="text"
                          value={girlName}
                          onChange={(e) => setGirlName(e.target.value)}
                          placeholder="Girl's Name"
                          required
                          className="w-full px-3 py-2 rounded-lg bg-[#120D24] border border-[#D4AF37]/30 text-xs text-[#F3EFE6] focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                      <div>
                        <input
                          type="date"
                          value={girlDob}
                          onChange={(e) => setGirlDob(e.target.value)}
                          required
                          className="w-full px-3 py-2 rounded-lg bg-[#120D24] border border-[#D4AF37]/30 text-xs text-[#F3EFE6] focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isCalculatingCompat}
                      id="generate-compatibility-btn"
                      className="w-full py-3.5 rounded-xl text-sm font-bold text-[#0B0914] bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#B38E1B] hover:from-[#FFF1B8] hover:to-[#C69C20] shadow-lg flex items-center justify-center space-x-2 transition-all cursor-pointer font-sans-ui"
                    >
                      {isCalculatingCompat ? (
                        <>
                          <RotateCw className="w-4 h-4 animate-spin text-[#0B0914]" />
                          <span>Matching Ashtakoot Coordinates...</span>
                        </>
                      ) : (
                        <>
                          <Heart className="w-4 h-4 text-[#0B0914]" />
                          <span>Calculate 36 Gunas Compatibility</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>

                <div className="mt-4 pt-4 border-t border-[#D4AF37]/15 text-[11px] text-[#A89C86]">
                  <span>Vedic Ashtakoot matching analyzes Varna, Vashya, Tara, Yoni, Maitri, Gana, Bhakoot & Nadi.</span>
                </div>
              </div>

              {/* Result Display Column */}
              <div className="lg:col-span-7 bg-[#171030] rounded-2xl p-6 border border-[#D4AF37]/25 flex flex-col justify-between">
                {compatResult && (
                  <div className="space-y-6">
                    {/* Score Header Banner */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#D4AF37]/20">
                      <div>
                        <div className="text-xs text-[#D4AF37] font-semibold">MATCH SCORE</div>
                        <h4 className="font-heading text-xl font-bold text-[#F3EFE6]">
                          {compatResult.boyName} & {compatResult.girlName}
                        </h4>
                        <div className="text-xs font-semibold text-emerald-400 mt-0.5">{compatResult.verdict}</div>
                      </div>

                      <div className="p-4 rounded-2xl bg-gradient-to-br from-[#2F2052] to-[#1C1435] border-2 border-[#D4AF37] text-center shadow-xl">
                        <div className="text-3xl font-heading font-extrabold text-gold-gradient">
                          {compatResult.totalScore} <span className="text-lg text-[#A89C86]">/ 36</span>
                        </div>
                        <div className="text-[10px] text-[#D4AF37] uppercase font-bold tracking-wider">Total Gunas</div>
                      </div>
                    </div>

                    {/* 8 Kootas Detailed Table */}
                    <div>
                      <div className="text-xs font-bold text-[#D4AF37] uppercase mb-2">Ashtakoot Breakdown:</div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        <div className="bg-[#1F173C] p-2.5 rounded-lg border border-[#D4AF37]/10 flex justify-between">
                          <span className="text-[#A89C86]">Varna (Work):</span>
                          <span className="font-bold text-[#F3EFE6]">{compatResult.varnaScore}/1</span>
                        </div>
                        <div className="bg-[#1F173C] p-2.5 rounded-lg border border-[#D4AF37]/10 flex justify-between">
                          <span className="text-[#A89C86]">Vashya (Dominance):</span>
                          <span className="font-bold text-[#F3EFE6]">{compatResult.vashyaScore}/2</span>
                        </div>
                        <div className="bg-[#1F173C] p-2.5 rounded-lg border border-[#D4AF37]/10 flex justify-between">
                          <span className="text-[#A89C86]">Tara (Destiny):</span>
                          <span className="font-bold text-[#F3EFE6]">{compatResult.taraScore}/3</span>
                        </div>
                        <div className="bg-[#1F173C] p-2.5 rounded-lg border border-[#D4AF37]/10 flex justify-between">
                          <span className="text-[#A89C86]">Yoni (Intimacy):</span>
                          <span className="font-bold text-[#F3EFE6]">{compatResult.yoniScore}/4</span>
                        </div>
                        <div className="bg-[#1F173C] p-2.5 rounded-lg border border-[#D4AF37]/10 flex justify-between">
                          <span className="text-[#A89C86]">Maitri (Friendship):</span>
                          <span className="font-bold text-[#F3EFE6]">{compatResult.maitriScore}/5</span>
                        </div>
                        <div className="bg-[#1F173C] p-2.5 rounded-lg border border-[#D4AF37]/10 flex justify-between">
                          <span className="text-[#A89C86]">Gana (Temperament):</span>
                          <span className="font-bold text-[#F3EFE6]">{compatResult.ganaScore}/6</span>
                        </div>
                        <div className="bg-[#1F173C] p-2.5 rounded-lg border border-[#D4AF37]/10 flex justify-between">
                          <span className="text-[#A89C86]">Bhakoot (Health):</span>
                          <span className="font-bold text-[#F3EFE6]">{compatResult.bhakootScore}/7</span>
                        </div>
                        <div className="bg-[#1F173C] p-2.5 rounded-lg border border-[#D4AF37]/10 flex justify-between">
                          <span className="text-[#A89C86]">Nadi (Genetics):</span>
                          <span className="font-bold text-[#F3EFE6]">{compatResult.nadiScore}/8</span>
                        </div>
                      </div>
                    </div>

                    {/* Detailed Analysis & Remedies */}
                    <div className="bg-[#120D24] p-4 rounded-xl border border-[#D4AF37]/15 space-y-2 text-xs text-[#D8CCA8]">
                      <p>{compatResult.detailedAnalysis}</p>
                      <div className="pt-2">
                        <strong className="text-[#D4AF37] block mb-1">Recommended Harmonizing Measures:</strong>
                        <ul className="list-disc pl-4 space-y-1">
                          {compatResult.recommendedRemedies.map((rem, rIdx) => (
                            <li key={rIdx}>{rem}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="text-xs text-[#A89C86]">
                        Need Navamsha (D-9) deep matchmaking & Manglik verification?
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onOpenWhatsApp('Kundli Milan & Marriage Compatibility Match')}
                          className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md flex items-center space-x-1.5 shrink-0 cursor-pointer"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-white" />
                          <span>WhatsApp</span>
                        </button>
                        <a
                          href={`tel:${ASTROLOGER_PROFILE.phone}`}
                          className="px-4 py-2 rounded-xl text-xs font-bold text-[#0B0914] bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#B38E1B] hover:from-[#FFF1B8] shadow-md flex items-center space-x-1.5 shrink-0 cursor-pointer font-sans-ui"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#0B0914]" />
                          <span>Call</span>
                        </a>
                      </div>
                    </div>

                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {/* TOOL 4: NUMEROLOGY CALCULATOR */}
        {activeTab === 'numerology' && (
          <div className="bg-[#120D26] border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Form Input */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-xs text-[#D4AF37] font-semibold uppercase tracking-wider mb-2">
                    <Hash className="w-4 h-4" />
                    <span>Vedic Sankhya Shastra</span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F3EFE6] mb-2">
                    Mulank & Bhagyank Calculator
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C4B79E] mb-6">
                    Discover your Root Birth Number (Mulank) and Life Path Destiny Number (Bhagyank) based on ancient Indian numerological frequencies.
                  </p>

                  <form onSubmit={handleGenerateNumerology} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#E5D7B7] mb-1">Your Name</label>
                      <input
                        type="text"
                        value={numName}
                        onChange={(e) => setNumName(e.target.value)}
                        placeholder="e.g. Sneha Shah"
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#1B1435] border border-[#D4AF37]/30 text-sm text-[#F3EFE6] focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#E5D7B7] mb-1">Date of Birth</label>
                      <input
                        type="date"
                        value={numDob}
                        onChange={(e) => setNumDob(e.target.value)}
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#1B1435] border border-[#D4AF37]/30 text-sm text-[#F3EFE6] focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <button
                      type="submit"
                      id="generate-numerology-btn"
                      className="w-full py-3.5 rounded-xl text-sm font-bold text-[#0B0914] bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#B38E1B] hover:from-[#FFF1B8] hover:to-[#C69C20] shadow-lg flex items-center justify-center space-x-2 transition-all cursor-pointer font-sans-ui mt-2"
                    >
                      <Sparkles className="w-4 h-4 text-[#0B0914]" />
                      <span>Calculate Numbers</span>
                    </button>
                  </form>
                </div>
              </div>

              {/* Numerology Result Display */}
              <div className="lg:col-span-7 bg-[#171030] rounded-2xl p-6 border border-[#D4AF37]/25 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Mulank Card */}
                  <div className="p-5 rounded-2xl bg-[#1F173C] border-2 border-[#D4AF37]/30 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase text-[#D4AF37]">Mulank (Root Number)</span>
                      <span className="text-2xl font-bold font-heading text-[#FFDF78]">#{numResult.mulank}</span>
                    </div>
                    <div className="space-y-2 text-xs text-[#D8CCA8]">
                      <div><strong>Ruling Planet:</strong> {numResult.mulankDetails.planet}</div>
                      <div><strong>Core Traits:</strong> {numResult.mulankDetails.traits}</div>
                      <div><strong>Friendly Numbers:</strong> {numResult.mulankDetails.friendly}</div>
                    </div>
                  </div>

                  {/* Bhagyank Card */}
                  <div className="p-5 rounded-2xl bg-[#1F173C] border-2 border-[#D4AF37]/30 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase text-[#D4AF37]">Bhagyank (Destiny Number)</span>
                      <span className="text-2xl font-bold font-heading text-gold-gradient">#{numResult.bhagyank}</span>
                    </div>
                    <div className="space-y-2 text-xs text-[#D8CCA8]">
                      <div><strong>Destiny Lord:</strong> {numResult.bhagyankDetails.planet}</div>
                      <div><strong>Ideal Career Paths:</strong> {numResult.bhagyankDetails.career}</div>
                      <div><strong>Vedic Daily Remedy:</strong> {numResult.bhagyankDetails.remedy}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#120D24] p-4 rounded-xl border border-[#D4AF37]/15 text-xs text-[#CBBCA0] leading-relaxed">
                  <p>
                    <strong>Vedic Numerology Tip:</strong> Aligning your vehicle registration, house number, and signature vibration with your friendly numbers ({numResult.mulankDetails.friendly}) minimizes friction and attracts spontaneous good fortune.
                  </p>
                </div>

                <div className="flex flex-wrap justify-end gap-2">
                  <button
                    onClick={() => onOpenWhatsApp('Name & Mobile Numerology Consultation')}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] flex items-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-white" />
                    <span>WhatsApp Numerology</span>
                  </button>
                  <a
                    href={`tel:${ASTROLOGER_PROFILE.phone}`}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-[#0B0914] bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#B38E1B] flex items-center gap-1.5 cursor-pointer font-sans-ui"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0B0914]" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TOOL 5: 27 NAKSHATRAS GUIDE */}
        {activeTab === 'nakshatra' && (
          <div className="bg-[#120D26] border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl animate-in fade-in duration-300">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F3EFE6] mb-2">
                27 Sacred Nakshatra Guide
              </h3>
              <p className="text-xs sm:text-sm text-[#C4B79E]">
                Explore the cosmic deities, symbols, planetary lords, and gemstones of the 27 lunar mansions.
              </p>
            </div>

            {/* Quick search input */}
            <div className="max-w-md mx-auto mb-6">
              <input
                type="text"
                value={nakshatraSearch}
                onChange={(e) => setNakshatraSearch(e.target.value)}
                placeholder="Search Nakshatra (e.g. Rohini, Pushya, Ashwini)..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#1B1435] border border-[#D4AF37]/30 text-xs sm:text-sm text-[#F3EFE6] focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            {/* Nakshatra Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-2 mb-6 max-h-56 overflow-y-auto pr-1">
              {NAKSHATRAS_DATA.filter(n => n.name.toLowerCase().includes(nakshatraSearch.toLowerCase())).map((nak) => (
                <button
                  key={nak.name}
                  onClick={() => setSelectedNakshatra(nak)}
                  className={`p-2 rounded-xl text-left transition-all ${
                    selectedNakshatra.name === nak.name
                      ? 'bg-[#D4AF37]/20 border border-[#D4AF37] text-[#FFDF78]'
                      : 'bg-[#18112E] hover:bg-[#20163E] border border-[#D4AF37]/15 text-[#D8CCA8]'
                  }`}
                >
                  <div className="text-xs font-bold truncate">{nak.name}</div>
                  <div className="text-[10px] text-[#A89C86] truncate">{nak.ruler}</div>
                </button>
              ))}
            </div>

            {/* Selected Nakshatra Detailed Card */}
            <div className="bg-[#171030] rounded-2xl p-6 border border-[#D4AF37]/30">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-4 border-b sm:border-b-0 sm:border-r border-[#D4AF37]/20 pb-4 sm:pb-0 sm:pr-4">
                  <div className="text-xs font-bold text-[#D4AF37] uppercase">Lunar Mansion</div>
                  <h4 className="font-heading text-2xl font-bold text-[#F3EFE6]">{selectedNakshatra.name}</h4>
                  <div className="text-xs text-[#C4B79E] mt-1">
                    Symbol: <span className="text-[#F3EFE6] font-medium">{selectedNakshatra.symbol}</span>
                  </div>
                  <div className="text-xs text-[#C4B79E] mt-0.5">
                    Deity: <span className="text-[#F3EFE6] font-medium">{selectedNakshatra.deity}</span>
                  </div>
                  <div className="text-xs text-[#C4B79E] mt-0.5">
                    Ruling Planet: <span className="text-[#D4AF37] font-medium">{selectedNakshatra.ruler}</span>
                  </div>
                </div>

                <div className="sm:col-span-8 space-y-3 text-xs text-[#D8CCA8]">
                  <div>
                    <strong className="text-[#F3EFE6] block mb-0.5 font-heading">Cosmic Personality & Strengths:</strong>
                    <p>{selectedNakshatra.characteristics}</p>
                  </div>
                  <div className="pt-2 flex items-center space-x-2">
                    <span className="text-[#D4AF37] font-bold">Recommended Vedic Gemstone:</span>
                    <span className="px-3 py-1 rounded-md bg-[#1F173C] border border-[#D4AF37]/30 text-[#FFDF78] font-semibold">
                      {selectedNakshatra.luckyGem}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
