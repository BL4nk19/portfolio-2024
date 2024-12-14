'use client';

import React, { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import Image from 'next/image';

export const ProfileCard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const texts = ['for Mobile', 'for Web', 'all Products'];

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Text rotation effect with dissolve transition
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setPreviousIndex(currentIndex);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsTransitioning(false);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  

  const formattedDateTime = currentTime.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZone: 'Africa/Johannesburg',
  });

  const formattedDate = currentTime.toLocaleString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'Africa/Johannesburg',
  });

  return (
    <div className="relative flex w-full rounded-xl border dark:border-dark-5 border-dark-3 transform-gpu bg-dark-1 [box-shadow:0_0px_60px_-20px_#ffffff1f_inset] cursor-grab dark:bg-white sm:col-start-3 sm:col-end-7 sm:row-start-1 sm:row-end-3 z-10">
      <div className="w-full h-full">
        <div className="flex flex-col overflow-hidden size-full relative z-10 p-5 items-start justify-start gap-8 max-sm:h-[275px] max-sm:gap-4 dark:text-dark-4 text-white">
          {/* Header: Profile and Theme Toggle */}
          <div className="w-full flex justify-between items-start">
            <div className="flex gap-3">
              <Image 
                src="/assets/profile.jpg" 
                alt="profile"
                width={64}
                height={64}
                className="size-16 rounded-full"
                priority
              />
              <div>
                <p className="font-bold text-lg">Josh.</p>
                <p className="text-md font-mono dark:text-black/70 text-zinc-400/80">@Vilensky</p>
              </div>
            </div>
            <ThemeToggle />
          </div>

          {/* Bio Section */}
          <div className="flex flex-col gap-1 overflow-hidden">
            <div className="font-bold w-full flex items-center justify-start gap-1">
              <p className="inline text-lg">I Design</p>
              <div className="flex items-center min-w-[5.5rem] h-[1.125rem] relative">
                <div className="relative w-full">
                  {/* Current text */}
                  <span 
                    className="absolute w-full text-lg leading-none text-center font-sans font-bold transition-all duration-500"
                    style={{
                      opacity: isTransitioning ? 0 : 1,
                      filter: 'blur(0.6px)',
                      transform: 'translateY(0)',
                    }}
                  >
                    {texts[currentIndex]}
                  </span>
                  
                  {/* Previous text for transition */}
                  <span 
                    className="absolute w-full text-lg leading-none text-center font-sans font-bold transition-all duration-500"
                    style={{
                      opacity: isTransitioning ? 1 : 0,
                      filter: 'blur(0.6px)',
                      transform: 'translateY(0)',
                    }}
                  >
                    {texts[previousIndex]}
                  </span>
                </div>
                <span className="text-lg ml-1">.</span>
              </div>
            </div>
            <div className="w-full">
              <p className="text-sm">Hello, I'm Josh! A Product designer and aspiring design engineer, focused on building exceptional digital experiences.</p>
            </div>
          </div>

          {/* Status & Time */}
          <div className="absolute bottom-5 right-8">
            <div className="font-mono flex justify-end items-center gap-1 text-sm text-zinc-400 dark:text-black/70">
              <div className="w-2 h-2 rounded-full bg-[#00ff00]" />
              <p className="text-xs">Available for work</p>
            </div>
            <div className="flex items-center justify-end gap-1 mt-1">
              <time className="text-xs font-light text-zinc-500 font-mono tabular-nums tracking-wider">
                {formattedDate}, {formattedDateTime} <span className="text-base">🇿🇦</span>
              </time>
            </div>
          </div>

          {/* Quote */}
          <div className="absolute bottom-5 left-5 max-sm:hidden">
            <div className="w-full">
              <p className="text-xs font-mono dark:text-black/70 text-zinc-400/70">
                "How do I detach<br />a component again??"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Effects */}
      <div className="pointer-events-none h-0 absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
      <div className="pointer-events-none h-0 absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-neutral-800/10" />
    </div>
  );
};