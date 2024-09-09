import React, { useState } from 'react'
import './HOC.css'

const HOC = (WrappedComponent) => {

    return () => {
        const [no, setNo] = useState(0);

        const Increment = () => {
            setNo(no + 1);
        }
        const Decrement = () => {
            setNo(no - 1);
        }

        return (
            <WrappedComponent no={no} increment={Increment} decrement = {Decrement}></WrappedComponent>
        )
    }
}

export default HOC
