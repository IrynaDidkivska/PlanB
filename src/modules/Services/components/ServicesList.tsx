import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import services from '../data/services.json';

export const ServicesList = () => {
  return (
    <ul className="flex sm:flex-col gap-2 md:flex-row md:gap-1 xl:gap-3">
      {services.map((service, index) => {
        return (
          <li key={index} className="relative rounded-xl">
            <Link href={service.href} className="rounded-xl ">
              <Image
                src={service.src}
                alt={service.alt}
                width={288}
                height={384}
                className="rounded-xl sm:w-[288px] sm:h-[384px] md:w-[232px] md:h-[328px] xl:w-[376px] xl:h-[540px] "
              />

              <p
                className="absolute px-4 py-6 text-2xl font-medium leading-6 text-stone-50 text-center bg-neutral-800 bg-opacity-60 rounded-xl tr-all hover:bg-neutral-800 hover:bg-opacity-80
              sm:w-[258px] sm:top-[50%] sm:left-[50%] sm:transform sm:translate-x-[-50%] sm:translate-y-[-50%]
              md:w-[208px] 
              xl:w-[336px]"
              >
                {service.title}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
