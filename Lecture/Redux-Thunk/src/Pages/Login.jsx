import React, { useState } from 'react'
import Header from '../component/Header'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let response = await fetch(`http://localhost:8000/users`, {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    pwd: pwd
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
                        <h5 className="card-header">Login User</h5>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter Your Email' required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" onChange={(e) => setPwd(e.target.value)} value={pwd} placeholder='Enter Your Password' />
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                                <Link to={`/register`}>
                                    <button type="submit" className="btn btn-success mx-5">Register</button>
                                </Link>

                            </form>

                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Login
