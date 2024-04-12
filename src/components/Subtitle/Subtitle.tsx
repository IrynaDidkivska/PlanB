import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type SubtitleProps = {
  children: ReactNode;
  className?: string;
};

const Subtitle = ({ children, className }: SubtitleProps) => {
  return (
    <h2
      className={twMerge(
        `text-stone-50 text-xl font-bold font-ttChocolates700 uppercase leading-loose`,
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Subtitle;
