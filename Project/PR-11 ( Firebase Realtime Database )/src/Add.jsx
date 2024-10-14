import React, { useState } from 'react'
import { getDatabase, ref, set } from "firebase/database";
import { app } from '../firebase';
import './Add.css'


const Add = () => {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [emailid, setEmailId] = useState("");
    const [phone, setPhone] = useState("");
    const [massage, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const db = getDatabase(app)
        let id = Math.floor(Math.random() * 10000);

        set(ref(db, `users/${id}`), {
            name: name,
            company: company,
            emailid: emailid,
            phone: phone,
            massage: massage
        })
        alert("Your Record is Added....!");
        setName("");
        setCompany("");
        setEmailId("");
        setPhone("");
        setMessage("")
    }
    return (
        <div align="center" >
            <h2>Add Record</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name : </label>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </div>

                <div className="form-group">
                    <label htmlFor="name">Company : </label>
                    <input type="text" onChange={(e) => setCompany(e.target.value)} value={company} />
                </div>


                <div className="form-group">
                    <label htmlFor="name">EmailId : </label>
                    <input type="text" onChange={(e) => setEmailId(e.target.value)} value={emailid} />
                </div>


                <div className="form-group">
                    <label htmlFor="phone"> Phone : </label>
                    <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone"> Message : </label>
                    <textarea onChange={(e) => setMessage(e.target.value)} value={massage} ></textarea>
                </div>
                <br />

                <input type="submit" defaultValue="Submit" />
            </form>
        </div>
    )
}

export default Add
