import React, { useState } from "react";
import { Link } from "react-router-dom";
import DoctorFooter from "./DoctorFooter";

const DoctorNavbar = () => {
  const data = [
    {
      name: "Hair Treatment",
      service: "Hair",
      img: "https://tse4.mm.bing.net/th?id=OIP.DGr-cqBsxLQW_KwzfgrLMwHaI8&pid=Api&P=0&h=180",
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel similique illo accusantium reiciendis inventore ipsa quos facere quas necessitatibus assumenda. Eum velit cumque in dolore! Laudantium voluptatum blanditiis quaerat repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae tenetur enim dicta voluptas accusantium ipsa neque itaque aspernatur ipsum id voluptates reprehenderit officia, sapiente unde porro beatae nemo commodi veniam! Tempora ea sit quis autem saepe, adipisci qui similique veniam, soluta placeat vel, reprehenderit officia eligendi. Vero esse corrupti, hic, illum saepe perspiciatis ipsam deleniti ut quo eligendi, excepturi ipsa. Quidem iusto, vel officia minima soluta sit autem eos error eaque at ad recusandae! Excepturi ad deserunt doloribus, praesentium aspernatur expedita. Maxime odio fugit, reprehenderit quo quia vel quam veniam! Harum, neque blanditiis quidem expedita sit deleniti ab, nostrum unde at id nisi nihil praesentium molestias minus voluptatum vitae eum quo eos vero. Vel tempore nihil magni commodi voluptates veritatis."
    },
    {
      name: "Skin Treatment",
      service: "Skin",
      img: "https://tse2.mm.bing.net/th?id=OIP.ZR28GGRCeL_rqQhKr-ck9AHaEH&pid=Api&P=0&h=180",
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel similique illo accusantium reiciendis inventore ipsa quos facere quas necessitatibus assumenda. Eum velit cumque in dolore! Laudantium voluptatum blanditiis quaerat repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae tenetur enim dicta voluptas accusantium ipsa neque itaque aspernatur ipsum id voluptates reprehenderit officia, sapiente unde porro beatae nemo commodi veniam! Tempora ea sit quis autem saepe, adipisci qui similique veniam, soluta placeat vel, reprehenderit officia eligendi. Vero esse corrupti, hic, illum saepe perspiciatis ipsam deleniti ut quo eligendi, excepturi ipsa. Quidem iusto, vel officia minima soluta sit autem eos error eaque at ad recusandae! Excepturi ad deserunt doloribus, praesentium aspernatur expedita. Maxime odio fugit, reprehenderit quo quia vel quam veniam! Harum, neque blanditiis quidem expedita sit deleniti ab, nostrum unde at id nisi nihil praesentium molestias minus voluptatum vitae eum quo eos vero. Vel tempore nihil magni commodi voluptates veritatis."
    },
    {
      name: "Select Services",
      service: ['skin','hair'],
      img: "",
    },
  ];

  const [selected, setSelected] = useState("");

  function handleServiceChange(e) {
    setSelected(e.target.value);
    console.log(e.target.value);
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
        <div className="relative">
          <label htmlFor="services">
            <select
              id="services"
              onChange={handleServiceChange}
              className="text-sm md:text-base flex border border-gray-300 rounded px-2 py-1"
              value={selected}
            >
              <option value="service">
                Select a Service
              </option>
              <option value="Hair">Hair</option>
              <option value="Skin">Skin</option>
            </select>
          </label>
        </div>
      </div>
      <div className=" ">
      <div className=" m-5 h-96 flex justify-center">
       <div>
       {data
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
      <div >
        <DoctorFooter/>
      </div>
    </div>
  );
};

export default DoctorNavbar;

