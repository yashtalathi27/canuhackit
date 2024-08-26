import React from "react";
export default function GameDesc({ rating, type, imageUrl,content }) {
  return (
    <div className=" text-white flex flex-col gap-[15px] max-w-[40%]">
      <img src={imageUrl} className="w-[100%] shadow-md shadow-white" />
      <h1>Rating:⭐⭐⭐⭐</h1>
      <h1 className="font-[300] opacity-50">Type:{type}</h1>
        {content}
    </div>
  );
}
