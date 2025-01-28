import React, { useState } from 'react';

const AccordingMenu = () => {
  const headerData = ["Home", "AboutMe", "Education", "Social"];
  const data = [
    { title: "Home", subInfo: "About Home Details" },
    { title: "AboutMe", subInfo: "About AboutMe Details" },
    { title: "Education", subInfo: "About Education Details" },
    { title: "Social", subInfo: "About Social Details" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <nav>
        <ul className="flex justify-evenly bg-gray-800">
          {headerData.map((item, index) => (
            <li
              key={index}
              className={`bg-yellow-300 m-2 p-1 cursor-pointer ${
                activeIndex === index ? 'bg-red-500 text-white ' : ''
              }`}
              onClick={() => handleIndex(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <article>
        <ul className="flex">
          {data.map((item, index) => (
            <li
              key={index}
              className={`bg-white m-1 h-24 rounded-md p-2 ${
                activeIndex === index ? 'border-2 border-red-500 bg-yellow-300 shadow-2xl' : ''
              }`}
            >
              <h1>{item.title}</h1>
              <p>{item.subInfo}</p>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default AccordingMenu;
