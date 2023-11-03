import React from "react";
import callpic from "../assets/callpic.png";

function Call() {
  return (
    <div className="w-full bg-pink-50 py-24 px-10">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px] gap-3 md:gap-1 items-center">
        <div className="max-w-lg">
          <img className="w-[200px] md:w-[400px]  m-auto" src={callpic} />
        </div>
        <div>
          <h1 className="py-2 text-3xl font-semibold">
            Join
            <span className="text-yellow-700"> Our Beautiful Garden </span>{" "}
            Today
          </h1>
          <p className="py-2 text-lg text-gray-600">
            Start Looking for flowers by registration now
          </p>
          <button className="max-[780px]:w-full my-4 bg-yellow-700 px-6 py-4 rounded-md text-white font-bold mx-2 ">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Call;
