import React, { useCallback, useEffect, useRef, useState } from 'react';

const PasswordGenarator = () => {
  const [length, setLength] = useState(4);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const passRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDabcd";
    if (number) str += "0123456789";
    if (character) str += "!@#$%^&*";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str[randomIndex];
    }

    setPassword(pass);
  }, [length, number, character]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, passwordGenerator]);

  const handleCopy = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])
  return (
    <div className='bg-yellow-200 items-center m-10 p-10'>
      <div>
        <h1 className='text-xl bg-orange-400 text-center'>Password Genrator</h1>
        <form>
          <input
            type="text"
            className="bg-gray-300"
            value={password}
            placeholder="password"
            readOnly
            ref={passRef}
          />
          <button
            type="button"
            className="bg-blue-500 rounded-lg p-1 m-1"
            onClick={handleCopy}
          >
            Copy
          </button>
          <br />

          <input
            type="range"
            min="4"
            max=""
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label>Length: {length}</label>
          <br />

          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber((prev) => !prev)}
          />
          <label>Include Numbers</label>
          <br />

          <input
            type="checkbox"
            checked={character}
            onChange={() => setCharacter((prev) => !prev)}
          />
          <label>Include Special Characters</label>
        </form>
      </div>
    </div>
  );
};

export default PasswordGenarator;
