import React, { createContext, useContext, useState, ReactNode } from 'react';
import defaultAstrologerImage from '../assets/images/regenerated_image_1787573239190.png';
import { 
  DEFAULT_SITE_IMAGES, 
  DEFAULT_GALLERY_PHOTOS, 
  GalleryPhotoItem 
} from '../data/astrologyData';

export type { GalleryPhotoItem };

interface AstrologerPhotoContextType {
  customPhoto: string;
  pridePhoto: string;
  jaipurPhoto: string;
  galleryPhotos: GalleryPhotoItem[];
  defaultPhoto: string;
  setCustomPhoto: (photoUrl: string | null) => void;
  setPridePhoto: (photoUrl: string | null) => void;
  setJaipurPhoto: (photoUrl: string | null) => void;
  setPhotoUrl: (url: string, targetSlot?: 'general' | 'pride' | 'jaipur') => boolean;
  uploadPhoto: (file: File, targetSlot?: 'general' | 'pride' | 'jaipur') => Promise<boolean>;
  addGalleryPhoto: (photo: Omit<GalleryPhotoItem, 'id'>) => void;
  deleteGalleryPhoto: (id: string) => void;
  resetPhoto: (slot?: 'general' | 'pride' | 'jaipur') => void;
  isUploadModalOpen: boolean;
  uploadTargetSlot: 'general' | 'pride' | 'jaipur';
  setIsUploadModalOpen: (open: boolean, slot?: 'general' | 'pride' | 'jaipur') => void;
  lightboxPhoto: GalleryPhotoItem | null;
  setLightboxPhoto: (photo: GalleryPhotoItem | null) => void;
}

const STORAGE_KEY_CUSTOM = 'astro_guru_custom_photo_v3';
const STORAGE_KEY_PRIDE = 'astro_guru_pride_photo_v3';
const STORAGE_KEY_JAIPUR = 'astro_guru_jaipur_photo_v3';
const STORAGE_KEY_GALLERY = 'astro_guru_gallery_photos_v3';

// Legacy keys to migrate if user already uploaded in previous session
const LEGACY_STORAGE_CUSTOM = 'astro_guru_custom_photo_v2';
const LEGACY_STORAGE_PRIDE = 'astro_guru_pride_photo_v2';
const LEGACY_STORAGE_JAIPUR = 'astro_guru_jaipur_photo_v2';

const AstrologerPhotoContext = createContext<AstrologerPhotoContextType | undefined>(undefined);

/**
 * Compresses and scales an image file to a lightweight data URL
 * to avoid exceeding browser localStorage quotas (5MB).
 */
export const compressImage = (file: File, maxWidth = 1200, maxHeight = 1200, quality = 0.85): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) {
      reject(new Error('Invalid image file type'));
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          if (width / height > maxWidth / maxHeight) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(e.target?.result as string);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(compressedDataUrl);
      };

      img.onerror = () => {
        // Fallback to raw data url if canvas load fails
        resolve(e.target?.result as string);
      };

      img.src = e.target?.result as string;
    };

    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
};

