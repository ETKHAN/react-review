import { useState } from 'react'


function App() {
  const [password, setPassword] = useState(undefined);
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);

  return (
    <div className="bg-gray-700 w-full h-screen flex justify-center items-center">

      <div className="w-2/3 max-w-6xl min-w-[350px] flex flex-col justify-center bg-gray-300 h-fit p-4 rounded-2xl gap-2.5">

        <h1 className="text-center text-4xl font-bold">Password Generator</h1>

        <div className="flex justify-center w-full">

          <div className="flex w-3/4 min-w-[300px]">

            <input
              className="flex-[9] p-2 bg-gray-400 rounded-l-lg min-w-[100px]"
              type="text"
              placeholder="Password"
              value={password}
              readOnly
            />

            <button className="flex-[1] p-2 bg-blue-500 text-white rounded-r-lg min-w-[80px]  hover:opacity-80 transition cursor-pointer">
              Copy
            </button>

          </div>

        </div>

        <div className="flex w-3/4 min-w-[300px] justify-around mt-2.5">
          <div>
            <input 
              type="range"
              min={8}
              max={100}
              value={length}
              onChange={(e) => setLength(e.currentTarget.value)}
              className="h-2 p-1 mx-1 w-28 bg-gray-600 rounded-lg appearance-none accent-blue-500 cursor-pointer"
            />
            <label>Length : {length}</label>
          </div>

          <div>
            <input 
              className="mx-1"
              type="checkbox"
              checked={number}
              onChange={(e) => setNumber(e.target.checked)}
            />
            <label>Number</label>
          </div>

          <div>
            <input 
              className="mx-1"
              type="checkbox"
              checked={character}
              onChange={(e) => setCharacter(e.target.checked)}
            />
            <label>Special Character</label>
          </div>

        </div>

      </div>
    </div>
  )
}

export default App
