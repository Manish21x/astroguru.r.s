import React from 'react';
import { Trophy, Sparkles, Award, Camera, Upload, CheckCircle2, Star, Maximize2, ExternalLink } from 'lucide-react';
import { useAstrologerPhoto } from '../utils/photoStorage';
import { ASTROLOGER_PROFILE } from '../data/astrologyData';
import defaultAstrologerImage from '../assets/images/regenerated_image_1787573239190.png';

interface CeremonyPhotoCardProps {
  variant?: 'hero' | 'award-section' | 'about';
  awardType?: 'pride' | 'jaipur' | 'general';
  className?: string;
  onOpenUpload?: (slot: 'general' | 'pride' | 'jaipur') => void;
}

export const CeremonyPhotoCard: React.FC<CeremonyPhotoCardProps> = ({
  variant = 'award-section',
  awardType = 'jaipur',
  className = '',
  onOpenUpload
}) => {
  const { customPhoto, pridePhoto, jaipurPhoto, setIsUploadModalOpen, setLightboxPhoto } = useAstrologerPhoto();

  // Determine active photo for this specific card
  const displayPhoto = awardType === 'pride'
    ? (pridePhoto || customPhoto)
    : awardType === 'jaipur'
    ? (jaipurPhoto || customPhoto)
    : customPhoto;

  const handleUploadClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const slot = awardType === 'pride' ? 'pride' : awardType === 'jaipur' ? 'jaipur' : 'general';
    if (onOpenUpload) {
      onOpenUpload(slot);
    } else {
      setIsUploadModalOpen(true, slot);
    }
  };

  const handleEnlargeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (displayPhoto) {
      setLightboxPhoto({
        id: awardType,
        title: awardType === 'pride' ? 'Pride National Excellence Award' : 'Jaipur Green Developers Award',
        ceremony: awardType === 'pride' ? 'Pride Awards Season 7 • Radisson Blu & Insights Success' : 'Jaipur National Excellence Convention',
        category: 'Stage Felicitation Ceremony',
        imageUrl: displayPhoto,
        caption: `Astro Love Guru ${ASTROLOGER_PROFILE.name} receiving national honor on stage.`,
        badge: awardType === 'pride' ? 'Pride National Award' : 'Jaipur Convention'
      });
    } else {
      handleUploadClick(e);
    }
  };

  return (
    <div className={`relative rounded-2xl overflow-hidden group ${className}`}>
      {displayPhoto ? (
        // Custom / Active Photograph Display
        <div 
          onClick={handleEnlargeClick}
          className="relative w-full h-full min-h-[360px] bg-[#0A0714] overflow-hidden flex items-center justify-center cursor-pointer"
        >
          <img
            src={displayPhoto}
            alt={`${ASTROLOGER_PROFILE.name} - ${awardType === 'pride' ? 'Pride National Award' : 'Jaipur Convention Award'}`}
            className="w-full h-full object-cover object-top filter brightness-100 contrast-105 group-hover:scale-103 transition-transform duration-500"
            referrerPolicy="no-referrer"
            onError={(e) => {
              if (e.currentTarget.src !== defaultAstrologerImage) {
                e.currentTarget.src = defaultAstrologerImage;
              }
            }}
          />

          {/* Elegant Top & Bottom Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0914] via-transparent to-[#0B0914]/50 pointer-events-none" />

          {/* Top Ceremony Badge */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#0B0914]/90 backdrop-blur-md border border-[#D4AF37]/50 text-[11px] font-bold text-[#FFDF78] shadow-lg">
              {awardType === 'pride' ? (
                <>
                  <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Pride National Award • Season 7</span>
                </>
              ) : (
                <>
                  <Trophy className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Jaipur Green Developers Award</span>
                </>
              )}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleEnlargeClick}
                title="View Fullscreen"
                className="p-1.5 rounded-lg bg-[#0B0914]/80 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#0B0914] border border-[#D4AF37]/40 transition-colors shadow cursor-pointer"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
              <button
                onClick={handleUploadClick}
                title="Change or upload new photo"
                className="p-1.5 rounded-lg bg-[#0B0914]/80 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#0B0914] border border-[#D4AF37]/40 transition-colors shadow cursor-pointer"
              >
                <Camera className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bottom Title on Photo */}
          <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0E0A1E]/95 backdrop-blur-md border border-[#D4AF37]/40 shadow-xl z-10">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold font-heading text-[#F3EFE6] flex items-center gap-1.5">
                  {ASTROLOGER_PROFILE.name}
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                </h4>
                <p className="text-[11px] text-[#D4AF37]">
                  {awardType === 'pride' 
                    ? 'Presented by Radisson Blu • Powered by Insights Success' 
                    : 'National Excellence Felicitation Ceremony'}
                </p>
              </div>
              <span className="text-[10px] bg-[#D4AF37]/25 text-[#FFDF78] font-bold px-2 py-0.5 rounded border border-[#D4AF37]/40">
                Official Photo
              </span>
            </div>
          </div>
        </div>
      ) : awardType === 'pride' ? (
        // High-Fidelity Pride National Award Stage Ceremony Visual
        <div className="relative w-full h-full min-h-[360px] bg-gradient-to-b from-[#0D1527] via-[#0E1A38] to-[#0A071A] p-5 flex flex-col justify-between overflow-hidden border border-[#D4AF37]/30">
          
          {/* Stage Backdrop with Pride & Chakra Emblem */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#10244D] to-transparent flex flex-col items-center pt-2.5 opacity-95">
            <div className="px-4 py-1 rounded-full bg-[#0A1636]/90 border border-[#D4AF37]/40 text-center shadow-md flex items-center gap-2">
              <span className="text-xs font-serif text-[#D4AF37]">🇮🇳</span>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFDF78]">
                PRIDE NATIONAL AWARDS • SEASON 7
              </span>
            </div>
            <span className="text-[9px] text-[#93C5FD] mt-0.5">Presented by Radisson Blu • Powered by Insights Success</span>
          </div>

          {/* Spotlights */}
          <div className="absolute top-2 left-4 w-36 h-36 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute top-2 right-4 w-36 h-36 bg-rose-500/15 rounded-full blur-2xl pointer-events-none" />

          {/* Top Tag & Attach Action */}
          <div className="relative z-10 flex items-center justify-between mt-8">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#D4AF37]/20 text-[#FFDF78] border border-[#D4AF37]/40 flex items-center gap-1">
              <Award className="w-3 h-3 text-[#D4AF37]" />
              National Pride Honor
            </span>

            <button
              onClick={handleUploadClick}
              className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-[#D4AF37] hover:bg-[#FDE08B] text-[#0B0914] text-[11px] font-bold shadow transition-all cursor-pointer"
            >
              <Upload className="w-3 h-3" />
              <span>Attach Pride Photo</span>
            </button>
          </div>

          {/* Central Stage Trophy Presentation Scene */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center py-2">
            <div className="relative mb-3 flex items-center justify-center gap-3">
              
              {/* Astro Guru in Emerald Green Kurta & Rudraksha */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#022C22] p-1 shadow-2xl flex items-center justify-center border-2 border-[#D4AF37]">
                <div className="w-full h-full rounded-xl bg-gradient-to-b from-[#06392B] to-[#031B14] flex flex-col items-center justify-center p-1.5">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[10px] text-[#FFDF78] font-bold mb-0.5">
                    ॐ
                  </div>
                  <span className="text-[11px] font-extrabold text-[#F3EFE6] leading-tight">Pt. Rohit Sharma</span>
                  <span className="text-[8px] text-[#34D399] font-medium">Emerald Kurta • Mala</span>
                </div>
              </div>

              {/* Crystal Trophy in Center */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-10 h-14 rounded-lg bg-gradient-to-b from-cyan-100 via-[#E0F2FE] to-[#BAE6FD] p-1 shadow-xl flex flex-col items-center justify-center border border-white text-[#0B0914]">
                  <Award className="w-5 h-5 text-blue-900 mb-0.5" />
                  <span className="text-[6px] font-black text-blue-950">PRIDE</span>
                </div>
                <div className="w-8 h-1.5 bg-[#0B0914] rounded-sm mt-0.5" />
              </div>

              {/* Celebrity Host in Maroon Gown */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#881337] via-[#9F1239] to-[#4C0519] p-1 shadow-xl flex items-center justify-center border border-rose-400/40">
                <div className="w-full h-full rounded-xl bg-gradient-to-b from-[#4C0519] to-[#27030D] flex flex-col items-center justify-center p-1">
                  <span className="text-[10px] font-bold text-[#F3EFE6]">Celebrity Host</span>
                  <span className="text-[8px] text-rose-300">Maroon Gown</span>
                </div>
              </div>

            </div>

            <div className="space-y-1">
              <h4 className="font-heading text-base font-bold text-[#F3EFE6]">
                Pride National Excellence Stage Felicitation
              </h4>
              <p className="text-xs text-[#CDBFA7] max-w-xs leading-relaxed">
                Awarded for remarkable precision in Love, Marriage Compatibility & Vimshottari Dasha timing.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="relative z-10 p-3 rounded-xl bg-[#0B0914]/90 backdrop-blur-md border border-[#D4AF37]/30 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs text-[#FFDF78]">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>Radisson Blu Stage Felicitation</span>
            </div>

            <button
              onClick={handleUploadClick}
              className="text-[11px] font-bold text-[#0B0914] bg-gradient-to-r from-[#FDE08B] to-[#D4AF37] hover:from-[#FFF1B8] hover:to-[#C69C20] px-3 py-1.5 rounded-lg shadow cursor-pointer transition-all flex items-center gap-1"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Attach Pic</span>
            </button>
          </div>

        </div>
      ) : (
        // High-Fidelity Jaipur Green Developers Stage Visual
        <div className="relative w-full h-full min-h-[360px] bg-gradient-to-b from-[#09112E] via-[#0E1A42] to-[#0A071A] p-5 flex flex-col justify-between overflow-hidden border border-[#D4AF37]/30">
          
          {/* Backdrop Banner: JAIPUR GREEN DEVELOPERS */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0A163B] to-transparent flex flex-col items-center pt-3 opacity-90">
            <div className="px-4 py-1 rounded-md bg-[#0A1D4E]/80 border border-blue-400/30 text-center shadow-md">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 flex items-center justify-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                JAIPUR GREEN DEVELOPERS
              </div>
              <div className="text-[9px] font-semibold text-blue-200 tracking-wider">
                ANNUAL EXCELLENCE AWARDS
              </div>
            </div>
          </div>

          {/* Stage Spotlights */}
          <div className="absolute top-4 left-6 w-32 h-32 bg-amber-400/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute top-4 right-6 w-32 h-32 bg-blue-400/15 rounded-full blur-2xl pointer-events-none" />

          {/* Top Quick Actions */}
          <div className="relative z-10 flex items-center justify-between mt-8">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#D4AF37]/20 text-[#FFDF78] border border-[#D4AF37]/40 flex items-center gap-1">
              <Award className="w-3 h-3 text-[#D4AF37]" />
              Felicitation Ceremony
            </span>

            <button
              onClick={handleUploadClick}
              className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-[#D4AF37] hover:bg-[#FDE08B] text-[#0B0914] text-[11px] font-bold shadow transition-all cursor-pointer"
            >
              <Upload className="w-3 h-3" />
              <span>Attach Jaipur Pic</span>
            </button>
          </div>

          {/* Central Ceremony Tribute Scene */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center py-2">
            <div className="relative mb-3 flex items-center justify-center gap-2">
              
              {/* Astro Guru Avatar in Yellow Kurta */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-b from-[#F59E0B] via-[#D97706] to-[#92400E] p-1 shadow-2xl flex items-center justify-center">
                <div className="w-full h-full rounded-xl bg-gradient-to-b from-[#251A08] to-[#120B04] flex flex-col items-center justify-center p-2 border border-[#FDE08B]/40">
                  <div className="w-5 h-5 rounded-full bg-[#E11D48]/30 border border-[#FDE08B] flex items-center justify-center text-[10px] text-[#FDE08B] font-bold mb-0.5">
                    ।
                  </div>
                  <span className="text-[11px] font-extrabold text-[#F3EFE6] leading-tight">
                    Pt. Rohit Sharma
                  </span>
                  <div className="mt-0.5 px-1.5 py-0.5 rounded bg-[#F59E0B]/20 border border-[#F59E0B]/50 text-[7px] text-[#FDE08B] font-medium">
                    National Awardee
                  </div>
                </div>
              </div>

              {/* Golden Trophy in Middle */}
              <div className="flex flex-col items-center justify-center px-1">
                <div className="w-11 h-14 rounded-lg bg-gradient-to-b from-[#FDE08B] via-[#D4AF37] to-[#855B06] p-0.5 shadow-xl flex flex-col items-center justify-center text-[#0B0914]">
                  <Trophy className="w-5 h-5 text-[#0B0914] mb-0.5" />
                  <span className="text-[6px] font-black uppercase text-[#0B0914]">AWARD</span>
                </div>
                <div className="w-9 h-1.5 bg-[#0B0914] border border-[#D4AF37] rounded-sm mt-0.5" />
              </div>

              {/* Dignitary Presentation side */}
              <div className="relative hidden sm:block">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-b from-[#991B1B] via-[#5B1313] to-[#1F0707] p-1 shadow-lg flex items-center justify-center">
                  <div className="w-full h-full rounded-xl bg-gradient-to-b from-[#2A0808] to-[#150404] flex flex-col items-center justify-center p-1.5 border border-red-400/30">
                    <span className="text-[10px] font-bold text-[#F3EFE6]">Dignitary</span>
                    <span className="text-[8px] text-red-300">Award Presenter</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="space-y-1">
              <h4 className="font-heading text-base font-bold text-[#F3EFE6]">
                Jaipur Green Developers Award Felicitation
              </h4>
              <p className="text-xs text-[#CDBFA7] max-w-xs leading-relaxed">
                {ASTROLOGER_PROFILE.name} receiving the prestigious Golden Trophy at the Jaipur National Convention.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="relative z-10 p-3 rounded-xl bg-[#0B0914]/90 backdrop-blur-md border border-[#D4AF37]/30 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs text-[#FFDF78]">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>Authentic Stage Felicitation</span>
            </div>

            <button
              onClick={handleUploadClick}
              className="text-[11px] font-bold text-[#0B0914] bg-gradient-to-r from-[#FDE08B] to-[#D4AF37] hover:from-[#FFF1B8] hover:to-[#C69C20] px-3 py-1.5 rounded-lg shadow cursor-pointer transition-all flex items-center gap-1"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Upload Photo</span>
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

