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

export default function Accordion() {
  return (
    <>
      <ul className="flex flex-col gap-16">
        {accordionHeaderData.map((item: string, index: number) => (
          <li key={index}>
            <details className="flex justify-between items-center pointer">
              <summary
                className="relative pt-4 text-2xl md:text-[40px] leading-none text-stone-900 list-none outline-none
              before:absolute before:top-1/2 before:right-0 before:content-[''] md:before:w-[38px] before:h-[4px] before:bg-stone-900"
              >
                {item}
                <DottedLine />
              </summary>
              <Table data={dataMapping[index]} index={index} />
            </details>
          </li>
        ))}
      </ul>
    </>
  );
}
