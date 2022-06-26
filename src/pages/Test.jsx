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

// Pb index https://reactjs.org/docs/lists-and-keys.html
//Le key est obligatoire en react dans le map.
//Dans la fonction map, le index est un chiffre généré et incrémenté automatiquement à chaque boucle.
//Si votre event à un id unique, vous pouvez utiliser celui-ci à la place.
//Ensuite, le bout de composant généré par le map à un key=index ou key=event.id

export const Test = () => {

  const africa = africa;
  const europe = europe;
  const asia = asia;
  const northAmerica = northAmerica;
  const southAmerica = southAmerica;

  const [countries, setCountries] = useState();
  const [displayPicture, setDisplayPicture] = useState(countries);

  const handleClick = (e) => {
    setDisplayPicture(e.target.value);
}

  // Africa button active on loading page (useRef + useEffect)
  const buttonAfrica = useRef(null);

  useEffect(() => {
    buttonAfrica.current.click();
  }, []);

  console.log(countries);

  return (
    <div>
      <div className="btn">
        <button
          // define the acive button by default
          ref={buttonAfrica}
          className="btn-hover color-8"
          value={africa}
          onClick={handleClick}
        >
          Africa
        </button>
        <button
          className="btn-hover color-8"
          value={europe}
          onClick={handleClick}
        >
          Europe
        </button>
        <button
          className="btn-hover color-8"
          value={asia}
          onClick={handleClick}
        >
          Asia
        </button>
        <button
          className="btn-hover color-8"
          value={northAmerica}
          onClick={handleClick}
        >
          North America
        </button>
        <button
          className="btn-hover color-8"
          value={southAmerica}
          onClick={handleClick}
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
            .filter(country => country.setCountries)
            .map((country, index) => (
                <SwiperSlide>
                  <div key={index}>
                    <img src={country.image} />
                  </div>
                </SwiperSlide>
              ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};
