'use client';
import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { SpriteSVG } from '@/assets/img/SpriteSVG';

const ButtonScrollToUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
  };

  useEffect(() => {
    let isScrolling: NodeJS.Timeout | null;

    const handleScroll = () => {
      if (isScrolling) {
        clearTimeout(isScrolling);
      }
      setIsVisible(true);
      isScrolling = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      type="button"
      className={twMerge(`fixed sm:bottom-12 right-4 w-[36px] h-[48px]  bg-red-200 opacity-50 rounded-custom cursor-pointer shadow-up z-10 hover:bg-red-100 focus:bg-red-100 active:bg-red-300
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
