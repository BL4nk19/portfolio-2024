import React from 'react';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
      <svg
        aria-hidden="true"
        className="absolute w-[200%] h-[200%] transform -translate-x-1/4 -translate-y-1/4
                   sm:fill-zinc-600/30 sm:stroke-dark-1/40 stroke-black/10 
                   dark:sm:stroke-zinc-300 dark:stroke-zinc-300 
                   [mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            x="0"
            y="0"
          >
            <path 
              d="M.5 40V.5H40" 
              fill="none" 
              strokeDasharray="10"
              className="stroke-[2.5]"
            />
          </pattern>
        </defs>
        <rect 
          width="100%" 
          height="100%" 
          fill="url(#grid-pattern)" 
          className="transform scale-100 skew-y-12"
        />
        <svg x="0" y="0" className="overflow-visible">
          {Array.from({ length: 40 }).map((_, i) => {
            const opacity = ((40 - i) * 0.005).toFixed(3);
            return (
              <rect
                key={i}
                width="39"
                height="39"
                x={200 + (i * 40)}
                y={41 + (i % 3) * 40}
                fill="currentColor"
                strokeWidth="0"
                opacity={opacity}
              />
            );
          })}
        </svg>
      </svg>
    </div>
  );
};

export default AnimatedBackground;