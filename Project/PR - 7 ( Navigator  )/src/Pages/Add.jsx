import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Component/Header'
import './Style.css'

function Add() {

    const [title, setTitle] = useState("")
    const [dep, setDep] = useState("")
    const [record, setRecord] = useState([])

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('course')) || [];
        setRecord(data);
    }, [])

    const handleForm = (e) => {
        e.preventDefault()

        if (!title || !dep) {
            toast.error("all fields required")
            return false;
        }

        let obj = {
            id: Math.floor(Math.random() * 10000),
            title,
            dep
        }

        let newrecord = [...record, obj];
        localStorage.setItem('course', JSON.stringify(newrecord));
        setRecord(newrecord);
        toast.success("successfully add...");
        setTitle("");
        setDep("");
    }
    return (
        <div>
            <Header />

            <div className="container" style={{ margin: "80px 55px", color: "white" }}>
                <div className="row">
                    <div className="col-lg-6 mx-auto">

                        <form onSubmit={handleForm} className=' p-5' style={{ border: "2px solid transparent", borderRadius: "10px 20px 10px 20px", boxShadow: "5px 5px 2px #777764" }}>
                            <div className="mb-3">
                                <label className="form-label" style={{ fontSize: "20px" }}>Title</label>
                                <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Enter Your Title...' />

                            </div>
                            <div className="mb-3 mt-5">
                                <label className="form-label" style={{ fontSize: "20px" }}>Description</label>
                                <input type="text" className="form-control" onChange={(e) => setDep(e.target.value)} value={dep} placeholder='Enter Your Description...' />
                            </div>

                            <button type="submit" className="btn mx-auto d-block  mt-5" style={{ border: "3px solid transparent", padding: "12px 35px", fontSize: "22px", borderRadius: "10px 20px 10px 20px", boxShadow: "5px 5px 2px #777764" }}>Submit</button>
                        </form>

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

export default Add
