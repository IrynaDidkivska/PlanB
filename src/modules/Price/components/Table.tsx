import React from 'react';
import { TableData } from '../data/dataTypes';
import Caption from './Caption';

interface TableProps {
  data: TableData;
  index: number;
  activeTab: number | null;
}

const Table = ({ data, activeTab, index }: TableProps) => {
  return (
    <div
      className={`${
        activeTab === index ? 'block tr-accordion text-stone-900' : 'hidden'
      }`}
    >
      <Caption activeTab={activeTab} />
      <table
        className=" border-collapse border border-stone-900 
    sm:min-w-[288px] text-stone-900 
    md:min-w-[704px]
    xl:min-w-[1152px]"
      >
        {data.services
          .filter(category => category.category !== null)
          .map((category, index) => (
            <React.Fragment key={index}>
              <thead key={index}>
                <tr className="sm:text-base md:text-2xl font-medium uppercase  bg-rose-200 bg-opacity-60">
                  <th className="sm:py-2 sm:pl-1.5 md:pl-2 pr-0 pl-3 py-4 border border-stone-900  font-medium tracking-[-0.50px] subpixel-antialiased">
                    {category.category}
                  </th>
                  <th className="sm:py-5 sm:px-[14.5px] py-4 px-[21.5px] md:w-[146px] border border-stone-900 font-medium text-center subpixel-antialiased">
                    Вартість
                  </th>
                </tr>
              </thead>
              <tbody className="border-neutral-800 ">
                {category.items.map((item, idx) => (
                  <tr
                    key={idx}
                    className="sm:text-base md:text-lg md:leading-8 font-medium odd:bg-stone-50 odd:bg-opacity-40 subpixel-antialiased tracking-[-0.48px]"
                  >
                    <td className="py-2 pl-3 pr-0 border-neutral-400 border-r">
                      {item.service}
                    </td>
                    <td className="sm:py-2 py-6 sm:pl-1 md:pl-3 text-center">
                      {item.price}
                      {item.discount && (
                        <span className="relative block text-center text-red-700 after:content-[''] after:absolute sm:after:w-[50%] md:after:w-[40%] xl:after:w-[25%] after:h-[1px] sm:after:left-[10%] md:after:left-[20%] xl:after:left-[30%] after:bottom-[50%] after:transform after:rotate-[160deg] after:bg-red-700">
                          {item.discount}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </React.Fragment>
          ))}
      </table>
      {data.services
        .filter(category => category.category === null)
        .map((category, index) => (
          <React.Fragment key={index}>
            <>
              <p className="mt-10 sm:mb-6 md:mb-2 sm:text-xl md:text-2xl text-center ">
                Процедура катафарезу{' '}
                <span className="sm:block md:inline uppercase">
                  <strong>в подарунок</strong>
                </span>
              </p>
              <p className="mb-10 sm:text-xl md:text-2xl text-center">
                Процедура тривалістю до 30 хв, оплачується як 30 хв.
              </p>
            </>
            <table
              key={index}
              className="border-collapse border border-stone-900 mt-4 
          sm:min-w-[288px] text-stone-900 
          md:min-w-[704px]
          xl:min-w-[1152px]"
            >
              <tbody className="border-neutral-800">
                {category.items.map((item, index) => (
                  <tr
                    key={index}
                    className="sm:text-base md:text-lg md:leading-8 font-medium odd:bg-stone-50 odd:bg-opacity-40 subpixel-antialiased tracking-[-0.48px]"
                  >
                    <td className="py-2 pl-3 pr-0 border-neutral-400 border-r">
                      {item.service}
                    </td>
                    <td className="sm:min-w-[97px] md:w-[146px] sm:py-2 py-6 sm:pl-1 md:pl-3 text-center">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </React.Fragment>
        ))}
    </div>
  );
};
export default Table;
