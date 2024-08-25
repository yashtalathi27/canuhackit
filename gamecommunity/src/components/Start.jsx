import React from 'react'
import MySwiper from './MySwiper'
import Cards from './Cards'

import Headline from './Headline'
import Trending from './Trending'
import ShareButtons from './sharebtn'
import Topcomment from './topcomment'
import NetflixInspire from './NetflixInspire'

export default function Start() {
  return (
    <>
    <div className='pt-[80px]'>
    <NetflixInspire/>
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
