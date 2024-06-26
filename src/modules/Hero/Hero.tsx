'use client';
import React, { useState } from 'react';
import { ButtonAppointment, Container, Modal, Section } from '@/components';
import { Form } from '..';

const Hero = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleModal = () => setIsOpen(prev => !prev);

  return (
    <Section
      id="hero"
      className="bg-hero pt-36 pb-6  text-stone-900  
      md:pt-[294px] md:pb-[198px]
      xl:pt-32 xl:pb-28"
    >
      <Container className="">
        <h1
          className="mb-2 text-[2rem] font-semibold leading-8 
        md:mb-8 md:max-w-[35rem] md:text-[4rem] md:leading-[3.5rem]"
        >
          Лазерна та електро епіляція
        </h1>
        <p
          className="mb-[8.5rem] leading-5 
        md:mb-[7.38rem] md:max-w-[26rem] md:text-[1.75rem] md:leading-8
        xl:mb-[10.5rem]"
        >
          Видалення не бажаного волосся ефективно та без болю
        </p>
        <ButtonAppointment onClick={() => setIsOpen(true)} type="button">
          Записатися
        </ButtonAppointment>
        {isOpen && (
          <Modal isOpen={isOpen} onClose={toggleModal}>
            <Form />
          </Modal>
        )}
      </Container>
    </Section>
  );
};

export default Hero;
