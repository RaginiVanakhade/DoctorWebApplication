import React, { useState } from "react";
import { Link } from "react-router-dom";
import DoctorFooter from "./DoctorFooter";
import Slider from "./Slider";
import SelectServices from "./SelectServices";

const DoctorNavbar = () => {
  const [home, setHome] = useState(false)
  function handleHomePage() {
    console.log("working now");
    if(home){
      setHome(<Slider/>)
    }
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between px-4 py-2 shadow-2xl md:justify-center md:gap-4 w-full h-full">
        <Link to="/" className="text-sm md:text-base">
          <div>Home</div>
        </Link>
        <Link to="about" className="text-sm md:text-base">
          <div>About</div>
        </Link>
        <div onClick={handleHomePage}>{<SelectServices/>}</div>
      </div>
      <div className=" ">
      <div>{home ? "" : <Slider/>}</div>
      </div>
      <div >
        <DoctorFooter/>
      </div>
    </div>
  );
};

export default DoctorNavbar;

