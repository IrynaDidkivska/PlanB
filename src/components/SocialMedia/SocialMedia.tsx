import React from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { SpriteSVG } from '@/assets/img/SpriteSVG';
import socials from './socials.json';
import { HeaderProps } from '@/interfaces/header';

export const SocialMedia = ({ isOnMobile, isFooter }: HeaderProps) => {
  return (
    <>
      <ul
        className={twMerge(
          'flex justify-between',
          isOnMobile && 'gap-[11px]',
          isFooter && 'justify-center gap-9'
        )}
      >
        {socials.map((el, index) => (
          <li
            key={index}
            className="sm:p-[1.5px] md:p-1 rounded-full bg-transparent tr-all hover:text-stone-900 hover:bg-red-200  hover:scale-110"
          >
            <Link
              href={el.href}
              target="_blank"
              className={twMerge('w-6 xl:w-8 tr-all ')}
            >
              <SpriteSVG
                name={el.name}
                className="w-6 xl:w-8 tr-all hover:scale-110"
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
