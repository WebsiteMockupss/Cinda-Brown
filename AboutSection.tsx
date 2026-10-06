import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, Sparkles, MapPin } from 'lucide-react';
import { BRAND } from '../data/content';

interface AboutSectionProps {
  onStartInquiry: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onStartInquiry }) => {
  const [activeState, setActiveState] = useState(BRAND.statesServed[0]);

  return (
    <section id="about" className="relative py-28 md:py-36 bg-[#0D0D0D] text-[#FAF8F5] overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header Label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-[1px] bg-[#A88B5C]" />
          <span className="font-body text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-[#A88B5C]">
            The Studio &bull; About Cinda Brown
          </span>
        </div>

        {/* Split Layout: Layered Portrait on Left, Bio on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Layered Parallax Portrait */}
          <div className="lg:col-span-5 relative">
            {/* Primary Portrait Card */}
            <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden border border-white/10 group">
              <img
                src="https://images.pexels.com/photos/5292231/pexels-photo-5292231.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                alt="Cinda Brown - Principal Interior Designer Austin"
                className="w-full h-full object-cover grayscale contrast-110 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Caption on Portrait */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-editorial text-2xl font-light text-white">Cinda Brown</p>
                <p className="font-body text-[10px] uppercase tracking-[0.25em] text-[#A88B5C] mt-0.5">
                  Founder & Principal Designer
                </p>
              </div>
            </div>

            {/* Overlapping Floating Architectural Accent Frame */}
            <div className="hidden sm:block absolute -bottom-8 -right-4 w-48 p-4 bg-[#171717]/95 border border-[#A88B5C]/40 backdrop-blur-md shadow-2xl">
              <div className="flex items-center gap-2 text-[#A88B5C] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="font-body text-[9px] uppercase tracking-[0.25em]">Austin Studio</span>
              </div>
              <p className="font-editorial text-xs text-white/80 italic">
                “Every space is a bespoke portrait of the people who inhabit it.”
              </p>
            </div>
          </div>

          {/* Right Column: Narrative, 20+ Countup, States Served */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="font-editorial text-xl italic text-[#A88B5C] block mb-2">
                Over Two Decades of Architectural Grace
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-[#FAF8F5]">
                Creating personalised interiors reflecting each client’s style, lifestyle and budget.
              </h2>
            </div>

            {/* Bio Narrative from prompt */}
            <div className="space-y-4 font-body text-sm md:text-base text-white/70 font-light leading-relaxed">
              <p>
                For over two decades, award-winning designer Cinda Brown has transformed spaces with a passion for design and dedication to clients. As founder, she creates personalised interiors reflecting each client’s style, lifestyle and budget, with timeless elegance and meticulous attention to detail.
              </p>
              <p>
                Now based in Austin, she has completed projects across Texas, Colorado, New Mexico, Florida, New York and New Jersey. Her work has won industry awards and been featured in numerous publications.
              </p>
            </div>

            {/* Metrics Row: 20+ countup, Awards, Bespoke Commissions */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/10">
              <div>
                <span className="font-editorial text-3xl sm:text-5xl font-light text-[#FAF8F5] block">
                  {BRAND.yearsOfExcellence}
                </span>
                <span className="font-body text-[10px] uppercase tracking-[0.25em] text-[#A88B5C] mt-1 block">
                  Years of Design
                </span>
              </div>

              <div>
                <span className="font-editorial text-3xl sm:text-5xl font-light text-[#FAF8F5] block">
                  6
                </span>
                <span className="font-body text-[10px] uppercase tracking-[0.25em] text-[#A88B5C] mt-1 block">
                  States Commissioned
                </span>
              </div>

              <div>
                <span className="font-editorial text-3xl sm:text-5xl font-light text-[#FAF8F5] flex items-baseline gap-1">
                  <span>100</span>
                  <span className="text-xl text-[#A88B5C] font-normal">%</span>
                </span>
                <span className="font-body text-[10px] uppercase tracking-[0.25em] text-[#A88B5C] mt-1 block">
                  Custom Tailoring
                </span>
              </div>
            </div>

            {/* States Served Interactive Explorer */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="font-body text-[10px] uppercase tracking-[0.3em] text-[#A88B5C] flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  National Reach &bull; States Served
                </span>
                <span className="text-xs text-white/50 font-body">Click state to inspect regions</span>
              </div>

              {/* State Pills */}
              <div className="flex flex-wrap gap-2">
                {BRAND.statesServed.map(item => {
                  const isActive = activeState.code === item.code;
                  return (
                    <button
                      key={item.code}
                      onClick={() => setActiveState(item)}
                      className={`px-3 py-1.5 text-xs font-body uppercase tracking-[0.2em] transition-all border ${
                        isActive
                          ? 'border-[#A88B5C] bg-[#A88B5C] text-[#0D0D0D] font-medium shadow-md'
                          : 'border-white/15 bg-[#171717] text-white/80 hover:border-white/40'
                      }`}
                    >
                      {item.code} &bull; {item.name}
                    </button>
                  );
                })}
              </div>

              {/* Active State Detail Panel */}
              <motion.div
                key={activeState.code}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-3 p-3 bg-[#171717]/80 border border-white/10 flex items-center justify-between text-xs font-body"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#A88B5C]" />
                  <span className="text-white font-medium">{activeState.name}:</span>
                  <span className="text-white/60">{activeState.note}</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#A88B5C]">Active Studio Roster</span>
              </motion.div>
            </div>

            {/* CTA button */}
            <div className="pt-2">
              <button
                onClick={onStartInquiry}
                className="px-6 py-3 text-xs uppercase tracking-[0.25em] bg-transparent border border-[#A88B5C] text-[#FAF8F5] hover:bg-[#A88B5C] hover:text-[#0D0D0D] transition-all duration-300 inline-flex items-center gap-2 group font-medium"
              >
                <span>Commission Cinda Brown Interiors</span>
                <Award className="w-3.5 h-3.5 text-[#A88B5C] group-hover:text-[#0D0D0D] transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
