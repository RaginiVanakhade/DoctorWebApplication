import React, { useState } from 'react';


const Todo = () => {
  const [value, setValue] = useState([]);
  const [add, setAdd] = useState("");

  function removeValue(index) {
    setValue(value.filter((_, i) => i !== index));
  }

  function clickAddValue(event) {
    if (event.type === 'click' || event.key === 'Enter') {
      if (add.trim()) {
        setValue([...value, add]);
        setAdd("");
      }
    }
  }

  return (
    <div className='bg-gray-600 w-96 m-10 p-4'>
      <h1 className='bg-orange-400 text-center'>To Do App</h1>
      <div>
        <label htmlFor="text" className='bg-red-300 p-1'>Value</label>
        <input
          type="text"
          id="text"
          placeholder="Enter something"
          value={add}
          className="m-3"
          onChange={(e) => setAdd(e.target.value)}
          onKeyDown={clickAddValue}
        />

        <button
          className="bg-blue-500 rounded-lg p-1"
          onClick={clickAddValue}
        >
          Add Value
        </button>
        <br />

        <div className="flex space-x-2">
          <ul className="w-60 bg-slate-500">
            {value.map((item, index) => (
              <li key={index} className="flex justify-between m-4 border-solid border-red-400">
                {item}
                <div className="bg-red-500">
                  <button onClick={() => removeValue(index)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
