'use client';
import React, { useState } from 'react';
import { MobileMenu, Nav } from './components';
import { Logo, Modal } from '@/components';
import { SocialMedia } from '@/components/SocialMedia/index';
import useVisibility from '@/hooks/useVisibility';
import { SpriteSVG } from '@/assets/img/SpriteSVG';

const HeaderFixed = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isVisible = useVisibility(50);
  const toggleModal = () => setIsOpen(prev => !prev);

  return (
    <>
      <header
        className={`bg-stone-50 text-stone-900 bg-header sticky top-0 left-0 
    mx-auto px-16 py-4 z-50 ${isVisible ? 'visible' : 'hidden'}`}
      >
        <>
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            aria-label="burger"
            className="w-10 h-10 flex-none xl:hidden md:w-16 md:h-16"
          >
            <SpriteSVG name="burger_menu" />
          </button>
          <Logo className="w-[64px] h-[54px] md:w-[126px] md:h-[100px]" />
          <Nav isMobile={false} />
          {/* <nav className="hidden xl:block">
            <ul className="flex gap-[54px] justify-between font-ttChocolates500 text-[24px] text-stone-900 leading-[111%]">
              {links.map((el, index) => (
                <li key={index}>
                  <Link href={el.path}>{el.title}</Link>
                </li>
              ))}
            </ul>
          </nav> */}
          <div className="hidden md:w-[150px] md:block xl:w-[176px] xl-[32px]">
            <SocialMedia />
          </div>
        </>
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

export default HeaderFixed;
