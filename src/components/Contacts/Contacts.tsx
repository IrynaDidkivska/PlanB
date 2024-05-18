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
}: HeaderProps) => {
  return (
    <div
      className={twMerge(
        'text-base font-medium leading-none tracking-tight',
        isDesktop ? 'text-stone-50' : 'text-stone-900',
        isOnMobile && 'flex items-center justify-between'
      )}
    >
      <div
        className={twMerge(
          'flex  gap-3 mb-4',
          isOnTablet && 'mb-6',
          isOnMobile && 'mb-0 items-center'
        )}
      >
        <div className="p-1 h-full rounded-full bg-transparent tr-all  hover:text-stone-900 hover:bg-red-200 hover:scale-110">
          <SpriteSVG name="marker" className="w-4 h-4" />
        </div>

        {isOnMobile ? (
          <Link href="#footer" onClick={toggleModal}>
            Адреса
          </Link>
        ) : (
          <address className="flex flex-col gap-3 not-italic">
            <p>м. Кам’янець-Подільский, БЦ “Розмарин”</p>
            <p>вул. Лесі Українки 31, каб. 605</p>
          </address>
        )}
      </div>
      <div
        className={twMerge(
          'flex gap-3 items-center rounded-full bg-transparent tr-all ',
          isOnTablet && 'justify-center'
        )}
      >
        <div className="p-1 rounded-full bg-transparent tr-all hover:text-stone-900 hover:bg-red-200 hover:scale-110">
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
