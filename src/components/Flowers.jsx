import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import { flowersdb } from "../data/Flowersdb";

const Flowers = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <div className="w-full bg-pink-50 py-[50px] px-10">
      <div className="md:max-w-[1480px] m-auto max-w-[600px] gap-20 md:gap-80">
        <h1 className="text-3xl py-3 font-bold">Seasonal <span className="text-yellow-700">Flowers</span></h1>
        <Slider {...settings}>
          {flowersdb.map((flower) => (
            <Card flower={flower}/>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Flowers;
