import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { VIDEOS } from '../data/content';
import { BrandLogo } from './BrandLogo';

interface HeroSectionProps {
  onStartProject: () => void;
  onExploreWork: () => void;
  reducedMotion?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartProject,
  onExploreWork,
  reducedMotion = false
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-[#0D0D0D] flex items-center justify-center">
      {/* Cinematic Video Background with Poster Fallback */}
      <div className="absolute inset-0 z-0">
        {!reducedMotion ? (
          <video
            ref={videoRef}
            src={VIDEOS.hero}
            poster={VIDEOS.heroPoster}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 transition-transform duration-1000 ease-out"
          />
        ) : (
          <img
            src={VIDEOS.heroPoster}
            alt="The Austonian Interior Penthouse"
            className="w-full h-full object-cover"
          />
        )}
        {/* Luxury Vignette & Dark Editorial Overlays */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-black/20 to-black/50" />
        <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
      </div>

      {/* Hero Editorial Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* White Lockup & Geographical Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 flex flex-col items-center"
        >
          <BrandLogo theme="light" size="lg" showSubtitle={false} className="justify-center" />
          <div className="flex items-center gap-2 mt-3 text-[10px] md:text-[11px] font-body uppercase tracking-[0.4em] text-[#A88B5C]">
            <span>Austin, Texas</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#A88B5C]/60" />
            <span>Est. 2004</span>
          </div>
        </motion.div>

        {/* One-Line Statement revealed with high-contrast serif */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.45 }}
          className="max-w-4xl"
        >
          <h1 className="font-editorial text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-[#FAF8F5] leading-[1.08] tracking-tight">
            Elevating everyday living into an <span className="italic font-normal text-[#FAF8F5] underline decoration-[#A88B5C]/50 decoration-1 underline-offset-8">enduring</span> work of art.
          </h1>
        </motion.div>

        {/* Supporting Narrative */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-6 max-w-xl text-xs md:text-sm font-body text-white/70 font-light leading-relaxed tracking-wider"
        >
          Forward-thinking interior architecture blending timeless elegance, respecting tradition while embracing innovation across Texas and the nation.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto px-8 py-3.5 text-xs font-body uppercase tracking-[0.25em] bg-[#FAF8F5] text-[#0D0D0D] font-medium hover:bg-[#A88B5C] hover:text-[#0D0D0D] transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            onClick={onExploreWork}
            className="w-full sm:w-auto px-8 py-3.5 text-xs font-body uppercase tracking-[0.25em] bg-transparent text-[#FAF8F5] border border-white/30 hover:border-[#A88B5C] hover:text-[#A88B5C] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Explore Portfolio</span>
          </button>
        </motion.div>
      </div>

      {/* Refined Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={onExploreWork}
      >
        <span className="font-body text-[9px] uppercase tracking-[0.35em] text-white/50">
          Scroll to explore
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#A88B5C] via-white/30 to-transparent animate-pulse" />
      </motion.div>

      {/* Geographical Badge Corner */}
      <div className="hidden lg:block absolute bottom-8 right-12 z-10 font-body text-[10px] text-right tracking-[0.25em] text-white/40 uppercase">
        <p>Austin &bull; Aspen &bull; Santa Fe &bull; Palm Beach &bull; New York</p>
      </div>
    </section>
  );
};
