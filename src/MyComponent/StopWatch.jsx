import React, { useRef, useState } from "react";
import AccordingMenu from "./AccordingMenu";

const StopWatch = () => {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  const [btnColor, setBtnColor] = useState('red')

  const handleStart = () => {
    if (!start) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      setStart(true);
      setBtnColor('green')
    } else {
      clearInterval(intervalRef.current);
      setStart(false);
      setBtnColor('red')

    }
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setStart(false);
  };

  return (
    <div className="bg-gray-500 m-10 p-4">
      <h1 className="bg-orange-400 text-center">Stopwatch</h1>
      <div className="flex">
        <div className="w-64 m-2 bg-gray-800 rounded-lg p-4">
          <div className="text-white text-center text-2xl mb-4"> {time} Seconds</div>
          <div className="flex justify-around">
            <button
              className="p-2 rounded-m text-white"
              onClick={handleStart}
              style={{backgroundColor:btnColor}}
            >
              {start ? "Stop" : "Start"}
            </button>
            <button
              className="p-2 rounded-md bg-blue-700 text-white"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
        <AccordingMenu/>
      </div>
    </div>
  );
};

export default StopWatch;

