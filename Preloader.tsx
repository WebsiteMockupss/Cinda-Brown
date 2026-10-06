import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
  reducedMotion?: boolean;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete, reducedMotion = false }) => {
  const [count, setCount] = useState(0);
  const [isLifting, setIsLifting] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      onComplete();
      return;
    }

    const duration = 1600; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Smooth ease-out quad
      const currentVal = Math.floor((1 - Math.pow(1 - progress, 2)) * 100);
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(100);
        setTimeout(() => {
          setIsLifting(true);
          setTimeout(() => {
            onComplete();
          }, 800);
        }, 200);
      }
    };

    const animId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animId);
  }, [onComplete, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <AnimatePresence>
      {!isLifting ? (
        <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0D0D0D] text-[#FAF8F5]">
          <div className="relative flex flex-col items-center">
            {/* The signature box brand mark drawing */}
            <div className="relative mb-8 h-24 w-24">
              <svg className="h-full w-full" viewBox="0 0 100 100" fill="none">
                {/* Outer square border */}
                <motion.rect
                  x="8"
                  y="8"
                  width="84"
                  height="84"
                  stroke="#A88B5C"
                  strokeWidth="1.5"
                  strokeDasharray="336"
                  initial={{ strokeDashoffset: 336 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                />
                {/* Inner monogram elements */}
                <motion.path
                  d="M 32 38 Q 24 50 32 62"
                  stroke="#FAF8F5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.3 }}
                />
                <motion.path
                  d="M 46 38 L 46 62 M 46 38 Q 58 38 58 50 Q 58 62 46 62"
                  stroke="#FAF8F5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.4 }}
                />
                <motion.path
                  d="M 68 38 L 68 62"
                  stroke="#FAF8F5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.5 }}
                />
              </svg>
            </div>

            {/* Studio Wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <h1 className="font-editorial text-xl font-light tracking-[0.3em] uppercase text-[#FAF8F5]">
                cinda brown
              </h1>
              <p className="mt-1 font-body text-[10px] tracking-[0.45em] text-[#A88B5C] uppercase">
                interiors &bull; austin
              </p>
            </motion.div>

            {/* Running Counter */}
            <div className="mt-10 flex items-baseline gap-1 font-editorial text-4xl font-light tabular-nums text-white/90">
              <span>{count.toString().padStart(2, '0')}</span>
              <span className="text-xs text-[#A88B5C] tracking-widest">%</span>
            </div>

            {/* Hairline Progress line */}
            <div className="mt-4 h-[1px] w-36 overflow-hidden bg-white/10">
              <div
                className="h-full bg-[#A88B5C] transition-all duration-100 ease-out"
                style={{ width: `${count}%` }}
              />
            </div>
          </div>
        </div>
      ) : (
        /* Split Curtain lift transition */
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-[#0D0D0D] pointer-events-none flex items-center justify-center"
        >
          <div className="border-b border-[#A88B5C]/30 w-full" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
