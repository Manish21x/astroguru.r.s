import React from 'react';
import { MessageCircle, ShieldCheck, Phone, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { ASTROLOGER_PROFILE } from '../data/astrologyData';

interface CTASectionProps {
  onOpenWhatsApp: (topic?: string) => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenWhatsApp }) => {
  return (
    <section id="contact-cta" className="py-20 relative overflow-hidden bg-gradient-to-b from-[#0B0914] via-[#170E33] to-[#0B0914]">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#673AB7]/20 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#D4AF37]/15 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Urgent availability pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#FFDF78] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>TODAY'S APPOINTMENTS: 3 SLOTS AVAILABLE</span>
        </div>

        {/* Heading */}
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F3EFE6] tracking-tight mb-6 leading-tight">
          Your Questions Deserve <span className="text-gold-gradient">Clarity</span>
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-[#CBBCA0] max-w-2xl mx-auto mb-10 leading-relaxed">
          Connect directly with <span className="text-[#F3EFE6] font-medium">{ASTROLOGER_PROFILE.name}</span> via WhatsApp chat or a direct phone call for instant, authentic astrological remedies.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-10">
          <button
            onClick={() => onOpenWhatsApp()}
            id="cta-whatsapp-chat-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-2xl shadow-[#25D366]/30 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2.5 cursor-pointer font-sans-ui"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>

          <a
            href={`tel:${ASTROLOGER_PROFILE.phone}`}
            id="cta-call-btn"
            className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-bold text-[#0B0914] bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#B38E1B] hover:from-[#FFF1B8] hover:to-[#C69C20] shadow-xl hover:shadow-[#D4AF37]/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2.5 cursor-pointer font-sans-ui"
          >
            <Phone className="w-5 h-5 text-[#0B0914]" />
            <span>Call: {ASTROLOGER_PROFILE.phone}</span>
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#E5D7B7] pt-4 border-t border-[#D4AF37]/15">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Confidential</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
            <span>Direct Session with {ASTROLOGER_PROFILE.name}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-[#D4AF37]" />
            <span>Instant WhatsApp & Call Response</span>
          </div>
        </div>

      </div>
    </section>
  );
};
