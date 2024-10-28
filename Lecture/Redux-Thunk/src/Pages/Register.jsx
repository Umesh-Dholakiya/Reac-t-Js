import React, { useState } from 'react'
import Header from '../component/Header'
import { Link } from 'react-router-dom'

const Register = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let response = await fetch(`http://localhost:8000/users`, {
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    phone: phone,
                    email: email,
                    password: password,
                    city: city,
                    role: "user"
                })
            })

            let res = await response.json();
            if (res) {
                alert("Registration Successfull");
            }
            else {
                alert("Registration Failed");
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    }
    return (
        <div>
            <Header />

            <div className='container mt-5'>
                <div className="col-lg-8">
                    <div className="card">
                        <h5 className="card-header">Register User</h5>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} placeholder='Enter Your Name' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                                    <input type="number" className="form-control" onChange={(e) => setPhone(e.target.value)} value={phone} placeholder='Enter Your Number' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter Your Email' required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Enter Your Password' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">City</label>
                                    <input type="text" className="form-control" onChange={(e) => setCity(e.target.value)} value={city} placeholder='Enter Your City' />
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                                <Link to={`/login`}>
                                    <button type="submit" className="btn btn-success mx-5">Login</button>
                                </Link>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register
