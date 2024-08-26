import React from 'react';
import { useForm } from 'react-hook-form';

function Input() {
  const { register, handleSubmit,reset } = useForm();


  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[60vh] mx-auto p-2 bg-[#c8a0ec86] shadow-lg rounded-lg">
      <div className="mb-4">
        <label htmlFor="Name" className="block text-sm font-medium text-white">
          First Name
        </label>
        <input
          id="Name"
          placeholder='Enter your Name'
          {...register('Name')}
          className="mt-1  block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder:text-lg sm:text-sm"

        />
      </div>

      <div className="mb-4">
        <label htmlFor="Comment" className="block text-sm font-medium text-white">
          Comment
        </label>
        <textarea
          id="Name"
          placeholder="Enter your comment"
          {...register('Name')}
          className="mt-1 block w-full h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 placeholder:text-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
   
        />
      </div>

      <button
        type="submit"
        className="w-full bg-violet-950 text-white py-2 px-4 rounded-md shadow hover:bg-violet-750 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
}

export default Input;
