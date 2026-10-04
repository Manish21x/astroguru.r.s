import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, Calendar, Menu, X, MessageCircle, Moon, Sun, ShieldCheck, Instagram } from 'lucide-react';
import { ASTROLOGER_PROFILE } from '../data/astrologyData';

interface HeaderProps {
  onOpenWhatsApp: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenWhatsApp }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'National Honors', href: '#awards' },
    { name: 'Services', href: '#services' },
    { name: 'Free Tools', href: '#tools' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Insights', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top emergency announcement bar */}
      <div id="top-announcement-bar" className="bg-gradient-to-r from-[#1E1738] via-[#2A1D4E] to-[#1E1738] text-xs py-2 px-4 border-b border-[#D4AF37]/20 text-[#E5D7B7] hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-[#D4AF37]/20 text-[#FFDF78] border border-[#D4AF37]/40">
              ⚡ TODAY'S MUHURAT
            </span>
            <span className="text-[#CBBCA0]">
              Abhijit Muhurat: 11:58 AM – 12:46 PM | Auspicious for Consultations
            </span>
          </div>

          <div className="flex items-center space-x-4 sm:space-x-6">
            <a 
              href={ASTROLOGER_PROFILE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              id="header-top-instagram-link"
              className="flex items-center space-x-1.5 text-[#F3EFE6] hover:text-[#FF6B9D] transition-colors"
              title="Follow Pt. Rohit Sharma on Instagram"
            >
              <Instagram className="w-3.5 h-3.5 text-[#FF6B9D]" />
              <span className="hidden md:inline">{ASTROLOGER_PROFILE.instagramHandle}</span>
            </a>
            <a 
              href={`tel:${ASTROLOGER_PROFILE.phone}`}
              id="header-phone-link"
              className="flex items-center space-x-1.5 text-[#F3EFE6] hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Direct: {ASTROLOGER_PROFILE.phone}</span>
            </a>
            <div className="hidden lg:flex items-center space-x-1 text-[#CBBCA0]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Confidential Vedic Consultations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        id="main-navbar"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0E0A1E]/95 backdrop-blur-md shadow-2xl border-b border-[#D4AF37]/20 py-3'
            : 'bg-[#0B0914]/80 backdrop-blur-sm border-b border-[#D4AF37]/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a href="#hero" id="brand-logo-link" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#AA820A] to-[#604906] p-[1.5px] shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-[#0B0914] flex items-center justify-center overflow-hidden">
                <span className="text-[#D4AF37] font-serif font-bold text-lg tracking-wider">ॐ</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg sm:text-xl text-[#F3EFE6] tracking-wide group-hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                {ASTROLOGER_PROFILE.name}
              </span>
              <span className="text-[10px] sm:text-xs text-[#D4AF37] tracking-widest uppercase font-medium">
                Vedic Astrologer & Vastu Acharya
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-[#DCD4C4] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden md:flex items-center space-x-2.5">
            <a
              href={ASTROLOGER_PROFILE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              id="header-instagram-btn"
              className="px-3 py-2 rounded-xl text-sm font-medium text-[#FF80AB] bg-[#E1306C]/10 hover:bg-[#E1306C]/20 border border-[#E1306C]/30 transition-all flex items-center space-x-1.5 cursor-pointer"
              title="Follow on Instagram"
            >
              <Instagram className="w-4 h-4 text-[#FF80AB]" />
              <span className="hidden xl:inline">Instagram</span>
            </a>

            <button
              onClick={onOpenWhatsApp}
              id="header-whatsapp-btn"
              className="px-3.5 py-2 rounded-xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md hover:shadow-emerald-500/30 transition-all flex items-center space-x-1.5 cursor-pointer"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WhatsApp Chat</span>
            </button>

            <a
              href={`tel:${ASTROLOGER_PROFILE.phone}`}
              id="header-call-btn"
              className="px-4 py-2 rounded-xl text-sm font-semibold text-[#0B0914] bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#B38E1B] hover:from-[#FFF1B8] hover:to-[#C69C20] shadow-md hover:shadow-[#D4AF37]/30 transition-all transform hover:-translate-y-0.5 flex items-center space-x-1.5 cursor-pointer font-sans-ui"
            >
              <Phone className="w-4 h-4 text-[#0B0914]" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu & WhatsApp trigger */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={ASTROLOGER_PROFILE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-header-instagram-btn"
              className="p-2 rounded-lg bg-[#E1306C]/15 text-[#FF80AB] border border-[#E1306C]/30"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href={`tel:${ASTROLOGER_PROFILE.phone}`}
              id="mobile-header-call-btn"
              className="p-2 rounded-lg bg-[#D4AF37]/15 text-[#FFDF78] border border-[#D4AF37]/30"
              aria-label="Direct Phone Call"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={onOpenWhatsApp}
              id="mobile-header-whatsapp-btn"
              className="p-2 rounded-lg bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40"
              aria-label="WhatsApp Chat"
            >
              <MessageCircle className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 rounded-lg bg-[#1F1735] text-[#D4AF37] border border-[#D4AF37]/30 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div id="mobile-navigation-drawer" className="lg:hidden bg-[#0E0A1E] border-b border-[#D4AF37]/20 px-4 pt-3 pb-6 mt-2 shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-2.5 rounded-lg text-base font-medium text-[#F3EFE6] hover:bg-[#D4AF37]/15 hover:text-[#D4AF37] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-[#D4AF37]/15 flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenWhatsApp();
                  }}
                  id="mobile-drawer-whatsapp-btn"
                  className="w-full py-3 rounded-xl font-bold text-center text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-lg flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>Chat on WhatsApp</span>
                </button>

                <a
                  href={`tel:${ASTROLOGER_PROFILE.phone}`}
                  className="w-full py-3 rounded-xl font-bold text-center text-[#0B0914] bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#B38E1B] shadow-lg flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5 text-[#0B0914]" />
                  <span>Direct Call: {ASTROLOGER_PROFILE.phone}</span>
                </a>

                <a
                  href={ASTROLOGER_PROFILE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl font-medium text-center text-[#FF80AB] bg-[#E1306C]/10 border border-[#E1306C]/30 flex items-center justify-center space-x-2"
                >
                  <Instagram className="w-4 h-4 text-[#FF80AB]" />
                  <span>Follow on Instagram ({ASTROLOGER_PROFILE.instagramHandle})</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
