import React from "react";
import { useState, useEffect, useRef } from "react";
import "./home.css";

// comment importer des images en masse dans fichier
// Gestion de l'index
// Axios sur fichier local et non http

// import images
import africa1 from "../assets/africa1.jpeg";
import africa2 from "../assets/africa2.jpeg";
import africa3 from "../assets/africa3.jpeg";
import africa4 from "../assets/africa4.jpeg";
import europe1 from "../assets/europe1.jpeg";
import europe2 from "../assets/europe2.jpeg";
import europe3 from "../assets/europe3.jpeg";
import europe4 from "../assets/europe4.jpeg";
import asia1 from "../assets/asia1.jpeg";
import asia2 from "../assets/asia2.jpeg";
import asia3 from "../assets/asia3.jpeg";
import asia4 from "../assets/asia4.jpeg";
import northAmerica1 from "../assets/northAmerica1.jpeg";
import northAmerica2 from "../assets/northAmerica2.jpeg";
import northAmerica3 from "../assets/northAmerica3.jpeg";
import northAmerica4 from "../assets/northAmerica4.jpg";
import southAmerica1 from "../assets/southAmerica1.jpeg";
import southAmerica2 from "../assets/southAmerica2.jpeg";
import southAmerica3 from "../assets/southAmerica3.jpeg";
import southAmerica4 from "../assets/southAmerica4.jpeg";

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

export const Home = () => {
  const africa = [africa1, africa2, africa3, africa4];
  const europe = [europe1, europe2, europe3, europe4];
  const asia = [asia1, asia2, asia3, asia4];
  const northAmerica = [northAmerica1, northAmerica2, northAmerica3, northAmerica4];
  const southAmerica = [southAmerica1, southAmerica2, southAmerica3, southAmerica4];

  const [countries, setCountries] = useState();

  const [displayPicture, setDisplayPicture] = useState([]);

  // Africa button active on loading page (useRef + useEffect)
  const buttonAfrica = useRef(null);

  useEffect(() => {
    buttonAfrica.current.click();
  }, []);

  return (
    <div>
      <div className="btn">
        <button
          // define the acive button by default
          ref={buttonAfrica}
          className="btn-hover color-8"
          onClick={() => {
            setDisplayPicture(africa);
          }}
        >
          Africa
        </button>
        <button
          className="btn-hover color-8"
          onClick={() => {
            setDisplayPicture(europe);
          }}
        >
          Europe
        </button>
        <button
          className="btn-hover color-8"
          onClick={() => {
            setDisplayPicture(asia);
          }}
        >
          Asia
        </button>
        <button
          className="btn-hover color-8"
          onClick={() => {
            setDisplayPicture(northAmerica);
          }}
        >
          North America
        </button>
        <button
          className="btn-hover color-8"
          onClick={() => {
            setDisplayPicture(southAmerica);
          }}
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
              displayPicture.map((picture, index) => (
                <SwiperSlide>
                  <div key={index}>
                    <img src={picture} />
                  </div>
                </SwiperSlide>
              ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};
