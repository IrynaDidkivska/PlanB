import React from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { SpriteSVG } from '@/assets/img/SpriteSVG';
import socials from './socials.json';

interface SocialMediaProps {
  className?: string;
}

export const SocialMedia = ({ className }: SocialMediaProps) => {
  return (
    <>
      <ul className={twMerge('flex justify-between', className)}>
        {socials.map((el, index) => (
          <li key={index}>
            <Link href={el.href} className={twMerge('w-6 md:w-8', className)}>
              <SpriteSVG name={el.name} className="w-6 md:w-8" />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
