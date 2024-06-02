'use client';

import { useRef, useState } from 'react';
import SpriteSVG from '../img/SpriteSvg';
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
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const [iconStates, setIconStates] = useState<{ [key: number]: boolean }>({});

  const handleTabClick = (index: number) => {
    setActiveTab(activeTab === index ? null : index);

    setIconStates(prevStates => ({
      ...prevStates,
      [index]: !prevStates[index],
    }));

    Object.keys(iconStates).forEach(key => {
      const tabKey = parseInt(key);
      if (tabKey !== index && iconStates[tabKey]) {
        setIconStates(prevStates => ({
          ...prevStates,
          [tabKey]: false,
        }));
      }
    });
  };

  return (
    <>
      <ul className="flex flex-col gap-16">
        {accordionHeaderData.map((item: string, index: number) => (
          <li key={index} className="relative">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl md:text-[40px] leading-none text-stone-900">
                {item}
              </h3>
              <button
                className="flex justify-center items-center w-[43px] h-[72px] md:w-[50px] md:h-[72px] px-1 md:px-2"
                onClick={() => handleTabClick(index)}
                // onClick={() => toggleItem(index)}
              >
                <SpriteSVG
                  name={
                    (iconStates[index] && 'minus-tablet-desktop') ||
                    'plus-tablet-desktop'
                  }
                />
              </button>
            </div>
            <DottedLine />

            <Table
              data={dataMapping[index]}
              activeTab={activeTab}
              index={index}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
