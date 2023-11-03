import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  return (
    <div className="w-full h-[80px] bg-white border-b">
      <div className="max-w-[1480px] w-full h-full m-auto flex justify-between items-center">
        <img src={logo} className="h-[200px]" />
        <div className="hidden md:flex items-center ">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Types</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <button className="px-5 flex justify-between items-center gap-2 text-yellow-700">
            <FontAwesomeIcon icon={faLock} />
            Login
          </button>
          <button className="px-6 bg-yellow-700 py-3 rounded-md text-white font-bold mx-2">
            Sign Up
          </button>
        </div>
        <div className="px-10 md:hidden" onClick={handleClick}>
          <FontAwesomeIcon className=" text-yellow-700 fa-xl" icon={toggle ? faClose : faBars} />
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute z-10 p-4 w-full px-10 bg-white md:hidden"
            : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-pink-50">Home</li>
          <li className="p-4 hover:bg-pink-50">About</li>
          <li className="p-4 hover:bg-pink-50">Support</li>
          <li className="p-4 hover:bg-pink-50">Types</li>
          <li className="p-4 hover:bg-pink-50">Pricing</li>
          <div className="flex flex-col my-4 gap-4">
            <button className="flex justify-center items-center gap-2 border border-yellow-700 px-5 py-4 rounded-md mx-2 text-yellow-700">
              <FontAwesomeIcon icon={faLock} />
              Login
            </button>
            <button className=" bg-yellow-700 px-6 py-4 rounded-md text-white font-bold mx-2 ">
              Sign Up
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
