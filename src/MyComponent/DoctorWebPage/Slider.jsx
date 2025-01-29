import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Slider = () => {
    const sliderImg = [
        "https://tse4.mm.bing.net/th?id=OIP.uzzKVL89KBg1nGNiMgbC6wHaEK&pid=Api&P=0&h=180",
        "https://tse1.mm.bing.net/th?id=OIP.fvY57jSF9RoRFwEreIlIsgHaEo&pid=Api&P=0&h=180",
        "https://tse1.mm.bing.net/th?id=OIP.ejW7WUC852BIgvYOcjhT8QHaEK&pid=Api&P=0&h=180",
        "https://tse4.mm.bing.net/th?id=OIP.QrXsHxVrZZxqbc1x1xKKTwHaER&pid=Api&P=0&h=180",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImg.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? sliderImg.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className='flex items-center w-full'>
            <button onClick={handlePrev} className=' shadow-xl m-2 p-4 bg-gray-300 rounded-md opacity-40 hover:opacity-80'><IoIosArrowBack/></button>
            <img src={sliderImg[currentIndex]} alt="slider" className="w-full h-96 opacity-20 " />
            <button onClick={handleNext} className=' shadow-xl m-2 p-4 bg-gray-300 rounded-md opacity-40 hover:opacity-80'><IoIosArrowForward/></button>
        </div>
    );
};

export default Slider;
