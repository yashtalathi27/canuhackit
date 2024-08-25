import React from 'react'
import MySwiper from './MySwiper'
import Cards from './Cards'
import image from "../images/cardImage.jpeg"
import Headline from './Headline'
export default function Home() {
  return (
    <>
    <MySwiper/>
    <Headline/>
    <div className='flex item-center justify-start p-[30px]'>
        <Cards imageUrl={image} type="Single pLyer" smallDetail="jbscdjhuasdc jv dvkd vdkvbkd vdv kdjv vmd vkv" name="Clash Of Clans" />
        <Cards imageUrl={image} type="Single pLyer" smallDetail="jbscdjhuasdc jv dvkd vdkvbkd vdv kdjv vmd vkv" name="Clash Of Clans" />
        <Cards imageUrl={image} type="Single pLyer" smallDetail="jbscdjhuasdc jv dvkd vdkvbkd vdv kdjv vmd vkv" name="Clash Of Clans" />
        <Cards imageUrl={image} type="Single pLyer" smallDetail="jbscdjhuasdc jv dvkd vdkvbkd vdv kdjv vmd vkv" name="Clash Of Clans" />
    </div>
    </>
  )
}
