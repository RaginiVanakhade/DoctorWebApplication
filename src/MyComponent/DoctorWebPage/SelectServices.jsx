import React, { useState } from 'react'
import Service from "./Service.json"

const SelectServices = () => {
    const [selected, setSelected] = useState("hello");

    function handleServiceChange(e) {
      setSelected(e.target.value);
      console.log(e.target.value);
    }

  return (
    <div>
         <div className="relative">
          <label htmlFor="services">
            <select
              id="services"
              onChange={handleServiceChange}
              className="text-sm md:text-base flex border border-gray-300 rounded px-2 py-1"
              value={selected}
            >
              <option value="allservices">
                Select a Service
              </option>
              <option value="Hair">Hair</option>
              <option value="Skin">Skin</option>
            </select>
          </label>
        </div>
        <div className="flex justify-center">
       <div>
       {Service
          .filter((item) => item.service === selected)
          .map((item, index) => (
            <div key={index} className=" m-5 flex ">
             <div className=" min-w-64 min-h-64 m-4">
             <img src={item.img} alt={item.name} className="min-w-64 shadow-2xl min-h-64" />
             <h2 className="m-2 text-lg font-semibold">{item.name}</h2>
             </div>
               <div>{item.discription}</div>
            </div>
          ))}
       </div>
      </div>
    </div>
  )
}

export default SelectServices