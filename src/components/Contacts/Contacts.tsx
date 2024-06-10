import React from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { SpriteSVG } from '@/assets/img/SpriteSVG';
import { HeaderProps } from '@/interfaces/header';

const Contacts = ({
  isDesktop,
  toggleModal,
  isOnTablet,
  isOnMobile,
  isFooter,
}: HeaderProps) => {
  return (
    <div
      className={twMerge(
        'text-base font-medium leading-none tracking-tight',
        isDesktop ? 'text-stone-50' : 'text-stone-900',
        isOnMobile && 'flex items-center justify-between',
        isFooter && 'flex flex-col items-center '
      )}
    >
      <Link
        href="https://maps.app.goo.gl/sV1J8hV3RUwMZLDj6"
        target="_blank"
        className={twMerge(
          'flex items-start gap-3 mb-4 cursor-pointer tr-all ',
          isOnTablet && 'mb-6',
          isOnMobile && 'mb-0 items-center'
        )}
        aria-label="Перейти до Гугл карти з локацією салону"
      >
        <div className="p-1 h-full rounded-full bg-transparent tr-all  hover:text-stone-900 hover:bg-red-200 xl:hover:scale-110">
          <SpriteSVG name="marker" className="w-4 h-4" />
        </div>

        {isOnMobile ? (
          <Link
            href="#footer"
            onClick={toggleModal}
            aria-label="Перейти до футера сайту"
          >
            Адреса
          </Link>
        ) : (
          <address
            className={twMerge(
              'flex flex-col gap-3 not-italic nowrap',
              isFooter && 'md:text-lg md:leading-5 md:tracking-[0.18px]'
            )}
          >
            <p>м. Кам&apos;янець-Подільский,БЦ &#8220;Розмарин&#8221;</p>
            <p>вул. Лесі Українки 31, каб. 605</p>
          </address>
        )}
      </Link>
      <div
        className={twMerge(
          'flex gap-3 items-center rounded-full bg-transparent tr-all',
          isOnTablet && 'justify-center'
        )}
      >
        <div className="p-1 rounded-full bg-transparent tr-all hover:text-stone-900 hover:bg-red-200 xl:hover:scale-110">
          <SpriteSVG name="phone_call" className="w-4 h-4 " />
        </div>

        <a
          href="tel:+380681268087"
          className={twMerge(
            'flex gap-3 items-center ',
            isOnTablet && 'justify-center'
          )}
        >
          +38 068 126 8087
        </a>
      </div>
    </div>
  );
};

export default Contacts;
