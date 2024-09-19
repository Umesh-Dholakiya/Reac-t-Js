import React , { useState }  from 'react'
import { Link } from 'react-router-dom';
import './style.css'

const Add = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [record, setRecord] = useState(JSON.parse(localStorage.getItem("users")) || []);

    const handlesubmit = (e) => {

        e.preventDefault();

        const obj = {
            userid: Math.floor(Math.random() * 10000),
            name: name,
            phone: phone
        }

        let newfield = [...record, obj];
        setRecord(newfield);
        localStorage.setItem("users", JSON.stringify(newfield));
        alert("Record is Added...");
        setName('');
        setPhone("");
        
    }

    return (
        <div align="center">
            <h2>Add User </h2>

            <form onSubmit={handlesubmit}>
                <table border={1}>

                        <tr>
                           <td>Name :- </td>
                           <td><input type="text" onChange={(e) => setName(e.target.value)} value={name} /></td>
                        </tr>
                        <tr>
                           <td>Phone :- </td>
                           <td><input type="number" onChange={(e) => setPhone(e.target.value)} value={phone} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" value="submit" /></td>
                        </tr>
                </table>
            </form>
            <Link to={`/ `}>View User</Link>
        </div>
    )
}

export default Add;
