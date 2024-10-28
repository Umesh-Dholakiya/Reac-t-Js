import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

const Header = () => {
    const [auth, setAuth] = useAuth();  
    const navigate = useNavigate(); 

    const handleLogout = () => {
        localStorage.removeItem('users');  
        setAuth({
            ...auth,
            user: null  
        })
        alert("User Logout");
        navigate('/login');  
    }

    return (
        <>
            <div className='bg-primary'>
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand text-white">Navbar</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                                    {auth?.user ? (
                                        <li className="nav-item">
                                            <button onClick={handleLogout} className='btn btn-warning btn-sm mx-3'>
                                                Logout
                                            </button>
                                        </li>
                                    ) : (
                                        <>
                                            <li className="nav-item">
                                                <Link to={`/login`} className="nav-link mx-3 active text-white" aria-current="page">Login</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={`/register`} className="nav-link mx-3 active text-white" aria-current="page">Register</Link>
                                            </li>
                                        </>
                                    )}
                                    <li className="nav-item">
                                        <Link to={`/`} className="nav-link mx-3 active text-white" aria-current="page">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link mx-3 active text-white" aria-current="page">Product</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link mx-3 active text-white" aria-current="page">Cart</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link mx-3 active text-white" aria-current="page">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header;
