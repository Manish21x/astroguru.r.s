import React from 'react';
import { X, Calendar, Clock, User, Sparkles, Tag, ArrowLeft, Share2, MessageCircle, Phone } from 'lucide-react';
import { BlogPostItem } from '../types';
import { ASTROLOGER_PROFILE } from '../data/astrologyData';

interface ArticleModalProps {
  article: BlogPostItem | null;
  onClose: () => void;
  onOpenWhatsApp: (topic?: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, onOpenWhatsApp }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#120D24] border border-[#D4AF37]/40 rounded-3xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-article-modal-btn"
          className="absolute top-4 right-4 p-2 text-[#A89C86] hover:text-[#F3EFE6] rounded-full hover:bg-white/10"
          aria-label="Close article"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Meta */}
        <div className="flex items-center space-x-3 text-xs mb-3">
          <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#FFDF78] font-bold uppercase tracking-wider border border-[#D4AF37]/40">
            {article.category}
          </span>
          <span className="text-[#A89C86] flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
            {article.date}
          </span>
          <span className="text-[#A89C86] flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#F3EFE6] mb-4 leading-tight">
          {article.title}
        </h2>

        {/* Hero Article Image */}
        <div className="h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 bg-[#160E2C] border border-[#D4AF37]/20">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover filter brightness-95"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-invert max-w-none text-xs sm:text-sm text-[#D8CCA8] leading-relaxed space-y-4 whitespace-pre-line">
          {article.content}
        </div>

        {/* Tags */}
        <div className="mt-8 pt-4 border-t border-[#D4AF37]/15 flex flex-wrap items-center gap-2">
          <Tag className="w-3.5 h-3.5 text-[#D4AF37]" />
          {article.tags.map((tag, i) => (
            <span key={i} className="px-2.5 py-1 rounded-md bg-[#1B1435] text-[11px] text-[#C4B79E] border border-[#D4AF37]/15">
              #{tag}
            </span>
          ))}
        </div>

        {/* Astrologer Author Box & CTA */}
        <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-[#181130] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-left">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] font-bold">
              ॐ
            </div>
            <div>
              <div className="text-xs font-bold text-[#F3EFE6]">Written by {article.author}</div>
              <div className="text-[10px] text-[#D4AF37]">Vedic Jyotish Ratna • Pune, Maharashtra</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenWhatsApp(`Discussion regarding: ${article.title}`);
              }}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md cursor-pointer flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WhatsApp Chat</span>
            </button>

            <a
              href={`tel:${ASTROLOGER_PROFILE.phone}`}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs font-bold text-[#0B0914] bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#B38E1B] hover:from-[#FFF1B8] shadow-md cursor-pointer flex items-center justify-center gap-1.5 font-sans-ui"
            >
              <Phone className="w-4 h-4 text-[#0B0914]" />
              <span>Call Guru</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
