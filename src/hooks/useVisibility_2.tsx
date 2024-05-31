'use client';
import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

export const useVisibility_2 = (headerRef?: React.RefObject<HTMLElement>) => {
  const trackScrollThrottle = throttle(trackScroll, 100);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', trackScrollThrottle);
    return () => {
      window.removeEventListener('scroll', trackScrollThrottle);
    };
  }, [trackScrollThrottle]);

  function trackScroll() {
    const offset = window.scrollY;
    const height = calculateOffset()
    
    if (offset > height) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  }

  function calculateOffset() {
    if (headerRef?.current) {
      const rect = headerRef.current.getBoundingClientRect();
      return rect.height;
    }
    return 0;
  };

  return isScrolling;
};
