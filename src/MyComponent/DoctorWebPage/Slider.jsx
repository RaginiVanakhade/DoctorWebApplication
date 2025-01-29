import React, { useState } from 'react';

const Slider = () => {
    const sliderImg = [
        "https://tse4.mm.bing.net/th?id=OIP.DGr-cqBsxLQW_KwzfgrLMwHaI8&pid=Api&P=0&h=180",
        "https://tse2.mm.bing.net/th?id=OIP.ZR28GGRCeL_rqQhKr-ck9AHaEH&pid=Api&P=0&h=180"
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
            <button onClick={handlePrev} className=' shadow-xl m-2 p-4 bg-gray-300 rounded-md opacity-40 hover:opacity-80'>Prev</button>
            <img src={sliderImg[currentIndex]} alt="slider" className="w-full h-96 opacity-25 hover:opacity-60" />
            <button onClick={handleNext} className=' shadow-xl m-2 p-4 bg-gray-300 rounded-md opacity-40 hover:opacity-80'>Next</button>
        </div>
    );
};

export default Slider;
