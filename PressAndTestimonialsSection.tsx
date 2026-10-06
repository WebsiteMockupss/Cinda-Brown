import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight, Award } from 'lucide-react';
import { PRESS_ITEMS, TESTIMONIALS, PressItem } from '../data/content';

export const PressAndTestimonialsSection: React.FC = () => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [selectedPress, setSelectedPress] = useState<PressItem>(PRESS_ITEMS[0]);

  // Autoplay slider quietly
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonialIdx(prev => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setActiveTestimonialIdx(prev => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIdx(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[activeTestimonialIdx];

  return (
    <section id="press" className="py-28 md:py-36 bg-[#0D0D0D] text-[#FAF8F5] overflow-hidden">
      {/* 9. As Seen In: Press Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[#A88B5C]" />
            <span className="font-body text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-[#A88B5C]">
              Editorial Recognition &bull; As Seen In
            </span>
          </div>
          <span className="font-editorial text-xs italic text-white/50">
            Selected Publications & Awards
          </span>
        </div>

        {/* Press Badges Infinite/Flowing Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {PRESS_ITEMS.map((press) => {
            const isSelected = selectedPress.name === press.name;
            return (
              <button
                key={press.name}
                onClick={() => setSelectedPress(press)}
                className={`p-5 text-center border transition-all duration-300 flex flex-col items-center justify-center gap-2 group cursor-pointer ${
                  isSelected
                    ? 'border-[#A88B5C] bg-[#171717] text-white shadow-xl'
                    : 'border-white/10 bg-[#0D0D0D] text-white/50 hover:text-white hover:border-white/30'
                }`}
              >
                <Award className={`w-5 h-5 transition-colors ${isSelected ? 'text-[#A88B5C]' : 'text-white/30 group-hover:text-[#A88B5C]'}`} />
                <span className="font-editorial text-sm tracking-wider uppercase font-medium">
                  {press.name}
                </span>
                <span className="font-body text-[9px] text-[#A88B5C] uppercase tracking-widest">
                  {press.date}
                </span>
              </button>
            );
          })}
        </div>

        {/* Featured Press Excerpt Card */}
        <div className="mt-8 p-6 md:p-8 border border-white/10 bg-[#171717]/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <p className="font-editorial text-xl md:text-2xl font-light text-white italic leading-relaxed">
              “{selectedPress.quote}”
            </p>
            <div className="flex items-center gap-3 mt-3 text-[10px] font-body uppercase tracking-[0.25em] text-[#A88B5C]">
              <span>{selectedPress.name}</span>
              <span>&bull;</span>
              <span>{selectedPress.issue}</span>
            </div>
          </div>
          <span className="shrink-0 text-xs font-body uppercase tracking-[0.2em] text-white/40 border border-white/10 px-3 py-1.5">
            Archival Feature
          </span>
        </div>
      </div>

      {/* 10. Clients & Testimonials: Large-Quote Slider */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 pt-12 border-t border-white/10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Quote className="w-5 h-5 text-[#A88B5C]" />
            <span className="font-body text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-[#A88B5C]">
              Client Voices & Reflections
            </span>
          </div>
          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 border border-white/20 hover:border-[#A88B5C] hover:text-[#A88B5C] flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Previous quote"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 border border-white/20 hover:border-[#A88B5C] hover:text-[#A88B5C] flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Next quote"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Big Editorial Quote Slider */}
        <div className="relative min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonialIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <p className="font-editorial text-2xl sm:text-3xl md:text-4xl font-light text-[#FAF8F5] leading-relaxed">
                “{currentTestimonial.quote}”
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div>
                  <h4 className="font-editorial text-xl font-normal text-white">
                    {currentTestimonial.author}
                  </h4>
                  <p className="font-body text-[10px] uppercase tracking-[0.25em] text-[#A88B5C] mt-0.5">
                    {currentTestimonial.role} &bull; {currentTestimonial.location}
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-body text-xs text-white/50 block">Project Commission</span>
                  <span className="font-editorial text-sm text-white italic">{currentTestimonial.project}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex gap-2 justify-center mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveTestimonialIdx(i)}
              className={`h-[2px] transition-all duration-300 ${
                activeTestimonialIdx === i ? 'w-8 bg-[#A88B5C]' : 'w-3 bg-white/20'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
