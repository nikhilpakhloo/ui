import React from 'react';

export default function SearchField({ iconLeft, iconRight, title, textStyle , bg}) {
  return (
    <button className={`w-full flex items-center  ${bg && 'bg-[#eff1f1]'}  border border-gray-300  pl-2 pr-5 lg:pr-14 py-4 space-x-2`}>
      <div className='flex  items-center space-x-2'>
      {iconLeft}
      <span className={`text-[14px] md:text-[15px] text-nowrap  ${textStyle ? textStyle : 'text-gray-400'}`}>
        {title}
      </span>
      </div>
      {iconRight}
    </button>
  );
}
