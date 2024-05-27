import React from 'react';
import { SocialMedia } from '@/components/SocialMedia';
import { Contacts } from '@/components';
import { FooterSubtitle } from './components/FooterSubtitle';

const Footer = () => {
  return (
    <footer id="footer" className="bg-footer">
      <div
        className="flex flex-col gap-10 text-stone-900
        sm:py-14 sm:px-3 sm:items-center
        xl:py-20 xl:px-36 xl:flex-row xl:items-start xl:justify-between"
      >
        <div className="">
          <FooterSubtitle>Контакти</FooterSubtitle>

          <Contacts isFooter={true} />
        </div>
        <div className="">
          <FooterSubtitle>Графік роботи</FooterSubtitle>

          <div className="">
            <p className="mb-2 sm:text-base sm:font-medium sm:leading-5 sm:text-center">
              Понеділок - Неділя
            </p>
            <p className="mb-2 sm:text-base sm:font-medium sm:leading-5 sm:text-center">
              08:15 - 21:00
            </p>
            <p className="sm:text-base font-semibold ">Онлайн підтримка 24/7</p>
          </div>
        </div>
        <div className="">
          <FooterSubtitle> Ми в соцмережах</FooterSubtitle>

          <SocialMedia isFooter={true} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
