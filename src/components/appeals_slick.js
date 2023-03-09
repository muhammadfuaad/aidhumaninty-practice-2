import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Appeal_card from './generic/components/appeal_card';

function Appeals_slick() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      showThumbs: false,
      responsive: [    
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            infinite: true,
            className: "myCustomCarousel",
          }
        }
      ]
    };
    return (
      <div className="slick appeals relative">
        <button className="hidden sm:flex absolute sm:-bottom-10 sm:right-0 px-10 py-6 text-[1.4rem] font-semibold text-primary-dark bg-transparent outline
        outline-spanish-gray rounded-xl self-center sm:self-auto">View All</button>
        <Slider {...settings}>
          <div>
            <Appeal_card/>
          </div>
          <div>
            <Appeal_card/>
          </div>
          <div>
            <Appeal_card/>
          </div>
          <div>
            <Appeal_card/>
          </div>
          <div>
            <Appeal_card/>
          </div>
          <div>
            <Appeal_card/>
          </div>
        </Slider>
      </div>
    );
  }
export default Appeals_slick;