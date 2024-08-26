
import GameDesc from './GameDesc'
import ReviewIndi from './ReviewIndi'
import image from "../images/download.jpeg"
import image2 from "../images/cardImage.jpeg"
import React, { useRef, useState } from 'react';
import VerticalSwipeToSlide from './VerticalSwipeToSlide';
import Input from './Input';
import { useForm } from 'react-hook-form';

export default function Reviews() {

  const {register,handleSubmit,reset} =useForm();

  const onSubmit =(data)=>{
    console.log(data);
    reset();
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
   

    <main className="flex justify-between items-start mt-8">
      {/* Game Image & Description */}
      <div className="w-[60%] bg-gray-800 rounded-lg shadow-lg p-6">
        <img
          src={image2}
          alt="Game"
          className="w-[60%] h-auto rounded-lg mb-4"
        />
        <h2 className="text-2xl font-semibold mb-2">Rating: ★★★★☆</h2>
        <h3 className="text-xl mb-4">Type: Multiplayer</h3>
        <p className="text-gray-300 w-auto text-[1rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem a ullam quo error, amet architecto totam consequuntur praesentium sed. Optio inventore, eius placeat asperiores enim magni mollitia qui explicabo doloribus laboriosam maiores ea rerum eaque aut fugit nobis saepe nesciunt necessitatibus excepturi recusandae exercitationem. Dignissimos nulla quos consequuntur! Repellendus distinctio nihil debitis beatae quos ab cupiditate exercitationem suscipit tenetur voluptatum culpa modi unde, consequuntur est recusandae neque aliquid optio hic nobis nulla impedit ipsa ut excepturi sit. Id atque est ipsum ab ratione deserunt molestias libero enim pariatur nostrum beatae unde, aut distinctio laborum commodi voluptatibus obcaecati minima similique blanditiis. Eaque, id ex facere nostrum dignissimos rem? Non magni temporibus, dicta deserunt animi labore porro consequatur cumque sunt iste beatae nostrum iusto recusandae accusamus natus. Consequuntur magnam officiis eaque sint ea maxime modi ad mollitia omnis, in cupiditate? Cumque, perferendis architecto quam ipsam reprehenderit, voluptates aliquid quis minus et eaque quibusdam quo eos dolorum optio inventore atque enim odit nobis? Asperiores ipsa placeat obcaecati voluptatem nobis est voluptatum iste perferendis dolorem facere. Officia laudantium ea quo soluta, ipsa ipsam impedit odit inventore blanditiis! Dicta commodi ducimus alias esse natus dolorem voluptatum quam impedit quos possimus, aut repudiandae maiores in illo.
        </p>
      </div>

      {/* Comment Section */}
      <div className="w-1/3 ml-8">
        {/* Comment Form */}

        <form onSubmit={handleSubmit(onSubmit)}>

        <div className="bg-purple-800 p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl font-semibold mb-4">Leave a Comment</h3>
          <input
            id="name"
            placeholder='Enter your Name'
            {...register('name')}
            className="w-full mb-4 p-2 rounded-lg bg-gray-800 text-white"
          />
          <textarea
            id="comment"
            placeholder="Enter your comment"
            {...register('comment')}
            className="w-full mb-4 p-2 rounded-lg bg-gray-800 text-white"
            rows="4"
          ></textarea>
          <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg">
            Submit
          </button>
        </div>

        </form>

    

        {/* Comments List */}
        <div className="space-y-6">
        <VerticalSwipeToSlide/>
          {/* Repeat similar blocks for more comments */}
        </div>
      </div>
      
    </main>
  </div>
  )
}
