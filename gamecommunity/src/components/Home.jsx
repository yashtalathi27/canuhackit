import React from 'react'
import MySwiper from './MySwiper'
import Cards from './Cards'
import image from "../images/cardImage.jpeg"
export default function Home() {
  return (
    <>
    <MySwiper/>
    <div className='flex item-center justify-around p-[50px]'>
        <Cards imageUrl={image} type="Single pLyer" smallDetail="jbscdjhuasdc jv dvkd vdkvbkd vdv kdjv vmd vkv" name="Clash Of Clans" />
        <Cards imageUrl={image} type="Single pLyer" smallDetail="jbscdjhuasdc jv dvkd vdkvbkd vdv kdjv vmd vkv" name="Clash Of Clans" />
        <Cards imageUrl={image} type="Single pLyer" smallDetail="jbscdjhuasdc jv dvkd vdkvbkd vdv kdjv vmd vkv" name="Clash Of Clans" />
        <Cards imageUrl={image} type="Single pLyer" smallDetail="jbscdjhuasdc jv dvkd vdkvbkd vdv kdjv vmd vkv" name="Clash Of Clans" />
    </div>
    </>
  )
}
