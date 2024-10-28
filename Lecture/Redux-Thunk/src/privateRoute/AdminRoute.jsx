import React from 'react'
import { useAuth } from '../Context/AuthContext'
import { Outlet, useNavigate } from 'react-router-dom';

const AdminRoute = () => {
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    return (
        auth?.user?.role === "admin" && auth?.user ? <Outlet /> : navigate("/login")
    )
}

export default AdminRoute
