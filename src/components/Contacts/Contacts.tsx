import { SpriteSVG } from '@/assets/img/SpriteSVG';
import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ContactsProps = {
  wrapperContact?: string;
  location?: ReactNode;
};

const Contacts = ({
  wrapperContact,
  location,
}: ContactsProps) => {
  return (
    <div className={twMerge('', wrapperContact)}>
      <address className="flex gap-[13px] ">
        <p className="w-[19px]">
          <SpriteSVG name="marker" />
        </p>
        {location}
      </address>
      <a href="tel:+380681268087" className="flex gap-[13px] items-center">
        <p className="w-[18px]">
          <SpriteSVG name="phone_call" />
        </p>
        +38 068 126 8087
      </a>
    </div>
  );
};

export default Contacts;
