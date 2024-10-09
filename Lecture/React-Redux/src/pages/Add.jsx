import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddUser } from "../Action/CrudAction";

const Add = () => {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !phone) {
            alert("all filed is required");
            return false;
        }

        let obj = {
            id: Math.floor(Math.random() * 100000),
            name: name,
            phone: phone
        }

        dispatch(AddUser(obj))

    }

    return (
        <div align="center">
            <h2>Add Record</h2>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <tr>
                        <td>Name :- </td>
                        <td><input type="text" onChange={(e) => setName(e.target.value)} value={name} /></td>
                    </tr>
                    <tr>
                        <td>Phone :- </td>
                        <td><input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" /></td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default Add;