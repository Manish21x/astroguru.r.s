import React from 'react';
import { X, CheckCircle, Sparkles, Clock, Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';
import { ASTROLOGER_PROFILE } from '../data/astrologyData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenWhatsApp: (topic?: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose, onOpenWhatsApp }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#120D26] border border-[#D4AF37]/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-service-modal-btn"
          className="absolute top-4 right-4 p-2 text-[#A89C86] hover:text-[#F3EFE6] rounded-full hover:bg-white/10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">{service.category} Astrology</div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F3EFE6]">{service.title}</h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-6 text-sm text-[#D8CCA8]">
          <p className="leading-relaxed text-sm sm:text-base text-[#F3EFE6]/90">
            {service.fullDesc}
          </p>

          {/* Benefits Section */}
          <div className="bg-[#191133] p-5 rounded-2xl border border-[#D4AF37]/20 space-y-3">
            <h4 className="font-heading text-sm font-bold text-[#D4AF37] uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
              <span>What You Receive During The Session:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start space-x-2 text-xs text-[#E5D7B7]">
                  <span className="text-[#D4AF37] font-bold mt-0.5">•</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vedic Remedies Section */}
          <div className="bg-[#191133] p-5 rounded-2xl border border-[#D4AF37]/20 space-y-3">
            <h4 className="font-heading text-sm font-bold text-[#FFDF78] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Scriptural Remedies & Guidance Included:</span>
            </h4>
            <div className="space-y-2">
              {service.remedies.map((remedy, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs text-[#CBBCA0]">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{remedy}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Duration & Confidentiality Info */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#A89C86] pt-2 border-t border-[#D4AF37]/15">
            <div className="flex items-center space-x-1.5 text-[#D4AF37]">
              <Clock className="w-4 h-4" />
              <span>Session Duration: {service.duration}</span>
            </div>
            <div className="flex items-center space-x-1 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Confidential Private Telephonic / Direct Session</span>
            </div>
          </div>
        </div>

        {/* Actions Footer */}
        <div className="mt-8 pt-4 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-[#D8CCA8] bg-[#1C1433] hover:bg-[#281C48] border border-[#D4AF37]/20 cursor-pointer"
          >
            Close
          </button>

          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenWhatsApp(service.title);
              }}
              id="service-detail-whatsapp-btn"
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Chat on WhatsApp</span>
            </button>

            <a
              href={`tel:${ASTROLOGER_PROFILE.phone}`}
              id="service-detail-call-btn"
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#0B0914] bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#B38E1B] hover:from-[#FFF1B8] shadow-lg flex items-center justify-center space-x-2 cursor-pointer font-sans-ui"
            >
              <Phone className="w-4 h-4 text-[#0B0914]" />
              <span>Call Now</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
