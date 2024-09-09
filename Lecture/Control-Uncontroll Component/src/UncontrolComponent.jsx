import React, { useRef } from 'react'
import './UnControlComponent.css'


const UncontrolComponent = () => {

    const name = useRef("");
    const email = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email) {
            alert('Data is Invalid');
            return false;
        }
        else {
            alert('Data is Added');
            console.log(name.current.value);
            console.log(email.current.value);
        }


    }


    return (
        <div align="center">
            <h1>UnControl Component </h1>

            <form action="" onSubmit={handleSubmit}>
                Name :- <input type="text" ref={name} />
                Email :- <input type="text" ref={email} />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default UncontrolComponent
