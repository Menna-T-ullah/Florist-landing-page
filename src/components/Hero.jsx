import React from "react";
import hero from "../assets/hero.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="w-full bg-white py-24 px-10">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px] gap-20 md:gap-80">
        <div className="flex flex-col justify-start gap-4">
          <p className="py-2 text-2xl text-purple-600 font-medium">
            START TO BLOOM
          </p>
          <h1 className="py-2 md:text-5xl text-4xl font-semibold leading-[37px]">
            There is sure to be a{" "}
            <span className="text-yellow-700">FLOWER</span> that speaks to your{" "}
            <span className="text-yellow-700">UNIQUE</span> personality
          </h1>
          <p className="py-2 text-lg text-gray-600">
            There are over 400,000 types of flowering plants, so Every Flower
            has its own Magic.
          </p>
          <form className="max-w[700px] p-4 input-box-shadow rounded-md flex justify-between text-yellow-700 bg-white border">
            <input
              className="bg-white outline-none"
              type="text"
              placeholder="What flower you like?"
            />
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
        <div className="order-first md:order-last max-w-lg">
          <img className="rounded-lg w-96 h-96 m-auto" src={hero} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
