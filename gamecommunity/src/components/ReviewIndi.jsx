import React from "react";
import image from "../images/download.jpeg"
export default function ReviewIndi({content,profile,name,type}) {
  return (
    <div className="p-[8px] flex flex-col max-h-fit gap-[10px] text-white border bg-blue-800 rounded-[20px]">
      <p>⭐⭐⭐⭐⭐</p>
      <p>Type:{type}</p>
      <p>{content}</p>
      <div className="flex gap-[20px] items-center">
            <img src={profile} className="w-[30px] rounded-[50%]"/>
            <div>{name}</div>
      </div>
    </div>
  );
}
