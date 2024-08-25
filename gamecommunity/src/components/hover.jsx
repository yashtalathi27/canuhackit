// DetailedCard.jsx
import React from 'react';
import { useState,useRef } from 'react';

export default function DetailedCard({ imageUrl, name, details, type }) {
  return (
    <div className='relative'>
    <div className="absolute  top-[-220px] left-[300] w-[30vw] h-auto p-4 bg-custom-violet text-bl;ack rounded-[15px] shadow-lg z-20 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-md">
      
      
      <h2 className="text-xl text-black font-bold mb-2">{name}</h2>
      <div className='text-[12px] text-black'>
        <span className='text-black'>Type: </span>{type}
      </div>
      <p className="text-black ">{details}</p>
    </div>
    </div>
  );
}
