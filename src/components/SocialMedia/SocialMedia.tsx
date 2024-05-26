import React from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { SpriteSVG } from '@/assets/img/SpriteSVG';
import socials from './socials.json';
import { HeaderProps } from '@/interfaces/header';

export const SocialMedia = ({ isOnMobile, className }: HeaderProps) => {
  return (
    <>
      <ul
        className={twMerge(
          'flex justify-between',
          isOnMobile && 'gap-4',
          className
        )}
      >
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
