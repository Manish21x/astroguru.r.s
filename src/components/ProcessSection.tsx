import React from 'react';
import { CalendarClock, FileSpreadsheet, Sparkles, ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { CONSULTATION_PROCESS_STEPS, ASTROLOGER_PROFILE } from '../data/astrologyData';

interface ProcessSectionProps {
  onOpenWhatsApp: (topic?: string) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenWhatsApp }) => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'CalendarClock':
        return <CalendarClock className="w-8 h-8 text-[#D4AF37]" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-8 h-8 text-[#D4AF37]" />;
      case 'Sparkle':
        return <Sparkles className="w-8 h-8 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-8 h-8 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="process" className="py-20 bg-[#0B0914] relative border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
            <CalendarClock className="w-3.5 h-3.5" />
            <span>Seamless & Confidential</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F3EFE6] tracking-tight">
            How The <span className="text-gold-gradient">Consultation Works</span>
          </h2>
          <p className="text-[#CBBCA0] text-base sm:text-lg">
            A transparent, three-step journey from birth chart calculation to life-transforming clarity.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line on Desktop */}
          <div className="hidden md:block absolute top-1/3 left-1/6 right-1/6 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent -z-0" />

          {CONSULTATION_PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-cosmic-card bg-cosmic-card-hover rounded-3xl p-8 flex flex-col justify-between relative z-10 transition-all duration-300 transform hover:-translate-y-2 border border-[#D4AF37]/25"
            >
              <div>
                {/* Step Number & Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading text-4xl font-extrabold text-[#D4AF37]/30 group-hover:text-[#D4AF37]/60 transition-colors">
                    {step.stepNumber}
                  </span>
                  <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                    {getStepIcon(step.iconName)}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="font-heading text-xl font-bold text-[#F3EFE6] mb-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-[#C4B79E] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step Sub-pill */}
              <div className="mt-6 pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between text-xs text-[#D4AF37]">
                <span className="font-medium">
                  {idx === 0 && "Direct WhatsApp / Call"}
                  {idx === 1 && "100% Encrypted & Private"}
                  {idx === 2 && "Personalized Remedies Included"}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              </div>

            </div>
          ))}

        </div>

        {/* Action Trigger */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-4 text-center">
          <button
            onClick={() => onOpenWhatsApp('I want to start Step 1 for consultation')}
            id="process-whatsapp-btn"
            className="px-8 py-4 rounded-xl text-base font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-xl hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5 inline-flex items-center space-x-2.5 cursor-pointer font-sans-ui"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>

          <a
            href={`tel:${ASTROLOGER_PROFILE.phone}`}
            id="process-call-btn"
            className="px-8 py-4 rounded-xl text-base font-bold text-[#0B0914] bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#B38E1B] hover:from-[#FFF1B8] hover:to-[#C69C20] shadow-xl hover:shadow-[#D4AF37]/30 transition-all transform hover:-translate-y-0.5 inline-flex items-center space-x-2.5 cursor-pointer font-sans-ui"
          >
            <Phone className="w-5 h-5 text-[#0B0914]" />
            <span>Call: {ASTROLOGER_PROFILE.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
