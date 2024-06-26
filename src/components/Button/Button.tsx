'use client';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useVisibility } from '@/hooks/index';
import { Modal } from '..';
import { Form } from '@/modules';

const Button: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isVisible = useVisibility();
  const toggleModal = () => setIsOpen(prev => !prev);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className={twMerge(`fixed sm:left-4 bottom-10 w-[80px] h-[78px] text-black text-base font-medium leading-none z-10 bg-red-200 rounded-full cursor-pointer shadow-online hover:bg-red-100 focus:bg-red-100 active:bg-red-300
      md:left-auto md:right-8
      ${isVisible ? 'visible' : 'hidden'}
      `)}
      >
        Онлайн запис
      </button>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={toggleModal}>
          <Form />
        </Modal>
      )}
    </>
  );
};

export default Button;
