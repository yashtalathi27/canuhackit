import React from 'react'
import MySwiper from './MySwiper'
import Trending from './Trending'
import ShareButtons from './sharebtn'
import Topcomment from './topcomment'
import Footer from './footer'

export default function Home() {
  return (
    <>
    <div >
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
