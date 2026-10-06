import React from 'react';

interface BrandLogoProps {
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  theme = 'light',
  size = 'md',
  showSubtitle = true,
  className = ''
}) => {
  const isLight = theme === 'light'; // Light text on dark bg

  const boxDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12'
  }[size];

  const titleSizes = {
    sm: 'text-sm tracking-[0.25em]',
    md: 'text-base md:text-lg tracking-[0.28em]',
    lg: 'text-xl md:text-2xl tracking-[0.32em]'
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Black Box Brand Mark */}
      <div
        className={`${boxDimensions} relative flex items-center justify-center border transition-all duration-300 ${
          isLight
            ? 'border-[#FAF8F5]/80 bg-[#0D0D0D] hover:border-[#A88B5C]'
            : 'border-[#0D0D0D] bg-[#0D0D0D] hover:border-[#A88B5C]'
        }`}
        style={{ borderWidth: '1px' }}
      >
        {/* Architectural CBI monogram inside box */}
        <span
          className={`font-editorial font-light tracking-tighter ${
            size === 'sm' ? 'text-[9px]' : size === 'md' ? 'text-[11px]' : 'text-sm'
          } ${isLight ? 'text-[#FAF8F5]' : 'text-[#FAF8F5]'}`}
        >
          CBI
        </span>
        {/* Subtle accent corner */}
        <span className="absolute top-0 right-0 w-1 h-1 bg-[#A88B5C]" />
      </div>

      {/* Primary Lockup */}
      <div className="flex flex-col">
        <span
          className={`font-editorial font-normal lowercase leading-none transition-colors duration-300 ${titleSizes} ${
            isLight ? 'text-[#FAF8F5]' : 'text-[#0D0D0D]'
          }`}
        >
          cinda brown
        </span>
        {showSubtitle && (
          <span
            className={`font-body text-[9px] uppercase tracking-[0.38em] mt-1 transition-colors duration-300 ${
              isLight ? 'text-[#A88B5C]' : 'text-[#8A8580]'
            }`}
          >
            interiors &bull; austin
          </span>
        )}
      </div>
    </div>
  );
};
