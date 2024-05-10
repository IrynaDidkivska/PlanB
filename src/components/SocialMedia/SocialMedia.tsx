import React from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { SpriteSVG } from '@/assets/img/SpriteSVG';
import socials from './socials.json';
import { useMediaQueries } from '@/hooks';

interface SocialMediaProps {
  className?: string;
}

export const SocialMedia = ({ className }: SocialMediaProps) => {
  const { isOnMobile, isOnTablet } = useMediaQueries();
  return (
    <>
      <ul className={twMerge('flex justify-between')}>
        {socials.map((el, index) => (
          <li key={index}>
            <Link href={el.href} className={twMerge('w-6 xl:w-8')}>
              <SpriteSVG name={el.name} className="w-6 xl:w-8" />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
