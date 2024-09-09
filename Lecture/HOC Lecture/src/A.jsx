import React from 'react'
import HOC from './HOC'

const A = ({no, increment , decrement}) => {
    return (
        <div align="center">
            <h2>A Component</h2>
            <h3>Count :- {no}</h3>
            <button onClick={() => increment()}>+</button>
            <button onClick={() => decrement()}>-</button>
        </div>
    )
}

export default HOC(A)
