import React from 'react';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { BRAND } from '../data/content';
import { BrandLogo } from './BrandLogo';

interface FooterSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenInquiry: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onNavigate,
  onOpenInquiry,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0D0D0D] text-[#FAF8F5] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Studio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Studio Brand */}
          <div className="lg:col-span-5 space-y-6">
            <BrandLogo theme="light" size="md" showSubtitle={true} />
            <p className="font-body text-xs sm:text-sm text-white/60 font-light max-w-sm leading-relaxed">
              Award-winning interior design studio based in Austin, Texas. Blending creativity with timeless elegance for residential and commercial clients across Texas and the nation.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-body uppercase tracking-[0.22em] bg-[#171717] border border-[#A88B5C] text-[#FAF8F5] hover:bg-[#A88B5C] hover:text-[#0D0D0D] transition-colors"
              >
                Inquire For Commission
              </button>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-body text-[10px] uppercase tracking-[0.3em] text-[#A88B5C] block">
              Studio Index
            </span>
            <ul className="space-y-2.5 text-xs font-body tracking-wider text-white/70">
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Selected Works & Penthouse Archive
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('manifesto')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Design Manifesto & Ethos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  About Cinda Brown
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Residential & Commercial Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Our 5-Stage Methodology
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('press')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Press & Industry Awards
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Contact Coordinates */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-body text-[10px] uppercase tracking-[0.3em] text-[#A88B5C] block">
              Austin Studio & Office
            </span>
            <div className="space-y-3 text-xs font-body text-white/75">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#A88B5C] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">{BRAND.address}</p>
                  <p className="text-white/50 text-[11px] mt-0.5">Tarrytown / Exposition Corridor</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#A88B5C] shrink-0" />
                <a
                  href={`tel:${BRAND.phone}`}
                  className="hover:text-[#A88B5C] transition-colors"
                >
                  {BRAND.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#A88B5C] shrink-0" />
                <a
                  href={`mailto:${BRAND.email}`}
                  className="hover:text-[#A88B5C] transition-colors"
                >
                  {BRAND.email}
                </a>
              </div>

              <div className="pt-2 text-[11px] text-[#A88B5C]">
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline uppercase tracking-[0.2em]"
                >
                  Instagram @{BRAND.instagram}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Oversized Wordmark */}
        <div className="py-12 border-b border-white/10 select-none overflow-hidden text-center">
          <h2 className="font-editorial text-[13vw] font-light tracking-tighter leading-none text-white/10 hover:text-white/20 transition-colors uppercase whitespace-nowrap">
            cinda brown
          </h2>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-body uppercase tracking-[0.25em] text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Cinda Brown Interiors. All Rights Reserved. Austin, Texas.
          </p>

          <div className="flex items-center gap-6">
            <span>TX &bull; CO &bull; NM &bull; FL &bull; NY &bull; NJ</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#A88B5C]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
