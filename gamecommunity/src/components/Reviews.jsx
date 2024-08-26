

import GameDesc from './GameDesc'
import ReviewIndi from './ReviewIndi'
import image from "../images/download.jpeg"
import image2 from "../images/cardImage.jpeg"
import React, {useEffect, useRef, useState} from 'react';
import VerticalSwipeToSlide from './VerticalSwipeToSlide';
import Input from './Input';
import { useForm } from 'react-hook-form';
import axios from "axios";

export default function Reviews() {

  const {register,handleSubmit,reset} =useForm();
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const
                    id = window.location.pathname.split('/')[3];
                const response = await axios.get(`http://localhost:6005/allgames/${id}`, {withCredentials: true});
                setImages(response.data);
                console.log("response", response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [setImages]);


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
                src={images.image}
                alt="Game"
                className="w-[60%] h-auto rounded-lg mb-4"
            />
            <h2 className="text-3xl font-semibold mb-2">{images.name}</h2>
            <h2 className="text-2xl font-semibold mb-2">Rating: ★★★★☆</h2>
            <h3 className="text-xl mb-4">Type: Multiplayer</h3>
            <p className="text-gray-300 w-auto text-[1rem]">
                {images.description}
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


