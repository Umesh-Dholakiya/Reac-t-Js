import React, { useState } from 'react'
import Header from '../component/Header'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../Context/AuthContext';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch(`http://localhost:8000/users?email=${email}&password=${password}`, {
                method: 'GET'
            });
            let res = await response.json();

            if (res.length === 0) {
                toast.error("Both are not valid");
            } else {
                localStorage.setItem("users", JSON.stringify(res[0]));  
                setAuth({
                    ...auth,
                    user: res[0] 
                });

                if (res[0].role === "admin") {
                    navigate('/admin');
                } else {
                    navigate('/');
                }
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    }


    return (
        <>
            <Header />
            <div className='container mt-5'>
                <div className="col-lg-8">
                    <div className="card">
                        <h5 className="card-header">User Login</h5>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" />
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
            <ToastContainer />
        </>
    )
}

export default Login