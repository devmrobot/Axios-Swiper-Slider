import React from "react";
import { useState, useEffect, useRef } from "react";
import "./home.css";
import countries from "../data";

// import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Mousewheel, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

export const HomeTwo = () => {

  const [displayPicture, setDisplayPicture] = useState([]);

  // Africa button active on loading page (useRef + useEffect)
  const buttonAfrica = useRef(null);

  useEffect(() => {
    buttonAfrica.current.click();
  }, []);

 // console.log(countries.filter(count => count.country === "africa"));

  return (
    <div>
      <div className="btn">
        <button
          // define the acive button by default
          ref={buttonAfrica}
          className="btn-hover color-8"
          // add filter on button 
          onClick={() => {setDisplayPicture(countries.filter(count => count.country === "africa"))}}
        >
          Africa
        </button>
        <button
          className="btn-hover color-8"
          onClick={() => {setDisplayPicture(countries.filter(count => count.country === "europe"))}}
        >
          Europe
        </button>
        <button
          className="btn-hover color-8"
          onClick={() => {setDisplayPicture(countries.filter(count => count.country === "asia"))}}
        >
          Asia
        </button>
        <button
          className="btn-hover color-8"
          onClick={() => {setDisplayPicture(countries.filter(count => count.country === "northAmerica"))}}
        >
          North America
        </button>
        <button
          className="btn-hover color-8"
          onClick={() => {setDisplayPicture(countries.filter(count => count.country === "southAmerica"))}}
        >
          South America
        </button>
      </div>
      <div className="slider">
        <Swiper
          modules={[Mousewheel, Pagination, Autoplay, EffectFade]}
          grabCursor={true}
          effect={"fade"}
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          mousewheel={true}
        >
          <div>
            {displayPicture &&
            displayPicture
            .map((count, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <img src={count.image} />
                  </div>
                </SwiperSlide>
              ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};
