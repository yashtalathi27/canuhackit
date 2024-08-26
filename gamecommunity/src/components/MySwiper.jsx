import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import image1 from "../images/WhatsApp Image 2024-08-26 at 4.46.02 PM.jpeg";
import image2 from "../images/WhatsApp Image 2024-08-26 at 4.46.33 PM (1).jpeg";
import image3 from "../images/WhatsApp Image 2024-08-26 at 4.46.30 PM.jpeg";
import image4 from "../images/gameImg4.jpg";
import image5 from "../images/WhatsApp Image 2024-08-26 at 4.46.33 PM (2).jpeg";
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import Swiperslides from './Swiperslides';

export default function MySwiper() {
  return (
      <>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: false
            }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={1000} // Adjust the speed for smoother transitions
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper "
        >
          <SwiperSlide>
            <div className="image-container relative">

              <p>
                <h1 className='text-[18px] font-bold text-[rgb(193,157,226)] absolute left-[-440px] top-[140px]'>#1 spotlight</h1>
                <h1 className='text-[70px] font-bold text-[white] absolute left-[-440px] top-[160px]'>PUBG</h1>
                <h1 className='text-[15px] text-white absolute left-[-480px] w-[40%] top-[260px]'>PUBG: BATTLEGROUNDS is a battle royale that pits 100 players against each other. Outplay your opponents to become the lone survivor. Play free now!
                </h1>
              </p>
              <img src={image1} alt="Slide 1" />
              <div className="gradient-overlay"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
              <p>
                <h1 className='text-[18px] font-bold text-[rgb(193,157,226)] absolute left-[-440px] top-[140px]'>#2 spotlight</h1>
                <h1 className='text-[70px] font-bold text-white absolute left-[-350px] top-[160px]'>GTA </h1>
                <h1 className='text-[15px] text-white absolute w-[40%] left-[-440px] top-[260px]'>Players can freely explore the open world. The story is about three protagonists: retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer and gunrunner Trevor Philips. They attempts to commit robberies while under pressure from a corrupt government agency and powerful criminals.</h1>
              </p>
              <img src={image2} alt="Slide 2" />
              <div className="gradient-overlay"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
              <p>
                <h1 className='text-[18px] font-bold text-[rgb(193,157,226)] absolute left-[-440px] top-[140px]'>#3 spotlight</h1>
                <h1 className='text-[70px] font-bold text-white absolute left-[-440px] top-[160px]'>VALORANT</h1>
                <h1 className='text-[15px] text-white absolute left-[-440px] top-[260px] w-[40%]'>DEFY THE LIMITS

                  Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.</h1></p>

              <img src={image3} alt="Slide 3" />
              <div className="gradient-overlay"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
              <p>
                <h1 className='text-[18px] font-bold text-[#c19de2] absolute left-[-440px] top-[140px]'>#4 spotlight</h1><h1 className='text-[60px] font-bold text-white absolute left-[-440px] top-[160px]'>OPEN WORLD</h1>
                <h1 className='text-[15px] w-[40%] text-white absolute left-[-440px] top-[260px]'>In a post-nuclear future, the descendant of an ancient exiled hero must leave his tribe in search of the Garden of Eden Creation Kit, the last chance of survival for his people.</h1></p>
              <img src={image4} alt="Slide 4" />
              <div className="gradient-overlay"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
              <p>
                <h1 className='text-[18px] font-bold text-[rgb(193,157,226)] absolute left-[-440px] top-[140px]'>#5 spotlight</h1>
                <h1 className='text-[70px] font-bold text-white absolute left-[-440px] top-[160px]'>MINECRAFT</h1>
                <h1 className='text-[15px] text-white absolute left-[-440px] w-[40%] top-[260px]'>Minecraft is a game about placing blocks and having adventures. It's a survival experience about staying alive in your own fantastic world that's also a creative space to build almost anything you can imagine!</h1></p>
              <img src={image5} alt="Slide 5" />
              <div className="gradient-overlay"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
  );
}