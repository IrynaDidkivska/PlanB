import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { SpriteSVG } from '@/assets/img/SpriteSVG';

type ContactsProps = {
  className?: string;
  isOnMobile?: boolean;
  isOnTablet?: boolean;
  isOnDesktop?: boolean;
  location?: ReactNode;
};

const Contacts = ({
  className,
  location,
  isOnMobile,
  isOnTablet,
  isOnDesktop,
}: ContactsProps) => {
  return (
    <div
      className={twMerge(
        'text-base font-medium leading-none tracking-tight',
        isOnDesktop ? 'text-stone-50' : 'text-stone-900'
      )}
    >
      <div className={twMerge('flex gap-3 mb-4', isOnTablet && 'mb-6')}>
        <SpriteSVG name="marker" className="w-4 h-4" />
        <address className="flex flex-col gap-3 not-italic">
          <p>м. Кам’янець-Подільский, БЦ “Розмарин”</p>
          <p>вул. Лесі Українки 31, каб. 605</p>
        </address>
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
