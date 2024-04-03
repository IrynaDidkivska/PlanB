import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { services } from '../data/services';

export const ServicesList = () => {
  return (
    <ul className="flex sm:flex-col gap-2 md:flex-row md:gap-1 xl:gap-3">
      {services.map((service, index) => {
        return (
          <li key={index} className="rounded-xl">
            <Link href="/" className="relative rounded-xl">
              <Image
                src={service.scr}
                alt={service.alt}
                width={288}
                height={384}
                className="rounded-xl sm:w-[288px] sm:h-[384px] md:w-[232px] md:h-[328px] xl:w-[376px] xl:h-[540px] "
              />
              <div
                className="absolute sm:top-[157px] sm:left-[15px] px-4 py-6 sm:min-w-[258px] bg-neutral-800 bg-opacity-60 rounded-xl 
              md:top-[134px] md:left-[12px] md:py-5 md:min-w-[208px]
              xl:top-[230px] xl:left-[20px] xl:py-[42px] xl:min-w-[336px]"
              >
                <p className="text-2xl font-medium leading-6 text-stone-50 text-center xl:text-[28px] xl:leading-7 ">
                  {service.title}
                </p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
