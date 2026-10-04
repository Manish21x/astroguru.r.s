import React from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles, HeartHandshake, Compass, Gem, Flame, Globe, TrendingUp } from 'lucide-react';
import { BLOG_POSTS_DATA } from '../data/astrologyData';
import { BlogPostItem } from '../types';

interface BlogSectionProps {
  onSelectArticle: (article: BlogPostItem) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectArticle }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Marriage Astrology':
        return <HeartHandshake className="w-3.5 h-3.5 text-[#FFDF78]" />;
      case 'Planetary Transits':
        return <Globe className="w-3.5 h-3.5 text-[#FFDF78]" />;
      case 'Vastu Shastra':
        return <Compass className="w-3.5 h-3.5 text-[#FFDF78]" />;
      case 'Career Astrology':
        return <TrendingUp className="w-3.5 h-3.5 text-[#FFDF78]" />;
      case 'Vedic Remedies':
        return <Gem className="w-3.5 h-3.5 text-[#FFDF78]" />;
      case 'Spiritual Growth':
        return <Flame className="w-3.5 h-3.5 text-[#FFDF78]" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-[#FFDF78]" />;
    }
  };

  return (
    <section id="blog" className="py-20 bg-[#0B0914] relative border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Vedic Knowledge Portal</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F3EFE6] tracking-tight">
            Latest <span className="text-gold-gradient">Astrology Insights</span>
          </h2>
          <p className="text-[#CBBCA0] text-base sm:text-lg">
            Ancient Sanskrit Jyotish teachings, planetary transit deep dives, and scriptural clarity for modern life.
          </p>
        </div>

        {/* 6 Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS_DATA.map((post) => (
            <article
              key={post.id}
              id={`blog-card-${post.id}`}
              className="bg-cosmic-card bg-cosmic-card-hover rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 border border-[#D4AF37]/20 group shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/10"
            >
              <div>
                {/* Article Image with Topic-Accurate Category Overlay */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#160F2E]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-95 contrast-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0914] via-[#0B0914]/30 to-transparent" />
                  
                  {/* Topic Pill Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#0B0914]/90 text-[#FFDF78] border border-[#D4AF37]/50 backdrop-blur-md shadow-md flex items-center gap-1.5">
                    {getCategoryIcon(post.category)}
                    <span>{post.category}</span>
                  </span>
                </div>

                {/* Article Content */}
                <div className="p-6 space-y-3">
                  {/* Meta: Read time & Date */}
                  <div className="flex items-center space-x-3 text-[11px] text-[#A89C86]">
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar className="w-3 h-3 text-[#D4AF37]" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3 h-3 text-[#D4AF37]" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-bold text-[#F3EFE6] group-hover:text-[#FFDF78] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-[#C4B79E] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Link Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-[#D4AF37]/10 flex items-center justify-between">
                <span className="text-[11px] text-[#A89C86] font-medium">By {post.author}</span>
                
                <button
                  onClick={() => onSelectArticle(post)}
                  id={`read-article-${post.id}`}
                  className="text-xs font-bold text-[#FFDF78] hover:text-[#FFF] hover:underline transition-colors flex items-center space-x-1 cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
