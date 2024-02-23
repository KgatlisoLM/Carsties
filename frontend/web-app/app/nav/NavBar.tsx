import React from "react";
import { AiOutlineCar } from "react-icons/ai";
import { PiCarProfileLight } from "react-icons/pi";

function NavBar() {
  return (
    <header className="sticky top-0 z-50 flex justify-between bg-white shadow-md  p-5 items-center text-gray-800">
      <div></div>
      <div className="flex items-center gap-1 font-semibold text-3xl text-red-500">
        <PiCarProfileLight size={34}/>
        <div className="font-serif">CarZone</div>
      </div>
      <div>Login</div>
    </header>
  );
}

export default NavBar;
