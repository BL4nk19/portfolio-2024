// TechStackCard.tsx
'use client';

import React from 'react';

export const TechStackCard = () => {
  const TechItem = ({ label }: { label: string }) => (
    <div className="px-1.5 text-xs dark:text-black font-normal border dark:border-dark-5/50 border-zinc-800/50 line-clamp-1 overflow-hidden w-max rounded-sm size-max hover:border-white/50 dark:hover:border-dark-4 transition-all font-extralight hover:text-white">
      {label}
    </div>
  );

  return (
    <div className="w-full">
      <div className="flex flex-col px-1 justify-start relative w-full group dark:text-dark-4">
        <div className="h-max">
          <div className="flex">
            <p className="text-4xl pt-5 px-2.5 font-bold">{"{"}</p>
            <p className="text-4xl pt-5 group-hover:px-2 transition-all duration-200 font-bold">}</p>
          </div>
          <h1 className="text-5xl font-extrabold py-2 px-2.5 relative w-full">
            TECH
            <br /> 
            STACK
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-white dark:bg-dark-4 rounded-full transition-all duration-500 group-hover:w-[80%] group-hover:mx-auto" />
          </h1>
        </div>

        <div className="w-full grid grid-cols-1 text-zinc-200/80 p-3 gap-4">
          <section className="flex flex-col gap-1.5">
            <p className="text-white dark:text-dark-1 text-sm">Daily Drivers:</p>
            <div className="flex flex-wrap gap-1.5">
              <TechItem label="Figma" />
              <TechItem label="Miro" />
              <TechItem label="Jira" />
              <TechItem label="Gifs" />
            </div>
          </section>

          <section className="flex flex-col gap-1.5">
            <p className="text-white dark:text-dark-1 text-sm">Key Skills:</p>
            <div className="flex flex-wrap gap-1.5">
              <TechItem label="End-to-end design" />
              <TechItem label="IA mapping" />
              <TechItem label="Design sprints" />
              <TechItem label="Prototyping" />
              <TechItem label="Interaction design" />
            </div>
          </section>

          <section className="flex flex-col gap-1.5">
            <p className="text-white dark:text-dark-1 text-sm">Development Tools:</p>
            <div className="flex flex-wrap gap-1.5">
              <TechItem label="Next.js" />
              <TechItem label="HTML" />
              <TechItem label="CSS" />
              <TechItem label="Javascript" />
              <TechItem label="TypeScript" />
            </div>
          </section>

          <section className="flex flex-col gap-1.5">
            <p className="text-white dark:text-dark-1 text-sm">Currently Exploring:</p>
            <div className="flex flex-wrap gap-1.5">
              <TechItem label="React" />
              <TechItem label="Flutter" />
            </div>
          </section>

          <section className="flex flex-col gap-1.5">
            <p className="text-white dark:text-dark-1 text-sm">Recent Certifications:</p>
            <div className="flex flex-wrap gap-1.5">
              <TechItem label="Harvard CS50" />
              <TechItem label="Uxcel" />
              <TechItem label="Google UX" />
              <TechItem label="AWS Cloud" />
            </div>
          </section>

        </div>

        <div className="pointer-events-none h-0 absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-neutral-800/10" />
      </div>
    </div>
  );
};

export default TechStackCard;