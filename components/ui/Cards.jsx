import Image from 'next/image'
import React from 'react'

export default function Cards({item}) {
  return (
    <div className='flex flex-col lg:w-[280px] space-y-4 px-2'>


        <Image src={item.img}  className='object-cover w-full lg:h-40 ' width={100} height={100}/>

        <h1 className='font-bold text-xl'>{item.title}</h1>
    </div>
  )
}
