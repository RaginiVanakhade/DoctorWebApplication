import React, { useState } from 'react';

const AccordingMenu = () => {
  const headerData = ["Home", "AboutMe", "Education", "Social"];
  const data = [
    { title: "Home", subInfo: "about Home Details" },
    { title: "AboutMe", subInfo: "about AboutMe Details" },
    { title: "Education", subInfo: "about Education Details" },
    { title: "Social", subInfo: "about Social Details" },
  ];

  const [active, setActive] = useState(null);

  function handleActive(index) {
    setActive(index);
  }

  return (
    <div>
      <nav>
        <ul className='flex justify-evenly bg-gray-800'>
          {headerData.map((item, index) => (
            <li
              key={index}
              className={`m-2 p-1 ${active === index ? 'bg-yellow-300' : ''}`}
              onClick={() => handleActive(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <article>
        <ul className='flex'>
          {data.map((item, index) => (
            <li key={index} className={`bg-white m-1 h-24 rounded-md ${active === index ? 'bg-gray-200' : ''}`}>
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
git