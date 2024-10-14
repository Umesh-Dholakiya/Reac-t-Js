    import React from 'react'
    import { useState } from 'react'
    import { app } from '../Firebase';
    import { addDoc, collection, getFirestore } from 'firebase/firestore'
    import {  useNavigate } from 'react-router-dom';


    const Form = () => {
        const navigate = useNavigate();
        const [name , setName] = useState("");
        const [phone , setPhone] = useState("");

        const db =getFirestore(app);

        const handleSubmit = async (e) => {
            e.preventDefault();

            try{
                const user = await addDoc(collection(db , 'users'), {
                    name:name,
                    phone:phone
                })
                alert("record added...!");
                navigate('/')
            }
            catch(err){
                console.log(err);
                return false;
            }
        }



        return (
            <div align="center">
                <h2>Add User</h2>

                <form onSubmit={handleSubmit}>
                    <table border={1}>
                        <tbody>
                            <tr>
                                <td><label>First Name:</label></td>
                                <td><input type="text" onChange={(e) => setName(e.target.value)} value={name} /></td>
                            </tr>
                            <tr>
                                <td><label>Phone:</label></td>
                                <td><input type="number" onChange={(e) => setPhone(e.target.value)} value={phone} /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input type="submit" /></td>
                            </tr>
                        </tbody>
                    </table>
                </form>


            </div>
        )
    }

    export default Form
