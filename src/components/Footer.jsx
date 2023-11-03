import React from "react";
import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-white py-10 px-20">
      <div className="md:max-w-[1480px] max-w-[600px] w-full h-full m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2 gap-8 justify-between ">
        <div className="col-span-2">
          <img src={logo} className="h-[70px]" />
          <h3 className="text-2xl font-bold">Contact Us</h3>
          <h3 className="py-2 text-gray-500">Call : +201453688</h3>
          <h3 className="py-2 text-gray-500">
            A Flower House Has <br></br>all Kind of Flowers
          </h3>
          <h3 className="py-2 text-gray-700">ُEmail : Adam@gmail.com</h3>
          <div className="flex gap-4 mt-2">
            <div className="bg-pink-50 p-4 rounded-lg">
              <FaFacebookF size={20} className="text-yellow-700" />
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <FaInstagram size={20} className="text-yellow-700" />
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <FaLinkedinIn size={20} className="text-yellow-700" />
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <FaBehance size={20} className="text-yellow-700" />
            </div>
          </div>
        </div>
        <div className="py-5">
          <h3 className="text-2xl font-bold">Explore</h3>
          <ul className="py-6 text-gray-500">
            <li className="py-2">Home</li>
            <li className="py-2">About</li>
            <li className="py-2">Support</li>
            <li className="py-2">Types</li>
            <li className="py-2">Pricing</li>
          </ul>
        </div>
        <div className="py-5">
          <h3 className="text-2xl font-bold">Category</h3>
          <ul className="py-6 text-gray-500">
            <li className="py-2">Flower Vases</li>
            <li className="py-2">Flower Baskets</li>
            <li className="py-2">Flower Bouquets</li>
            <li className="py-2">Flower Decoration</li>
          </ul>
        </div>
        <div className="py-5 max-[780px]:col-span-2">
          <h3 className="text-2xl font-bold">Subscribe</h3>
          <h3 className="py-2 text-gray-500">
            We would love you to subscribe <br></br>and support us with
            kindness.
          </h3>
          <form>
            <input
              type="text"
              className="bg-pink-50 p-4 w-full rounded"
              placeholder="Enter Email"
            />
            <button className="max-[780px]:w-full my-4 bg-yellow-700 px-5 py-3 rounded-md text-white font-medium mx-2 ">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
