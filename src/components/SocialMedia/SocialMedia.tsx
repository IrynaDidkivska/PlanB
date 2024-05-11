import React from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { SpriteSVG } from '@/assets/img/SpriteSVG';
import socials from './socials.json';

interface SocialMediaProps {
  isOnMobile?: boolean;
}

export const SocialMedia = ({ isOnMobile }: SocialMediaProps) => {
  return (
    <>
      <ul className={twMerge('flex justify-between', isOnMobile && 'gap-4')}>
        {socials.map((el, index) => (
          <li
            key={index}
            className="p-1 rounded-full bg-transparent hover:bg-red-200"
          >
            <Link
              href={el.href}
              target="_blank"
              className={twMerge('w-6 xl:w-8 ')}
            >
              <SpriteSVG name={el.name} className="w-6 xl:w-8 " />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
