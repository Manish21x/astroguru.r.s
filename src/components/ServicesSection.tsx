import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Flame, 
  TrendingUp, 
  Scroll, 
  Sparkles, 
  ShieldAlert, 
  Coins, 
  Compass, 
  ArrowRight, 
  Check, 
  Clock, 
  Star,
  MessageCircle,
  Phone
} from 'lucide-react';
import { SERVICES_DATA, ASTROLOGER_PROFILE } from '../data/astrologyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenWhatsApp: (topic?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenWhatsApp }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Relationship' | 'Career' | 'Kundli' | 'Vastu' | 'Finance'>('All');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-7 h-7 sm:w-8 sm:h-8 text-[#FFDF78]" />;
      case 'Flame':
        return <Flame className="w-7 h-7 sm:w-8 sm:h-8 text-[#FFDF78]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-[#FFDF78]" />;
      case 'Scroll':
        return <Scroll className="w-7 h-7 sm:w-8 sm:h-8 text-[#FFDF78]" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-[#FFDF78]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-7 h-7 sm:w-8 sm:h-8 text-[#FFDF78]" />;
      case 'Coins':
        return <Coins className="w-7 h-7 sm:w-8 sm:h-8 text-[#FFDF78]" />;
      case 'Compass':
        return <Compass className="w-7 h-7 sm:w-8 sm:h-8 text-[#FFDF78]" />;
      default:
        return <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-[#FFDF78]" />;
    }
  };

  const filteredServices = activeFilter === 'All' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === activeFilter);

  const filters: { label: string; value: typeof activeFilter }[] = [
    { label: 'All Services', value: 'All' },
    { label: 'Love & Marriage', value: 'Relationship' },
    { label: 'Career & Business', value: 'Career' },
    { label: 'Kundli & Dosha', value: 'Kundli' },
    { label: 'Wealth & Finance', value: 'Finance' },
    { label: 'Vedic Vastu', value: 'Vastu' },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#0B0914] via-[#120D26] to-[#0B0914] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sacred Vedic Consultation</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F3EFE6] tracking-tight">
            Comprehensive <span className="text-gold-gradient">Astrology Services</span>
          </h2>
          <p className="text-[#CBBCA0] text-base sm:text-lg">
            Personalized astrological diagnostics, accurate dasha timelines, and customized Vedic remedies for every sphere of human life.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              id={`service-tab-${tab.value.toLowerCase()}`}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === tab.value
                  ? 'bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#B38E1B] text-[#0B0914] shadow-md shadow-[#D4AF37]/20 font-sans-ui'
                  : 'bg-[#191230] text-[#D8CCA8] hover:bg-[#251B47] hover:text-[#F3EFE6] border border-[#D4AF37]/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 8 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-gradient-to-b from-[#181135] via-[#120B27] to-[#0D081D] border-2 border-[#D4AF37]/25 hover:border-[#D4AF37]/75 rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D4AF37]/20 relative group overflow-hidden"
            >
              {/* Subtle Card Ambient Glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#D4AF37]/10 rounded-full blur-3xl group-hover:bg-[#D4AF37]/20 transition-all duration-500 pointer-events-none" />

              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-5 right-5 bg-gradient-to-r from-[#D4AF37]/30 to-[#D4AF37]/10 border border-[#D4AF37]/50 text-[#FFDF78] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                  <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                  <span>Popular</span>
                </div>
              )}

              <div className="relative z-10">
                {/* Bigger, Attractive Icon Container with Golden Halo */}
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#D4AF37]/30 via-[#D4AF37]/15 to-[#1A1238] border-2 border-[#D4AF37]/50 flex items-center justify-center mb-6 shadow-lg shadow-[#D4AF37]/15 group-hover:scale-108 group-hover:border-[#FFDF78] group-hover:shadow-[#D4AF37]/30 transition-all duration-300">
                  {getIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F3EFE6] group-hover:text-[#FFDF78] transition-colors mb-2.5 leading-snug tracking-tight">
                  {service.title}
                </h3>

                {/* Short Subtitle Badge */}
                <div className="inline-block mb-3.5">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#FFDF78]">
                    {service.subtitle}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-[#D5C9B3] leading-relaxed mb-5 font-normal">
                  {service.shortDesc}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6 pt-3.5 border-t border-[#D4AF37]/20">
                  {service.benefits.slice(0, 2).map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#EBE1CD]">
                      <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="relative z-10 pt-5 border-t border-[#D4AF37]/25 flex flex-col space-y-3">
                <div className="flex items-center justify-between text-xs text-[#B5A893]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {service.duration.split('+')[0]}
                  </span>
                  <button
                    onClick={() => onSelectService(service)}
                    id={`learn-more-${service.id}`}
                    className="text-[#FFDF78] hover:text-[#FFF1B8] hover:underline font-bold flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    onClick={() => onOpenWhatsApp(service.title)}
                    id={`whatsapp-service-${service.id}`}
                    className="py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-md flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-white" />
                    <span>WhatsApp</span>
                  </button>

                  <a
                    href={`tel:${ASTROLOGER_PROFILE.phone}`}
                    id={`call-service-${service.id}`}
                    className="py-2.5 px-3 rounded-xl text-xs font-bold text-[#0B0914] bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#B38E1B] hover:from-[#FFF1B8] hover:to-[#C69C20] transition-all shadow-md flex items-center justify-center space-x-1.5 cursor-pointer font-sans-ui"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0B0914]" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Assurance Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-[#140E29] border border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-heading text-base font-bold text-[#F3EFE6]">
              Need a Custom Consultation for Multiple Family Members or Complex Business Portfolios?
            </h4>
            <p className="text-xs sm:text-sm text-[#C4B79E]">
              We offer bespoke VIP consultation packages with complete Janam Kundli charts and annual transit blueprints.
            </p>
          </div>
          <button
            onClick={() => onOpenWhatsApp('VIP Custom Consultation Package')}
            className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#F3EFE6] bg-[#241945] hover:bg-[#32235E] border border-[#D4AF37]/40 shrink-0 transition-all cursor-pointer flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Inquire VIP via WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
