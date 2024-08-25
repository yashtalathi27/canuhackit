import React, { useState } from 'react';
import DetailedCard from './hover';
import { useNavigate } from 'react-router-dom';


export default function Cards({ imageUrl, type, name, smallDetail, details }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate=useNavigate();


  return (


    <>
    
    <div
      className="text-white max-w-[20vw] h-[300px]  rounded-[15px] p-[4px] relative transition-opacity duration-300 flex flex-col items-center"

      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    
    >
      
        
        <img
          src={imageUrl}
          className=" rounded-[15px] w-full h-[100%] p-2"
          alt={name}
          onClick={()=>navigate('./Review')}
        />
        
        <div className="pb-[6px] pl-1">{name}</div>
        {isHovered && (
          <DetailedCard
            imageUrl={imageUrl}
            name={name}
            type={type}
            details={smallDetail}
          />
          
        )}
     
    
    </div>
    </>
  );
}
