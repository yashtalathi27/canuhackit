import React from "react";
import image from "../images/download.jpeg"
import { useForm } from "react-hook-form";


export default function ReviewIndi({content,profile,name,type}) {

  const {register,handleSubmit}=useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-[8px] flex flex-col max-h-fit gap-[10px] text-white border bg-[#d6b9ef3d] rounded-[20px]">
      <p>⭐⭐⭐⭐⭐</p>
      <p>Type:{type}</p>
      <p>{content}</p>
      <div className="flex gap-[20px] items-center">
            <img src={profile} className="w-[30px] rounded-[50%]"/>
            <div>{name}</div>
      </div>
      <div className="flex gap-2">Reply

        <form onSubmit={handleSubmit(onSubmit)} className="flex"> 
        <input
          id="Reply"
          placeholder='Enter your Reply'
          {...register('Reply')}
          className="mt-1  block w-full h-[3vh] px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder:text-lg sm:text-sm text-black"
        />
          <button
        type="submit"
        className="h-auto bg-violet-950 text-white py-[0.5vh] px-4 rounded-md shadow hover:bg-violet-750 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 "
      >
        Submit
      </button>
        </form>
    
      </div>
     
    </div>
  );
}
