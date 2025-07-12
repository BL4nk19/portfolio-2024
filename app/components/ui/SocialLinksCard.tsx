// app/components/ui/SocialLinksCard.tsx
'use client';

import React from 'react';
import { Icon } from './icon';

export const SocialLinksCard = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'github.svg',
      url: 'https://github.com/BL4nk19',
      tooltip: 'github'
    },
    {
      name: 'Instagram',
      icon: 'instagram.svg', 
      url: 'https://www.instagram.com/josh_vilensky/',
      tooltip: 'Insta'
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin.svg',
      url: 'https://linkedin.com/in/josh-vilensky',
      tooltip: 'LinkedIn'
    },
    {
      name: 'Outlook',
      icon: 'outlook.svg',
      url: 'mailto:josh_vilensky@live.co.uk',
      tooltip: 'Outlook'
    }
  ];

  return (
    <div className="relative h-full p-0.5 flex flex-col justify-between mr-auto bg-transparent">
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-fit">
        <li className="m-0 flex items-center justify-center p-2 max-lg:size-[3.4rem] lg:size-[3.8rem] max-sm:text-[1.7rem] lg:text-[2.2rem] max-lg:text-[1.7rem] font-bold leading-7 lg:leading-8 max-sm:hidden dark:text-dark-4">
          <h2>LIN<br />KS.</h2>
        </li>
        {socialLinks.map((link) => (
          <li key={link.name} className="group">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border dark:border-0 border-dark-4 rounded-2xl flex items-center justify-center p-0.5 max-lg:size-[3.4rem] lg:size-[3.8rem] max-sm:size-[3.2rem] bg-white dark:bg-transparent"
            >
              <div className="border dark:border-0 border-dark-3 size-full flex items-center justify-center p-2 rounded-xl dark:bg-[#fdfdfd] bg-[#fdfdfd]">
                <Icon
                  name={link.icon}
                  className="w-[80%] text-black dark:text-white"
                />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};