import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './style.css'


const View = () => {
    const navigate = useNavigate();

    const [record, setRecord] = useState(JSON.parse(localStorage.getItem("users")) || []);

    const handleDelete = (userid) => {
        const DeleteRecord = record.filter((user) => user.userid !== userid);
        setRecord(DeleteRecord);
        localStorage.setItem("users", JSON.stringify(DeleteRecord));
        alert("User deleted successfully");
    };
 
    return (
        <div align="center">
            <h2>View User </h2>

            <table border={1}>

                <thead>
                    <tr>
                        <td>Srno</td>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Action</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        record.map((val) => {
                            const { userid, name, phone } = val;
                            return (
                                <tr key={userid}>
                                    <td>{userid}</td>
                                    <td>{name}</td>
                                    <td>{phone}</td>
                                    <td>
                                        <button onClick={() => navigate(`/edit`, { state: val })} className='edit_btn'>Edit</button>
                                        <button onClick={() => handleDelete(userid)} className='delete_btn'>Delete</button>
                                    </td>
                                </tr>
                            );
                        })
                    }

                </tbody>
            </table>
            <Link to={`/Add`} >Add</Link>
        </div>
    )
}

export default View;
