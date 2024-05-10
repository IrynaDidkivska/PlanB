'use client';
import React, { useState } from 'react';
import { MobileMenu } from './components';
import Link from 'next/link';
import { Logo, Modal } from '@/components';
import HeaderSVG from './HeaderSVG';
import SocialMedia from '@/components/SocialMedia/SocialMedia';
import useVisibility from '@/hooks/useVisibility';
import Contacts from '@/components/Contacts/Contacts';
import links from './assets/menuLinks.json';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isVisible = useVisibility(50);
  const toggleModal = () => setIsOpen(prev => !prev);

  const scrolltoHash = function (element_id: string) {
    const element = document.querySelector(`${element_id}`) as HTMLElement;
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  };

  return (
    <>
      <header
        className={`bg-stone-50 text-stone-900 bg-header sticky top-0 left-0 
    mx-auto px-4 md:px-8 xl:px-36
    pt-6 md:pt-8 xl:pt-8    
    pb-4 md:pb-6 xl:pb-4 z-50 ${isVisible ? 'hidden' : 'visible'}`}
      >
        <div className="max-w-[1440px] flex items-center justify-between mx-auto">
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            aria-label="burger"
            className="w-10 h-10 flex-none xl:hidden md:w-16 md:h-16"
          >
            <HeaderSVG name="burgerMenu" />
          </button>
          <div className="hidden xl:flex flex-col gap-[8px] md:w-[350px] font-ttChocolates500 text-[16px] font-medium leading-6 tracking-wider">
            <Contacts
              location={
                <div className="flex flex-col gap-3 not-italic">
                  <p>м. Кам’янець-Подільский, БЦ “Розмарин”</p>
                  <p>вул. Лесі Українки 31, каб. 605</p>
                </div>
              }
            />
          </div>
          <Logo className="w-[66px] h-[54px] flex-1 md:w-[126px] md:h-[100px]" />
          <div className="hidden md:w-[150px] md:block md:flex-2 xl:w-[176px] xl-[32px]">
            <SocialMedia
              wrapperClassName="flex gap-2 flex-col"
              text={
                <>
                  Слідкуйте за{' '}
                  <span className="uppercase font-bold">акціями</span> в наших
                  соцмережах
                </>
              }
            />
          </div>
        </div>
        <nav className="max-w-[1440px] mx-auto hidden xl:block xl:pt-12">
          <ul className="flex justify-between font-ttChocolates500 text-[24px] text-stone-900 leading-[111%]">
            {links.map((el, index) => (
              <li key={index}>
                <Link href={el.path} onClick={() => scrolltoHash(el.path)}>
                  {el.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={toggleModal}
          contentClassName="w-screen h-screen overflow-y-auto"
        >
          <MobileMenu />
        </Modal>
      )}
    </>
  );
};

export default Header;
