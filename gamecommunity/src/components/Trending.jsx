import React from "react";
import Headline from "./Headline";
import Cards from "./Cards";
import image from "../images/cardImage.jpeg"
export default function Trending() {
  return (
    <>
      <Headline />
      <div className="flex item-center justify-start p-[30px]">
      <span className='text-white writing-mode-vertical text-orientation-upright pl-[30px] '>game names <span className='text-yellow-400 writing-mode-vertical text-orientation-upright pl-[30px]' >   01</span></span>
        <Cards
          imageUrl={image}
          type="Single pLyer"
          smallDetail="jbscdjhuasdc jv dvkd vdkvbkd vdv kdjv vmd vkv"
          name="Clash Of Clans"
        />
        <span className='text-white writing-mode-vertical text-orientation-upright pl-[30px] '>game names <span className='text-yellow-400 writing-mode-vertical text-orientation-upright pl-[30px]' >   01</span></span>
        <Cards
          imageUrl={image}
          type="Single pLyer"
          smallDetail="jbscdjhuasdc jv dvkd vdkvbkd vdv kdjv vmd vkv"
          name="Clash Of Clans"
        />
        <span className='text-white writing-mode-vertical text-orientation-upright pl-[30px] '>game names <span className='text-yellow-400 writing-mode-vertical text-orientation-upright pl-[30px]' >   01</span></span>
        <Cards
          imageUrl={image}
          type="Single pLyer"
          smallDetail="jbscdjhuasdc jv dvkd vdkvbkd vdv kdjv vmd vkv"
          name="Clash Of Clans"
        />
        <span className='text-white writing-mode-vertical text-orientation-upright pl-[30px] '>game names <span className='text-yellow-400 writing-mode-vertical text-orientation-upright pl-[30px]' >   01</span></span>
        <Cards
          imageUrl={image}
          type="Single pLyer"
          smallDetail="jbscdjhuasdc jv dvkd vdkvbkd vdv kdjv vmd vkv"
          name="Clash Of Clans"
        />
        <span className='text-white writing-mode-vertical text-orientation-upright pl-[30px] '>game names <span className='text-yellow-400 writing-mode-vertical text-orientation-upright pl-[30px]' >   01</span></span>
        <Cards
          imageUrl={image}
          type="Single pLyer"
          smallDetail="jbscdjhuasdc jv dvkd vdkvbkd vdv kdjv vmd vkv"
          name="Clash Of Clans"
        />
      </div>
    </>
  );
}
