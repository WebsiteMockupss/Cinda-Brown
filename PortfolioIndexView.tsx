import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Search, MapPin } from 'lucide-react';
import { Project, PROJECTS } from '../data/content';

interface PortfolioIndexViewProps {
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  onStartInquiry: () => void;
}

export const PortfolioIndexView: React.FC<PortfolioIndexViewProps> = ({
  onClose,
  onSelectProject,
  onStartInquiry,
}) => {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = PROJECTS.filter(p => {
    const matchesFilter = filter === 'all' ? true : p.category === filter;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.materials.some(m => m.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 bg-[#0D0D0D] text-[#FAF8F5] overflow-y-auto">
      {/* Top Header */}
      <div className="sticky top-0 z-40 bg-[#0D0D0D]/95 backdrop-blur-md border-b border-white/10 px-6 md:px-12 py-5 flex items-center justify-between">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-xs font-body uppercase tracking-[0.25em] text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#A88B5C]" />
          <span>Return to Studio Home</span>
        </button>

        <div className="flex items-center gap-4">
          <button
            onClick={onStartInquiry}
            className="px-4 py-2 text-xs font-body uppercase tracking-[0.2em] bg-[#A88B5C] text-[#0D0D0D] font-medium hover:bg-white transition-colors"
          >
            Start Your Project
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Title & Stats */}
        <div className="mb-12 border-b border-white/10 pb-10">
          <span className="font-body text-[10px] uppercase tracking-[0.35em] text-[#A88B5C] block mb-2">
            Selected Works & Archive &bull; 2004 — Present
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl font-light text-white leading-tight">
            Comprehensive Project Portfolio
          </h1>
          <p className="font-editorial text-lg text-white/60 italic mt-2 max-w-2xl font-light">
            An exploration of Austin luxury penthouses, historic estate restorations, Texas Hill Country sanctuaries, and high-alpine residences.
          </p>

          {/* Controls: Filter Pills + Search */}
          <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Filter Tabs */}
            <div className="flex items-center gap-2">
              {[
                { id: 'all', label: `All Works (${PROJECTS.length})` },
                { id: 'residential', label: `Residential (${PROJECTS.filter(p => p.category === 'residential').length})` },
                { id: 'commercial', label: `Commercial (${PROJECTS.filter(p => p.category === 'commercial').length})` }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as 'all' | 'residential' | 'commercial')}
                  className={`px-4 py-2 text-xs font-body uppercase tracking-[0.2em] transition-all border ${
                    filter === tab.id
                      ? 'border-[#A88B5C] bg-[#A88B5C] text-[#0D0D0D] font-medium'
                      : 'border-white/15 bg-[#171717] text-white/70 hover:border-white/30'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Keyword Search */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by city, stone, wood..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-[#171717] border border-white/15 pl-9 pr-4 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#A88B5C]"
              />
            </div>
          </div>
        </div>

        {/* Portfolio Masonry Grid */}
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => onSelectProject(proj)}
                className="group relative border border-white/10 bg-[#171717] cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                {/* Image Container with Zoom */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                  <img
                    src={proj.heroImage}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4">
                    <span className="text-[9px] font-body uppercase tracking-[0.2em] bg-black/70 backdrop-blur-sm text-[#A88B5C] px-2.5 py-1 border border-white/10">
                      {proj.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-editorial italic text-sm">{proj.year}</span>
                    <span className="font-body text-[10px] tracking-widest uppercase text-white/70">
                      {proj.area}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-[10px] font-body uppercase tracking-[0.25em] text-[#A88B5C]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{proj.location}</span>
                  </div>

                  <h3 className="font-editorial text-2xl font-light text-white group-hover:text-[#A88B5C] transition-colors leading-tight">
                    {proj.title}
                  </h3>

                  <p className="font-editorial text-xs italic text-white/60">
                    {proj.subtitle}
                  </p>

                  <p className="font-body text-xs text-white/70 line-clamp-2 font-light">
                    {proj.editorialStatement}
                  </p>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-body uppercase tracking-[0.2em] text-[#A88B5C] group-hover:underline flex items-center gap-1">
                      <span>View Project Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="py-24 text-center border border-white/10 p-12">
            <p className="font-editorial text-2xl text-white/70 italic">
              No projects found matching “{searchQuery}”.
            </p>
            <button
              onClick={() => {
                setFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-6 py-2.5 text-xs font-body uppercase tracking-widest bg-[#A88B5C] text-[#0D0D0D]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
