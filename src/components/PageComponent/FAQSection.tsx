'use client';

import { useState } from 'react';
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
      <Subtitle className="mt-24 text-stone-900 ">{title}</Subtitle>
      <ul className="xl:w-1/2">
        {items.map((item, index) => (
          <li key={index}>
            <button
              className={`relative mb-4 flex justify-between w-11/12  text-stone-900 text-xl font-medium text-left`}
              type="button"
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <SpriteSVG
                name="chevron"
                className={`absolute sm:right-[-10%] md:right-[-9%] xl:right-0 w-6 h-6
                ${openIndex === index ? 'rotate-0' : 'rotate-180'}`}
              />
            </button>
            <div
              className={`mb-1 grid overflow-hidden tr-accordion text-lg ${
                openIndex === index
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <p className="overflow-hidden ">{item.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
