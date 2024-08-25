import React, { useState } from 'react';
import DetailedCard from './hover';
export default function Cards({ imageUrl, type, name, smallDetail, details }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="text-white max-w-[15vw] h-[300px] bg-violet-950 rounded-[15px] p-2 relative transition-opacity duration-300"
    >
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={imageUrl}
          className="rounded-[15px] w-full h-auto"
          alt={name}
        />
        <div className="text-[12px] font-light opacity-40 pt-[4px] pb-[4px]">
          <span className="text-blue-300">Type: </span>{type}
        </div>
        <div className="pb-[6px] pl-1">{name}</div>
        <p className="opacity-40 text-[12px] pb-[8px] pl-1">{smallDetail}</p>
        
        {isHovered && (
          <DetailedCard
            imageUrl={imageUrl}
            name={name}
            type={type}
            details={smallDetail}
          />
        )}
      </div>

      <div className="flex items-center p-[15px] justify-between gap-[5px] relative z-10">
        <button className="w-[100px] border-2 p-[4px] rounded-2xl">Favourite</button>
        <button className="w-[100px] border-2 p-[4px] rounded-2xl">Details</button>
      </div>
    </div>
  );
}
