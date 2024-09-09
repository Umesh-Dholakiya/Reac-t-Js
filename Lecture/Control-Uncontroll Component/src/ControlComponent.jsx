import React, { useState } from 'react'
import './ControlComponent.css'


const ControlComponent = () => {

    const [name, setName] = useState('');
    const [record, setRecord] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            alert("Record Is Invalid...");
            return false;
        }

        const old = [...record, name];
        setRecord(old);
        alert("Record Is Added...");
        setName('');
    }


    return (
        <div align="center">
            <h1>Control Component</h1>
            <form action="" onSubmit={handleSubmit}>
                <table>
                    <thead>
                        <tr>
                            <td id='name'>
                                Name :
                            </td>
                            <td><input type="text" onChange={(e) => setName(e.target.value)} value={name} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" value="Submit" /></td>
                        </tr>
                    </thead>
                </table>
            </form>

            <br />
            <br />

            <table border={1}>
                <thead>
                    <tr>
                        <td>SR No.</td>
                        <td>Name</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        record.map((val, i) => {
                            return (
                                <tr key={i}>
                                    <td>{++i}</td>
                                    <td>{val}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default ControlComponent;
