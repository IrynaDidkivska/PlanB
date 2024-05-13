'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';
import { useMediaQueries } from '@/hooks';
import useToggle from '../helpers/useToggle';
import { Subtitle } from '@/components';
import { ToggleButton } from './ToggleButton';

interface ElectroProps {
  items: {
    title: string;
    details: {
      text: string;
    }[];
  };
}

export const Electro = ({ items }: ElectroProps) => {
  const { isOnMobile } = useMediaQueries();
  const [isOpen, toggleButton] = useToggle();

  return (
    <>
      <div
        className={twMerge(
          `relative
       ${
         isOpen
           ? 'w-[304px] h-[384px] bg-electro-isOpen'
           : 'sm:pt-[106.5px] sm:w-[304px] sm:h-[233.5px] bg-electro md:w-full md:h-[487px] xl:h-[560px]'
       }
       ${!isOnMobile && 'sm:pt-0 bg-electro'}
        `
        )}
      >
        <Subtitle className="relative mb-3 leading-6  md:ml-[183px] md:pt-[85.5px] md:text-xl md:leading-8 xl:pt-[122px] xl:ml-[586px]">
          {items.title}
        </Subtitle>
        <div className="relative flex flex-col justify-center items-center gap-[14px] w-full max:w-[289px] md:ml-[183px] md:max-w-[512px] xl:max-w-[566px] xl:ml-[586px]">
          {items.details.map((detail, index) => (
            <p
              key={index}
              className={
                index === 0 || isOpen || !isOnMobile
                  ? 'text-base font-medium md:text-lg md:font-normal'
                  : 'hidden'
              }
            >
              {detail.text}
            </p>
          ))}
        </div>
      </div>
      <ToggleButton onClick={toggleButton} isOpen={isOpen} />
    </>
  );
};
