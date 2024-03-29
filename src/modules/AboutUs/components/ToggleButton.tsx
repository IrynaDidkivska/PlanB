import React from 'react';
import { twMerge } from 'tailwind-merge';
import useMediaQueries from '@/hooks/useMediaQueries';
import { PolygonSVG } from '../img/PoligonSVG';

interface ToggleButtonProps {
  onClick: () => void;
  isOpen: boolean;
  className?: string;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  onClick,
  isOpen,
  className,
}) => {
  const { isOnMobile } = useMediaQueries();
  return (
    <>
      {isOnMobile && (
        <button
          className={twMerge(
            `relative flex items-center justify-center gap-4 m-auto py-3 px-2`,
            className
          )}
          type="button"
          onClick={onClick}
        >
          {isOpen ? 'згорнути' : 'дізнатися більше'}
          <PolygonSVG
            name="polygon"
            className={twMerge(`w-4 h-[10px] 
      ${isOpen ? 'rotate-180' : 'rotate-0'}
      `)}
          />
        </button>
      )}
    </>
  );
};
