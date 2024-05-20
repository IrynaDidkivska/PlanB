'use client';
import React, { useRef } from 'react';
import { Nav } from '.';
import { Logo } from '@/components';
import { Promotion, SocialMedia } from '@/components/SocialMedia/index';
import { useVisibility } from '@/hooks';

export const HeaderFixed = () => {
  const headerRef = useRef(null);
  const isVisible = useVisibility(headerRef);
  return (
    <header
      hidden={!isVisible}
      className={`flex justify-between items-center sticky top-0 left-0 px-16 py-4 bg-stone-50 bg-header text-stone-900  z-50 border border-solid border-stone-200`}
    >
      <Logo className="w-[64px] h-[54px] md:w-[126px] md:h-[100px]" />
      <Nav isMobile={false} />
      <div className="flex flex-col gap-3 max-w-[168px]">
        <Promotion />
        <SocialMedia />
      </div>
    </header>
  );
};
