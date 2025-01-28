import React from "react";
import { MdOutlineElectricCar } from "react-icons/md";
import { TbVaccine } from "react-icons/tb";
import { FaStethoscope } from "react-icons/fa6";

const DoctorFooter = () => {
  const data = [
    {
      icon: <MdOutlineElectricCar />,
      name: "Ambulatory",
      description: "Ambulance service is available",
    },
    {
      icon: <TbVaccine />,
      name: "Vaccination",
      description: "Vaccination service is available",
    },
    {
      icon: <FaStethoscope />,
      name: "Physician",
      description: "Physician consultation is available",
    },
  ];

  return (
    <div className="bg-blue-200 p-6">
      <ul className="flex flex-wrap justify-center items-center gap-6">
        {data.map((item, index) => (
          <li
            key={index}
            className="flex items-center space-x-4 w-full sm:w-auto sm:flex-col sm:space-x-0 sm:space-y-2 text-center"
          >
            <span className="text-3xl text-blue-600">{item.icon}</span>
            <div>
              <h1 className="font-bold text-lg sm:text-xl">{item.name}</h1>
              <p className="text-sm sm:text-base">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorFooter;

