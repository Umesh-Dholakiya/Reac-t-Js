import React from 'react'
import HOC from './HOC'

const B = ({no, increment , decrement}) => {
  return (
        <div align="center">
            <h2>B Component</h2>
            <h3>Count :- {no}</h3>
            <button onClick={() => increment()}> + </button>
            <button onClick={() => decrement()}> - </button>
        </div>

  )
}

export default HOC(B)
