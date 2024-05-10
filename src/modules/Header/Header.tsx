'use client';
import React, { useState } from 'react';
import { MobileMenu, Nav } from './components';
import { Logo, Modal } from '@/components';
import { SocialMedia, Promotion } from '@/components/SocialMedia/index';
import useVisibility from '@/hooks/useVisibility';
import Contacts from '@/components/Contacts/Contacts';
import { SpriteSVG } from '@/assets/img/SpriteSVG';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isVisible = useVisibility(50);
  const toggleModal = () => setIsOpen(prev => !prev);

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
            <SpriteSVG name="burger_menu" />
          </button>
          {/* <div className="hidden xl:flex flex-col gap-[8px] md:w-[350px] font-ttChocolates500 text-[16px] font-medium leading-6 tracking-wider">
            <Contacts
              location={
                <div className="flex flex-col gap-3 not-italic">
                  <p>м. Кам’янець-Подільский, БЦ “Розмарин”</p>
                  <p>вул. Лесі Українки 31, каб. 605</p>
                </div>
              }
            />
          </div> */}
          {/* <Logo className="w-[66px] h-[54px] flex-1 md:w-[126px] md:h-[100px]" /> */}
          <div className="hidden md:flex md:gap-4 ">
            <Promotion />
            <SocialMedia />
          </div>
        </div>
        {/* <Nav isMobile={false} /> */}
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
