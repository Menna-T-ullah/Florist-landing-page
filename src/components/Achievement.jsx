import React from "react";
import ach from "../assets/ach11.png";
import { PiFlowerLotusBold, PiUsersThreeLight } from "react-icons/pi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiTask } from "react-icons/bi";

const Achievement = () => {
  return (
    <div className="w-full bg-white py-24 px-10">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px] ">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-3xl font-bold leading-[37px]">
            Our <span className="text-yellow-700">Achievement</span>
          </h1>
          <p className="]text-lg text-gray-600">
            Each bouquet, vase, and basket is artistically created by our floral
            designers.
          </p>
          <div className="grid grid-cols-2 py-15">
            <div className="py-6 flex">
              <div className="p-4 bg-pink-50 rounded-xl">
                <PiFlowerLotusBold size={30} style={{ color: "pink" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">500</h1>
                <p className="text-gray-400">Flower</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-yellow-50 rounded-xl">
                <LiaShippingFastSolid size={30} style={{ color: "orange" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">1000+</h1>
                <p className="text-gray-400">Place</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-green-50 rounded-xl">
                <BiTask size={30} style={{ color: "green" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">3400</h1>
                <p className="text-gray-400">Project</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-purple-50 rounded-xl">
                <PiUsersThreeLight size={30} style={{ color: "purple" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">35,000+</h1>
                <p className="text-gray-400">User</p>
              </div>
            </div>
          </div>
        </div>
        <div className="order-first md:order-last max-w-lg">
          <img className="rounded-lg w-96 h-96 m-auto" src={ach} />
        </div>
      </div>
    </div>
  );
};

export default Achievement;
