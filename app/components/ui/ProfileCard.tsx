'use client';

import React, { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import Image from 'next/image';

export const ProfileCard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const texts = ['for Web', 'for Mobile', 'all Products'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setPreviousIndex(currentIndex);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsTransitioning(false);
      }, 800);
    }, 3000);

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
    <div className="relative flex w-full rounded-xl border border-zinc-800/10 dark:border-zinc-300/10 transform-gpu bg-dark-1 cursor-grab dark:bg-white">
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
                <p className="font-bold text-lg">Josh</p>
                <p className="text-md font-mono dark:text-black/70 text-zinc-400/80">Vilensky</p>
              </div>
            </div>
            <ThemeToggle />
          </div>

          {/* Bio Section with Enhanced Animation */}
          <div className="flex flex-col gap-1">
            <div className="flex items-start">
              <h2 className="text-[1.125rem] leading-none font-bold flex">
                <span>I Design</span>
                <span className="relative inline-block ml-2" style={{ minWidth: '120px', height: '1.125rem' }}>
                  <span 
                    className="absolute top-0 left-0 whitespace-nowrap transition-all duration-700 ease-in-out"
                    style={{
                      opacity: isTransitioning ? 0 : 1,
                      filter: `blur(${isTransitioning ? '4px' : '0px'})`,
                      transform: `scale(${isTransitioning ? 0.97 : 1})`,
                    }}
                  >
                    {texts[currentIndex]}
                    <span className="ml-[1px]">.</span>
                  </span>
                  <span 
                    className="absolute top-0 left-0 whitespace-nowrap transition-all duration-700 ease-in-out"
                    style={{
                      opacity: isTransitioning ? 1 : 0,
                      filter: `blur(${isTransitioning ? '0px' : '4px'})`,
                      transform: `scale(${isTransitioning ? 1 : 0.97})`,
                    }}
                  >
                    {texts[previousIndex]}
                    <span className="ml-[1px]">.</span>
                  </span>
                </span>
              </h2>
            </div>
            <div className="w-full mt-2">
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
    </div>
  );
};

export default ProfileCard;