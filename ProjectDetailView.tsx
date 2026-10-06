import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, X, MapPin, Calendar, Maximize2, Sparkles } from 'lucide-react';
import { Project, PROJECTS } from '../data/content';

interface ProjectDetailViewProps {
  project: Project;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  onStartInquiry: () => void;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project,
  onClose,
  onSelectProject,
  onStartInquiry,
}) => {
  const [lightboxImg, setLightboxImg] = useState<{ url: string; caption: string } | null>(null);
  const [sliderPos, setSliderPos] = useState(50); // For Before/After slider

  // Find next project
  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="fixed inset-0 z-50 bg-[#0D0D0D] text-[#FAF8F5] overflow-y-auto">
      {/* Top Fixed Floating Navigation Bar */}
      <div className="sticky top-0 z-40 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/10 px-6 md:px-12 py-4 flex items-center justify-between">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-xs font-body uppercase tracking-[0.25em] text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#A88B5C]" />
          <span>Return to Archive</span>
        </button>

        <div className="flex items-center gap-4">
          <button
            onClick={onStartInquiry}
            className="px-4 py-2 text-xs font-body uppercase tracking-[0.2em] bg-[#A88B5C] text-[#0D0D0D] font-medium hover:bg-white transition-colors"
          >
            Inquire About Similar Scope
          </button>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white transition-colors focus:outline-none"
            aria-label="Close project view"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* 1. Full-Bleed Hero */}
      <section className="relative h-[80vh] md:h-[88vh] w-full overflow-hidden bg-black">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover filter contrast-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-black/30 to-black/40" />

        <div className="absolute bottom-12 left-6 md:left-16 right-6 md:right-16 max-w-5xl">
          <div className="flex items-center gap-3 text-[10px] md:text-xs font-body uppercase tracking-[0.35em] text-[#A88B5C] mb-3">
            <span>{project.category}</span>
            <span>&bull;</span>
            <span>{project.location}</span>
            <span>&bull;</span>
            <span>{project.year}</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light text-white leading-tight">
            {project.title}
          </h1>

          <p className="font-editorial text-lg sm:text-2xl italic text-white/80 mt-3 max-w-2xl font-light">
            “{project.editorialStatement}”
          </p>
        </div>
      </section>

      {/* 2. Project Architectural Facts Strip */}
      <div className="border-t border-b border-white/10 bg-[#171717]/80 py-8 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-body">
          <div>
            <span className="text-[#A88B5C] uppercase tracking-widest text-[9px] block">Location & District</span>
            <p className="text-white font-medium text-sm mt-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#A88B5C]" />
              {project.location} {project.neighborhood ? `(${project.neighborhood})` : ''}
            </p>
          </div>

          <div>
            <span className="text-[#A88B5C] uppercase tracking-widest text-[9px] block">Completion Year</span>
            <p className="text-white font-medium text-sm mt-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#A88B5C]" />
              {project.year}
            </p>
          </div>

          <div>
            <span className="text-[#A88B5C] uppercase tracking-widest text-[9px] block">Scope of Commission</span>
            <p className="text-white font-medium text-sm mt-1">
              {project.scope}
            </p>
          </div>

          <div>
            <span className="text-[#A88B5C] uppercase tracking-widest text-[9px] block">Interior Area</span>
            <p className="text-white font-medium text-sm mt-1">
              {project.area}
            </p>
          </div>
        </div>
      </div>

      {/* 3. Deep Architectural Narrative & Key Highlights */}
      <section className="py-20 px-6 md:px-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-body text-[10px] uppercase tracking-[0.3em] text-[#A88B5C] block">
              Architectural Concept & Narrative
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-light text-white leading-tight">
              {project.subtitle}
            </h2>
            <p className="font-body text-sm md:text-base text-white/75 font-light leading-relaxed">
              {project.description}
            </p>

            {/* Material Palette Tags */}
            <div className="pt-6 border-t border-white/10">
              <span className="font-body text-[10px] uppercase tracking-[0.25em] text-[#A88B5C] block mb-3">
                Key Materiality & Finishes
              </span>
              <div className="flex flex-wrap gap-2">
                {project.materials.map(mat => (
                  <span
                    key={mat}
                    className="px-3 py-1.5 bg-[#171717] border border-white/15 text-xs text-white/90 font-body"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Key Architectural Interventions */}
          <div className="lg:col-span-5 bg-[#171717] p-8 border border-white/10 space-y-4">
            <span className="font-body text-[10px] uppercase tracking-[0.3em] text-[#A88B5C] block">
              Distinctive Interventions
            </span>
            <ul className="space-y-4">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-xs md:text-sm font-body text-white/80">
                  <Check className="w-4 h-4 text-[#A88B5C] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-white/10 flex items-center gap-2 text-xs font-body text-white/50">
              <Sparkles className="w-3.5 h-3.5 text-[#A88B5C]" />
              <span>Full custom architectural documentation by Cinda Brown Interiors</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Transformation: Before & After (if available) */}
      {project.beforeImage && project.afterImage && (
        <section className="py-16 px-6 md:px-16 bg-[#171717] border-t border-b border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="font-body text-[10px] uppercase tracking-[0.3em] text-[#A88B5C] block">
                  Transformation Study
                </span>
                <h3 className="font-editorial text-2xl md:text-3xl font-light text-white mt-1">
                  Before & After Spatial Metamorphosis
                </h3>
              </div>
              <span className="text-xs font-body text-white/50 hidden sm:inline">
                Drag slider to compare historical state vs completed design
              </span>
            </div>

            {/* Interactive Before/After Split Slider */}
            <div className="relative aspect-[16/9] w-full overflow-hidden select-none border border-white/15">
              {/* After Image (Full background) */}
              <img
                src={project.afterImage}
                alt="After Interior Transformation"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute top-4 right-4 z-10 px-3 py-1 bg-black/70 backdrop-blur-sm text-[10px] uppercase tracking-widest text-white border border-white/20">
                After: CBI Curation
              </span>

              {/* Before Image (Clipped by slider position) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src={project.beforeImage}
                  alt="Before Interior Transformation"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/70 backdrop-blur-sm text-[10px] uppercase tracking-widest text-[#A88B5C] border border-[#A88B5C]/30">
                  Prior Architectural State
                </span>
              </div>

              {/* Divider Line & Handle */}
              <div
                className="absolute inset-y-0 w-0.5 bg-[#A88B5C] cursor-ew-resize z-20"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0D0D0D] border-2 border-[#A88B5C] flex items-center justify-center text-white shadow-xl">
                  <span className="text-[10px] font-bold">&harr;</span>
                </div>
              </div>

              {/* Invisible full-width range slider */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={e => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Before and after comparison slider"
              />
            </div>
          </div>
        </section>
      )}

      {/* 5. Immersive Project Gallery with Lightbox Click */}
      <section className="py-20 px-6 md:px-16 max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-[#A88B5C] block mb-1">
            Archival Gallery
          </span>
          <h3 className="font-editorial text-3xl font-light text-white">
            Curated Spaces & Architectural Details
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.gallery.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxImg(item)}
              className="group relative aspect-[4/3] overflow-hidden border border-white/10 bg-[#171717] cursor-pointer"
            >
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                <p className="font-editorial text-sm text-white/90 italic max-w-md">
                  {item.caption}
                </p>
                <div className="w-8 h-8 rounded-full bg-[#0D0D0D]/80 flex items-center justify-center text-[#A88B5C] border border-white/20">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Lightbox Modal */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 md:p-10"
            onClick={() => setLightboxImg(null)}
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-6 right-6 p-3 text-white/70 hover:text-white"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative max-w-5xl max-h-[85vh] overflow-hidden" onClick={e => e.stopPropagation()}>
              <img
                src={lightboxImg.url}
                alt={lightboxImg.caption}
                className="w-full h-auto max-h-[80vh] object-contain shadow-2xl"
              />
              <p className="font-editorial text-sm md:text-base text-white/80 text-center mt-4 italic">
                {lightboxImg.caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 7. Next Project Transition Banner */}
      <section
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          onSelectProject(nextProject);
        }}
        className="relative py-24 px-6 md:px-16 border-t border-white/10 bg-[#171717] hover:bg-[#202020] transition-colors cursor-pointer group"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="font-body text-[10px] uppercase tracking-[0.35em] text-[#A88B5C] block mb-2">
              Next In Portfolio
            </span>
            <h3 className="font-editorial text-3xl sm:text-5xl font-light text-white group-hover:translate-x-2 transition-transform duration-300">
              {nextProject.title}
            </h3>
            <p className="font-editorial text-sm italic text-white/60 mt-1">
              {nextProject.location} &bull; {nextProject.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-body uppercase tracking-[0.25em] text-[#A88B5C] group-hover:underline">
              Experience Project
            </span>
            <div className="w-12 h-12 rounded-full border border-white/20 group-hover:border-[#A88B5C] flex items-center justify-center text-white transition-colors">
              <ArrowRight className="w-5 h-5 text-[#A88B5C]" />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Sticky Inquiry Action */}
      <div className="border-t border-white/10 bg-[#0D0D0D] py-8 text-center">
        <button
          onClick={onStartInquiry}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FAF8F5] text-[#0D0D0D] text-xs font-body uppercase tracking-[0.25em] font-medium hover:bg-[#A88B5C] transition-colors"
        >
          <span>Commission Similar Project With Cinda Brown</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
