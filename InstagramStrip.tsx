import React from 'react';
import { Heart, ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_POSTS, BRAND } from '../data/content';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const InstagramStrip: React.FC = () => {
  // Duplicate array for seamless infinite scroll
  const items = [...INSTAGRAM_POSTS, ...INSTAGRAM_POSTS];

  return (
    <section className="py-20 bg-[#FAF8F5] text-[#0D0D0D] overflow-hidden border-t border-b border-[#E7E1D8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InstagramIcon className="w-4 h-4 text-[#A88B5C]" />
          <span className="font-body text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-[#8A8580]">
            Studio Life &bull; @{BRAND.instagram}
          </span>
        </div>
        <a
          href={BRAND.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-body uppercase tracking-[0.2em] text-[#0D0D0D] hover:text-[#A88B5C] transition-colors flex items-center gap-1 group"
        >
          <span>Follow on Instagram</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-x-auto no-scrollbar pb-4">
        <div className="flex gap-4 px-6 md:px-12 w-max animate-marquee hover:[animation-play-state:paused]">
          {items.map((post, idx) => (
            <a
              key={`${post.id}-${idx}`}
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-56 sm:w-64 aspect-square shrink-0 overflow-hidden bg-[#0D0D0D] border border-[#E7E1D8] block"
            >
              <img
                src={post.image}
                alt="Cinda Brown Interiors Instagram"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter contrast-[1.02]"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <div className="flex items-center justify-end text-xs text-white/80">
                  <div className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-[#A88B5C] fill-[#A88B5C]" />
                    <span>{post.likes}</span>
                  </div>
                </div>
                <p className="font-body text-xs text-white/90 line-clamp-3 font-light">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
