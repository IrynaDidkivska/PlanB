'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Subtitle from '../Subtitle/Subtitle';
import { SpriteSVG } from '@/assets/img/SpriteSVG';

interface FAQSectionProps {
  title: string;
  items: {
    question: string;
    answer: string;
  }[];
}

export const FAQSection = ({ title, items }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Subtitle className="text-stone-900">{title}</Subtitle>
      <ul className="xl:w-1/2">
        {items.map((item, index) => (
          <li key={index} className="relative mb-4 last:mb-0">
            <p
              className={`text-xl font-medium w-11/12
            ${openIndex === index ? 'mb-1' : 'mb-0'}`}
            >
              {item.question}
            </p>
            <p
              className={`text-lg tr-all
            ${openIndex === index ? 'visible mb-0' : 'hidden'}`}
            >
              {item.answer}
            </p>
            <button
              className={twMerge(
                `absolute top-0 right-0  w-6 h-6 text-stone-900 tr-all`
              )}
              type="button"
              onClick={() => toggleAccordion(index)}
            >
              <SpriteSVG
                name="chevron"
                className={`w-6 h-6
                ${openIndex === index ? 'rotate-0' : 'rotate-180'}`}
              />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
