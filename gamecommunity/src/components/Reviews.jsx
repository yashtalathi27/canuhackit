
import GameDesc from './GameDesc'
import ReviewIndi from './ReviewIndi'
import image from "../images/download.jpeg"
import image2 from "../images/cardImage.jpeg"
import React, { useRef, useState } from 'react';
import VerticalSwipeToSlide from './VerticalSwipeToSlide';
export default function Reviews() {
  return (
    <div className='flex  gap-[50px] pt-[90px] items-start p-[30px]  pr-[50px] justify-between'>
    <GameDesc 
    content={<p className='font-semibold text-yellow-300'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit similique
        minus libero cumque pariatur dolore soluta deleniti, ipsam blanditiis
        dignissimos nihil illum odit omnis possimus error placeat neque porro
        consectetur molestiae, at est. Beatae repellat error maiores nesciunt
        totam numquam quidem libero deleniti, eius praesentium eos explicabo
        quisquam vitae, incidunt sunt possimus nihil minima fuga cum qui
        perferendis eveniet harum ipsam. Ab amet ad adipisci ipsum sequi sed.
        Provident quo magni corporis necessitatibus eveniet dolor. Cupiditate,
        dolorum odit obcaecati, corrupti, unde voluptas exercitationem qui
        itaque suscipit quidem eum fugiat! Quis a iste sequi soluta maiores
        reprehenderit, corporis assumenda vel fuga.
      </p>}
      type="Multiplayed"
      imageUrl={image2}/>
      <VerticalSwipeToSlide/>
    </div>
  )
}
