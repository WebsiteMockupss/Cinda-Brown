import React from 'react';
import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import { VIDEOS, BRAND } from '../data/content';

interface PreFooterCtaProps {
  onStartProject: () => void;
  reducedMotion?: boolean;
}

export const PreFooterCta: React.FC<PreFooterCtaProps> = ({
  onStartProject,
  reducedMotion = false
}) => {
  return (
    <section className="relative min-h-[580px] md:min-h-[640px] flex items-center justify-center overflow-hidden bg-[#0D0D0D] text-[#FAF8F5]">
      {/* Video 3 Background */}
      <div className="absolute inset-0 z-0">
        {!reducedMotion ? (
          <video
            src={VIDEOS.prefooter}
            poster={VIDEOS.prefooterPoster}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 filter brightness-75"
          />
        ) : (
          <img
            src={VIDEOS.prefooterPoster}
            alt="Interior architectural lighting"
            className="w-full h-full object-cover filter brightness-75"
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-[#0D0D0D]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
        <span className="font-body text-[10px] uppercase tracking-[0.4em] text-[#A88B5C] block mb-4">
          Initiate A Conversation &bull; Austin & Nationwide
        </span>

        <h2 className="font-editorial text-4xl sm:text-5xl md:text-7xl font-light text-[#FAF8F5] leading-tight">
          We look forward to <br className="hidden sm:inline" />
          <span className="italic font-normal">hearing from you.</span>
        </h2>

        <p className="mt-6 max-w-lg mx-auto font-body text-xs md:text-sm text-white/70 font-light leading-relaxed">
          Whether envisioning an Austin high-rise sanctuary, a Texas Hill Country retreat, or a commercial headquarters, let us craft your vision with timeless elegance.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto px-9 py-4 bg-[#FAF8F5] text-[#0D0D0D] text-xs font-body uppercase tracking-[0.25em] font-medium hover:bg-[#A88B5C] transition-all duration-300 flex items-center justify-center gap-2 group shadow-2xl"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <a
            href={`tel:${BRAND.phone}`}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white text-xs font-body uppercase tracking-[0.25em] hover:border-[#A88B5C] hover:text-[#A88B5C] transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-[#A88B5C]" />
            <span>Direct Call</span>
          </a>
        </div>

        {/* Studio coordinates */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[11px] font-body text-white/60">
          <a
            href={`mailto:${BRAND.email}`}
            className="flex items-center gap-2 hover:text-[#A88B5C] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#A88B5C]" />
            <span>{BRAND.email}</span>
          </a>
          <span className="text-white/20 hidden sm:inline">&bull;</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#A88B5C]" />
            <span>{BRAND.address}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
