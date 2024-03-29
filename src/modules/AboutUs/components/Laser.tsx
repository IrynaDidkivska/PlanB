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
  const { isOnMobile } = useMediaQueries();
  const toggleButton = () => setIsOpen(prev => !prev);

  return (
    <>
      <div
        className={twMerge(
          `relative 
       ${
         isOpen
           ? 'sm:w-[568px] sm:h-[824px] bg-laser-isOpen  '
           : 'sm:pt-[103px] sm:w-[304px] sm:h-[256px] bg-laser md:w-full md:h-[487px] xl:h-[560px]'
       }
      ${!isOnMobile && 'sm:pt-0 bg-laser'}
        `
        )}
      >
        <Subtitle className="relative mb-3 leading-6 md:text-xl md:leading-8">
          {items.title}
        </Subtitle>
        <ul className="relative flex flex-col justify-center items-center gap-4 w-full max-w-[289px] md:max-w-[512px] xl:max-w-[566px] ">
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
