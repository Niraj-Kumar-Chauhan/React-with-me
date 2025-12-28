import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwoedGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*()-_=+[]{}|;:',.<>?/`~";

    for (let i = 1; i <= length; i++) {
      let charIdx = Math.floor(Math.random() * str.length) + 1;
      pass += str.charAt(charIdx);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const passRef = useRef();

  const copyToClipBord = useCallback(() => {
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwoedGenerator();
  }, [length, charAllowed, numberAllowed, passwoedGenerator, setPassword]);
  return (
    <>
      <div className="w-full bg-gray-700 p-5 rounded-2xl flex flex-col gap-4">
        <h1>Password Generator</h1>
        <div className="flex flex-col gap-3">
          <div className="w-full flex">
            <input
              type="text"
              value={password}
              placeholder="Password"
              readOnly
              ref={passRef}
              className="w-full bg-green-900 outline-none rounded-2xl flex justify-center p-2"
            />
            <button   
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
              onClick={() => copyToClipBord()}
              >
              Copy
            </button>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex justify-between flex-row gap-2">
              <input 
                className="cursor-pointer"
                type="range" 
                id="range"
                value={length} 
                min={6}
                max={100}
                onChange={(e) => setLength(e.target.value)}
              />
              <label for="range">
                length : {length}
              </label>
            </div>

            <div className="flex justify-between flex-row gap-2">
              <label for="num" className="cursor-pointer">Number</label>
              <input 
                type="checkbox"
                id="num"
                className="cursor-pointer"
                defaultChecked = {numberAllowed}
                onClick={() => setNumberAllowed((prev) => !prev)}
               />
            </div>

            <div className="flex justify-between flex-row gap-2">
              <label for="char" className="cursor-pointer">character</label>
              <input
               type="checkbox"
               id="char"
               className="cursor-pointer" 
               defaultChecked = {charAllowed}
               onClick={() => setCharAllowed((prev) => !prev)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
