import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { AwardsSection } from './components/AwardsSection';
import { ServicesSection } from './components/ServicesSection';
import { AstrologyTools } from './components/AstrologyTools';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ArticleModal } from './components/ArticleModal';
import { PolicyModal } from './components/PolicyModal';
import { AstrologerPhotoProvider } from './utils/photoStorage';
import { ServiceItem, BlogPostItem } from './types';
import { ASTROLOGER_PROFILE } from './data/astrologyData';
import { MessageCircle, Phone, ShieldCheck, Lock } from 'lucide-react';

export default function App() {
  // Modal States
  const [selectedServiceForDetail, setSelectedServiceForDetail] = useState<ServiceItem | null>(null);
  const [selectedArticleForDetail, setSelectedArticleForDetail] = useState<BlogPostItem | null>(null);
  const [selectedPolicyName, setSelectedPolicyName] = useState<string | null>(null);

  const handleOpenWhatsApp = (topic?: string) => {
    const cleanPhone = ASTROLOGER_PROFILE.whatsapp.replace(/[^0-9]/g, '');
    const message = topic
      ? `Namaste Astro Love Guru Pt. Rohit Sharma Ji, I visited your website and would like guidance regarding "${topic}". Please guide me.`
      : `Namaste Astro Love Guru Pt. Rohit Sharma Ji, I visited your website and would like to connect for personal astrological guidance.`;
    const text = encodeURIComponent(message);
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank');
  };

  const handleExploreServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AstrologerPhotoProvider>
      <div className="min-h-screen bg-[#0B0914] text-[#F3EFE6] relative selection:bg-[#D4AF37]/30 selection:text-[#F3EFE6]">
        
        {/* Sticky Navigation Header */}
        <Header
          onOpenWhatsApp={() => handleOpenWhatsApp()}
        />

        {/* Hero Section */}
        <Hero
          onOpenWhatsApp={handleOpenWhatsApp}
          onExploreServices={handleExploreServices}
        />

        {/* Astrologer Trust & Bio Section */}
        <TrustSection
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* National Honors & Prestigious Awards Showcase */}
        <AwardsSection
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* 8 Core Astrology Services Section */}
        <ServicesSection
          onSelectService={(srv) => setSelectedServiceForDetail(srv)}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* Interactive Free Astrology Tools Suite (Free Kundli, Daily Horoscope, Kundli Milan, Numerology, Nakshatras) */}
        <AstrologyTools
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* Why Choose Us & Scriptural Rigor Section */}
        <WhyChooseUs
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* 3-Step Consultation Process Roadmap */}
        <ProcessSection
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* Client Testimonials Carousel */}
        <TestimonialsSection
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* Featured Prediction & Blog Section */}
        <BlogSection
          onSelectArticle={(art) => setSelectedArticleForDetail(art)}
        />

        {/* Conversion-Focused Cosmic CTA Section */}
        <CTASection
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* Multi-Column Luxury Footer */}
        <Footer
          onOpenWhatsApp={handleOpenWhatsApp}
          onSelectPolicy={(policy) => setSelectedPolicyName(policy)}
        />

        {/* Floating Action Button: WhatsApp Quick Contact */}
        <aside aria-label="Quick Contact Options" className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
          <a
            href={`tel:${ASTROLOGER_PROFILE.phone}`}
            id="floating-call-btn"
            className="w-13 h-13 rounded-full bg-[#1B1435] text-[#FFDF78] border-2 border-[#D4AF37]/50 shadow-2xl flex items-center justify-center hover:scale-110 hover:border-[#FFDF78] transition-all duration-200"
            title="Direct Phone Call"
          >
            <Phone className="w-5 h-5" />
          </a>

          <button
            onClick={() => handleOpenWhatsApp()}
            id="floating-whatsapp-btn"
            className="group relative flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl shadow-[#25D366]/40 border-2 border-white/60 hover:border-white hover:scale-105 hover:shadow-emerald-500/50 transition-all duration-300 cursor-pointer overflow-hidden"
            title="Chat securely with Pt. Rohit Sharma on WhatsApp (End-to-End Encrypted)"
          >
            {/* Subtle Ambient Shimmer */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            {/* Official WhatsApp Circular Icon Badge */}
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#25D366] shadow-md">
              <MessageCircle className="w-5 h-5 fill-[#25D366] text-[#25D366]" />
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#128C7E] border border-white flex items-center justify-center">
                <Lock className="w-2 h-2 text-white stroke-[2.5]" />
              </span>
            </span>

            <div className="flex flex-col items-start pr-1 text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-950/80 bg-white/40 px-1.5 py-0.2 rounded flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-950 stroke-[2.5]" />
                <span>100% Safe & Encrypted</span>
              </span>
              <span className="text-xs sm:text-sm font-extrabold tracking-tight text-white drop-shadow-sm flex items-center gap-1">
                Chat on WhatsApp
              </span>
            </div>
          </button>
        </aside>

        {/* Modal 1: Service Detail Breakdown Modal */}
        <ServiceDetailModal
          service={selectedServiceForDetail}
          onClose={() => setSelectedServiceForDetail(null)}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* Modal 2: Blog Reading Modal */}
        <ArticleModal
          article={selectedArticleForDetail}
          onClose={() => setSelectedArticleForDetail(null)}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* Modal 3: Legal & Policy Modal */}
        <PolicyModal
          policyName={selectedPolicyName}
          onClose={() => setSelectedPolicyName(null)}
        />

      </div>
    </AstrologerPhotoProvider>
  );
}
