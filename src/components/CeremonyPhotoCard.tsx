import React from 'react';
import { Trophy, Sparkles, Award, CheckCircle2, Star, Maximize2 } from 'lucide-react';
import { useAstrologerPhoto } from '../utils/photoStorage';
import { ASTROLOGER_PROFILE } from '../data/astrologyData';
import astrologerPortrait from '../assets/images/astrologer_portrait.png';
import jaipurAwardPhoto from '../assets/images/regenerated_image_1791117433897.jpg';

interface CeremonyPhotoCardProps {
  variant?: 'hero' | 'award-section' | 'about';
  awardType?: 'pride' | 'jaipur' | 'general';
  className?: string;
}

export const CeremonyPhotoCard: React.FC<CeremonyPhotoCardProps> = ({
  variant = 'award-section',
  awardType = 'jaipur',
  className = '',
}) => {
  const { customPhoto, pridePhoto, jaipurPhoto, setLightboxPhoto } = useAstrologerPhoto();

  // Determine active photo for this specific card - permanently bundled
  const defaultPhoto = awardType === 'jaipur' ? jaipurAwardPhoto : astrologerPortrait;
  const displayPhoto = awardType === 'pride'
    ? (pridePhoto || customPhoto || defaultPhoto)
    : awardType === 'jaipur'
    ? (jaipurPhoto || customPhoto || defaultPhoto)
    : (customPhoto || defaultPhoto);

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
    }
  };

  return (
    <div className={`relative rounded-2xl overflow-hidden group ${className}`}>
      {/* Permanent Authentic Ceremony Photograph Display */}
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
            if (e.currentTarget.src !== defaultPhoto) {
              e.currentTarget.src = defaultPhoto;
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
    </div>
  );
};

