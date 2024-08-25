import React from 'react'
import MySwiper from './MySwiper'
import Cards from './Cards'
import image from "../images/cardImage.jpeg"
import Headline from './Headline'
import Trending from './Trending'
import ShareButtons from './sharebtn'
import Topcomment from './topcomment'

export default function Home() {
  return (
    <>
    <div className='pt-[80px]'>
    <MySwiper/>
    </div>
    <Trending/>
    <div className='flex mt-5'>
      <p className='text-2xl p-5 text-white'> Share Game Store to tour Friends...!!!!</p>
      <ShareButtons/>
    </div>
    <Topcomment/>
    </>
  )
}
