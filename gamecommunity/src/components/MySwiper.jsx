import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import image1 from "../images/gameImg.jpg"
import image2 from "../images/gameImg2.png"
import image3 from "../images/gameImg3.jpeg"
import image4 from "../images/gameImg4.jpg"
import image5 from "../images/gameImg5.jpg"
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

      <p><h1 className='text-[70px] text-white absolute left-[-440px] top-[160px]'>PUBG</h1>
      <h1 className='text-[10px] text-white absolute left-[-440px] top-[260px]'>Game Name</h1>
      </p>
      <img src={image1} alt="Slide 1" />
      <div className="gradient-overlay"></div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="image-container">
    <p><h1 className='text-[70px] text-white absolute left-[-440px] top-[160px]'>Game Name</h1>
    <h1 className='text-[10px] text-white absolute left-[-440px] top-[260px]'>Game Name</h1>
    </p>
      <img src={image2} alt="Slide 2" />
      <div className="gradient-overlay"></div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="image-container">
    <p><h1 className='text-[70px] text-white absolute left-[-440px] top-[160px]'>Game Name</h1>
    <h1 className='text-[10px] text-white absolute left-[-440px] top-[260px]'>Game Name</h1></p>
    
      <img src={image3} alt="Slide 3" />
      <div className="gradient-overlay"></div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="image-container">
    <p><h1 className='text-[70px] text-white absolute left-[-440px] top-[160px]'>Game Name</h1>
    <h1 className='text-[10px] text-white absolute left-[-440px] top-[260px]'>Game Name</h1></p>
      <img src={image4} alt="Slide 4" />
      <div className="gradient-overlay"></div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="image-container">
    <p><h1 className='text-[70px] text-white absolute left-[-440px] top-[160px]'>Game Name</h1>
    <h1 className='text-[10px] text-white absolute left-[-440px] top-[260px]'>Game Name</h1></p>
      <img src={image5} alt="Slide 5" />
      <div className="gradient-overlay"></div>
    </div>
  </SwiperSlide>
      </Swiper>
    </>
  );
}


