'use client';

import { Subtitle } from '@/components';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { ToggleButton } from './ToggleButton';
import useMediaQueries from '@/hooks/useMediaQueries';

interface ElectroProps {
  items: {
    title: string;
    details: {
      text: string;
    }[];
  };
}

export const Electro: React.FC<ElectroProps> = ({ items }) => {
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
           ? 'w-[304px] h-[384px] bg-electro-isOpen'
           : 'pt-[106.5px] w-[304px] h-[233.5px] bg-electro'
       }
        `
        )}
      >
        <Subtitle className="relative mb-3 leading-6 md:text-xl md:leading-8">
          {items.title}
        </Subtitle>
        <ul className="relative flex flex-col justify-center items-center gap-[14px] w-[289px]">
          {items.details.map((detail, index) => (
            <li
              key={index}
              className={index === 0 || isOpen || !isOnMobile ? '' : 'hidden'}
            >
              <p className="text-base font-medium md:text-lg md:font-normal">
                {detail.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <ToggleButton onClick={() => toggleButton()} isOpen={isOpen} />
    </>
  );
};
