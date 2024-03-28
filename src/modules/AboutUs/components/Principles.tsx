'use client';

import React, { useState } from 'react';
import { Subtitle } from '@/components';
import { PolygonSVG } from '../../../../public/about/PoligonSVG';
import { twMerge } from 'tailwind-merge';
import { ToggleButton } from './ToggleButton';
import useMediaQueries from '@/hooks/useMediaQueries';
import useToggle from '../helpers/useToggle';

interface PrinciplesProps {
  items: {
    title: string;
    details: {
      subtitle: string;
      description: string;
    }[];
  };
}
export const Principles: React.FC<PrinciplesProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButton = () => setIsOpen(prev => !prev);
  const { isOnMobile } = useMediaQueries();
  // const [isOpen, toggleButton] = useToggle();

  return (
    <>
      <Subtitle className="mb-3 leading-6 md:text-xl md:leading-8">
        {items.title}
      </Subtitle>
      <ul className="flex flex-col justify-center items-center gap-4 ">
        {items.details.map((detail, index) => (
          <li
            key={index}
            className={index === 0 || isOpen || !isOnMobile ? '' : 'hidden'}
          >
            <h3 className="text-xl font-bold">
              {detail.subtitle}
              <span className="text-base font-medium md:text-lg md:font-normal">
                {detail.description}
              </span>
            </h3>
          </li>
        ))}
      </ul>
      <ToggleButton onClick={() => toggleButton()} isOpen={isOpen} />
    </>
  );
};
