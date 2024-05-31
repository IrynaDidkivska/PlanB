'use client';
import React, { useRef, useState } from 'react';
import { SpriteSVG } from '@/assets/img/SpriteSVG';
import { MobileMenu, Nav, HeaderFixed } from './components';
import { Logo, Modal, Contacts } from '@/components';
import { SocialMedia, Promotion } from '@/components/SocialMedia/index';
import { useVisibility, useMediaQueries } from '@/hooks';

const Header = () => {
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isVisible = useVisibility(headerRef);
  const { isOnMobile, isOnTablet, isOnDesktop } = useMediaQueries();
  const toggleModal = () => setIsOpen(prev => !prev);

  return (
    <>
      <header
        ref={headerRef}
        className={`top-0 left-0 bg-stone-50 sticky text-stone-900 bg-header px-4 md:px-8 pt-6 md:pt-8  pb-4 md:pb-6 z-50 
        xl:px-36 xl:pt-8 xl:pb-4 xl:relative 
       `}
      >
        <div className="flex items-center sm:justify-start md:justify-between max-w-[1440px] m-auto xl:mb-12">
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            aria-label="burger"
            className="w-10 h-10  md:w-16 md:h-16 xl:hidden"
          >
            <SpriteSVG name="burger_menu" />
          </button>
          <div className="hidden xl:flex flex-col gap-[8px]  font-ttChocolates500 text-[16px] font-medium leading-6 tracking-wider">
            <Contacts />
          </div>
          <Logo className="m-auto w-[66px] h-[54px] md:w-[126px] md:h-[102px]" />
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
          contentClassName="flex top-0 left-0 transform -translate-x-0 -translate-y-0  px-0 sm:pb-4 sm:pt-[78px] sm:max-w-[320px] h-lvh
          md:p-0  md:max-w-[336px] rounded-none"
        >
          <MobileMenu
            toggleModal={toggleModal}
            isOnMobile={isOnMobile}
            isOnTablet={isOnTablet}
          />
        </Modal>
      )}
      {isOnDesktop && isVisible && <HeaderFixed />}
    </>
  );
};

export default Header;
