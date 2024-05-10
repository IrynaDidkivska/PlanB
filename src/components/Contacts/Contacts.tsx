import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { SpriteSVG } from '@/assets/img/SpriteSVG';

type ContactsProps = {
  wrapperContact?: string;
  location?: ReactNode;
};

const Contacts = ({ wrapperContact, location }: ContactsProps) => {
  return (
    <div
      className={twMerge(
        'text-stone-900 text-base font-medium leading-none tracking-tight',
        wrapperContact
      )}
    >
      <address className="flex gap-3 mb-4 ">
        <SpriteSVG name="marker" className="w-4 h-4" />
        {location}
      </address>
      <a href="tel:+380681268087" className="flex gap-3 items-center">
        <SpriteSVG name="phone_call" className="w-4 h-4" />
        +38 068 126 8087
      </a>
    </div>
  );
};

export default Contacts;
