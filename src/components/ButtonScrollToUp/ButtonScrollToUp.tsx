'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { useVisibility } from '@/hooks/index';
import { SpriteSVG } from '@/assets/img/SpriteSVG';

const ButtonScrollToUp = () => {
  const isVisible = useVisibility();

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
  };
  return (
    <button
      onClick={scrollToTop}
      type="button"
      className={twMerge(`fixed sm:bottom-12 sm:right-64 w-[36px] h-[48px]  bg-red-200 opacity-50 rounded-custom cursor-pointer shadow-up z-10 hover:bg-red-100 focus:bg-red-100 active:bg-red-300
     md:right-8  md:bottom-52 
      xl:right-16
      ${isVisible ? 'visible' : 'hidden'}
      `)}
    >
      <SpriteSVG name="chevron" />
    </button>
  );
};

export default ButtonScrollToUp;
