import React, { useState } from 'react';
import { X, Calendar, Clock, Phone, User, MapPin, CheckCircle, ShieldCheck, Sparkles, MessageCircle, ArrowRight, Heart, Briefcase, GraduationCap, Users, Activity, HelpCircle, Coins, Instagram } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICES_DATA, ASTROLOGER_PROFILE, GUIDANCE_TOPICS } from '../data/astrologyData';
import { ConsultationBooking, GuidanceTopic } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialTopic?: GuidanceTopic;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ 
  isOpen, 
  onClose, 
  initialServiceId,
  initialTopic
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId || SERVICES_DATA[0].id);
  const [guidanceTopic, setGuidanceTopic] = useState<GuidanceTopic>(initialTopic || 'Marriage / Relationship');
  const [consultationMode, setConsultationMode] = useState<'Phone Call' | 'In-Person (Pune)' | 'Detailed PDF Kundli'>('Phone Call');
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [tob, setTob] = useState('');
  const [pob, setPob] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredSlot, setPreferredSlot] = useState('11:00 AM – 12:00 PM');
  const [notes, setNotes] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  if (!isOpen) return null;

  const selectedService = SERVICES_DATA.find(s => s.id === selectedServiceId) || SERVICES_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setBookingConfirmed(true);
      try {
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.5 }
        });
      } catch (err) {
        // silent fallback
      }
    }, 700);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Namaste Pt. Rohit Sharma Ji (Astro_love_guru),\nI want to book a consultation.\nTopic of Guidance: ${guidanceTopic}\nService: ${selectedService.title}\nName: ${clientName || 'Seeker'}\nDOB: ${dob || 'N/A'}\nTime: ${tob || 'N/A'}\nPlace: ${pob || 'N/A'}\nMode: ${consultationMode}\nSlot: ${preferredDate || 'Earliest Available'} at ${preferredSlot}\nQuery/Note: ${notes || 'Guidance required'}`
    );
    window.open(`https://wa.me/${ASTROLOGER_PROFILE.whatsapp.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#110C24] border border-[#D4AF37]/40 rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-booking-modal-btn"
          className="absolute top-4 right-4 p-2 text-[#A89C86] hover:text-[#F3EFE6] rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {bookingConfirmed ? (
          /* Confirmation View */
          <div className="py-6 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 mx-auto flex items-center justify-center text-emerald-400">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#FFDF78] text-xs font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Consultation Reserved</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F3EFE6]">
                Namaste, {clientName || 'Seeker'}!
              </h3>
              <p className="text-xs sm:text-sm text-[#CBBCA0] max-w-md mx-auto">
                Your consultation request for <strong className="text-[#D4AF37]">{guidanceTopic}</strong> has been received by Astro Love Guru Pt. Rohit Sharma's Kendra (Pune).
              </p>
            </div>

            {/* Appointment Summary Card */}
            <div className="bg-[#191133] p-4 sm:p-5 rounded-2xl border border-[#D4AF37]/25 text-left text-xs sm:text-sm space-y-2.5 max-w-md mx-auto">
              <div className="flex justify-between pb-2 border-b border-[#D4AF37]/15">
                <span className="text-[#A89C86]">Guidance Topic:</span>
                <span className="font-bold text-[#FFDF78]">{guidanceTopic}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#D4AF37]/15">
                <span className="text-[#A89C86]">Service:</span>
                <span className="font-bold text-[#F3EFE6]">{selectedService.title}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#D4AF37]/15">
                <span className="text-[#A89C86]">Mode:</span>
                <span className="font-bold text-[#D4AF37]">{consultationMode}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#D4AF37]/15">
                <span className="text-[#A89C86]">Preferred Slot:</span>
                <span className="font-bold text-[#F3EFE6]">{preferredDate || 'Earliest Available'} | {preferredSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A89C86]">Contact Phone:</span>
                <span className="font-bold text-[#F3EFE6]">{phone || 'Provided in form'}</span>
              </div>
            </div>

            {/* Next Steps Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleWhatsAppDirect}
                id="modal-confirm-whatsapp-btn"
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Instantly on WhatsApp</span>
              </button>

              <a
                href={ASTROLOGER_PROFILE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#FF80AB] bg-[#E1306C]/15 hover:bg-[#E1306C]/25 border border-[#E1306C]/30 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow on Instagram</span>
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#D8CCA8] bg-[#221844] hover:bg-[#2e2059] border border-[#D4AF37]/30 cursor-pointer"
              >
                Close
              </button>
            </div>

            <div className="flex items-center justify-center space-x-2 text-[11px] text-[#A89C86] pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Pt. Rohit Sharma's office will connect with you shortly for session verification.</span>
            </div>
          </div>
        ) : (
          /* Main Booking Form */
          <div>
            {/* Header */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] font-bold text-lg">
                ॐ
              </div>
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F3EFE6]">
                  Book Private Consultation
                </h3>
                <p className="text-xs text-[#D4AF37]">Astro_love_guru • Pt. Rohit Sharma (Pune) • +91 9352479593</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Step 1: User kis topic par guidance chahta hai (Requested by User) */}
              <div>
                <label className="block text-xs font-bold text-[#FFDF78] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>1. Aap Kis Topic Par Guidance Chahte Hain? (Choose Guidance Area)</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {GUIDANCE_TOPICS.map((topic) => {
                    const isSelected = guidanceTopic === topic;
                    return (
                      <button
                        type="button"
                        key={topic}
                        onClick={() => setGuidanceTopic(topic)}
                        className={`p-2.5 rounded-xl text-left border text-xs transition-all cursor-pointer flex items-center gap-2 ${
                          isSelected
                            ? 'bg-[#D4AF37]/25 border-[#D4AF37] text-[#FFDF78] font-bold shadow-md ring-1 ring-[#D4AF37]'
                            : 'bg-[#18112E] border-[#D4AF37]/20 text-[#C4B79E] hover:bg-[#231844] hover:border-[#D4AF37]/40'
                        }`}
                      >
                        <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#FFDF78]' : 'bg-[#D4AF37]/40'}`} />
                        <span className="text-[12px] leading-snug">{topic}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Select Specific Astrology Service */}
              <div>
                <label className="block text-xs font-bold text-[#E5D7B7] uppercase tracking-wider mb-1.5">
                  2. Select Consultation Package / Service
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#1B1435] border border-[#D4AF37]/30 text-xs sm:text-sm text-[#F3EFE6] focus:outline-none focus:border-[#D4AF37]"
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.title} ({srv.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 3: Consultation Mode */}
              <div>
                <label className="block text-xs font-bold text-[#E5D7B7] uppercase tracking-wider mb-1.5">
                  3. Consultation Mode
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { mode: 'Phone Call', icon: Phone, desc: 'Direct Voice Call' },
                    { mode: 'In-Person (Pune)', icon: MapPin, desc: 'Pune Kendra' },
                    { mode: 'Detailed PDF Kundli', icon: Sparkles, desc: 'Written Report' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        type="button"
                        key={item.mode}
                        onClick={() => setConsultationMode(item.mode as any)}
                        className={`p-3 rounded-xl text-left border flex items-center gap-2.5 transition-all cursor-pointer ${
                          consultationMode === item.mode
                            ? 'bg-[#D4AF37]/25 border-[#D4AF37] text-[#FFDF78] ring-1 ring-[#D4AF37]'
                            : 'bg-[#18112E] border-[#D4AF37]/15 text-[#C4B79E] hover:bg-[#231844]'
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${consultationMode === item.mode ? 'bg-[#D4AF37]/20 text-[#FFDF78]' : 'bg-[#120D24] text-[#D4AF37]'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-semibold text-xs leading-tight block text-[#F3EFE6]">{item.mode}</span>
                          <span className="text-[10px] text-[#A89C86]">{item.desc}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Seeker's Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#E5D7B7] mb-1">Your Full Name</label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Rahul Patil"
                    required
                    className="w-full px-3 py-2 rounded-xl bg-[#1B1435] border border-[#D4AF37]/30 text-xs text-[#F3EFE6] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#E5D7B7] mb-1">WhatsApp / Phone No.</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="9352479593"
                    required
                    className="w-full px-3 py-2 rounded-xl bg-[#1B1435] border border-[#D4AF37]/30 text-xs text-[#F3EFE6] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#E5D7B7] mb-1">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    required
                    className="w-full px-3 py-2 rounded-xl bg-[#1B1435] border border-[#D4AF37]/30 text-xs text-[#F3EFE6] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Step 5: Birth Details */}
              <div className="p-3.5 rounded-xl bg-[#150F2B] border border-[#D4AF37]/20 space-y-3">
                <div className="text-[11px] font-bold text-[#D4AF37] uppercase flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Birth Coordinates (For Accurate Vedic Kundli Analysis)</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-[#CBBCA0] mb-0.5">Date of Birth</label>
                    <input
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      required
                      className="w-full px-2.5 py-1.5 rounded-lg bg-[#120D24] border border-[#D4AF37]/30 text-xs text-[#F3EFE6] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-[#CBBCA0] mb-0.5">Exact Time of Birth</label>
                    <input
                      type="time"
                      value={tob}
                      onChange={(e) => setTob(e.target.value)}
                      required
                      className="w-full px-2.5 py-1.5 rounded-lg bg-[#120D24] border border-[#D4AF37]/30 text-xs text-[#F3EFE6] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-[#CBBCA0] mb-0.5">Place of Birth (City, State)</label>
                    <input
                      type="text"
                      value={pob}
                      onChange={(e) => setPob(e.target.value)}
                      placeholder="e.g. Pune, Maharashtra"
                      required
                      className="w-full px-2.5 py-1.5 rounded-lg bg-[#120D24] border border-[#D4AF37]/30 text-xs text-[#F3EFE6] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>
              </div>

              {/* Step 6: Preferred Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#E5D7B7] mb-1">Preferred Consultation Date</label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    required
                    className="w-full px-3 py-2 rounded-xl bg-[#1B1435] border border-[#D4AF37]/30 text-xs text-[#F3EFE6] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#E5D7B7] mb-1">Preferred Time Window</label>
                  <select
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#1B1435] border border-[#D4AF37]/30 text-xs text-[#F3EFE6] focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="10:00 AM – 11:00 AM">Morning: 10:00 AM – 11:00 AM</option>
                    <option value="11:30 AM – 12:30 PM (Abhijit)">Auspicious Abhijit: 11:30 AM – 12:30 PM</option>
                    <option value="03:00 PM – 04:00 PM">Afternoon: 03:00 PM – 04:00 PM</option>
                    <option value="05:00 PM – 06:00 PM">Evening: 05:00 PM – 06:00 PM</option>
                    <option value="07:00 PM – 08:00 PM">Late Evening: 07:00 PM – 08:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Specific Questions */}
              <div>
                <label className="block text-xs font-semibold text-[#E5D7B7] mb-1">
                  Specific Questions / Details for Pt. Rohit Sharma (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={`Apna sawal ya samasya yahan likhein regarding ${guidanceTopic}...`}
                  className="w-full px-3 py-2 rounded-xl bg-[#1B1435] border border-[#D4AF37]/30 text-xs text-[#F3EFE6] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="submit-consultation-form-btn"
                  className="w-full sm:flex-1 py-3.5 rounded-xl text-sm font-bold text-[#0B0914] bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#B38E1B] hover:from-[#FFF1B8] hover:to-[#C69C20] shadow-xl flex items-center justify-center space-x-2 cursor-pointer font-sans-ui"
                >
                  {isSubmitting ? (
                    <span>Registering Consultation...</span>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 text-[#0B0914]" />
                      <span>Confirm & Book Consultation</span>
                      <ArrowRight className="w-4 h-4 text-[#0B0914]" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  id="direct-whatsapp-booking-btn"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-[#25D366] bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: 9352479593</span>
                </button>
              </div>

              <div className="flex items-center justify-center space-x-2 text-[11px] text-[#A89C86]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Strict Non-Disclosure Guarantee • Pune, Maharashtra • No Hidden Charges</span>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};

