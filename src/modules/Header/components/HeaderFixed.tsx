'use client';
import React from 'react';
import { Nav } from '.';
import { Logo } from '@/components';
import { Promotion, SocialMedia } from '@/components/SocialMedia/index';

export const HeaderFixed = () => {
  return (
    <header
      className={`flex justify-between items-center fixed top-0 left-0 w-full px-16 py-4 bg-stone-50 bg-header text-stone-900  z-50 border border-solid border-stone-200`}
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
