import { SocialMedia } from '@/components/SocialMedia';
import React from 'react';
import { Contacts, Container, Section, SectionTitle } from '@/components';
import { Nav } from '../Header/components';
import { twMerge } from 'tailwind-merge';

const Footer = () => {
  return (
    <div id="footer" className="bg-footer">
      <Container
        className="flex flex-col gap-10 text-stone-900
        sm:py-14 sm:px-4 
        xl:py-20 xl:px-36 xl:flex-row justify-between"
      >
        <div className="flex flex-col items-center justify-start gap-4 md:gap-6 xl:gap-8">
          <SectionTitle className="text-3xl font-semibold text-stone-900">
            Контакти
          </SectionTitle>
          <Contacts className="flex flex-col items-center" />
        </div>
        <div className="flex flex-col items-center justify-start gap-4 md:gap-6 xl:gap-8">
          <SectionTitle className="text-3xl font-semibold text-stone-900">
            Графік роботи
          </SectionTitle>
          <div className="flex flex-col items-center">
            <div>Понеділок - Неділя</div>
            <div>08:15 - 21:00</div>
            <div className="font-semibold">Онлайн підтримка 24/7</div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-4 md:gap-6 xl:gap-8">
          <SectionTitle className="text-3xl font-semibold text-stone-900">
            Ми в соцсетях
          </SectionTitle>
          <SocialMedia className="gap-3" />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
