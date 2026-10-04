import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Shield, Sparkles, Heart, Instagram } from 'lucide-react';
import { ASTROLOGER_PROFILE, SERVICES_DATA } from '../data/astrologyData';

interface FooterProps {
  onOpenWhatsApp: (topic?: string) => void;
  onSelectPolicy: (policyName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsApp, onSelectPolicy }) => {
  return (
    <footer id="contact" className="bg-[#07050E] text-[#F3EFE6] border-t border-[#D4AF37]/20 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle mandala background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#D4AF37]/15">
          
          {/* Column 1: Brand & Sanskrit Shloka */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8C6D08] p-[1.5px] flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#0B0914] flex items-center justify-center text-[#D4AF37] font-bold text-lg">
                  ॐ
                </div>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-[#F3EFE6] tracking-wide">
                  {ASTROLOGER_PROFILE.name}
                </h3>
                <p className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-semibold">
                  Vedic Jyotish & Vastu Kendra
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#C4B79E] leading-relaxed">
              Trusted sanctuary for authentic Parashari astrology, in-depth Kundli reading, and practical Vedic remedies. Bringing clarity and peace to seekers worldwide.
            </p>

            {/* Sacred Shloka Box */}
            <div className="p-3.5 rounded-xl bg-[#120D24] border border-[#D4AF37]/20 text-xs text-[#E5D7B7]">
              <div className="font-serif italic text-gold-gradient mb-1">
                "ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय ।"
              </div>
              <div className="text-[10px] text-[#A89C86]">
                Lead us from untruth to truth, from darkness to divine illumination.
              </div>
            </div>

            {/* Social Follow Links */}
            <div className="pt-1 flex items-center space-x-3">
              <a
                href={ASTROLOGER_PROFILE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#E1306C]/15 hover:bg-[#E1306C]/25 text-[#FF80AB] border border-[#E1306C]/40 text-xs font-semibold transition-all hover:scale-105"
                title="Follow Pt. Rohit Sharma on Instagram"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram: {ASTROLOGER_PROFILE.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-sm font-bold text-[#D4AF37] uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#D8CCA8]">
              <li><a href="#hero" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About {ASTROLOGER_PROFILE.name}</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Consultation Services</a></li>
              <li><a href="#tools" className="hover:text-[#D4AF37] transition-colors">Free Kundli & Tools</a></li>
              <li><a href="#why-us" className="hover:text-[#D4AF37] transition-colors">Why People Trust Us</a></li>
              <li><a href="#testimonials" className="hover:text-[#D4AF37] transition-colors">Client Reviews</a></li>
              <li><a href="#blog" className="hover:text-[#D4AF37] transition-colors">Astrology Insights</a></li>
            </ul>
          </div>

          {/* Column 3: Astrology Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold text-[#D4AF37] uppercase tracking-wider">
              Consultation Topics
            </h4>
            <ul className="space-y-2 text-xs text-[#D8CCA8]">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onOpenWhatsApp(service.title)}
                    className="hover:text-[#25D366] transition-colors text-left truncate w-full cursor-pointer flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3 h-3 text-[#25D366] shrink-0" />
                    <span className="truncate">{service.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Direct Connect */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold text-[#D4AF37] uppercase tracking-wider">
              Direct Contact
            </h4>

            <div className="space-y-2.5 text-xs text-[#C4B79E]">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{ASTROLOGER_PROFILE.officeAddress}</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${ASTROLOGER_PROFILE.phone}`} className="hover:text-[#D4AF37] transition-colors font-bold text-[#F3EFE6]">
                  Call: {ASTROLOGER_PROFILE.phone}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <button onClick={() => onOpenWhatsApp()} className="hover:text-[#25D366] transition-colors cursor-pointer font-bold text-[#25D366]">
                  WhatsApp: {ASTROLOGER_PROFILE.whatsapp}
                </button>
              </div>

              <div className="flex items-center space-x-2.5">
                <Instagram className="w-4 h-4 text-[#FF80AB] shrink-0" />
                <a 
                  href={ASTROLOGER_PROFILE.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#FF80AB] transition-colors"
                >
                  {ASTROLOGER_PROFILE.instagramHandle}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${ASTROLOGER_PROFILE.email}`} className="hover:text-[#D4AF37] transition-colors">
                  {ASTROLOGER_PROFILE.email}
                </a>
              </div>

              <div className="flex items-center space-x-2.5 pt-1 text-[11px] text-[#A89C86]">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>Mon – Sun: 9:00 AM – 8:00 PM IST</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright Bar */}
        <div className="pt-8 space-y-4">
          
          {/* Ethical Disclaimer */}
          <div className="p-4 rounded-xl bg-[#0D091A] border border-[#D4AF37]/10 text-[11px] text-[#8E8270] leading-relaxed">
            <strong>Vedic Disclaimer:</strong> Astrology is an ancient empirical science and philosophical guide based on planetary positions and karma theory. Insights provided by {ASTROLOGER_PROFILE.name} are intended for spiritual guidance, self-reflection, and personal counseling. They are not a substitute for professional legal, medical, or financial certifications.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8270]">
            <div>
              © 2026 {ASTROLOGER_PROFILE.name}. All Rights Reserved.
            </div>

            <div className="flex flex-wrap items-center space-x-4">
              <button onClick={() => onSelectPolicy('Privacy Policy')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                Privacy Policy
              </button>
              <span>•</span>
              <button onClick={() => onSelectPolicy('Terms of Service')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                Terms of Service
              </button>
              <span>•</span>
              <button onClick={() => onSelectPolicy('Consultation Ethics')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                Ethics & Confidentiality
              </button>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};
