'use client';
import React, { useState } from 'react';
import { SpriteSVG } from '@/assets/img/SpriteSVG';
import { MobileMenu, Nav, HeaderFixed } from './components';
import { Logo, Modal, Contacts } from '@/components';
import { SocialMedia, Promotion } from '@/components/SocialMedia/index';
import useVisibility from '@/hooks/useVisibility';
import useMediaQueries from '@/hooks/useMediaQueries';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isVisible = useVisibility(50);
  const { isOnMobile, isOnTablet, isOnDesktop } = useMediaQueries();
  const toggleModal = () => setIsOpen(prev => !prev);

  return (
    <>
      <header
        className={`sticky top-0 left-0 bg-stone-50 text-stone-900 bg-header  px-4 md:px-8 pt-6 md:pt-8  pb-4 md:pb-6 z-50
        xl:px-36 xl:pt-8 xl:pb-4 
        ${isVisible && isOnDesktop ? 'hidden' : 'visible'}`}
      >
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            aria-label="burger"
            className="w-10 h-10 flex-none xl:hidden md:w-16 md:h-16"
          >
            <SpriteSVG name="burger_menu" />
          </button>
          <div className="hidden xl:flex flex-col gap-[8px]  font-ttChocolates500 text-[16px] font-medium leading-6 tracking-wider">
            <Contacts
              location={
                <div className="flex flex-col gap-3 not-italic">
                  <p>м. Кам’янець-Подільский, БЦ “Розмарин”</p>
                  <p>вул. Лесі Українки 31, каб. 605</p>
                </div>
              }
            />
          </div>
          <Logo className="w-[66px] h-[54px] md:w-[126px] md:h-[102px]" />
          <div className="hidden md:flex md:flex-col md:gap-2 md:max-w-[139px] xl:gap-4 xl:max-w-[168px] ">
            <Promotion />
            <SocialMedia />
          </div>
        </div>
        <Nav isMobile={false} />
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
      {isOnDesktop ? <HeaderFixed /> : null}
    </>
  );
};

export default Header;
