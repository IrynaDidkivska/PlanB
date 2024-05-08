import { Master } from '@/types';
import Image from 'next/image';
import React from 'react';

export type CardProps = {
  master: Master;
};

const Card = ({ master }: CardProps) => {
  const { name, experience, position, img } = master;

  return (
    <li
      className="relative h-[384px] w-[288px]
      md:flex-row md:h-[328px] md:w-[232px]
      xl:flex-row xl:h-[506px] xl:w-[364px]"
    >
      <Image
        src={img}
        alt={name}
        width={364}
        height={506}
        className="rounded-xl flex-shrink-0 h-[384px] w-[288px]
      md:h-[328px] md:w-[232px]
      xl:h-[506px] xl:w-[364px]"
      />
      <div
        className="absolute w-full bottom-0 flex items-center flex-col gap-3 pt-4 pb-6 rounded-xl bg-red-200 font-ttChocolates500 text-stone-900 
      xl:pt-6 xl:pb-12"
      >
        <p className="text-lg font-semibold leading-5">{name}</p>
        <p className="text-lg font-normal leading-snug">{position}</p>
        <p className="text-lg font-normal leading-snug">
          Досвід: {experience} років
        </p>
      </div>
    </li>
  );
};

export default Card;
