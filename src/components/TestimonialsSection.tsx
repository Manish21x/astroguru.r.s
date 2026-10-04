import React, { useState } from 'react';
import { Star, CheckCircle, Quote, ChevronLeft, ChevronRight, MessageSquarePlus, Sparkles, X } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/astrologyData';
import { TestimonialItem } from '../types';

interface TestimonialsSectionProps {
  onOpenWhatsApp?: (topic?: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  // New review form state
  const [reviewerName, setReviewerName] = useState('');
  const [reviewerCity, setReviewerCity] = useState('');
  const [reviewerService, setReviewerService] = useState('Marriage Prediction & Kundli Milan');
  const [reviewerRating, setReviewerRating] = useState(5);
  const [reviewerText, setReviewerText] = useState('');

  const filteredTestimonials = activeCategory === 'All'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter(t => t.service.toLowerCase().includes(activeCategory.toLowerCase()));

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedFeedback(true);
    setTimeout(() => {
      setShowSubmitModal(false);
      setSubmittedFeedback(false);
      setReviewerName('');
      setReviewerCity('');
      setReviewerText('');
    }, 2000);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-[#0B0914] via-[#120D26] to-[#0B0914] relative border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
              <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
              <span>Verified Client Stories</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F3EFE6] tracking-tight">
              What Our <span className="text-gold-gradient">Clients Say</span>
            </h2>
            <p className="text-[#CBBCA0] text-sm sm:text-base">
              Real experiences from families, professionals, and business owners in Gujarat and across 35+ countries.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowSubmitModal(true)}
              id="submit-review-btn"
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#F3EFE6] bg-[#1F1735] hover:bg-[#2C214C] border border-[#D4AF37]/30 transition-all flex items-center space-x-1.5 cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#D4AF37]" />
              <span>Share Your Experience</span>
            </button>

            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                id="testimonials-prev-btn"
                className="p-2.5 rounded-xl bg-[#1F1735] text-[#D4AF37] border border-[#D4AF37]/25 hover:bg-[#D4AF37]/20 transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                id="testimonials-next-btn"
                className="p-2.5 rounded-xl bg-[#1F1735] text-[#D4AF37] border border-[#D4AF37]/25 hover:bg-[#D4AF37]/20 transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 3-Card Grid Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item, idx) => (
            <div
              key={item.id}
              className="bg-cosmic-card bg-cosmic-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative group"
            >
              <div>
                {/* Quote watermark */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-[#D4AF37]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#D4AF37]/15 group-hover:text-[#D4AF37]/30 transition-colors" />
                </div>

                {/* Service Tag */}
                <div className="text-[11px] font-semibold text-[#D4AF37] mb-3 uppercase tracking-wider">
                  {item.service}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#CDBFA7] leading-relaxed italic mb-6">
                  "{item.text}"
                </p>
              </div>

              {/* Client Profile Footer */}
              <div className="pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2E1E4D] to-[#160E2B] border border-[#D4AF37]/40 flex items-center justify-center font-bold text-xs text-[#FFDF78]">
                    {item.avatarText}
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-[#F3EFE6] flex items-center gap-1">
                      <span>{item.name}</span>
                      {item.verified && (
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" title="Verified Consultation" />
                      )}
                    </div>
                    <div className="text-[11px] text-[#A89C86]">{item.city}</div>
                  </div>
                </div>

                <div className="text-[10px] text-[#8C806D]">{item.date}</div>
              </div>

            </div>
          ))}
        </div>

        {/* Aggregate Social Proof Counter */}
        <div className="mt-12 text-center text-xs text-[#A89C86] flex flex-wrap items-center justify-center gap-4">
          <span className="flex items-center gap-1.5 text-[#E5D7B7]">
            <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
            <span>Over 1,850+ 5-Star Reviews on Google & Justdial</span>
          </span>
          <span className="hidden sm:inline text-[#D4AF37]">•</span>
          <span className="text-[#E5D7B7]">100% Verified Consultations</span>
        </div>

      </div>

      {/* Share Review Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#120D24] border border-[#D4AF37]/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setShowSubmitModal(false)}
              className="absolute top-4 right-4 p-2 text-[#A89C86] hover:text-[#F3EFE6]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 mx-auto flex items-center justify-center text-[#D4AF37] mb-2">
                <Star className="w-6 h-6 fill-[#D4AF37]" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#F3EFE6]">Share Your Consultation Feedback</h3>
              <p className="text-xs text-[#C4B79E]">Your story helps other seekers find authentic Vedic guidance.</p>
            </div>

            {submittedFeedback ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <h4 className="text-base font-bold text-[#F3EFE6]">Thank You For Your Gracious Words!</h4>
                <p className="text-xs text-[#C4B79E]">Your review has been submitted for Pt. Rohit Sharma Ji's blessings.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#E5D7B7] mb-1">Your Name</label>
                    <input
                      type="text"
                      value={reviewerName}
                      onChange={(e) => setReviewerName(e.target.value)}
                      placeholder="e.g. Dr. Rajesh Kulkarni"
                      required
                      className="w-full px-3 py-2 rounded-xl bg-[#1B1435] border border-[#D4AF37]/30 text-xs text-[#F3EFE6] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#E5D7B7] mb-1">City / Country</label>
                    <input
                      type="text"
                      value={reviewerCity}
                      onChange={(e) => setReviewerCity(e.target.value)}
                      placeholder="e.g. Pune / London"
                      required
                      className="w-full px-3 py-2 rounded-xl bg-[#1B1435] border border-[#D4AF37]/30 text-xs text-[#F3EFE6] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#E5D7B7] mb-1">Service Consulted</label>
                  <select
                    value={reviewerService}
                    onChange={(e) => setReviewerService(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#1B1435] border border-[#D4AF37]/30 text-xs text-[#F3EFE6] focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Marriage Prediction & Kundli Milan">Marriage Prediction & Kundli Milan</option>
                    <option value="Career & Business Astrology">Career & Business Astrology</option>
                    <option value="Love & Relationship Astrology">Love & Relationship Astrology</option>
                    <option value="Comprehensive Kundli Reading">Comprehensive Kundli Reading</option>
                    <option value="Vedic Vastu Guidance">Vedic Vastu Guidance</option>
                    <option value="Financial & Wealth Astrology">Financial & Wealth Astrology</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#E5D7B7] mb-1">Your Experience / Feedback</label>
                  <textarea
                    rows={3}
                    value={reviewerText}
                    onChange={(e) => setReviewerText(e.target.value)}
                    placeholder="Describe how Pt. Rohit Sharma's guidance helped your situation..."
                    required
                    className="w-full px-3 py-2 rounded-xl bg-[#1B1435] border border-[#D4AF37]/30 text-xs text-[#F3EFE6] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-xs font-bold text-[#0B0914] bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#B38E1B] hover:from-[#FFF1B8] shadow-lg cursor-pointer font-sans-ui"
                >
                  Submit Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
