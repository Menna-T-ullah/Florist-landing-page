import React from "react";
import Slider from "react-slick";
import ava from "../assets/ava.png";
import ava1 from "../assets/ava1.png"
import ava2 from "../assets/ava2.png"
import ava3 from "../assets/ava4.png"
import FeedbackCard from "./FeedbackCard";

function Feedback() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div className="w-full bg-white py-[50px] px-10">
      <div className="md:max-w-[1480px] m-auto max-w-[600px] gap-20 md:gap-80">
        <h1 className="text-3xl py-3 font-bold">
          Client <span className="text-yellow-700">Feedback</span>
        </h1>
        <Slider {...settings}>
          <FeedbackCard img={ava} name={"Alsion Watson"} text={"Flower Expert"} des={"It was Such an experenice. The flower was really fresh and they really take care of their flowers."}/>
          <FeedbackCard img={ava1} name={"Lili Rose"} text={"Flower Lover"} des={"I loved you sense of flowers. They are so Perfect every flower have itsown vibe."}/>
          <FeedbackCard img={ava2} name={"Rana Salah"} text={"New Client"} des={"It was my first time to buy flowers from that place. God damn it was awsome love u."}/>
          <FeedbackCard img={ava3} name={"Don David"} text={"Flower Explorer"} des={"I like their hard work to make their flower beautiful and with that quality."}/>
        </Slider>
      </div>
    </div>
  );
}

export default Feedback;
