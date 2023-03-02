import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Homepage_hero_slider from './homepage/components/homepage_hero_slider';
function Homepage_hero_slider_collection() {    
  return (
    <Carousel
      showStatus={false}
      className="relative"
      renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <div
            className={`${
              hasPrev ? 'absolute' : 'hidden'
            } top-0 bottom-0 left-0 flex justify-center items-center cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <div className="bg-white rounded-r-full px-4 py-2">
              <img src="./icons/arrow-left-gray.svg"></img>
            </div>
          </div>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <div
            className={`${
              hasNext ? 'absolute' : 'hidden'
            } top-0 bottom-0 right-0 flex justify-center items-center cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <div className="bg-white rounded-l-full px-4 py-2">
              <img src="./icons/arrow-right-gray.svg"></img>
            </div>
          </div>
        );
      }}
    >
      <div>
        <Homepage_hero_slider
        title= "Build a water well" 
        content= "1 in 3 people around the world do not have access to clean drinking water. Women and children often walk for miles each day to collect water to drink, denying them the opportunity to go to school, to work and to thrive."
        category= "Water for all"/>
      </div>
      <div>
        <Homepage_hero_slider
        title= "Yemen Emergency" 
        content= "1 in 3 people around the world do not have access to clean drinking water. Women and children often walk for miles each day to collect water to drink, denying them the opportunity to go to school, to work and to thrive."
        category= "Water for all"
        />
      </div>
      <div>
        <Homepage_hero_slider
        title= "Rohingya Appeal" 
        content= "1 in 3 people around the world do not have access to clean drinking water. Women and children often walk for miles each day to collect water to drink, denying them the opportunity to go to school, to work and to thrive."
        category= "Water for all"
        />
      </div>
    </Carousel>
  );
}
export default Homepage_hero_slider_collection;
