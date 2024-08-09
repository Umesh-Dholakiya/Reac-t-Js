import React, { useState } from 'react'

function Counter() {
  const [number, setNo] = useState(0);

  const Increment = () => {
    setNo(number + 1);
  }
  const Decrement = () => {
    setNo(number - 1);
  }
  const Reset = () => {
    setNo(0);
  }
  const Double = () => {
    setNo(number * 2);
  }
  return (
    <div align="center">
      <h1>Counter Component </h1>
      <h1>Count : {number}</h1>

      <input type="button" value="+" onClick={() => Increment()} />

      {
        number == 0 ? <input type="button" disabled value="Reset" onClick={() => Reset()} /> :
          <input type="button" value="Reset" onClick={() => Reset()} />


      }
      {
        number == 0 ? <input type="button" disabled value="-" onClick={() => Decrement()} /> :
          <input type="button" value="-" onClick={() => Decrement()} />

      }
      {
        number == 0 ? <input type="button" disabled value="Double" onClick={() => Double()} /> :
          <input type="button" value="Double" onClick={() => Double()} />

      }

    </div>
  )
}

export default Counter
