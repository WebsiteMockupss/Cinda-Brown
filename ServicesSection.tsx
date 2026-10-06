import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceType: 'residential' | 'commercial') => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activePanel, setActivePanel] = useState<'residential' | 'commercial'>('residential');

  const services = [
    {
      id: 'residential' as const,
      eyebrow: 'Service Domain 01',
      title: 'Residential Architecture & Curation',
      subtitle: 'Penthouses, Hill Country Estates & Historic Restorations',
      description:
        'Crafting singular residential environments that harmonize lifestyle, daily rituals, and architectural proportion. From Austin high-rises to sprawling Texas Hill Country estates and historic Old West Austin restorations, we oversee every facet from initial spatial layout to bespoke furnishings and art procurement.',
      features: [
        'Full-Scale Interior Architecture & Spatial Choreography',
        'Historic Architectural Preservation & Renovation',
        'Custom Millwork, Cabinetry & Artisan Stonework Detailing',
        'Curated Furnishing, Lighting Plans & Museum-Grade Art Advisory'
      ],
      image: 'https://images.pexels.com/photos/7722168/pexels-photo-7722168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600',
      badge: 'Bespoke Living'
    },
    {
      id: 'commercial' as const,
      eyebrow: 'Service Domain 02',
      title: 'Commercial & Boutique Hospitality',
      subtitle: 'Creative Headquarters, Executive Salons & Private Clubs',
      description:
        'Infusing commercial environments with the intimacy, tactile warmth, and residential grace of a private residence. We design bespoke spaces for forward-thinking creative agencies, venture firms, and boutique hospitality clients seeking distinction beyond standard corporate aesthetics.',
      features: [
        'Boutique Workplace Architecture & Executive Salons',
        'Acoustically Tuned Private Hospitality & Tasting Lounges',
        'Brand Identity Spatial Translation & Experiential Environments',
        'Turnkey FF&E Sourcing, Climate Warehousing & White-Glove Installation'
      ],
      image: 'https://images.pexels.com/photos/36464518/pexels-photo-36464518.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600',
      badge: 'Spatial Prestige'
    }
  ];

  return (
    <section id="services" className="py-28 md:py-36 bg-[#FAF8F5] text-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-[#E7E1D8] pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[1px] bg-[#A88B5C]" />
              <span className="font-body text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-[#8A8580]">
                Disciplines &bull; 02
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-light text-[#0D0D0D]">
              Residential & Commercial Services
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-body text-xs md:text-sm text-[#8A8580] max-w-md font-light leading-relaxed">
            Rooted in each client’s needs, personality and lifestyle, blending creativity with timeless elegance.
          </p>
        </div>

        {/* Two Large Hover-Reveal Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map(srv => {
            const isActive = activePanel === srv.id;
            return (
              <div
                key={srv.id}
                onMouseEnter={() => setActivePanel(srv.id)}
                onClick={() => setActivePanel(srv.id)}
                className={`group relative overflow-hidden border transition-all duration-700 bg-white cursor-pointer ${
                  isActive ? 'border-[#A88B5C] shadow-2xl' : 'border-[#E7E1D8] hover:border-[#A88B5C]/60'
                }`}
              >
                {/* Panel Image Container with reveal */}
                <div className="relative h-72 sm:h-80 md:h-96 w-full overflow-hidden bg-[#0D0D0D]">
                  <motion.img
                    src={srv.image}
                    alt={srv.title}
                    animate={{ scale: isActive ? 1.05 : 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full object-cover filter contrast-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="font-body text-[9px] uppercase tracking-[0.25em] bg-[#0D0D0D]/80 backdrop-blur-md text-[#A88B5C] px-3 py-1.5 border border-[#A88B5C]/30">
                      {srv.badge}
                    </span>
                  </div>

                  {/* Subtitle overlay on bottom of image */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="font-body text-[10px] uppercase tracking-[0.3em] text-[#A88B5C] block mb-1">
                      {srv.eyebrow}
                    </span>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-white font-light">
                      {srv.title}
                    </h3>
                  </div>
                </div>

                {/* Expanded Panel Narrative */}
                <div className="p-6 md:p-8 space-y-6">
                  <p className="font-editorial text-base text-[#8A8580] italic">
                    {srv.subtitle}
                  </p>

                  <p className="font-body text-xs md:text-sm text-[#0D0D0D]/80 leading-relaxed font-light">
                    {srv.description}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="space-y-2.5 pt-4 border-t border-[#E7E1D8]">
                    {srv.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs font-body text-[#0D0D0D]/90">
                        <CheckCircle2 className="w-4 h-4 text-[#A88B5C] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Panel Action Button */}
                  <div className="pt-4 flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectService(srv.id);
                      }}
                      className="inline-flex items-center gap-2 text-xs font-body uppercase tracking-[0.22em] text-[#0D0D0D] font-medium group-hover:text-[#A88B5C] transition-colors"
                    >
                      <span>Inquire About {srv.id === 'residential' ? 'Residential' : 'Commercial'}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                    <span className="font-editorial text-sm text-[#8A8580] italic">Austin & Beyond</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
