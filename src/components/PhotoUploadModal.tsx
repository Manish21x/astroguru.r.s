import React, { useState, useRef } from 'react';
import { Upload, X, Camera, Check, Image as ImageIcon, Trash2, Trophy, Sparkles, Award, Star } from 'lucide-react';
import { useAstrologerPhoto } from '../utils/photoStorage';

export const PhotoUploadModal: React.FC = () => {
  const { 
    isUploadModalOpen, 
    setIsUploadModalOpen, 
    uploadTargetSlot,
    customPhoto, 
    pridePhoto,
    jaipurPhoto,
    galleryPhotos,
    uploadPhoto, 
    resetPhoto 
  } = useAstrologerPhoto();

  const [selectedSlot, setSelectedSlot] = useState<'general' | 'pride' | 'jaipur'>(uploadTargetSlot || 'general');
  const [dragOver, setDragOver] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync with prop when opened
  React.useEffect(() => {
    if (uploadTargetSlot) {
      setSelectedSlot(uploadTargetSlot);
    }
  }, [uploadTargetSlot, isUploadModalOpen]);

  if (!isUploadModalOpen) return null;

  const handleFile = async (file: File) => {
    setErrorMsg(null);
    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please upload a valid image file (JPEG, PNG, WEBP).');
      return;
    }

    setIsProcessing(true);
    const success = await uploadPhoto(file, selectedSlot);
    setIsProcessing(false);

    if (success) {
      setIsUploadModalOpen(false);
    } else {
      setErrorMsg('Failed to process the photo. Please try another image.');
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#120D26] border-2 border-[#D4AF37]/50 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={() => setIsUploadModalOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-full text-[#C5B79F] hover:text-[#F3EFE6] hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/30">
              Honors & Stage Photography
            </span>
            <h3 className="font-heading text-xl font-bold text-[#F3EFE6] mt-0.5">
              Add Ceremony or Portrait Photo
            </h3>
          </div>
        </div>

        {/* Slot Selector Tabs */}
        <div className="grid grid-cols-3 gap-2 mb-5 p-1 rounded-xl bg-[#090714] border border-[#D4AF37]/30">
          <button
            type="button"
            onClick={() => setSelectedSlot('pride')}
            className={`py-2 px-2.5 rounded-lg text-xs font-semibold transition-all flex flex-col sm:flex-row items-center justify-center gap-1 ${
              selectedSlot === 'pride'
                ? 'bg-gradient-to-r from-[#FDE08B] to-[#D4AF37] text-[#0B0914] shadow'
                : 'text-[#C5B79F] hover:text-[#F3EFE6] hover:bg-white/5'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Pride Award</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedSlot('jaipur')}
            className={`py-2 px-2.5 rounded-lg text-xs font-semibold transition-all flex flex-col sm:flex-row items-center justify-center gap-1 ${
              selectedSlot === 'jaipur'
                ? 'bg-gradient-to-r from-[#FDE08B] to-[#D4AF37] text-[#0B0914] shadow'
                : 'text-[#C5B79F] hover:text-[#F3EFE6] hover:bg-white/5'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Jaipur Award</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedSlot('general')}
            className={`py-2 px-2.5 rounded-lg text-xs font-semibold transition-all flex flex-col sm:flex-row items-center justify-center gap-1 ${
              selectedSlot === 'general'
                ? 'bg-gradient-to-r from-[#FDE08B] to-[#D4AF37] text-[#0B0914] shadow'
                : 'text-[#C5B79F] hover:text-[#F3EFE6] hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hero / All</span>
          </button>
        </div>

        <p className="text-xs text-[#C5B79F] mb-4 leading-relaxed">
          {selectedSlot === 'pride' && (
            <span>Attach the <strong>Pride National Excellence Award (Radisson Blu Stage Photo)</strong> with emerald green kurta and crystal trophy.</span>
          )}
          {selectedSlot === 'jaipur' && (
            <span>Attach the <strong>Jaipur Green Developers Award Ceremony</strong> photograph with the golden trophy.</span>
          )}
          {selectedSlot === 'general' && (
            <span>Upload Astro Love Guru Pt. Rohit Sharma’s official portrait for the Hero banner and consultation cards.</span>
          )}
        </p>

        {/* Drag and Drop Zone */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
            dragOver
              ? 'border-[#D4AF37] bg-[#D4AF37]/10 scale-[1.01]'
              : 'border-[#D4AF37]/40 hover:border-[#D4AF37] bg-[#0A0714]/80 hover:bg-[#0A0714]'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFile(e.target.files[0]);
              }
            }}
          />

          <div className="flex flex-col items-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shadow-inner">
              <Upload className="w-6 h-6" />
            </div>

            <div>
              <p className="text-sm font-bold text-[#F3EFE6]">
                {isProcessing ? 'Processing image...' : 'Click to browse or Drag & Drop photo here'}
              </p>
              <p className="text-xs text-[#9E907B] mt-1">
                Supports JPG, JPEG, PNG, WebP
              </p>
            </div>

            <button
              type="button"
              className="px-4 py-2 rounded-xl text-xs font-bold text-[#0B0914] bg-gradient-to-r from-[#FDE08B] to-[#D4AF37] hover:from-[#FFF1B8] hover:to-[#C69C20] shadow cursor-pointer"
            >
              Select Image From Device
            </button>
          </div>
        </div>

        {errorMsg && (
          <p className="text-xs text-rose-400 mt-3 text-center">{errorMsg}</p>
        )}

        {/* Existing Photos Showcase & Reset */}
        <div className="mt-5 space-y-2">
          {pridePhoto && (
            <div className="p-3 rounded-xl bg-[#0B0914] border border-[#D4AF37]/30 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={pridePhoto}
                  alt="Pride Award Photo"
                  className="w-10 h-10 rounded-lg object-cover border border-[#D4AF37]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-xs font-bold text-[#F3EFE6] flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-400" />
                    Pride National Award Photo Active
                  </p>
                  <p className="text-[10px] text-[#A89C86]">Radisson Blu Stage Felicitation</p>
                </div>
              </div>
              <button
                onClick={() => resetPhoto('pride')}
                className="p-1.5 rounded-lg text-rose-400 hover:bg-rose-500/10 transition-colors text-xs"
                title="Remove photo"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {jaipurPhoto && (
            <div className="p-3 rounded-xl bg-[#0B0914] border border-[#D4AF37]/30 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={jaipurPhoto}
                  alt="Jaipur Award Photo"
                  className="w-10 h-10 rounded-lg object-cover border border-[#D4AF37]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-xs font-bold text-[#F3EFE6] flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-400" />
                    Jaipur Convention Photo Active
                  </p>
                  <p className="text-[10px] text-[#A89C86]">Golden Trophy Ceremony</p>
                </div>
              </div>
              <button
                onClick={() => resetPhoto('jaipur')}
                className="p-1.5 rounded-lg text-rose-400 hover:bg-rose-500/10 transition-colors text-xs"
                title="Remove photo"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {customPhoto && !pridePhoto && !jaipurPhoto && (
            <div className="p-3 rounded-xl bg-[#0B0914] border border-[#D4AF37]/30 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={customPhoto}
                  alt="Custom Photo"
                  className="w-10 h-10 rounded-lg object-cover border border-[#D4AF37]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-xs font-bold text-[#F3EFE6] flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-400" />
                    Official Astrologer Portrait Active
                  </p>
                  <p className="text-[10px] text-[#A89C86]">Applied across Hero and profile</p>
                </div>
              </div>
              <button
                onClick={() => resetPhoto('general')}
                className="p-1.5 rounded-lg text-rose-400 hover:bg-rose-500/10 transition-colors text-xs"
                title="Remove photo"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="mt-5 pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between">
          <span className="text-[11px] text-[#A89C86]">
            ✨ Saved securely in local storage
          </span>
          <button
            onClick={() => setIsUploadModalOpen(false)}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-[#DCD4C4] hover:bg-white/10 transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
