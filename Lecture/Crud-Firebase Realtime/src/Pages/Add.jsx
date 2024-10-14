import React, { useState } from 'react'
import { getDatabase, ref, set } from "firebase/database";
import { app } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';


const Add = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const db = getDatabase(app);
        let id = Math.floor(Math.random() * 10000);

        set(ref(db, `users/${id}`), {
            name: name,
            phone: phone
        })
        alert("Your Record is Added....!");
        setName("");
        setPhone("");
        navigate('/')
    }
    return (
        <div align="center">
            <h2>Add Record</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name : </label>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </div>

                <br />

                <div className="form-group">
                    <label htmlFor="phone"> Phone : </label>
                    <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} />
                </div>
                <br />

                <input type="submit" defaultValue="Submit" />
            </form>

            <br />
            <Link to="/">View</Link>
        </div>
    )
}

export default Add
