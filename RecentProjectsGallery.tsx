import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Compass } from 'lucide-react';
import { PROJECTS, Project } from '../data/content';
import { CursorState } from './CustomCursor';

interface RecentProjectsGalleryProps {
  onSelectProject: (project: Project) => void;
  onViewAllProjects: () => void;
  setCursorState: (state: CursorState) => void;
}

export const RecentProjectsGallery: React.FC<RecentProjectsGalleryProps> = ({
  onSelectProject,
  onViewAllProjects,
  setCursorState
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-28 md:py-36 bg-[#0D0D0D] text-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[1px] bg-[#A88B5C]" />
              <span className="font-body text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-[#A88B5C]">
                Portfolio Archive &bull; 03
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-light text-[#FAF8F5]">
              Recent Works & Commissions
            </h2>
          </div>

          {/* Controls: Prev/Next + View All */}
          <div className="flex items-center gap-4">
            <button
              onClick={onViewAllProjects}
              className="text-xs font-body uppercase tracking-[0.22em] text-[#A88B5C] hover:text-white transition-colors mr-2 flex items-center gap-1.5"
            >
              <span>View Full Index ({PROJECTS.length})</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-10 h-10 border border-white/20 hover:border-[#A88B5C] hover:text-[#A88B5C] flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Previous Project"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-10 h-10 border border-white/20 hover:border-[#A88B5C] hover:text-[#A88B5C] flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Next Project"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={scrollContainerRef}
        onMouseEnter={() => setCursorState({ type: 'drag', text: 'DRAG' })}
        onMouseLeave={() => setCursorState({ type: 'default' })}
        className="flex gap-6 overflow-x-auto no-scrollbar px-6 md:px-12 scroll-smooth pb-8"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {PROJECTS.map((proj, idx) => (
          <div
            key={proj.id}
            onClick={() => onSelectProject(proj)}
            onMouseEnter={() => setCursorState({ type: 'view', text: 'VIEW' })}
            onMouseLeave={() => setCursorState({ type: 'drag', text: 'DRAG' })}
            className="group relative shrink-0 w-[85vw] sm:w-[60vw] md:w-[42vw] lg:w-[32vw] h-[580px] md:h-[640px] border border-white/10 overflow-hidden cursor-pointer bg-[#171717]"
            style={{ scrollSnapAlign: 'start' }}
          >
            {/* Full-Height Image */}
            <motion.img
              src={proj.heroImage}
              alt={proj.title}
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-108 group-hover:contrast-105"
            />
            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/20 group-hover:from-black/95 transition-all duration-500" />

            {/* Top Project Badge */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-[10px] font-body uppercase tracking-[0.25em] text-white/70">
              <span className="text-[#A88B5C] font-mono">0{idx + 1}</span>
              <span className="bg-black/60 px-2.5 py-1 border border-white/10 backdrop-blur-sm">
                {proj.category}
              </span>
            </div>

            {/* Bottom Content: Project Name & Location Slide In */}
            <div className="absolute bottom-6 left-6 right-6 transition-transform duration-500 group-hover:-translate-y-2">
              <p className="font-editorial text-xs text-[#A88B5C] tracking-widest uppercase mb-1 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                <span>{proj.location}</span>
                <span>&bull;</span>
                <span>{proj.year}</span>
              </p>

              <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-light text-[#FAF8F5] leading-tight">
                {proj.title}
              </h3>

              <p className="font-body text-xs text-white/60 line-clamp-2 mt-2 font-light">
                {proj.editorialStatement}
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs font-body uppercase tracking-[0.2em] text-[#A88B5C] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Inspect Project Architecture</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
