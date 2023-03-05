import React, { useState } from "react";
import Slider from "react-slick";
import Donation_card from './menu_options/components/donation_card';

function Donation_slick() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBeforeChange = (current, next) => {
    setCurrentSlide(next);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    beforeChange: handleBeforeChange,
    afterChange: handleBeforeChange,
    customPaging: () => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
        }}
      ></div>
    ),
  };

  return (
    <div>
      <Slider {...settings}>
        <Donation_card/>
        <Donation_card/>
        <Donation_card/>
        <Donation_card/>
        <Donation_card/>
        <Donation_card/>
        <Donation_card/>

      </Slider>
      <div>
        <div
          style={{
            width: `${((currentSlide + 1) / 3) * 100}%`,
            height: "5px",
            backgroundColor: "grey",
          }}
        ></div>
      </div>
    </div>
  );
}
export default Donation_slick;