import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Layers, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

interface ProcessSectionProps {
  onStartInquiry: (stepIndex?: number) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartInquiry }) => {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIdx];

  return (
    <section id="process" className="py-28 md:py-36 bg-[#FAF8F5] text-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#E7E1D8] pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[1px] bg-[#A88B5C]" />
              <span className="font-body text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-[#8A8580]">
                Methodology &bull; 04
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-light text-[#0D0D0D]">
              Our Architectural Design Process
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-body text-[#8A8580]">
            <span className="px-2 py-1 bg-[#E7E1D8] text-[10px] uppercase tracking-wider text-[#0D0D0D]">
              [PLACEHOLDER] For Client Confirmation
            </span>
          </div>
        </div>

        {/* Process Navigation Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStepIdx === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIdx(idx)}
                className={`text-left p-4 border transition-all duration-300 relative ${
                  isActive
                    ? 'border-[#A88B5C] bg-[#0D0D0D] text-white shadow-lg'
                    : 'border-[#E7E1D8] bg-white text-[#0D0D0D] hover:border-[#A88B5C]/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-editorial text-lg font-medium ${
                      isActive ? 'text-[#A88B5C]' : 'text-[#8A8580]'
                    }`}
                  >
                    {step.number}
                  </span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#A88B5C]" />}
                </div>
                <p className="font-body text-xs font-medium leading-tight">
                  {step.title.split('&')[0]}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.number}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="border border-[#E7E1D8] bg-white p-8 md:p-12 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Number & Main Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="font-editorial text-5xl md:text-6xl font-light text-[#A88B5C]">
                    {activeStep.number}
                  </span>
                  <div>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-light text-[#0D0D0D]">
                      {activeStep.title}
                    </h3>
                    <p className="font-editorial text-sm italic text-[#8A8580] mt-0.5">
                      {activeStep.subtitle}
                    </p>
                  </div>
                </div>

                <p className="font-body text-sm md:text-base text-[#0D0D0D]/80 leading-relaxed font-light">
                  {activeStep.description}
                </p>

                {/* Duration & Client Note */}
                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#E7E1D8] text-xs font-body text-[#8A8580]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#A88B5C]" />
                    <span>Estimated Duration: <strong className="text-[#0D0D0D]">{activeStep.duration}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#A88B5C]" />
                    <span>White-Glove Austin Execution</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Tangible Deliverables Dossier */}
              <div className="lg:col-span-5 bg-[#FAF8F5] p-6 border border-[#E7E1D8] space-y-4">
                <span className="font-body text-[10px] uppercase tracking-[0.28em] text-[#A88B5C] block">
                  Tangible Deliverables & Milestones
                </span>
                <ul className="space-y-3">
                  {activeStep.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs font-body text-[#0D0D0D]">
                      <span className="text-[#A88B5C] font-mono font-medium">0{i + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-[#E7E1D8]">
                  <button
                    onClick={() => onStartInquiry(activeStepIdx + 1)}
                    className="w-full py-3 bg-[#0D0D0D] text-[#FAF8F5] text-xs font-body uppercase tracking-[0.22em] hover:bg-[#A88B5C] hover:text-[#0D0D0D] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Discuss Phase {activeStep.number} For Your Space</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
