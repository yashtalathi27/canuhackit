import React from 'react'
import MySwiper from './MySwiper'
import Cards from './Cards'
import image from "../images/cardImage.jpeg"
import Headline from './Headline'
import Trending from './Trending'
export default function Home() {
  return (
    <>
    <div className='pt-[80px]'>
    <MySwiper/>
    </div>
    <Trending/>
    </>
  )
}
