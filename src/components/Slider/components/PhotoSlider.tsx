'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SpriteSVG from '../img/SpriteSVG';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

type Slide = {
  alt: string;
  path: string;
};

type SliderComponentProps = {
  sliderData: Slide[];
};

export default function PhotoSlider({ sliderData }: SliderComponentProps) {
  return (
    <>
      <Swiper
        cssMode={true}
        grabCursor={true}
        mousewheel={true}
        keyboard={true}
        centeredSlides={false}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1.25,
            spaceBetween: 0,
          },
          1440: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
        }}
        initialSlide={0}
        navigation={{
          nextEl: '.photoSwiper-button-next',
          prevEl: '.photoSwiper-button-prev',
        }}
        pagination={{
          type: 'fraction',
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="photoSlider"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
              <Image alt={slide.alt} src={slide.path} fill={true} />
          </SwiperSlide>
        ))}

        <div className="flex items-center justify-center w-full gap-4 md:gap-5 relative">
          <button className="photoSwiper-button-prev">
            <SpriteSVG width="134" name="arrow" />
          </button>

          <button className={twMerge(`photoSwiper-button-next`, `rotate-180`)}>
            <SpriteSVG width="134" name="arrow" />
          </button>
        </div>
      </Swiper>
    </>
  );
}
