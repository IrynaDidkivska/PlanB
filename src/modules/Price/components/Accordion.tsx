'use client';

import { useState } from 'react';
import { DottedLine, Table } from './index';
import laserData from '../data/laser.json';
import electroData from '../data/electro.json';
import sugaringData from '../data/sugaring.json';
import { TableData } from '../data/dataTypes';
import { LASER, ELECTRO, SUGARING } from '@/assets/consts/services';

const dataMapping: { [key: number]: TableData } = {
  0: laserData,
  1: electroData,
  2: sugaringData,
};

const accordionHeaderData = [LASER, ELECTRO, SUGARING];

export default function Accordion({}) {
  const [isAccordionOpen, setIsAccordionOpen] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setIsAccordionOpen(isAccordionOpen === index ? null : index);
  };

  return (
    <>
      <ul className="flex flex-col gap-16">
        {accordionHeaderData.map((item: string, index: number) => (
          <li key={index} className="pt-4 cursor-pointer">
            <button
              className={`flex justify-between items-center w-full tr-accordion
            relative text-2xl md:text-[40px] leading-none text-stone-900 list-none outline-none
            before:absolute before:top-1/2 before:right-0 before:content-[''] before:w-[38px] before:h-[4px] before:bg-stone-900
            after:absolute  sm:after:top-[-35%] md:after:top-0 sm:after:right-[6%] md:after:right-[2.5%] xl:after:right-[1.5%] after:content-[''] after:w-[4px] after:h-[38px] after:bg-stone-900  after:translate-y-[10%]
           ${
             isAccordionOpen === index
               ? 'after:opacity-0 after:h-0 after:bottom-0'
               : 'after:opacity-100'
           }`}
              onClick={() => toggleAccordion(index)}
            >
              {item}
            </button>
            <DottedLine />
            <div
              className={`grid overflow-hidden tr-accordion ${
                isAccordionOpen === index
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <Table data={dataMapping[index]} index={index} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
