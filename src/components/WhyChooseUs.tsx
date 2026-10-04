import React from 'react';
import { 
  Sparkles, 
  Award, 
  Lock, 
  Compass, 
  ShieldCheck, 
  Globe, 
  Check, 
  X as XIcon, 
  MessageCircle,
  Phone,
  ArrowRight
} from 'lucide-react';
import { TRUST_PILLARS, ASTROLOGER_PROFILE } from '../data/astrologyData';

interface WhyChooseUsProps {
  onOpenWhatsApp: (topic?: string) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenWhatsApp }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-8 h-8 sm:w-9 sm:h-9 text-[#FFDF78]" />;
      case 'Award':
        return <Award className="w-8 h-8 sm:w-9 sm:h-9 text-[#FFDF78]" />;
      case 'Lock':
        return <Lock className="w-8 h-8 sm:w-9 sm:h-9 text-[#FFDF78]" />;
      case 'Compass':
        return <Compass className="w-8 h-8 sm:w-9 sm:h-9 text-[#FFDF78]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 sm:w-9 sm:h-9 text-[#FFDF78]" />;
      case 'Globe':
        return <Globe className="w-8 h-8 sm:w-9 sm:h-9 text-[#FFDF78]" />;
      default:
        return <Sparkles className="w-8 h-8 sm:w-9 sm:h-9 text-[#FFDF78]" />;
    }
  };

  const comparisonData = [
    {
      feature: "Calculation Depth",
      typical: "Automated generic copy with basic Sun sign text",
      shastriJi: "Manual D-1, D-9, D-10 divisional scrutiny with Lahiri Ayanamsa"
    },
    {
      feature: "Approach to Doshas",
      typical: "Fear-mongering (scaring clients about Manglik / Sade Sati)",
      shastriJi: "Scientific Vedic cancellations & empowering positive remedies"
    },
    {
      feature: "Remedy Prescriptions",
      typical: "Expensive commercial rituals and overpriced stones",
      shastriJi: "Mantras, lifestyle adjustments, meditation & genuine certified gems"
    },
    {
      feature: "Consultation Format",
      typical: "Brief 5-minute hurried responses",
      shastriJi: "Dedicated 45-60 min private deep dive with post-session support"
    },
    {
      feature: "Confidentiality",
      typical: "Data often stored or shared on generic lead databases",
      shastriJi: "Strict 100% private non-disclosure personal consultation"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-[#0B0914] via-[#100B22] to-[#0B0914] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
            <Award className="w-3.5 h-3.5" />
            <span>The Vedic Standard of Excellence</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F3EFE6] tracking-tight">
            Why People Trust Our <span className="text-gold-gradient">Astrology Guidance</span>
          </h2>
          <p className="text-[#CBBCA0] text-base sm:text-lg">
            We hold ourselves to the highest ethical and scriptural standards, replacing superstitious fear with clarity, optimism, and actionable wisdom.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 mb-16">
          {TRUST_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-[#181135] via-[#120B27] to-[#0D081D] border-2 border-[#D4AF37]/25 hover:border-[#D4AF37]/75 rounded-3xl p-7 sm:p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D4AF37]/20 relative group overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle Ambient Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl group-hover:bg-[#D4AF37]/25 transition-all duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Bigger & Attractive Sculpted Icon Container with Golden Halo */}
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#D4AF37]/30 via-[#D4AF37]/15 to-[#1A1238] border-2 border-[#D4AF37]/50 flex items-center justify-center mb-6 shadow-lg shadow-[#D4AF37]/15 group-hover:scale-108 group-hover:border-[#FFDF78] group-hover:shadow-[#D4AF37]/30 transition-all duration-300">
                  {getIcon(pillar.icon)}
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F3EFE6] group-hover:text-[#FFDF78] transition-colors mb-3 leading-snug tracking-tight">
                  {pillar.title}
                </h3>

                <p className="text-sm text-[#D5C9B3] leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Subtle Accent Line */}
              <div className="relative z-10 mt-6 pt-4 border-t border-[#D4AF37]/15 flex items-center text-xs font-semibold text-[#FFDF78]">
                <span>100% Authentic Vedic Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* High-Impact Comparison Table: Standard vs Pt. Rohit Sharma */}
        <div className="bg-[#130E26] rounded-3xl border border-[#D4AF37]/30 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-heading text-2xl font-bold text-[#F3EFE6] mb-1">
              The Difference is in the Vedic Rigor
            </h3>
            <p className="text-xs sm:text-sm text-[#A89C86]">
              How {ASTROLOGER_PROFILE.name}'s consultations protect you from common astrological misconceptions.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-[#D4AF37]/30">
                  <th className="py-5 px-6 text-sm sm:text-base font-heading font-extrabold text-[#D4AF37] uppercase tracking-wider bg-[#0B0718]/80 rounded-tl-2xl border-t border-l border-[#D4AF37]/30">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#FFDF78]" />
                      <span>Consultation Dimension</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-sm sm:text-base font-heading font-bold text-[#A89C86] uppercase tracking-wider bg-[#100B22]/90 border-t border-[#D4AF37]/20">
                    Generic Online Astrologers
                  </th>
                  <th className="py-5 px-6 text-sm sm:text-base font-heading font-black text-[#0B0914] bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#B38E1B] rounded-tr-2xl uppercase tracking-wider shadow-lg border-t-2 border-r-2 border-[#FFE58F]">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#0B0914]" />
                      <span>{ASTROLOGER_PROFILE.name}</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D4AF37]/10 text-xs sm:text-sm">
                {comparisonData.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-[#1A1333]/50 transition-colors">
                    <td className="py-4 px-4 font-semibold text-[#F3EFE6]">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-[#A89C86] flex items-center gap-2">
                      <XIcon className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{row.typical}</span>
                    </td>
                    <td className="py-4 px-4 text-[#E5D7B7] font-medium bg-[#D4AF37]/5">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span>{row.shastriJi}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 pt-6 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="text-sm font-bold text-[#F3EFE6]">Ready to experience authentic Vedic clarity?</div>
              <div className="text-xs text-[#A89C86]">Connect directly via WhatsApp or direct phone call with {ASTROLOGER_PROFILE.name}.</div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenWhatsApp('Authentic Vedic Consultation Request')}
                id="why-us-whatsapp-cta-btn"
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-lg flex items-center space-x-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>WhatsApp Chat</span>
              </button>
              <a
                href={`tel:${ASTROLOGER_PROFILE.phone}`}
                id="why-us-call-cta-btn"
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#0B0914] bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#B38E1B] hover:from-[#FFF1B8] shadow-lg flex items-center space-x-2 cursor-pointer font-sans-ui"
              >
                <Phone className="w-4 h-4 text-[#0B0914]" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
