'use client';
import { useState, useEffect } from 'react';

export const useVisibility = (headerRef: React.RefObject<HTMLElement>) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const calculateOffset = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        return rect.height;
      }
      return 0;
    };

    const toggleVisibility = () => {
      const offset = calculateOffset();
      window.scrollY > offset ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);

    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [headerRef]);

  return isVisible;
};
