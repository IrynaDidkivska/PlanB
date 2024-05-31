import React from 'react';
import { services } from '../data/laser.json';

const Table = () => {
  return (
    <div className=" text-stone-900">
      <table
        className=" border-collapse border border-stone-900 
    sm:max-w-[288px] text-stone-900 
    md:max-w-[704px]
    xl:max-w-[1152px]"
      >
        <caption className="sm:text-xl text-2xl font-medium ">
          На першу процедуру <strong>ЗНИЖКА 20%</strong> <br />З другої
          процедури <strong>“ЗНИЖКА постійного клієнта” 10%</strong>
        </caption>
        {services.map((category, index) => (
          <React.Fragment key={index}>
            <thead>
              <tr className="sm:text-base md:text-2xl font-medium uppercase  bg-rose-200 bg-opacity-60">
                <th className="sm:py-2 sm:pl-2 pl-3 py-4 border border-stone-900 ">
                  {category.category}
                </th>
                <th className="sm:py-5 sm:px-[14.5px] py-4 px-[21.5px] border border-stone-900 ">
                  Вартість
                </th>
              </tr>
            </thead>
            <tbody className="border-neutral-800 ">
              {category.items.map((item, idx) => (
                <tr
                  key={idx}
                  className="sm:text-base md:text-lg md:leading-8 font-medium odd:bg-stone-50 odd:bg-opacity-40 subpixel-antialiased"
                >
                  <td className="sm:py-5 py-6  border-neutral-400 border-r">
                    {item.service}
                  </td>
                  <td>
                    {item.price}
                    {/* {item.discount && <span>{item.discount}</span>} */}
                  </td>
                </tr>
              ))}
            </tbody>
          </React.Fragment>
        ))}
      </table>
    </div>
  );
};
export default Table;
