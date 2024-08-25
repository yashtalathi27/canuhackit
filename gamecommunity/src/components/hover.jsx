// DetailedCard.jsx
import React from 'react';

export default function DetailedCard({ imageUrl, name, details, type }) {
  return (
    <div className='relative'>
    <div className="absolute top-[-50px] left-1/2 w-[30vw] h-auto p-4 bg-violet-950 text-white rounded-[15px] shadow-lg z-20 transform -translate-x-1/2 -translate-y-1/2">
      <img 
        src={imageUrl} 
        className='rounded-[15px] w-full h-auto mb-4' 
        alt={`${name}`} 
      />
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <div className='text-[12px] font-light opacity-60 mb-2'>
        <span className='text-blue-300'>Type: </span>{type}
      </div>
      <p className="opacity-80">{details}</p>
    </div>
    </div>
  );
}
