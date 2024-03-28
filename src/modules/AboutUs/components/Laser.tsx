'use client';

import { Subtitle } from '@/components';
import React, { useState } from 'react';
import { ToggleButton } from './ToggleButton';
import { twMerge } from 'tailwind-merge';
import useMediaQueries from '@/hooks/useMediaQueries';

interface LaserProps {
  items: {
    title: string;
    details: {
      text: string;
      boldText?: string;
      aditionalText?: string;
    }[];
  };
}

export const Laser: React.FC<LaserProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isOnMobile, isOnTablet } = useMediaQueries();
  const toggleButton = () => setIsOpen(prev => !prev);

  return (
    <>
      <div
        className={twMerge(
          `relative 
       ${
         isOpen
           ? 'w-[568px] h-[824px] bg-laser-isOpen'
           : 'pt-[103px] w-[304px] h-[256px] bg-laser'
       }
        `
        )}
      >
        <Subtitle className="relative mb-3 leading-6 md:text-xl md:leading-8">
          {items.title}
        </Subtitle>
        <ul className="relative flex flex-col justify-center items-center gap-4 w-[289px]">
          {items.details.map((detail, index) => (
            <li
              key={index}
              className={index === 0 || isOpen || !isOnMobile ? '' : 'hidden'}
            >
              <p className="text-base font-medium md:text-lg md:font-normal">
                {detail.text}
                <span className="text-base font-bold md:text-xl">
                  {detail.boldText}
                </span>
                {detail.aditionalText}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <ToggleButton onClick={() => toggleButton()} isOpen={isOpen} />
    </>
  );
};