export const AstrologerPhotoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize from localStorage -> or configured permanent URLs -> or bundled default images
  const [customPhoto, setCustomPhotoState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CUSTOM) || localStorage.getItem(LEGACY_STORAGE_CUSTOM);
      return saved || DEFAULT_SITE_IMAGES.permanentHeroUrl || DEFAULT_SITE_IMAGES.heroPortrait;
    } catch {
      return DEFAULT_SITE_IMAGES.permanentHeroUrl || DEFAULT_SITE_IMAGES.heroPortrait;
    }
  });

  const [pridePhoto, setPridePhotoState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PRIDE) || localStorage.getItem(LEGACY_STORAGE_PRIDE);
      return saved || DEFAULT_SITE_IMAGES.permanentPrideUrl || DEFAULT_SITE_IMAGES.prideAwardPhoto;
    } catch {
      return DEFAULT_SITE_IMAGES.permanentPrideUrl || DEFAULT_SITE_IMAGES.prideAwardPhoto;
    }
  });

  const [jaipurPhoto, setJaipurPhotoState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_JAIPUR) || localStorage.getItem(LEGACY_STORAGE_JAIPUR);
      return saved || DEFAULT_SITE_IMAGES.permanentJaipurUrl || DEFAULT_SITE_IMAGES.jaipurAwardPhoto;
    } catch {
      return DEFAULT_SITE_IMAGES.permanentJaipurUrl || DEFAULT_SITE_IMAGES.jaipurAwardPhoto;
    }
  });

  const [galleryPhotos, setGalleryPhotos] = useState<GalleryPhotoItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_GALLERY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    return DEFAULT_GALLERY_PHOTOS;
  });

  const [isUploadModalOpen, setIsUploadModalOpenState] = useState(false);
  const [uploadTargetSlot, setUploadTargetSlot] = useState<'general' | 'pride' | 'jaipur'>('general');
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhotoItem | null>(null);

  const setIsUploadModalOpen = (open: boolean, slot: 'general' | 'pride' | 'jaipur' = 'general') => {
    setUploadTargetSlot(slot);
    setIsUploadModalOpenState(open);
  };

  const setCustomPhoto = (photoUrl: string | null) => {
    const val = photoUrl || DEFAULT_SITE_IMAGES.permanentHeroUrl || DEFAULT_SITE_IMAGES.heroPortrait;
    setCustomPhotoState(val);
    try {
      if (photoUrl) {
        localStorage.setItem(STORAGE_KEY_CUSTOM, photoUrl);
      } else {
        localStorage.removeItem(STORAGE_KEY_CUSTOM);
      }
    } catch (e) {
      console.warn('Could not persist image to localStorage:', e);
    }
  };

  const setPridePhoto = (photoUrl: string | null) => {
    const val = photoUrl || DEFAULT_SITE_IMAGES.permanentPrideUrl || DEFAULT_SITE_IMAGES.prideAwardPhoto;
    setPridePhotoState(val);
    try {
      if (photoUrl) {
        localStorage.setItem(STORAGE_KEY_PRIDE, photoUrl);
      } else {
        localStorage.removeItem(STORAGE_KEY_PRIDE);
      }
    } catch (e) {
      console.warn('Could not persist image to localStorage:', e);
    }
  };

  const setJaipurPhoto = (photoUrl: string | null) => {
    const val = photoUrl || DEFAULT_SITE_IMAGES.permanentJaipurUrl || DEFAULT_SITE_IMAGES.jaipurAwardPhoto;
    setJaipurPhotoState(val);
    try {
      if (photoUrl) {
        localStorage.setItem(STORAGE_KEY_JAIPUR, photoUrl);
      } else {
        localStorage.removeItem(STORAGE_KEY_JAIPUR);
      }
    } catch (e) {
      console.warn('Could not persist image to localStorage:', e);
    }
  };

  const addGalleryPhoto = (photo: Omit<GalleryPhotoItem, 'id'>) => {
    const newPhoto: GalleryPhotoItem = {
      ...photo,
      id: `photo_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    };
    const updated = [newPhoto, ...galleryPhotos];
    setGalleryPhotos(updated);
    try {
      localStorage.setItem(STORAGE_KEY_GALLERY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not persist gallery to localStorage:', e);
    }
  };

  const deleteGalleryPhoto = (id: string) => {
    const updated = galleryPhotos.filter(p => p.id !== id);
    setGalleryPhotos(updated.length > 0 ? updated : DEFAULT_GALLERY_PHOTOS);
    try {
      localStorage.setItem(STORAGE_KEY_GALLERY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not persist gallery to localStorage:', e);
    }
  };

  // Support direct public image URL (from ImgBB, PostImages, Cloudinary, AWS S3, etc.)
  const setPhotoUrl = (url: string, targetSlot: 'general' | 'pride' | 'jaipur' = uploadTargetSlot): boolean => {
    const trimmed = url.trim();
    if (!trimmed) return false;

    if (targetSlot === 'pride') {
      setPridePhoto(trimmed);
      setCustomPhoto(trimmed);
    } else if (targetSlot === 'jaipur') {
      setJaipurPhoto(trimmed);
      setCustomPhoto(trimmed);
    } else {
      setCustomPhoto(trimmed);
      setJaipurPhoto(trimmed);
    }

    addGalleryPhoto({
      title: targetSlot === 'pride' 
        ? 'Pride National Excellence Award' 
        : 'Jaipur Green Developers Award Ceremony',
      ceremony: targetSlot === 'pride'
        ? 'Pride Awards • Radisson Blu & Insights Success'
        : 'Annual National Excellence Convention, Jaipur',
      category: 'Stage Felicitation',
      imageUrl: trimmed,
      caption: 'Astro Love Guru Pt. Rohit Sharma receiving honors on stage.',
      badge: targetSlot === 'pride' ? 'Pride Award' : 'Jaipur Award'
    });

    return true;
  };

  // Upload and compress image file
  const uploadPhoto = async (
    file: File, 
    targetSlot: 'general' | 'pride' | 'jaipur' = uploadTargetSlot
  ): Promise<boolean> => {
    try {
      const compressedDataUrl = await compressImage(file, 1200, 1200, 0.85);
      
      if (targetSlot === 'pride') {
        setPridePhoto(compressedDataUrl);
        setCustomPhoto(compressedDataUrl);
      } else if (targetSlot === 'jaipur') {
        setJaipurPhoto(compressedDataUrl);
        setCustomPhoto(compressedDataUrl);
      } else {
        setCustomPhoto(compressedDataUrl);
        setJaipurPhoto(compressedDataUrl);
      }

      // Also add to gallery
      addGalleryPhoto({
        title: targetSlot === 'pride' 
          ? 'Pride National Excellence Award' 
          : 'Jaipur Green Developers Award Ceremony',
        ceremony: targetSlot === 'pride'
          ? 'Pride Awards • Radisson Blu & Insights Success'
          : 'Annual National Excellence Convention, Jaipur',
        category: 'Stage Felicitation',
        imageUrl: compressedDataUrl,
        caption: 'Astro Love Guru Pt. Rohit Sharma receiving the prestigious golden trophy at Jaipur Green Developers Award.',
        badge: targetSlot === 'pride' ? 'Pride Award' : 'Jaipur Award'
      });

      return true;
    } catch (err) {
      console.error('Failed to compress or upload image:', err);
      return false;
    }
  };

  const resetPhoto = (slot: 'general' | 'pride' | 'jaipur' = 'general') => {
    if (slot === 'pride') {
      setPridePhoto(null);
    } else if (slot === 'jaipur') {
      setJaipurPhoto(null);
    } else {
      setCustomPhoto(null);
      setPridePhoto(null);
      setJaipurPhoto(null);
      setGalleryPhotos(DEFAULT_GALLERY_PHOTOS);
      try {
        localStorage.removeItem(STORAGE_KEY_CUSTOM);
        localStorage.removeItem(STORAGE_KEY_PRIDE);
        localStorage.removeItem(STORAGE_KEY_JAIPUR);
        localStorage.removeItem(STORAGE_KEY_GALLERY);
      } catch {}
    }
  };

  return (
    <AstrologerPhotoContext.Provider
      value={{
        customPhoto,
        pridePhoto,
        jaipurPhoto,
        galleryPhotos,
        defaultPhoto: defaultAstrologerImage,
        setCustomPhoto,
        setPridePhoto,
        setJaipurPhoto,
        setPhotoUrl,
        uploadPhoto,
        addGalleryPhoto,
        deleteGalleryPhoto,
        resetPhoto,
        isUploadModalOpen,
        uploadTargetSlot,
        setIsUploadModalOpen,
        lightboxPhoto,
        setLightboxPhoto,
      }}
    >
      {children}
    </AstrologerPhotoContext.Provider>
  );
};

export const useAstrologerPhoto = () => {
  const context = useContext(AstrologerPhotoContext);
  if (!context) {
    throw new Error('useAstrologerPhoto must be used within an AstrologerPhotoProvider');
  }
  return context;
};
