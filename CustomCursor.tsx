import React, { useEffect, useState } from 'react';

export interface CursorState {
  type: 'default' | 'pointer' | 'view' | 'drag' | 'hidden';
  text?: string;
}

interface CustomCursorProps {
  cursorState: CursorState;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ cursorState }) => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check for touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible || cursorState.type === 'hidden') return null;

  const isView = cursorState.type === 'view';
  const isDrag = cursorState.type === 'drag';
  const isPointer = cursorState.type === 'pointer';

  return (
    <div
      className="pointer-events-none fixed z-[9999] transition-transform duration-75 ease-out"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Outer morphing ring */}
      <div
        className={`flex items-center justify-center rounded-full transition-all duration-300 ${
          isView
            ? 'h-24 w-24 bg-[#FAF8F5] text-[#0D0D0D] shadow-2xl scale-100 backdrop-blur-sm'
            : isDrag
            ? 'h-20 w-20 bg-[#A88B5C] text-[#FAF8F5] shadow-xl scale-100'
            : isPointer
            ? 'h-12 w-12 border border-[#A88B5C]/70 bg-[#A88B5C]/10 scale-100'
            : 'h-8 w-8 border border-white/40 bg-transparent'
        }`}
      >
        {isView && (
          <span className="font-body text-[10px] tracking-[0.25em] font-medium uppercase text-[#0D0D0D]">
            {cursorState.text || 'VIEW'}
          </span>
        )}
        {isDrag && (
          <span className="font-body text-[9px] tracking-[0.2em] font-medium uppercase text-[#FAF8F5]">
            {cursorState.text || 'DRAG'}
          </span>
        )}
      </div>

      {/* Center dot for default/pointer */}
      {!isView && !isDrag && (
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ${
            isPointer ? 'h-1.5 w-1.5 bg-[#A88B5C]' : 'h-1.5 w-1.5 bg-white'
          }`}
        />
      )}
    </div>
  );
};
