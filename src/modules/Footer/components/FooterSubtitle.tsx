import React, { ReactNode } from 'react';

export const FooterSubtitle = ({ children }: { children: ReactNode }) => {
  return (
    <h3
      className="mb-6 font-caveat400 text-[32px] font-bold leading-none tracking-[0.64px] text-stone-900 text-center
    md:mb-8"
    >
      {children}
    </h3>
  );
};
