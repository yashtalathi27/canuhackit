import React from 'react'
export default function Cards({imageUrl,type,name,smallDetail,details}) {
  return (
    <div className="text-white max-w-[15vw] h-[300px] bg-blue-950">
        <img src={imageUrl} className='rounded-[15px]'/>
        <div className='text-[12px] font-light opacity-40 pt-[4px] pb-[4px]'><span className='text-blue-300 '>Type:</span>{type}</div>
        <div className='pb-[6px]'>{name}</div>
        <p className='opacity-40 text-[12px] pb-[8px]'>{smallDetail}</p>
        <div className='flex items-center p-[15px] justify-between gap-[5px] '>
            <button className='w-[100px] border-2 p-[4px] rounded-2xl'>Favourite</button>
            <button className='w-[100px] border-2 p-[4px] rounded-2xl'>Details</button>
        </div>
    </div>
  )
}
