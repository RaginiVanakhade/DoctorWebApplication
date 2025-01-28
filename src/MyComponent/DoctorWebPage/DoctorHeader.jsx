import React from "react";
import { RiHeartAddLine } from "react-icons/ri";

const DoctorHeader = () => {
  return (
    <header className="flex items-center space-x-2 p-4 flex-wrap justify-around">
      <div className="text-red-500 flex items-center gap">
        <div className="">
          <RiHeartAddLine size={40} aria-label="Heart Icon" />
          </div>
        <span className="text-blue-600 font-semibold text-2xl">Med</span>
        <span className="text-gray-600 font-semibold text-2xl">Life</span>
      </div>

      <div className="flex md:gap-10 flex-wrap  ">
        <div>
          <span>Call Today:</span><br />
          <span className="text-gray-400">100 800 2025 / 200 255 849</span>
        </div>
        <div>
          <span>Opening Hours</span><br />
          <span className="text-gray-400">Mon-Fri 9:00 to 6:00</span>
        </div>
      </div>
    </header>
  );
};

export default DoctorHeader;
