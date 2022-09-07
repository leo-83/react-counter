import { useState } from "react";

const Counter = () => {
  const [counterVal, setCounterVal] = useState(0)
  
  return (
    <>
      <h1>Counter example</h1>
      <p>{counterVal}</p>
      <button onClick={() => setCounterVal( counterVal + 1 )}>+</button>
      <button onClick={() => setCounterVal( counterVal - 1 )}>-</button>
    </>
  )
}

export default Counter;