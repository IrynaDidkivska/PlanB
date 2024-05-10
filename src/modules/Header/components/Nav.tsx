import React from 'react';
import links from '../assets/menuLinks.json';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export const Nav = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <>
      <nav className={isMobile ? 'pb-[65px]' : 'hidden xl:block'}>
        <ul
          className={`flex font-ttChocolates500 
        ${
          isMobile
            ? 'items-start flex-col gap-6 text-xl font-medium text-stone-50 leading-7 '
            : 'justify-between items-center gap-[54px] text-2xl font-medium text-stone-900 leading-loose'
        }`}
        >
          {links.map((el, index) => (
            <li key={index}>
              <Link
                href={el.path}
                className={`nav relative font-ttChocolates500 font-medium active:font-bold 
        ${isMobile ? 'after:bg-stone-50' : 'after:bg-stone-900'}`}
              >
                {el.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
