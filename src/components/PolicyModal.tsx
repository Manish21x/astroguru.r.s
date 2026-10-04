import React from 'react';
import { X, ShieldCheck, Lock, Award, FileText } from 'lucide-react';
import { ASTROLOGER_PROFILE } from '../data/astrologyData';

interface PolicyModalProps {
  policyName: string | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ policyName, onClose }) => {
  if (!policyName) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#120D24] border border-[#D4AF37]/40 rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#A89C86] hover:text-[#F3EFE6] rounded-full hover:bg-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading text-xl font-bold text-[#F3EFE6]">{policyName}</h3>
            <p className="text-xs text-[#D4AF37]">{ASTROLOGER_PROFILE.name} Consultation Protocols</p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#D8CCA8] leading-relaxed">
          {policyName === 'Privacy Policy' && (
            <>
              <p><strong>1. Non-Disclosure & Confidentiality:</strong> All birth details (Date, Time, Place of Birth), family history, financial concerns, and personal questions shared with {ASTROLOGER_PROFILE.name} are protected under strict spiritual and professional non-disclosure.</p>
              <p><strong>2. Zero Data Commercialization:</strong> We never sell, rent, or trade client phone numbers, emails, or Kundli records to third-party marketing services or advertising networks.</p>
              <p><strong>3. Secure Archival:</strong> Kundli charts generated for consultations are stored on encrypted offline storage purely for follow-up reference during your sessions.</p>
            </>
          )}

          {policyName === 'Terms of Service' && (
            <>
              <p><strong>1. Appointment Scheduling:</strong> Consultation slots are reserved upon receipt of confirmed birth data. Rescheduling is available up to 4 hours prior to the session.</p>
              <p><strong>2. Mode of Delivery:</strong> Consultations are conducted via direct telephonic phone call, detailed written Kundli report, or in-person at our office in Pune, Maharashtra.</p>
              <p><strong>3. Remedy Deliverables:</strong> Prescribed mantras, yantras, or gemstone recommendations are provided in a written summary post-consultation.</p>
            </>
          )}

          {policyName === 'Consultation Ethics' && (
            <>
              <p><strong>1. Anti-Superstition & Fear-Free:</strong> {ASTROLOGER_PROFILE.name} strictly adheres to authentic Vedic philosophy. We do not exploit fear or impose exorbitant ritual fees.</p>
              <p><strong>2. Free Will Empowerment:</strong> Astrology illuminates karmic tendencies (Prarabdha Karma), while Purushartha (conscious human effort and dharmic action) remains paramount.</p>
              <p><strong>3. Certified Gemstones:</strong> We only recommend 100% natural, untreated, lab-certified Jyotish gemstones set according to traditional Vedic muhurats.</p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-[#D4AF37]/20 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-[#0B0914] bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#B38E1B]"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
