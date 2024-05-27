import React from 'react';
import Link from 'next/link';
import links from '../assets/menuLinks.json';
import { HeaderProps } from '@/interfaces/header';
import { usePathname } from 'next/navigation';

interface NavProps extends HeaderProps {
  isMobile: boolean;
}

export const Nav = ({ isMobile, toggleModal }: NavProps) => {
  const pathname = usePathname();

  return (
    <>
      <nav
        className={
          isMobile
            ? 'pb-32 max-w-[175px] md:pl-5 '
            : 'hidden max-w-[1440px] m-auto xl:block'
        }
      >
        <ul
          className={`flex font-ttChocolates500 
        ${
          isMobile
            ? 'items-start flex-col gap-4 text-xl font-medium text-stone-50 leading-7 '
            : 'justify-between items-center gap-[54px] text-2xl font-medium text-stone-900 leading-loose'
        }`}
        >
          {links.map((el, index) => (
            <li key={index}>
              <Link
                href={pathname === '/' ? `${el.path}` : `/${el.path}`}
                onClick={toggleModal}
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
