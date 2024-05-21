'use client';
import { useState } from 'react';
import { ToggleButton } from '@/modules/AboutUs/components/ToggleButton';
import Subtitle from '../Subtitle/Subtitle';
import { twMerge } from 'tailwind-merge';

import useToggle from '@/modules/AboutUs/helpers/useToggle';
import { SpriteSVG } from '@/assets/img/SpriteSVG';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  items: FAQItem[];
}

export const FAQSection = ({ title, items }: FAQSectionProps) => {
  const [isOpen, toggleButton] = useToggle();

  return (
    <div>
      <Subtitle className="text-stone-900">{title}</Subtitle>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="relative">
            <p className="text-xl font-bold mb-1 w-11/12">{item.question}</p>
            <p className="text-lg mb-4 last:mb-0">{item.answer}</p>
            <button
              className={twMerge(
                `absolute top-0 right-0  w-6 h-6 text-stone-900`
              )}
              type="button"
              onClick={toggleButton}
            >
              <SpriteSVG
                name="chevron"
                className={twMerge(`w-6 h-6
      ${isOpen ? 'rotate-180' : 'rotate-0'}
      `)}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
