import React, { useState } from 'react';
import { BRAND } from '../data/content';

export const ManifestoSection: React.FC = () => {
  const words = BRAND.positioning.split(' ');
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="manifesto" className="relative py-28 md:py-40 bg-[#FAF8F5] text-[#0D0D0D] overflow-hidden">
      {/* Editorial Watermark */}
      <div className="absolute top-12 right-12 select-none pointer-events-none opacity-5">
        <span className="font-editorial text-9xl uppercase font-light text-[#0D0D0D]">
          Ethos
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Pre-title */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-[1px] bg-[#A88B5C]" />
          <span className="font-body text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-[#8A8580]">
            The Design Manifesto &bull; 01
          </span>
        </div>

        {/* Large Editorial Serif revealing words */}
        <div className="max-w-5xl">
          <p className="font-editorial text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-light leading-[1.3] text-[#0D0D0D]">
            {words.map((word, idx) => {
              const isHighlight =
                word.toLowerCase().includes('timeless') ||
                word.toLowerCase().includes('elegance') ||
                word.toLowerCase().includes('innovation') ||
                word.toLowerCase().includes('functional') ||
                word.toLowerCase().includes('stunning') ||
                word.toLowerCase().includes('lifestyle');

              return (
                <span
                  key={idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`inline-block mr-2.5 transition-all duration-300 ${
                    hoveredIdx === idx
                      ? 'text-[#A88B5C] scale-105'
                      : isHighlight
                      ? 'italic font-normal text-[#0D0D0D]'
                      : 'text-[#0D0D0D]/90'
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </p>
        </div>

        {/* Bottom Signature Row */}
        <div className="mt-16 pt-10 border-t border-[#E7E1D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[#A88B5C]/30 overflow-hidden bg-[#E7E1D8] flex items-center justify-center">
              <span className="font-editorial text-sm font-medium text-[#0D0D0D]">CB</span>
            </div>
            <div>
              <p className="font-editorial text-lg font-medium text-[#0D0D0D]">Cinda Brown</p>
              <p className="font-body text-[10px] uppercase tracking-[0.25em] text-[#8A8580]">
                Founder & Principal Designer &bull; Austin, TX
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 font-body text-[11px] text-[#8A8580]">
            <span className="uppercase tracking-[0.2em]">Architecture</span>
            <span className="text-[#A88B5C]">&bull;</span>
            <span className="uppercase tracking-[0.2em]">Curation</span>
            <span className="text-[#A88B5C]">&bull;</span>
            <span className="uppercase tracking-[0.2em]">Art Advisory</span>
          </div>
        </div>
      </div>
    </section>
  );
};
