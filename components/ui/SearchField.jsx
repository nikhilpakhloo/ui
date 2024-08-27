import React from 'react'
export default function SearchField({iconLeft, iconRight, title, textStyle}) {
  return (
    <div className="flex-1 flex items-center justify-center border-r space-x-2 pl-2 pr-14 ">
    {iconLeft}
    <h2 className={`${textStyle ? textStyle : 'text-[#bec0c3]'} text-nowrap`}>{title}</h2>
    {iconRight}
  </div>
  )
}
