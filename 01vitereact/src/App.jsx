import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function addCount(){
    if(count < 20) setCount(count + 1)
  }
  function subtractCount(){
    if(count > 0) setCount(count - 1);
  }

  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
    </>
  )
}

export default App
