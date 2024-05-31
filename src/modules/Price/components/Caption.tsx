import React from 'react';
import caption from '../data/caption.json';

interface CaptionProps {
  activeTab: number | null;
}

const Caption = ({ activeTab }: CaptionProps) => {
  return (
    <div className="sm:mt-14 md:mt-20 mb-10 sm:text-xl md:text-2xl text-center">
      {activeTab === 0 && (
        <>
          <p className="sm:mb-3 md:mb-2 font-medium">
            На першу процедуру <strong>ЗНИЖКА 20%</strong>
          </p>
          <p className="sm:text-xl text-2xl font-medium">
            З другої процедури
            <strong> &#34;ЗНИЖКА постійного клієнта&#34; 10%</strong>
          </p>
        </>
      )}

      {activeTab === 1 && (
        <>
          <h2 className="sm:mb-5 md:mb-2 font-bold  uppercase">
            Пакетні пропозиції
          </h2>
          {caption.map((item, index) => (
            <div
              className="sm:mb-5 md:mb-2 md:flex md:items-center md:justify-center md:gap-1"
              key={index}
            >
              <p className=" font-medium leading-none">{item.time}</p>
              <span className="sm:hidden md:block">{item.dash}</span>
              <span className="font-bold leading-none">
                <strong>{item.discount}</strong>
              </span>
              <span>{item.needle}</span>
              <span>
                <strong>{item.free}</strong>
              </span>
            </div>
          ))}
        </>
      )}

      {activeTab === 2 && ''}
    </div>
  );
};

export default Caption;
