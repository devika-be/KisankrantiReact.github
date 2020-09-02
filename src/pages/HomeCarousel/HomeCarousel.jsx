import React from "react";
import Slider from "react-slick";
import "./HomeCarousel.scss";
import Firstslide from "../images/tomatoslider.png";

function HomeCarousel() {
  const settings = {
    dots: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="home-carousel">
      <p className="h3 mt-5 text-center font-weight-bold ">BEST DEALS</p>
      <Slider {...settings}>
        <div className="first-slide"></div>
        <div className="second-slide"></div>
      </Slider>
    </div>
  );
}
export default HomeCarousel;
