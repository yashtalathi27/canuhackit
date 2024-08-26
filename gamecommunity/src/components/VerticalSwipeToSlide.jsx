import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewIndi from "./ReviewIndi";
import image from "../images/download.jpeg";
import  rdata  from "./reviewData";
function VerticalSwipeToSlide() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <div className="slider-container w-[30%] h-[40vh] mb-[60vh]">
      <Slider {...settings}>
        {rdata.map((data) => {
          return (
            <ReviewIndi
              content={data.content}
              name={data.name}
              type={data.type}
              profile={data.profile}
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default VerticalSwipeToSlide;
