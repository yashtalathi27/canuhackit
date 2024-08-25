import React from 'react'
import MySwiper from './MySwiper'
import Cards from './Cards'
import image from "../images/cardImage.jpeg"
import Headline from './Headline'
export default function Home() {
  return (
    <>
    <MySwiper/>
    <div className='flex item-center justify-end p-[30px]'>
    <Headline/>
        <Cards imageUrl={image} type="Single pLyer" smallDetail="jbscdjhuasdc jv dvkd vdkvbkd vdv kdjv vmd vkv" name="Clash Of Clans" />
        <Cards imageUrl={image} type="Single pLyer" smallDetail="jbscdjhuasdc jv dvkd vdkvbkd vdv kdjv vmd vkv" name="Clash Of Clans" />
        <Cards imageUrl={image} type="Single pLyer" smallDetail="jbscdjhuasdc jv dvkd vdkvbkd vdv kdjv vmd vkv" name="Clash Of Clans" />
        <Cards imageUrl={image} type="Single pLyer" smallDetail="jbscdjhuasdc jv dvkd vdkvbkd vdv kdjv vmd vkv" name="Clash Of Clans" />
    </div>
    </>
  )
}
