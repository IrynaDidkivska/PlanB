import React from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { SpriteSVG } from '@/assets/img/SpriteSVG';

type ContactsProps = {
  isOnMobile?: boolean;
  isOnTablet?: boolean;
  isDesktop?: boolean;
  toggleModal?: () => void;
};

const Contacts = ({
  isDesktop,
  toggleModal,
  isOnTablet,
  isOnMobile,
}: ContactsProps) => {
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
          'flex gap-3 mb-4',
          isOnTablet && 'mb-6',
          isOnMobile && 'mb-0'
        )}
      >
        <SpriteSVG name="marker" className="w-4 h-4" />
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

      <a
        href="tel:+380681268087"
        className={twMerge(
          'flex gap-3 items-center',
          isOnTablet && 'justify-center'
        )}
      >
        <SpriteSVG name="phone_call" className="w-4 h-4" />
        +38 068 126 8087
      </a>
    </div>
  );
};

export default Contacts;
