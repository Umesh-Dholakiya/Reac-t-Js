import { collection, getDocs, getFirestore, deleteDoc, doc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { app } from '../Firebase'
import { Link } from 'react-router-dom';

const Table = () => {

    const db = getFirestore(app);

    const [record, setRecord] = useState([]);

    const getUser = async () => {
        try {
            const data = collection(db, 'users')
            const users = await getDocs(data);
            const record = users.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }))
            setRecord(record);
        }
        catch (err) {
            console.log(err);
            return false;

        }
    }

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, 'users', id));
            alert('Record deleted successfully');
            getUser();
        } catch (err) {
            console.log(err);
        }

    };

    useEffect(() => {
        getUser();
    }, [])


    return (
        <div align="center">
            <h2>View User</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record.map((val) => {
                            const { id, name, phone } = val;
                            return (
                                <tr>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{phone}</td>
                                    <td>
                                        <button onClick={() => handleDelete(id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to='/add' >Add</Link>


        </div>
    )
}

export default Table
