import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Minimize2, Sparkles } from 'lucide-react';
import { VIDEOS } from '../data/content';

interface MidVideoSectionProps {
  reducedMotion?: boolean;
}

export const MidVideoSection: React.FC<MidVideoSectionProps> = ({ reducedMotion = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative py-20 md:py-32 bg-[#0D0D0D] text-[#FAF8F5] overflow-hidden flex flex-col items-center">
      {/* Editorial Introduction */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-10 z-10">
        <div className="inline-flex items-center gap-2 text-[10px] font-body uppercase tracking-[0.35em] text-[#A88B5C] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Cinematic Spatial Perspective &bull; Austin Horizon</span>
        </div>
        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-light text-[#FAF8F5]">
          Where Austin Light Meets Architectural Sculpture
        </h2>
        <p className="mt-4 font-body text-xs md:text-sm text-white/60 max-w-xl mx-auto font-light">
          Each residence responds to the specific sun trajectory, natural breeze, and limestone geography of Central Texas.
        </p>
      </div>

      {/* Frame with Interactive Clip-Path Expansion */}
      <div className="w-full flex justify-center px-4 md:px-8">
        <motion.div
          animate={{
            width: isExpanded ? '100vw' : '88%',
            height: isExpanded ? '85vh' : '520px',
            borderRadius: isExpanded ? '0px' : '4px',
          }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden border border-white/15 bg-black shadow-2xl transition-all duration-700"
        >
          {/* Video or Static Poster */}
          {!reducedMotion ? (
            <video
              src={VIDEOS.midpage}
              poster={VIDEOS.midpagePoster}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover brightness-90 contrast-105"
            />
          ) : (
            <img
              src={VIDEOS.midpagePoster}
              alt="Austin skyline architecture dusk"
              className="w-full h-full object-cover"
            />
          )}

          {/* Vignette Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Expand/Contract Toggle Button */}
          <div className="absolute top-6 right-6 z-20">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 px-3.5 py-2 text-[10px] font-body uppercase tracking-[0.2em] bg-[#0D0D0D]/80 backdrop-blur-md text-white border border-white/20 hover:border-[#A88B5C] hover:text-[#A88B5C] transition-all"
              aria-label={isExpanded ? 'Contract frame' : 'Expand full-bleed view'}
            >
              {isExpanded ? (
                <>
                  <Minimize2 className="w-3.5 h-3.5" />
                  <span>Contract Frame</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Expand Panoramic View</span>
                </>
              )}
            </button>
          </div>

          {/* Overlay Text Details */}
          <div className="absolute bottom-8 left-8 right-8 z-20 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-body text-[10px] uppercase tracking-[0.3em] text-[#A88B5C] block">
                Elevation &bull; 56 Stories
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-light text-white mt-1">
                The Austonian & Lady Bird Lake
              </h3>
            </div>
            <p className="font-body text-xs text-white/70 max-w-sm font-light">
              Panoramic southwest light filtered through floor-to-ceiling acoustic glass into honed travertine and custom walnut interiors.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
