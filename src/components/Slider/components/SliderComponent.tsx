'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SpriteSVG from '../img/SpriteSVG';
import { twMerge } from 'tailwind-merge';
import Modal from '@/components/Modal/Modal';
import { useState } from 'react';
import ButtonAppointment from '@/components/ButtonAppointment/ButtonAppointment';

type Slide = {
  description: string;
};

type SliderComponentProps = {
  sliderData: Slide[];
};

export default function SliderComponent({ sliderData }: SliderComponentProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [description, setDescription] = useState<string | null>(null);
  const toggleModal = () => setIsOpen(prev => !prev);
  return (
    <div>
      <Swiper
        cssMode={true}
        grabCursor={true}
        mousewheel={true}
        keyboard={true}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 153,
          },
        }}
        initialSlide={0}
        navigation={{
          nextEl: '.mySwiper-button-next',
          prevEl: '.mySwiper-button-prev',
        }}
        pagination={{
          type: 'fraction',
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="feedbackSwiper"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide
            style={{ cursor: 'pointer' }}
            key={index}
            onClick={() => {
              toggleModal();
              setDescription(slide.description);
            }}
          >
            <p>{slide.description}</p>
          </SwiperSlide>
        ))}

        <div className="flex items-center justify-center w-full gap-4 md:gap-5 relative">
          <button className="mySwiper-button-prev" type="button">
            <SpriteSVG width="134" name="arrow" />
          </button>

          <button
            className={twMerge(`mySwiper-button-next`, `rotate-180`)}
            type="button"
          >
            <SpriteSVG width="134" name="arrow" />
          </button>
        </div>
      </Swiper>
      <Modal
        isOpen={isOpen}
        onClose={toggleModal}
        closeBtnClassName="top-2 right-2 md:top-2 md:right-2"
        contentClassName="flex items-center justify-center flex-col max-h-[90vh] md:py-10"
      >
        <div className="swiper-slide-modal">
          <div className="swiper-slide-modal_img"></div>
          <p>{description}</p>
        </div>
        <ButtonAppointment
          onClick={toggleModal}
          type="button"
          className={'w-[200px] min-w-0 mx-auto mt-5 md:min-w-0'}
        >
          OK
        </ButtonAppointment>
      </Modal>
    </div>
  );
}
