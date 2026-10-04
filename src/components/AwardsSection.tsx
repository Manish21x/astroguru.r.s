import React, { useState } from 'react';
import { Award, Trophy, Star, Sparkles, ShieldCheck, CheckCircle2, Medal, ExternalLink, ChevronRight, X, ZoomIn, MessageCircle, Phone } from 'lucide-react';
import { HONORS_AND_AWARDS, ASTROLOGER_PROFILE, AwardItem } from '../data/astrologyData';
import { CeremonyPhotoCard } from './CeremonyPhotoCard';
import { useAstrologerPhoto } from '../utils/photoStorage';
import astrologerPortrait from '../assets/images/astrologer_portrait.png';

interface AwardsSectionProps {
  onOpenWhatsApp: (topic?: string) => void;
}

export const AwardsSection: React.FC<AwardsSectionProps> = ({ onOpenWhatsApp }) => {
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);
  const { 
    lightboxPhoto, 
    setLightboxPhoto, 
    galleryPhotos,
    pridePhoto,
    jaipurPhoto 
  } = useAstrologerPhoto();


  return (
    <section id="awards" className="py-20 bg-gradient-to-b from-[#0B0914] via-[#120D26] to-[#0B0914] relative overflow-hidden border-t border-[#D4AF37]/20">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#7E3AF2]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Holy Shlok / Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider text-[#FFDF78] backdrop-blur-md">
            <Trophy className="w-4 h-4 text-[#D4AF37]" />
            <span>Honoring Astro Guru • राष्ट्रीय गौरव एवं सम्मान</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F3EFE6] tracking-tight">
            National Recognition & <span className="text-gold-gradient">Prestigious Honors</span>
          </h2>

          <p className="text-[#CBBCA0] text-base sm:text-lg">
            Felicitated by distinguished cultural institutions, national award councils, and senior Vedic scholars for unparalleled accuracy and ethical astrological guidance.
          </p>
        </div>

        {/* Visual Showcase: Astro Guru's Award Felicitation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Main Visual Feature Card 1: Pride National Award Felicitation */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#181133] to-[#0E0920] border-2 border-[#D4AF37]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              {/* Award Tag */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#D4AF37]/20 text-[#FFDF78] border border-[#D4AF37]/50 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Pride National Icon Award
                </span>
              </div>

              {/* Ceremony Photo Card Component for Pride Award */}
              <div className="mb-6">
                <CeremonyPhotoCard
                  variant="award-section"
                  awardType="pride"
                />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F3EFE6] mb-2">
                Honoring 15+ Years of Vedic Precision
              </h3>
              <p className="text-[#CBBCA0] text-sm leading-relaxed mb-6">
                Astro Love Guru Pt. Rohit Sharma was honored on the national stage in recognition of his deep research in Vimshottari Mahadasha timing and non-commercial Vedic consultation philosophy.
              </p>
            </div>

            <div className="pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs text-[#FFDF78]">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Verified National Felicitation</span>
              </div>
              <button
                onClick={() => onOpenWhatsApp('Pride National Icon Award Consultation')}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow transition-all cursor-pointer flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 text-white" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Main Visual Feature Card 2: Jaipur Green Developers Felicitation with Authentic Ceremony Photo */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#181133] to-[#0E0920] border-2 border-[#D4AF37]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-48 h-48 bg-[#9C27B0]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              {/* Award Tag */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#D4AF37]/20 text-[#FFDF78] border border-[#D4AF37]/50 flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Jaipur Green Developers Award
                </span>
              </div>

              {/* Ceremony Photo Card Component for Jaipur Award */}
              <div className="mb-6">
                <CeremonyPhotoCard
                  variant="award-section"
                  awardType="jaipur"
                />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F3EFE6] mb-2">
                Ethical & Compassionate Jyotish Leadership
              </h3>
              <p className="text-[#CBBCA0] text-sm leading-relaxed mb-6">
                Astro Love Guru Pt. Rohit Sharma was felicitated at the grand Jaipur Green Developers convention for debunking astrological fear-mongering and equipping individuals with uplifting spiritual mantras, meditation, and authentic gemological remedies.
              </p>
            </div>

            <div className="pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs text-[#FFDF78]">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Excellence in Vedic Shastra</span>
              </div>
              <button
                onClick={() => onOpenWhatsApp('Jaipur Green Developers Award Consultation')}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow transition-all cursor-pointer flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 text-white" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

        </div>

        {/* Ceremony & Stage Felicitation Photo Gallery */}
        {galleryPhotos && galleryPhotos.length > 0 && (
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F3EFE6] flex items-center gap-2">
                  <span>Honors & Stage Felicitation Gallery</span>
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                </h3>
                <p className="text-xs text-[#C5B79F] mt-0.5">
                  Authentic ceremony photographs, golden trophy felicitation, and spiritual sessions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {galleryPhotos.map((photo) => {
                const activePhotoUrl = photo.id === 'gallery-jaipur-green-award' && jaipurPhoto
                  ? jaipurPhoto
                  : photo.imageUrl;

                return (
                  <div
                    key={photo.id}
                    onClick={() => setLightboxPhoto({ ...photo, imageUrl: activePhotoUrl })}
                    className="group relative rounded-2xl overflow-hidden bg-[#120D26] border border-[#D4AF37]/30 hover:border-[#D4AF37] cursor-pointer transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex flex-col"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-black/40 relative">
                      <img
                        src={activePhotoUrl}
                        alt={photo.title}
                        className="w-full h-full object-cover object-top filter brightness-100 contrast-105 saturate-105 group-hover:scale-108 transition-all duration-500 ease-out"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          if (e.currentTarget.src !== astrologerPortrait) {
                            e.currentTarget.src = astrologerPortrait;
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0914] via-transparent to-transparent pointer-events-none" />
                    </div>
                    <div className="p-4 bg-[#0B0914] border-t border-[#D4AF37]/20 flex-1 flex flex-col justify-between">
                      <div>
                        {photo.badge && (
                          <span className="text-[10px] font-bold text-[#FFDF78] bg-[#D4AF37]/20 px-2 py-0.5 rounded border border-[#D4AF37]/30 mb-1.5 inline-block">
                            {photo.badge}
                          </span>
                        )}
                        <h4 className="text-sm font-bold text-[#F3EFE6] truncate group-hover:text-[#D4AF37] transition-colors">
                          {photo.title}
                        </h4>
                        <p className="text-xs text-[#A89C86] line-clamp-1 mt-0.5">
                          {photo.ceremony}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 4 Detailed Award Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HONORS_AND_AWARDS.map((award) => (
            <div
              key={award.id}
              onClick={() => setSelectedAward(award)}
              className="bg-[#140E29] hover:bg-[#1B1336] border border-[#D4AF37]/30 hover:border-[#D4AF37]/70 rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#D4AF37]/20 text-[#FFDF78] border border-[#D4AF37]/30">
                    {award.highlightTag}
                  </span>
                </div>

                <h4 className="font-heading font-bold text-base text-[#F3EFE6] group-hover:text-[#D4AF37] transition-colors mb-1">
                  {award.title}
                </h4>
                
                <p className="text-xs text-[#D4AF37] font-medium mb-3">
                  {award.ceremony}
                </p>

                <p className="text-xs text-[#C5B79F] line-clamp-3 leading-relaxed mb-4">
                  {award.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#D4AF37]/15 flex items-center justify-between text-xs text-[#D4AF37]">
                <span>View Full Citation</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Trust Seal Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#17102D] via-[#241744] to-[#17102D] border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shrink-0 font-serif text-2xl font-bold">
              ॐ
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold text-[#F3EFE6]">
                Consult Directly With National Awardee Astro Guru
              </h4>
              <p className="text-xs text-[#CDBFA7]">
                Experience 1-on-1 private telephonic or direct in-person consultation with personalized Janam Kundli analysis.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenWhatsApp('Consultation with National Awardee Astro Guru')}
              className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-lg whitespace-nowrap cursor-pointer flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Chat on WhatsApp</span>
            </button>

            <a
              href={`tel:${ASTROLOGER_PROFILE.phone}`}
              className="px-6 py-3 rounded-xl text-sm font-bold text-[#0B0914] bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#B38E1B] hover:from-[#FFF1B8] hover:to-[#C69C20] shadow-lg whitespace-nowrap cursor-pointer flex items-center gap-2 font-sans-ui"
            >
              <Phone className="w-4 h-4 text-[#0B0914]" />
              <span>Call Now</span>
            </a>
          </div>
        </div>

      </div>

      {/* Fullscreen Ceremony Photo Lightbox */}
      {lightboxPhoto && (
        <div 
          onClick={() => setLightboxPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#120D26] border-2 border-[#D4AF37]/60 rounded-3xl max-w-2xl w-full p-4 sm:p-6 shadow-2xl overflow-hidden"
          >
            <button
              onClick={() => setLightboxPhoto(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-[#F3EFE6] hover:bg-black/90 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative rounded-2xl overflow-hidden bg-black max-h-[60vh] flex items-center justify-center mb-4">
              <img
                src={lightboxPhoto.imageUrl}
                alt={lightboxPhoto.title}
                className="max-h-[60vh] w-auto object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-1 text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[10px] font-bold text-[#FFDF78]">
                <Award className="w-3 h-3 text-[#D4AF37]" />
                <span>{lightboxPhoto.badge || 'National Award Ceremony'}</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-[#F3EFE6]">
                {lightboxPhoto.title}
              </h3>
              <p className="text-xs text-[#D4AF37] font-medium">
                {lightboxPhoto.ceremony}
              </p>
              {lightboxPhoto.caption && (
                <p className="text-xs text-[#C5B79F] pt-1">
                  {lightboxPhoto.caption}
                </p>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-[#D4AF37]/20 flex items-center justify-end">
              <button
                onClick={() => setLightboxPhoto(null)}
                className="px-4 py-1.5 rounded-xl text-xs font-semibold bg-[#D4AF37] text-[#0B0914] hover:bg-[#FDE08B] transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Award Citation Modal */}
      {selectedAward && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#130E26] border-2 border-[#D4AF37]/50 rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/30">
                  {selectedAward.highlightTag}
                </span>
                <h3 className="font-heading text-xl font-bold text-[#F3EFE6] mt-1">
                  {selectedAward.title}
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm text-[#D8CCA8] my-6">
              <div className="p-3.5 rounded-xl bg-[#0B0914] border border-[#D4AF37]/20 space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#A89C86]">Ceremony:</span>
                  <span className="font-semibold text-[#F3EFE6]">{selectedAward.ceremony}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A89C86]">Conferred By:</span>
                  <span className="font-semibold text-[#D4AF37]">{selectedAward.presenter}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A89C86]">Domain:</span>
                  <span className="font-semibold text-[#F3EFE6]">{selectedAward.category}</span>
                </div>
              </div>

              <div>
                <h4 className="font-heading text-sm font-bold text-[#F3EFE6] mb-1">Citation of Honor:</h4>
                <p className="text-xs leading-relaxed text-[#CDBFA7]">
                  {selectedAward.description}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs text-[#FFDF78]">
                <strong>Significance:</strong> {selectedAward.significance}
              </div>
            </div>

            <div className="flex flex-wrap justify-end gap-3 pt-4 border-t border-[#D4AF37]/20">
              <button
                onClick={() => setSelectedAward(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold text-[#DCD4C4] hover:bg-white/10"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const topic = selectedAward.title;
                  setSelectedAward(null);
                  onOpenWhatsApp(topic);
                }}
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] flex items-center gap-1.5 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>WhatsApp</span>
              </button>
              <a
                href={`tel:${ASTROLOGER_PROFILE.phone}`}
                className="px-5 py-2 rounded-xl text-xs font-bold text-[#0B0914] bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#B38E1B] flex items-center gap-1.5 font-sans-ui"
              >
                <Phone className="w-4 h-4 text-[#0B0914]" />
                <span>Call</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

