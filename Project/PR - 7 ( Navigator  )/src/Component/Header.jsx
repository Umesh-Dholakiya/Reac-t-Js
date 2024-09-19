import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg d-flex align-items-center  navbar-light">
                <div className="container-fluid">
                    <h2 className="navbar-brand" href="#" style={{marginLeft:"350px",fontSize:"25px",color:"#4f4747" , padding:'20px 40px', borderRadius:"10px 20px 10px 20px", boxShadow:"4px 4px 1px #777764" , marginTop:"10px"}}>Navigator Crud</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                            <li className="nav-item me-3 ">
                                <Link to="/" className="nav-link active " aria-current="page" href="#" style={{marginLeft:"350px",fontSize:"25px",color:"#4f4747", padding:'20px', borderRadius:"10px 20px 10px 20px", boxShadow:"3px 3px 1px #777764", marginTop:"10px"}}>Add</Link>
                            </li>
                            <li className="nav-item ms-2">
                                <Link to="/view" className="nav-link active " aria-current="page" href="#"style={{marginLeft:"20px",fontSize:"25px",color:"#4f4747", padding:'20px', borderRadius:"10px 20px 10px 20px", boxShadow:"3px 3px 1px #777764", marginTop:"10px"}}>View</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header
