import React from 'react'
import MySwiper from './MySwiper'
import Cards from './Cards'
import image from "../images/cardImage.jpeg"
import Headline from './Headline'
import ShareButtons from './sharebtn'
export default function Home() {
  return (
    <>
    <MySwiper/>
    <Headline/>
    <div className='flex justify-end item-center justify-start p-[30px]'>
        <Cards imageUrl={image} type="Single pLyer" smallDetail="jbscdjhuasdc jv dvkd vdkvbkd vdv kdjv vmd vkv" name="Clash Of Clans" />
        <Cards imageUrl={image} type="Single pLyer" smallDetail="jbscdjhuasdc jv dvkd vdkvbkd vdv kdjv vmd vkv" name="Clash Of Clans" />
        <Cards imageUrl={image} type="Single pLyer" smallDetail="jbscdjhuasdc jv dvkd vdkvbkd vdv kdjv vmd vkv" name="Clash Of Clans" />
        <Cards imageUrl={image} type="Single pLyer" smallDetail="jbscdjhuasdc jv dvkd vdkvbkd vdv kdjv vmd vkv" name="Clash Of Clans" />
    </div>
    <div className='text-white  flex m-9' >

      <h1 className='m-5 text-2xl'>Share to your friend....!!</h1>
      <ShareButtons/>

    </div>
    </>
  )
}
