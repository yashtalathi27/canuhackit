import React, { useState } from 'react';
import DetailedCard from './hover';
import { useNavigate } from 'react-router-dom';


export default function Cards({ imageUrl, type, name, smallDetail, details,detailed }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();


  return (


    <>

      <div 
        className="text-white max-w-[20vw] h-[300px]  rounded-[15px] p-[4px] cursor-pointer relative transition-opacity duration-300 flex flex-col items-center"

        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}

      >


<img
          src={imageUrl}
          className={`rounded-[7px] w-full h-[100%] p-2 transition-all duration-300 ${isHovered ? 'blur-sm  ' : ''}`}
          alt={name}

          onClick={() => navigate(`/allgames/Review/`+detailed)}

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
