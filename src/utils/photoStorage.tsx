import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import defaultAstrologerImage from '../assets/images/regenerated_image_1787573239190.png';

export interface GalleryPhotoItem {
  id: string;
  title: string;
  ceremony: string;
  category: string;
  imageUrl: string;
  caption?: string;
  date?: string;
  badge?: string;
}

interface AstrologerPhotoContextType {
  customPhoto: string | null;
  pridePhoto: string | null;
  jaipurPhoto: string | null;
  galleryPhotos: GalleryPhotoItem[];
  defaultPhoto: string;
  setCustomPhoto: (photoUrl: string | null) => void;
  setPridePhoto: (photoUrl: string | null) => void;
  setJaipurPhoto: (photoUrl: string | null) => void;
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

const STORAGE_KEY_CUSTOM = 'astro_guru_custom_photo_v2';
const STORAGE_KEY_PRIDE = 'astro_guru_pride_photo_v2';
const STORAGE_KEY_JAIPUR = 'astro_guru_jaipur_photo_v2';
const STORAGE_KEY_GALLERY = 'astro_guru_gallery_photos_v2';

const AstrologerPhotoContext = createContext<AstrologerPhotoContextType | undefined>(undefined);

export const AstrologerPhotoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [customPhoto, setCustomPhotoState] = useState<string | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CUSTOM);
      return saved || defaultAstrologerImage;
    } catch {
      return defaultAstrologerImage;
    }
  });

  const [pridePhoto, setPridePhotoState] = useState<string | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PRIDE);
      return saved || defaultAstrologerImage;
    } catch {
      return defaultAstrologerImage;
    }
  });

  const [jaipurPhoto, setJaipurPhotoState] = useState<string | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_JAIPUR);
      return saved || defaultAstrologerImage;
    } catch {
      return defaultAstrologerImage;
    }
  });

  const [galleryPhotos, setGalleryPhotos] = useState<GalleryPhotoItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_GALLERY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return [];
  });

  const [isUploadModalOpen, setIsUploadModalOpenState] = useState(false);
  const [uploadTargetSlot, setUploadTargetSlot] = useState<'general' | 'pride' | 'jaipur'>('general');
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhotoItem | null>(null);

  const setIsUploadModalOpen = (open: boolean, slot: 'general' | 'pride' | 'jaipur' = 'general') => {
    setUploadTargetSlot(slot);
    setIsUploadModalOpenState(open);
  };

  const setCustomPhoto = (photoUrl: string | null) => {
    setCustomPhotoState(photoUrl);
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
    setPridePhotoState(photoUrl);
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
    setJaipurPhotoState(photoUrl);
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
      id: `photo_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
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
    setGalleryPhotos(updated);
    try {
      localStorage.setItem(STORAGE_KEY_GALLERY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not persist gallery to localStorage:', e);
    }
  };

  const uploadPhoto = (file: File, targetSlot: 'general' | 'pride' | 'jaipur' = uploadTargetSlot): Promise<boolean> => {
    return new Promise((resolve) => {
      if (!file.type.startsWith('image/')) {
        resolve(false);
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result) {
          if (targetSlot === 'pride') {
            setPridePhoto(result);
            if (!customPhoto) setCustomPhoto(result);
          } else if (targetSlot === 'jaipur') {
            setJaipurPhoto(result);
            if (!customPhoto) setCustomPhoto(result);
          } else {
            setCustomPhoto(result);
          }

          // Also add to gallery
          addGalleryPhoto({
            title: targetSlot === 'pride' 
              ? 'Pride National Excellence Award' 
              : targetSlot === 'jaipur' 
              ? 'Jaipur Green Developers Award' 
              : 'Official Consultation Portrait',
            ceremony: targetSlot === 'pride'
              ? 'Pride Awards • Radisson Blu & Insights Success'
              : targetSlot === 'jaipur'
              ? 'Annual National Excellence Convention, Jaipur'
              : 'Astrology Office, Pune',
            category: 'Stage Felicitation',
            imageUrl: result,
            caption: 'Astro Love Guru Pt. Rohit Sharma honored for ethical Jyotish precision.',
            badge: targetSlot === 'pride' ? 'Pride Award' : 'National Award'
          });

          resolve(true);
        } else {
          resolve(false);
        }
      };
      reader.onerror = () => resolve(false);
      reader.readAsDataURL(file);
    });
  };

  const resetPhoto = (slot: 'general' | 'pride' | 'jaipur' = 'general') => {
    if (slot === 'pride') setPridePhoto(null);
    else if (slot === 'jaipur') setJaipurPhoto(null);
    else {
      setCustomPhoto(null);
      setPridePhoto(null);
      setJaipurPhoto(null);
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

