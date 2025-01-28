import React, { useState } from 'react';

const Appointment = () => {4
  const [inputdata, setInputdata] = useState("")
  const [error, setError] = useState("")
  function handleChangeValue(e) {
    const inputValue = e.target.value
    setInputdata(inputValue)
    console.log(e.target.value);
    if(inputValue !== inputValue.toUpperCase()){
      setError("please enter a uppercase value only")
    }else {
      setError("")
    }
    
  }

    function handleSumitForm(e){
      e.preventDefault()
      if (!error) {
        setInputdata("");
        setError("");
        alert("Form submitted successfully!");
      }
    }
 
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-blue-400 w-96 p-6 text-white shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Appointment</h2>
        <form >
          <div className="">
            <label htmlFor="name" className="">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded p-2 text-gray-900"
              placeholder="Enter your name"
              onChange={handleChangeValue}
              value={inputdata}
            />
          </div>
          <div  className='text-red-700'>{error}</div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            onClick={handleSumitForm}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;

