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
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop:true
        pagination={{
          clickable: false
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={image1}/>
        </SwiperSlide>
        <SwiperSlide><img src={image2}/></SwiperSlide>
        <SwiperSlide><img src={image3}/></SwiperSlide>
        <SwiperSlide><img src={image4}/></SwiperSlide>
        <SwiperSlide><img src={image5}/></SwiperSlide>
      </Swiper>
    </>
  );
}
