import React from "react";
import image from "../images/download.jpeg"
import { useForm } from "react-hook-form";


export default function ReviewIndi({content,profile,name,type}) {

  const {register,handleSubmit,reset}=useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="p-[8px] flex flex-col max-h-fit m-3 text-white border bg-[#d6b9ef3d] rounded-[20px]">
      <p>⭐⭐⭐⭐⭐</p>
      <p>Type:{type}</p>
      <p>{content}</p>
      <div className="flex gap-[20px] items-center">
            <img src={profile} className="w-[30px] rounded-[50%]"/>
            <div>{name}</div>
      </div>
      <div className="flex gap-2">Reply

    
      </div>
     
    </div>
  );
}
