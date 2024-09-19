import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Component/Header'
import { FaBook } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './Style.css'
import { useNavigate } from 'react-router-dom';


const View = () => {
    const [mdelete, setmdelete] = useState([])
    const [record, setRecord] = useState([])

    const Navigate = useNavigate()
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('course')) || []
        setRecord(data)
    }, [])

    const multipleDelete = (id, checked) => {
        let all = [...mdelete];
        if (checked) {
            all.push(id);
        } else {
            all = all.filter((val) => val != id);
        }
        setmdelete(all);
    }

    const deleteCourse = (id) => {
        let d = record.filter((val) => val.id != id);
        localStorage.setItem('course', JSON.stringify(d));
        setRecord(d);
        toast.error("delete successfully..");
    }

    const allDelete = () => {
        if (mdelete.length == 0) {
            toast("minimum 1 row selected...");
            return false;
        }

        let all = record.filter((val) => !mdelete.includes(val.id));
        localStorage.setItem('course', JSON.stringify(all));
        setRecord(all);

    }
    return (
        <div>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <table className="table">
                            <thead>
                                <tr align="center" style={{ fontSize: "19px" }}>
                                    <th style={{ fontSize: "22px", width: "16.66%" }} scope="col"><FaBook /></th>
                                    <th style={{ width: "16.66%" }} scope="col">Title</th>
                                    <th style={{ width: "16.66%" }} scope="col">Description</th>
                                    <th style={{ width: "16.66%" }} scope="col">Action</th>
                                    <th style={{ fontSize: "30px", width: "16.66%", cursor: "pointer" }} scope="col" onClick={() => allDelete()}>
                                        <MdDelete />

                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    record.map((val) => {
                                        return (
                                            <tr key={val.id} align="center" className='align-items-center'>
                                                <td className='pt-4'><FaBook /></td>
                                                <td className='pt-4'>{val.title}</td>
                                                <td className='pt-4'>{val.dep}</td>
                                                <td>
                                                    <button className='btn mb-2' style={{ fontSize: "25px", color: "black", display: "inline-block" }} onClick={() => Navigate('/edit', { state: val })}><FaEdit /></button> ||
                                                    <button className='btn mb-2' onClick={() => deleteCourse(val.id)} style={{ fontSize: "25px", color: "#000", display: "inline-block" }}><MdDelete /></button>
                                                </td>
                                                <td>
                                                    <input className='mt-4' type="checkbox" onChange={(e) => multipleDelete(val.id, e.target.checked)} />
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
            />
        </div>
    )
}

export default View
