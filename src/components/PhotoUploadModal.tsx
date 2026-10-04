import React, { useState, useRef, useEffect } from 'react';
import { 
  Upload, 
  X, 
  Camera, 
  Check, 
  Trash2, 
  Trophy, 
  Sparkles, 
  Award, 
  Globe, 
  Link as LinkIcon, 
  Copy, 
  Download, 
  ExternalLink, 
  AlertCircle, 
  HelpCircle,
  CheckCircle2,
  FileCode
} from 'lucide-react';
import { useAstrologerPhoto } from '../utils/photoStorage';
import { ASTROLOGER_PROFILE } from '../data/astrologyData';

export const PhotoUploadModal: React.FC = () => {
  const { 
    isUploadModalOpen, 
    setIsUploadModalOpen, 
    uploadTargetSlot,
    customPhoto, 
    pridePhoto, 
    jaipurPhoto, 
    uploadPhoto,
    setPhotoUrl,
    resetPhoto 
  } = useAstrologerPhoto();

  const [activeTab, setActiveTab] = useState<'upload' | 'url' | 'hosting-guide'>('upload');
  const [selectedSlot, setSelectedSlot] = useState<'general' | 'pride' | 'jaipur'>(uploadTargetSlot || 'general');
  const [imageUrlInput, setImageUrlInput] = useState('');
  const [urlPreviewError, setUrlPreviewError] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync slot with parent when opened
  useEffect(() => {
    if (uploadTargetSlot) {
      setSelectedSlot(uploadTargetSlot);
    }
  }, [uploadTargetSlot, isUploadModalOpen]);

  if (!isUploadModalOpen) return null;

  const currentActivePhoto = selectedSlot === 'pride'
    ? pridePhoto
    : selectedSlot === 'jaipur'
    ? jaipurPhoto
    : customPhoto;

  const isPublicUrl = currentActivePhoto?.startsWith('http://') || currentActivePhoto?.startsWith('https://');

  const handleFile = async (file: File) => {
    setErrorMsg(null);
    setSuccessMsg(null);
    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please upload a valid image file (JPEG, PNG, WEBP).');
      return;
    }

    setIsProcessing(true);
    const success = await uploadPhoto(file, selectedSlot);
    setIsProcessing(false);

    if (success) {
      setSuccessMsg('Photo uploaded and optimized successfully! Check the "Hosted Site Guide" tab to ensure it appears on your hosted website.');
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

  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    const trimmed = imageUrlInput.trim();
    if (!trimmed) {
      setErrorMsg('Please enter a valid image URL.');
      return;
    }

    if (!trimmed.startsWith('http://') && !trimmed.startsWith('https://')) {
      setErrorMsg('URL must start with https:// or http://');
      return;
    }

    const applied = setPhotoUrl(trimmed, selectedSlot);
    if (applied) {
      setSuccessMsg('Public image URL applied successfully! This image will now appear for all visitors on your hosted website.');
      setImageUrlInput('');
    } else {
      setErrorMsg('Could not apply the image URL.');
    }
  };

  const handleCopyConfigCode = () => {
    const codeSnippet = `// In src/data/astrologyData.ts, update DEFAULT_SITE_IMAGES:
export const DEFAULT_SITE_IMAGES = {
  heroPortrait: defaultAstrologerImage,
  prideAwardPhoto: defaultAstrologerImage,
  jaipurAwardPhoto: defaultAstrologerImage,
  // Paste your image URL or data URL below:
  permanentHeroUrl: '${selectedSlot === 'general' ? currentActivePhoto || '' : ''}',
  permanentPrideUrl: '${selectedSlot === 'pride' ? currentActivePhoto || '' : ''}',
  permanentJaipurUrl: '${selectedSlot === 'jaipur' ? currentActivePhoto || '' : ''}',
};`;

    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleDownloadActiveImage = () => {
    if (!currentActivePhoto) return;
    const a = document.createElement('a');
    a.href = currentActivePhoto;
    a.download = `pandit_rohit_sharma_${selectedSlot}_photo.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#120D26] border-2 border-[#D4AF37]/50 rounded-3xl max-w-2xl w-full p-5 sm:p-7 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={() => setIsUploadModalOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-full text-[#C5B79F] hover:text-[#F3EFE6] hover:bg-white/10 transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 mb-5 pr-8">
          <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/30">
                Website Photography Manager
              </span>
            </div>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-[#F3EFE6] mt-0.5">
              Astrologer & Ceremony Photos
            </h3>
          </div>
        </div>

        {/* Slot Selector Tabs */}
        <div className="grid grid-cols-3 gap-2 mb-4 p-1 rounded-xl bg-[#090714] border border-[#D4AF37]/30">
          <button
            type="button"
            onClick={() => { setSelectedSlot('general'); setErrorMsg(null); setSuccessMsg(null); }}
            className={`py-2 px-2 rounded-lg text-xs font-semibold transition-all flex flex-col sm:flex-row items-center justify-center gap-1.5 cursor-pointer ${
              selectedSlot === 'general'
                ? 'bg-gradient-to-r from-[#FDE08B] to-[#D4AF37] text-[#0B0914] shadow font-bold'
                : 'text-[#C5B79F] hover:text-[#F3EFE6] hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hero & Profile</span>
          </button>

          <button
            type="button"
            onClick={() => { setSelectedSlot('jaipur'); setErrorMsg(null); setSuccessMsg(null); }}
            className={`py-2 px-2 rounded-lg text-xs font-semibold transition-all flex flex-col sm:flex-row items-center justify-center gap-1.5 cursor-pointer ${
              selectedSlot === 'jaipur'
                ? 'bg-gradient-to-r from-[#FDE08B] to-[#D4AF37] text-[#0B0914] shadow font-bold'
                : 'text-[#C5B79F] hover:text-[#F3EFE6] hover:bg-white/5'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Jaipur Award</span>
          </button>

          <button
            type="button"
            onClick={() => { setSelectedSlot('pride'); setErrorMsg(null); setSuccessMsg(null); }}
            className={`py-2 px-2 rounded-lg text-xs font-semibold transition-all flex flex-col sm:flex-row items-center justify-center gap-1.5 cursor-pointer ${
              selectedSlot === 'pride'
                ? 'bg-gradient-to-r from-[#FDE08B] to-[#D4AF37] text-[#0B0914] shadow font-bold'
                : 'text-[#C5B79F] hover:text-[#F3EFE6] hover:bg-white/5'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Pride Award</span>
          </button>
        </div>

        {/* Slot Description */}
        <div className="bg-[#0B0914] border border-[#D4AF37]/25 rounded-xl p-3 mb-4 flex items-center justify-between text-xs text-[#C5B79F]">
          <div>
            {selectedSlot === 'general' && (
              <span>Target: <strong>Astro Love Guru Pt. Rohit Sharma Official Portrait</strong> (Hero banner, consultation cards & About section).</span>
            )}
            {selectedSlot === 'jaipur' && (
              <span>Target: <strong>Jaipur Green Developers Award Ceremony</strong> (Golden trophy felicitation photograph).</span>
            )}
            {selectedSlot === 'pride' && (
              <span>Target: <strong>Pride National Excellence Award Gala</strong> (Radisson Blu stage award ceremony photograph).</span>
            )}
          </div>
          {currentActivePhoto && (
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded border shrink-0 ml-2 ${
              isPublicUrl 
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' 
                : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
            }`}>
              {isPublicUrl ? '🌐 Cloud URL' : '💻 Local Preview'}
            </span>
          )}
        </div>

        {/* Method Mode Navigation (Upload vs URL vs Hosting Guide) */}
        <div className="flex border-b border-[#D4AF37]/30 mb-5">
          <button
            type="button"
            onClick={() => setActiveTab('upload')}
            className={`pb-2.5 px-3 text-xs font-bold transition-all border-b-2 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'upload'
                ? 'border-[#D4AF37] text-[#FFDF78]'
                : 'border-transparent text-[#9E907B] hover:text-[#F3EFE6]'
            }`}
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Upload File</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('url')}
            className={`pb-2.5 px-3 text-xs font-bold transition-all border-b-2 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'url'
                ? 'border-[#D4AF37] text-[#FFDF78]'
                : 'border-transparent text-[#9E907B] hover:text-[#F3EFE6]'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Public Image URL <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.2 rounded">Recommended for Hosting</span></span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('hosting-guide')}
            className={`pb-2.5 px-3 text-xs font-bold transition-all border-b-2 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'hosting-guide'
                ? 'border-[#D4AF37] text-[#FFDF78]'
                : 'border-transparent text-[#9E907B] hover:text-[#F3EFE6]'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Hosted Site Guide</span>
          </button>
        </div>

        {/* TAB 1: File Upload */}
        {activeTab === 'upload' && (
          <div className="space-y-4">
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-6 sm:p-8 text-center cursor-pointer transition-all ${
                dragOver
                  ? 'border-[#D4AF37] bg-[#D4AF37]/15 scale-[1.01]'
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
                    {isProcessing ? 'Optimizing & applying image...' : 'Click to select or Drag & Drop photo here'}
                  </p>
                  <p className="text-xs text-[#9E907B] mt-1">
                    Supports JPG, PNG, WEBP (automatically optimized for fast web loading)
                  </p>
                </div>

                <button
                  type="button"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-[#0B0914] bg-gradient-to-r from-[#FDE08B] to-[#D4AF37] hover:from-[#FFF1B8] hover:to-[#C69C20] shadow cursor-pointer"
                >
                  Choose Image File From Device
                </button>
              </div>
            </div>

            {/* Note on Hosted sites */}
            <div className="p-3 rounded-xl bg-[#1C1433]/70 border border-[#D4AF37]/30 flex items-start gap-2.5 text-xs text-[#C5B79F]">
              <AlertCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#F3EFE6]">Note on Hosting Your Website:</p>
                <p className="mt-0.5 text-[#A89C86]">
                  File uploads are saved in your current browser memory. To ensure your images appear permanently to all visitors when hosted on Vercel, Netlify, or custom domain, switch to the <strong>Public Image URL</strong> tab or view the <strong>Hosted Site Guide</strong>.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Public Image URL */}
        {activeTab === 'url' && (
          <div className="space-y-4">
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#0E1A38] to-[#0A071A] border border-blue-400/30 text-xs text-[#93C5FD]">
              <p className="font-bold text-[#BFDBFE] flex items-center gap-1.5 mb-1">
                <Globe className="w-4 h-4 text-cyan-400" />
                Why Public Image URLs work everywhere:
              </p>
              <p className="leading-relaxed">
                When you host your image online (on free image hosts like <strong>ImgBB</strong>, <strong>PostImages</strong>, or your cloud storage) and paste the URL here, the image loads universally on <strong>every phone, computer, and hosted website</strong> without disappearing!
              </p>
            </div>

            <form onSubmit={handleApplyUrl} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-[#F3EFE6] mb-1.5">
                  Direct Image URL (ends in .jpg, .png, .webp):
                </label>
                <div className="relative">
                  <input
                    type="url"
                    value={imageUrlInput}
                    onChange={(e) => setImageUrlInput(e.target.value)}
                    placeholder="https://i.ibb.co/example/award-photo.jpg"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090714] border border-[#D4AF37]/40 text-sm text-[#F3EFE6] placeholder-[#6E6457] focus:outline-none focus:border-[#D4AF37]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-[#0B0914] bg-gradient-to-r from-[#FDE08B] to-[#D4AF37] hover:brightness-110 shadow cursor-pointer"
                  >
                    Apply URL
                  </button>
                </div>
              </div>

              {/* Free 1-click image hosting helpers */}
              <div className="pt-2 border-t border-[#D4AF37]/20 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="text-[#9E907B]">Need a free image host?</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://imgbb.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-[#0B0914] hover:bg-[#D4AF37]/20 text-[#FFDF78] border border-[#D4AF37]/30 flex items-center gap-1 transition-colors"
                  >
                    <span>Upload to ImgBB (Free)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://postimages.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-[#0B0914] hover:bg-[#D4AF37]/20 text-[#FFDF78] border border-[#D4AF37]/30 flex items-center gap-1 transition-colors"
                  >
                    <span>PostImages.org</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* TAB 3: Hosted Site Guide & Permanent Code */}
        {activeTab === 'hosting-guide' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[#0B0914] border border-[#D4AF37]/40 text-xs space-y-2">
              <h4 className="font-heading text-sm font-bold text-[#FFDF78] flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
                Why images uploaded in preview don't appear on the hosted website:
              </h4>
              <p className="text-[#C5B79F] leading-relaxed">
                When you click "Upload Photo" in the browser, the file is saved inside your browser's private <code className="bg-[#1C1433] px-1.5 py-0.5 rounded text-[#FFDF78]">localStorage</code>.
              </p>
              <p className="text-[#C5B79F] leading-relaxed">
                When your website is built and hosted (e.g. on Vercel, Netlify, Cloud Run, or custom hosting), visitors visiting your website don't have access to your personal browser's storage! That is why the images were not showing on the hosted site.
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="text-xs font-bold text-[#F3EFE6] uppercase tracking-wider">
                Two 100% Reliable Ways to Make Images Appear on the Hosted Site:
              </h5>

              {/* Method 1 */}
              <div className="p-3 rounded-xl bg-[#0E1A38]/60 border border-blue-400/30 text-xs space-y-1.5">
                <span className="font-bold text-[#BFDBFE] flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px]">1</span>
                  Use a Public Image URL (Fastest & Zero Setup):
                </span>
                <p className="text-[#93C5FD] pl-6 leading-relaxed">
                  Upload your photo to <a href="https://imgbb.com" target="_blank" rel="noopener noreferrer" className="underline text-white font-semibold">ImgBB.com</a> (free, takes 5 seconds), copy the direct image link, and paste it into the <strong>"Public Image URL"</strong> tab. This works instantly for all visitors worldwide!
                </p>
              </div>

              {/* Method 2 */}
              <div className="p-3 rounded-xl bg-[#1C1433]/70 border border-[#D4AF37]/30 text-xs space-y-2">
                <span className="font-bold text-[#FFDF78] flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#D4AF37] text-[#0B0914] flex items-center justify-center text-[10px] font-bold">2</span>
                  Bake Permanently into Project Files:
                </span>
                <p className="text-[#C5B79F] pl-6 leading-relaxed">
                  You can copy the permanent configuration code or download your current image file to save it permanently into your project's repository.
                </p>

                <div className="pl-6 flex flex-wrap items-center gap-2 pt-1">
                  <button
                    onClick={handleCopyConfigCode}
                    className="px-3 py-1.5 rounded-lg bg-[#D4AF37]/20 hover:bg-[#D4AF37]/30 text-[#FFDF78] border border-[#D4AF37]/40 flex items-center gap-1.5 font-semibold transition-colors cursor-pointer"
                  >
                    {copiedCode ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? 'Copied to Clipboard!' : 'Copy Permanent Code Config'}</span>
                  </button>

                  {currentActivePhoto && (
                    <button
                      onClick={handleDownloadActiveImage}
                      className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#F3EFE6] border border-white/20 flex items-center gap-1.5 font-semibold transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Download Image File (.jpg)</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Feedback messages */}
        {errorMsg && (
          <div className="p-2.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs text-center flex items-center justify-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {successMsg && (
          <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs text-center flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Current Active Photo Preview & Controls */}
        <div className="mt-5 pt-4 border-t border-[#D4AF37]/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#F3EFE6] flex items-center gap-1.5">
              <span>Active Photo in "{selectedSlot.toUpperCase()}" Slot:</span>
            </span>
            <button
              onClick={() => resetPhoto(selectedSlot)}
              className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 transition-colors cursor-pointer"
              title="Reset to default bundled image"
            >
              <Trash2 className="w-3 h-3" />
              <span>Reset Slot</span>
            </button>
          </div>

          <div className="p-3 rounded-2xl bg-[#0B0914] border border-[#D4AF37]/30 flex items-center justify-between gap-3">
            <div className="flex items-center space-x-3 min-w-0">
              {currentActivePhoto ? (
                <img
                  src={currentActivePhoto}
                  alt="Active slot photo"
                  className="w-12 h-12 rounded-xl object-cover border border-[#D4AF37] shrink-0"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-12 h-12 rounded-xl bg-[#1C1433] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Camera className="w-5 h-5" />
                </div>
              )}
              <div className="min-w-0">
                <p className="text-xs font-bold text-[#F3EFE6] truncate flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{ASTROLOGER_PROFILE.name}</span>
                </p>
                <p className="text-[11px] text-[#A89C86] truncate">
                  {selectedSlot === 'pride' 
                    ? 'Pride National Award Stage Photo' 
                    : selectedSlot === 'jaipur'
                    ? 'Jaipur Green Developers Award Ceremony Photo'
                    : 'Hero Banner & Profile Picture'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {currentActivePhoto && (
                <button
                  onClick={handleDownloadActiveImage}
                  title="Download image file"
                  className="p-2 rounded-xl bg-[#1C1433] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#0B0914] border border-[#D4AF37]/40 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="mt-5 pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs">
          <span className="text-[11px] text-[#A89C86]">
            ✨ Changes apply instantly across the site
          </span>
          <button
            onClick={() => setIsUploadModalOpen(false)}
            className="px-5 py-2 rounded-xl text-xs font-bold text-[#0B0914] bg-gradient-to-r from-[#FDE08B] to-[#D4AF37] hover:brightness-110 transition-all shadow cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
