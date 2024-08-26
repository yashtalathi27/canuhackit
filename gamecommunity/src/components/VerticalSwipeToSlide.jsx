import React, {Component, useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewIndi from "./ReviewIndi";
import image from "../images/download.jpeg";
import  rdata  from "./reviewData";
import axios from "axios";
function VerticalSwipeToSlide() {


  const [comment, setComments] = React.useState([]);

  useEffect(() => {

    const postId = window.location.pathname.split('/')[3];

    axios.get(`http://localhost:6005/comments/${postId}/getcomments`, {withCredentials: true})
        .then(games => setComments(games.data))
        .catch(err => console.log(err))
  }, []);


  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    horizontal: true,
    horizontalSwiping: true,
    swipeToSlide: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <div className="slider-container w-[100%] mb-[40vh]  ">
      <Slider {...settings}>
        {rdata.map((data) => {
          return (
              // eslint-disable-next-line react/jsx-key
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
