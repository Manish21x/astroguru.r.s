import React, { useState } from 'react';
import { Award, CheckCircle, Shield, Sparkles, BookOpen, Star, ArrowRight, X, HeartHandshake, Compass, GraduationCap, Trophy, Medal, Camera, Upload, Instagram, MessageCircle, Phone } from 'lucide-react';
import { ASTROLOGER_PROFILE } from '../data/astrologyData';
import { useAstrologerPhoto } from '../utils/photoStorage';

interface TrustSectionProps {
  onOpenWhatsApp: (topic?: string) => void;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ onOpenWhatsApp }) => {
  const [showBioModal, setShowBioModal] = useState(false);
  const { customPhoto, setIsUploadModalOpen, uploadPhoto } = useAstrologerPhoto();
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const success = await uploadPhoto(e.target.files[0], 'general');
      if (success) {
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
      }
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const success = await uploadPhoto(e.dataTransfer.files[0], 'general');
      if (success) {
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
      }
    }
  };


  const stats = [
    {
      value: "15+",
      label: "Years Experience",
      subtext: "Traditional Vedic Lineage",
      icon: Award
    },
    {
      value: "12,500+",
      label: "Consultations Delivered",
      subtext: "Personal & Business Clients",
      icon: HeartHandshake
    },
    {
      value: "98.8%",
      label: "Client Satisfaction",
      subtext: "Verified Client Reviews",
      icon: Star
    },
    {
      value: "38+",
      label: "Countries Served",
      subtext: "India & Global NRI Families",
      icon: Compass
    }
  ];

  const expertiseAreas = [
    "Parashari Jyotish",
    "KP Astrology (Krishnamurti)",
    "Ashtakoot Kundli Milan",
    "Vedic Vastu Shastra",
    "Jaimini Chara Dasha",
    "Muhurat Shastra",
    "Navamsha (D-9) Analysis",
    "Authentic Vedic Gemology",
    "Maha Mrityunjaya & Vedic Havans"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0B0914] via-[#100B22] to-[#0B0914] relative overflow-hidden border-t border-[#D4AF37]/15">
      {/* Decorative cosmic glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7E3AF2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider text-[#FFDF78]">
            <Trophy className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Honoring Astro Guru • About {ASTROLOGER_PROFILE.name}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F3EFE6] tracking-tight">
            Guidance From the Stars, <span className="text-gold-gradient">Clarity For Your Life</span>
          </h2>
          <p className="text-[#CBBCA0] text-base sm:text-lg">
            Bridging millennia of sacred Vedic wisdom with empathetic, practical counseling for modern challenges.
          </p>
        </div>

        {/* 4 Premium Metric Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-cosmic-card bg-cosmic-card-hover p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 text-center flex flex-col items-center justify-center relative overflow-hidden group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-3 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="font-heading font-bold text-3xl sm:text-4xl text-gold-gradient tracking-tight mb-1">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-[#F3EFE6] mb-0.5">
                  {item.label}
                </div>
                <div className="text-xs text-[#A89C86]">
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Profile Grid: Image + Biography + Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#130E26]/80 rounded-3xl border border-[#D4AF37]/25 p-6 sm:p-10 backdrop-blur-md shadow-2xl">
          
          {/* Left Column: Authentic Tribute Card with Vedic Border */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#D4AF37]/30 to-[#9C27B0]/30 blur-lg -z-10" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/40 bg-[#0B0914] shadow-xl">
                
                {customPhoto ? (
                  <div 
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragOver(true);
                    }}
                    onDragLeave={() => setIsDragOver(false)}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`relative w-full h-96 bg-[#0E0A1E] overflow-hidden group cursor-pointer transition-all duration-300 ${
                      isDragOver ? 'ring-4 ring-[#D4AF37] scale-[1.01]' : ''
                    }`}
                    title="Click or drag image to upload photo"
                  >
                    <img
                      src={customPhoto}
                      alt={ASTROLOGER_PROFILE.name}
                      className="w-full h-full object-cover object-top filter brightness-100 contrast-[1.04] transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0914] via-transparent to-[#0B0914]/40 pointer-events-none" />
                    
                    {/* Hover Upload Overlay */}
                    <div className="absolute inset-0 bg-[#0B0914]/65 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center z-20">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FDE08B] to-[#D4AF37] text-[#0B0914] flex items-center justify-center mb-2 shadow-xl transform group-hover:scale-110 transition-transform">
                        <Upload className="w-5 h-5 text-[#0B0914]" />
                      </div>
                      <span className="text-xs font-bold text-[#F3EFE6] bg-[#0E0A1E]/90 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/60 shadow-lg">
                        Click or Drag to Upload Image
                      </span>
                      <span className="text-[10px] text-[#FFDF78] mt-1 font-medium">Supports JPG, PNG, WEBP</span>
                    </div>

                    {/* Upload Success Banner */}
                    {uploadSuccess && (
                      <div className="absolute inset-0 bg-[#06331E]/90 backdrop-blur-sm flex flex-col items-center justify-center z-30 animate-in fade-in duration-300">
                        <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-2 shadow-lg">
                          <CheckCircle className="w-7 h-7" />
                        </div>
                        <span className="text-sm font-bold text-white">Image Uploaded Successfully!</span>
                      </div>
                    )}

                    <div className="absolute top-3 right-3 z-10" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="px-2.5 py-1.5 rounded-lg bg-[#0B0914]/85 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#0B0914] border border-[#D4AF37]/50 shadow transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold"
                        title="Upload New Photo"
                      >
                        <Camera className="w-3.5 h-3.5" />
                        <span>Upload</span>
                      </button>
                    </div>

                    <div className="absolute top-3 left-3 z-10 pointer-events-none">
                      <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#0B0914]/80 backdrop-blur-sm border border-[#D4AF37]/40 text-[10px] font-bold text-[#FFDF78] uppercase">
                        <Trophy className="w-3 h-3 text-[#D4AF37]" />
                        <span>National Icon</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Spiritual Portrait Graphic */
                  <div 
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragOver(true);
                    }}
                    onDragLeave={() => setIsDragOver(false)}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`w-full h-96 bg-gradient-to-b from-[#1C1433] via-[#120D24] to-[#0A0714] p-6 flex flex-col justify-between items-center text-center relative overflow-hidden cursor-pointer transition-all ${
                      isDragOver ? 'ring-4 ring-[#D4AF37]' : ''
                    }`}
                  >
                    
                    {/* Subtle Background Vedic Mandala Lines */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                      <div className="w-64 h-64 rounded-full border border-[#D4AF37] border-dashed animate-spin-slow" />
                    </div>

                    {/* Top honor badge */}
                    <div className="z-10 w-full flex items-center justify-between">
                      <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[10px] font-bold text-[#FFDF78] uppercase">
                        <Trophy className="w-3 h-3 text-[#D4AF37]" />
                        <span>National Pride Icon</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          fileInputRef.current?.click();
                        }}
                        className="p-1 rounded-lg bg-[#D4AF37]/20 hover:bg-[#D4AF37] text-[#FFDF78] hover:text-[#0B0914] text-[10px] font-bold px-2 py-0.5 border border-[#D4AF37]/40 transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Upload className="w-3 h-3" />
                        <span>Add Pic</span>
                      </button>
                    </div>

                    {/* Central Avatar Visual */}
                    <div className="relative my-auto z-10">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#F59E0B] via-[#D4AF37] to-[#855B06] p-1 shadow-2xl flex items-center justify-center">
                        <div className="w-full h-full rounded-full bg-[#0E0A1E] flex flex-col items-center justify-center border border-[#FFDF78]/50 p-2">
                          <span className="text-3xl text-[#D4AF37] font-serif font-bold">ॐ</span>
                          <span className="text-xs font-bold text-[#F3EFE6] mt-1">Astro Love Guru</span>
                        </div>
                      </div>
                      {/* Medal tag */}
                      <div className="absolute -bottom-2 -right-1 bg-gradient-to-r from-[#FDE08B] to-[#D4AF37] text-[#0B0914] p-1.5 rounded-full shadow-lg">
                        <Medal className="w-4 h-4 text-[#0B0914]" />
                      </div>
                    </div>

                    {/* Sacred Tilak & Wisdom Note */}
                    <div className="z-10 space-y-1">
                      <p className="text-xs text-[#FFDF78] font-semibold">
                        सत्यमेव जयते • धर्मो रक्षति रक्षितः
                      </p>
                      <p className="text-[11px] text-[#C5B79F]">
                        Click or drag photo here to upload
                      </p>
                    </div>
                  </div>
                )}

                {/* Hidden File Input for Direct Astrologer Photo Upload */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileSelect}
                />

                <div className="p-4 bg-[#0E0A1E] border-t border-[#D4AF37]/20 text-center flex flex-col items-center gap-2">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-[#F3EFE6]">{ASTROLOGER_PROFILE.name}</h3>
                    <p className="text-xs text-[#D4AF37] font-medium">{ASTROLOGER_PROFILE.title}</p>
                  </div>
                  <a
                    href={ASTROLOGER_PROFILE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#FF80AB] bg-[#E1306C]/15 hover:bg-[#E1306C]/25 border border-[#E1306C]/40 transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>{ASTROLOGER_PROFILE.instagramHandle}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Qualifications */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-widest mb-1">
                <GraduationCap className="w-4 h-4" />
                <span>Lineage of Sanskrit & Jyotish Scholars</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F3EFE6]">
                Guiding Generations Towards Dharmic Success & Mental Peace
              </h3>
            </div>

            <p className="text-[#CBBCA0] text-sm sm:text-base leading-relaxed">
              {ASTROLOGER_PROFILE.shortBio}
            </p>

            {/* Core Highlights */}
            <div className="space-y-2.5">
              {ASTROLOGER_PROFILE.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-2.5">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37] mt-1 shrink-0" />
                  <span className="text-xs sm:text-sm text-[#E7DECC] font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Areas of Expertise Tags */}
            <div>
              <span className="text-xs font-semibold uppercase text-[#A89C86] tracking-wider block mb-2">
                Core Domains of Expertise:
              </span>
              <div className="flex flex-wrap gap-2">
                {expertiseAreas.map((area, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs bg-[#1F1738] text-[#E5D7B7] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setShowBioModal(true)}
                id="about-know-more-btn"
                className="px-6 py-3 rounded-xl text-sm font-semibold text-[#F3EFE6] bg-[#1F1735] hover:bg-[#2C214C] border border-[#D4AF37]/40 transition-all flex items-center space-x-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                <span>Know More About Astro Guru</span>
              </button>

              <button
                onClick={() => onOpenWhatsApp('Vedic Astrology Consultation with Pt. Rohit Sharma')}
                id="about-whatsapp-consult-btn"
                className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-lg flex items-center space-x-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Chat on WhatsApp</span>
              </button>

              <a
                href={`tel:${ASTROLOGER_PROFILE.phone}`}
                id="about-call-consult-btn"
                className="px-6 py-3 rounded-xl text-sm font-bold text-[#0B0914] bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#B38E1B] hover:from-[#FFF1B8] hover:to-[#C69C20] shadow-lg transition-all flex items-center space-x-2 cursor-pointer font-sans-ui"
              >
                <Phone className="w-4 h-4 text-[#0B0914]" />
                <span>Call Now</span>
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Expanded Bio Modal */}
      {showBioModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#120D24] border border-[#D4AF37]/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowBioModal(false)}
              className="absolute top-4 right-4 p-2 text-[#A89C86] hover:text-[#F3EFE6] rounded-full hover:bg-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] font-bold text-xl">
                ॐ
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-[#F3EFE6]">{ASTROLOGER_PROFILE.name}</h3>
                <p className="text-xs text-[#D4AF37]">{ASTROLOGER_PROFILE.title}</p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-[#D8CCA8] leading-relaxed">
              <p>
                Born into a revered family of Vedic scholars, {ASTROLOGER_PROFILE.name} was initiated into the study of Sanskrit, Upanishads, and the Brihat Parashara Hora Shastra at an early age. He earned the prestigious Jyotish Ratna and completed advanced Siddhanta research in Varanasi.
              </p>
              <p>
                Over the past 15+ years, Astro Guru has been conferred with prestigious accolades including the <strong>Pride National Excellence Award</strong> and the <strong>National Jyotish Pratibha Puraskar</strong> in Jaipur. He has consulted for eminent business leaders, industrialists, doctors, software architects, and thousands of couples facing marital dilemmas worldwide.
              </p>
              <h4 className="font-heading text-base font-bold text-[#F3EFE6] pt-2">Our Consultation Philosophy:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>No False Fear:</strong> Doshas like Manglik, Kaal Sarp, and Sade Sati are explained rationally with practical mitigation.</li>
                <li><strong>Precise Timelines:</strong> Utilizing Vimshottari Mahadasha and Gochar (planetary transits) to provide actionable decision dates.</li>
                <li><strong>Holistic Remedies:</strong> Integrating Vedic chanting, lifestyle adjustments, charity, and ethical gemology.</li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#D4AF37]/20 flex flex-wrap items-center justify-between gap-3">
              <a
                href={ASTROLOGER_PROFILE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#FF80AB] bg-[#E1306C]/15 hover:bg-[#E1306C]/25 border border-[#E1306C]/40 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow {ASTROLOGER_PROFILE.instagramHandle}</span>
              </a>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setShowBioModal(false);
                    onOpenWhatsApp('Consultation with Pt. Rohit Sharma');
                  }}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md cursor-pointer flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>WhatsApp</span>
                </button>

                <a
                  href={`tel:${ASTROLOGER_PROFILE.phone}`}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-[#0B0914] bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#B38E1B] shadow-md cursor-pointer flex items-center gap-1.5 font-sans-ui"
                >
                  <Phone className="w-4 h-4 text-[#0B0914]" />
                  <span>Call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
