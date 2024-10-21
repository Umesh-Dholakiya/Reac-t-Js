import React from 'react'
import { Link } from 'react-router-dom'
import './slider.css'

const Sidebar = () => {
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item active" aria-current="true">
                    <Link className='text-white' to={`/admin`}>Dashboard</Link>
                </li>
                <li className="list-group-item">
                    <Link to={`/admin/users`}>Users</Link>
                </li>

                <li className="list-group-item">
                    <Link to={`/admin/product`}>Products</Link>
                </li>
                <li className="list-group-item">Profile</li>
                <li className="list-group-item">Logout</li>

            </ul>

        </>
    )
}

export default Sidebar