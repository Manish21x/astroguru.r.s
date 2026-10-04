import React from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Star, Sparkles, CheckCircle2, Award, Heart, Briefcase, Users, Trophy, Medal, Instagram } from 'lucide-react';
import { ASTROLOGER_PROFILE } from '../data/astrologyData';
import { useAstrologerPhoto } from '../utils/photoStorage';
import astrologerPortrait from '../assets/images/astrologer_portrait.png';

interface HeroProps {
  onOpenWhatsApp: (topic?: string) => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWhatsApp, onExploreServices }) => {
  const { customPhoto } = useAstrologerPhoto();
  const heroImageSrc = customPhoto || astrologerPortrait;

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-6 pb-16 lg:py-20 bg-gradient-to-b from-[#0B0914] via-[#140D26] to-[#0B0914]">
      {/* Background Cosmic Starfield & Sacred Mandala Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ambient radial glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#673AB7]/15 rounded-full blur-[140px] -z-10 animate-pulse-subtle" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#D4AF37]/10 rounded-full blur-[120px] -z-10" />
        
        {/* Subtle Constellation grid overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-15 stroke-[#D4AF37]/30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="zodiac-grid" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#D4AF37" />
              <circle cx="90" cy="40" r="1.5" fill="#FFF" />
              <circle cx="45" cy="100" r="1" fill="#D4AF37" />
              <line x1="10" y1="10" x2="90" y2="40" strokeWidth="0.5" strokeDasharray="3,3" />
              <line x1="90" y1="40" x2="45" y2="100" strokeWidth="0.5" strokeDasharray="3,3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#zodiac-grid)" />
        </svg>

        {/* Slow rotating Vedic Astrological Zodiac Ring */}
        <div className="absolute -right-32 top-10 w-[600px] h-[600px] opacity-10 animate-spin-slow pointer-events-none hidden md:block">
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#D4AF37]">
            <circle cx="50" cy="50" r="48" fill="none" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="38" fill="none" strokeWidth="0.3" strokeDasharray="1,2" />
            <circle cx="50" cy="50" r="28" fill="none" strokeWidth="0.5" />
            <line x1="50" y1="2" x2="50" y2="98" strokeWidth="0.3" />
            <line x1="2" y1="50" x2="98" y2="50" strokeWidth="0.3" />
            <line x1="16" y1="16" x2="84" y2="84" strokeWidth="0.3" />
            <line x1="16" y1="84" x2="84" y2="16" strokeWidth="0.3" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Value Proposition, Trust Badges, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#FFDF78] text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <Trophy className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
              <span>National Pride Award Winner • Astro Guru</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span className="text-[#D4AF37]">15+ Yrs Lineage</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-[#F3EFE6] leading-[1.15] tracking-tight">
              Discover What Your <span className="text-gold-gradient">Stars</span> Have in Store for You
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-[#CDBFA7] font-normal leading-relaxed max-w-2xl">
              Seek personal guidance from <span className="text-[#F3EFE6] font-medium">{ASTROLOGER_PROFILE.name}</span> for love, marriage, career, business, finance and your future. Authentic Parashari insight and practical remedies with zero fear-mongering.
            </p>

            {/* Trust Indicators Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full py-2 border-y border-[#D4AF37]/15">
              <div className="flex items-center space-x-2 text-sm text-[#E7DECC]">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="font-medium">National Awardee Guru</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-[#E7DECC]">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="font-medium">Personalized Kundli</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-[#E7DECC]">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="font-medium">100% Confidential</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              <button
                onClick={() => onOpenWhatsApp()}
                id="hero-whatsapp-btn"
                className="px-7 py-4 rounded-xl text-base font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-xl shadow-[#25D366]/30 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2.5 cursor-pointer font-sans-ui"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <a
                href={`tel:${ASTROLOGER_PROFILE.phone}`}
                id="hero-call-btn"
                className="px-6 py-4 rounded-xl text-base font-bold text-[#0B0914] bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#B38E1B] hover:from-[#FFF1B8] hover:to-[#C69C20] shadow-xl hover:shadow-[#D4AF37]/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2.5 cursor-pointer font-sans-ui"
              >
                <Phone className="w-5 h-5 text-[#0B0914]" />
                <span>Call Now</span>
              </a>

              <a
                href={ASTROLOGER_PROFILE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-instagram-btn"
                className="px-5 py-4 rounded-xl text-base font-semibold text-[#FF80AB] bg-[#E1306C]/15 hover:bg-[#E1306C]/25 border border-[#E1306C]/40 hover:border-[#E1306C]/70 transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-[#E1306C]/10"
                title="Follow on Instagram"
              >
                <Instagram className="w-5 h-5 text-[#FF80AB]" />
                <span>Instagram</span>
              </a>

              <a
                href="#awards"
                id="hero-view-awards-btn"
                className="px-5 py-4 rounded-xl text-base font-semibold text-[#F3EFE6] bg-[#1C1533]/80 hover:bg-[#281E48] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Trophy className="w-4 h-4 text-[#D4AF37]" />
                <span>Honors</span>
              </a>
            </div>

            {/* Quick Consultation Topic Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-[#A89C86]">
              <span className="font-medium text-[#D4AF37]">Quick WhatsApp Inquiry:</span>
              <button
                onClick={() => onOpenWhatsApp('Marriage & Kundli Milan')}
                className="px-2.5 py-1 rounded-md bg-[#1B142F] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 text-[#DCD4C4] hover:text-[#D4AF37] transition-all flex items-center gap-1 cursor-pointer"
              >
                💍 Marriage & Kundli Milan
              </button>
              <button
                onClick={() => onOpenWhatsApp('Career & Job Switch')}
                className="px-2.5 py-1 rounded-md bg-[#1B142F] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 text-[#DCD4C4] hover:text-[#D4AF37] transition-all flex items-center gap-1 cursor-pointer"
              >
                💼 Career & Job Switch
              </button>
              <button
                onClick={() => onOpenWhatsApp('Love & Relationship Harmony')}
                className="px-2.5 py-1 rounded-md bg-[#1B142F] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 text-[#DCD4C4] hover:text-[#D4AF37] transition-all flex items-center gap-1 cursor-pointer"
              >
                ❤️ Love Harmony
              </button>
            </div>

            {/* Micro rating social proof */}
            <div className="flex items-center space-x-3 pt-2">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0B0914] bg-[#2E204E] text-[#D4AF37] text-xs font-bold flex items-center justify-center">RP</div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0B0914] bg-[#3B2562] text-[#D4AF37] text-xs font-bold flex items-center justify-center">SM</div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0B0914] bg-[#4B2F7A] text-[#D4AF37] text-xs font-bold flex items-center justify-center">AD</div>
              </div>
              <div className="text-xs text-[#C5B79F]">
                <div className="flex items-center space-x-1 text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                  <span className="font-bold text-[#F3EFE6] ml-1">4.9 / 5.0</span>
                </div>
                <span className="text-[#9E917B]">Based on 1,850+ verified client reviews</span>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Portrait of Astrologer with Golden Cosmic Aura */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-[420px]">
              
              {/* Outer Golden Mandala Halo Background */}
              <div className="absolute inset-0 -m-6 rounded-full bg-gradient-to-tr from-[#D4AF37]/20 via-[#9C27B0]/20 to-transparent blur-2xl -z-10" />
              
              {/* Decorative Astrological Ring */}
              <div className="absolute -inset-3 rounded-3xl border border-[#D4AF37]/30 pointer-events-none" />
              <div className="absolute -inset-1 rounded-3xl border border-[#D4AF37]/10 pointer-events-none" />

              {/* Main Portrait Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#1C1433] to-[#0D0A1A] border-2 border-[#D4AF37]/40 shadow-2xl">
                
                {/* Image Container with Astrologer Portrait & Sacred Atmosphere */}
                <div className="relative h-[440px] sm:h-[480px] w-full overflow-hidden flex items-end justify-center bg-[#130E26]">
                  
                  <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-[#090714]">
                      <img
                        src={heroImageSrc}
                        alt={`${ASTROLOGER_PROFILE.name} - Vedic Astrologer`}
                        className="w-full h-full object-cover object-top filter brightness-100 contrast-[1.04] transition-transform duration-500 hover:scale-105"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          if (e.currentTarget.src !== astrologerPortrait) {
                            e.currentTarget.src = astrologerPortrait;
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0914] via-[#0B0914]/20 to-transparent pointer-events-none" />
                      
                      {/* Top Status Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/90 px-2.5 py-1 rounded-full border border-emerald-500/40 flex items-center gap-1.5 backdrop-blur-sm shadow-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          Online Consultations
                        </span>
                      </div>

                      {/* Name banner overlay on image */}
                      <div className="absolute bottom-4 left-4 right-4 z-10 p-3.5 rounded-xl bg-[#0E0A1E]/95 backdrop-blur-md border border-[#D4AF37]/40 shadow-xl">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-sm sm:text-base font-bold font-heading text-[#F3EFE6] flex items-center gap-1.5">
                              {ASTROLOGER_PROFILE.name}
                              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                            </h3>
                            <p className="text-[11px] text-[#D4AF37] font-medium">Jaipur Green Developers Awardee • Jyotish Ratna</p>
                          </div>
                          <a
                            href="#awards"
                            className="text-[10px] text-[#FFDF78] font-bold bg-[#D4AF37]/20 hover:bg-[#D4AF37]/40 px-2.5 py-1.5 rounded-lg border border-[#D4AF37]/50 transition-colors flex items-center gap-1"
                          >
                            <Trophy className="w-3 h-3 text-[#D4AF37]" />
                            Honors
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 1: Experience & Gold Medal */}
                <div className="absolute -top-3 -left-3 sm:-left-5 bg-[#17102D] border border-[#D4AF37]/50 rounded-xl p-3 shadow-xl backdrop-blur-md flex items-center space-x-2.5 animate-bounce-subtle">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#F3EFE6]">15+ Years</div>
                    <div className="text-[10px] text-[#C2B59D]">Vedic Lineage</div>
                  </div>
                </div>

                {/* Floating Badge 2: Consultations & Accuracy */}
                <div className="absolute -bottom-3 -right-3 sm:-right-5 bg-[#17102D] border border-[#D4AF37]/50 rounded-xl p-3 shadow-xl backdrop-blur-md flex items-center space-x-2.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#F3EFE6]">12,500+</div>
                    <div className="text-[10px] text-[#C2B59D]">Happy Consultations</div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    );
};

