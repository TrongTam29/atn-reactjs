import React, { useState, useEffect } from 'react'
// import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

// import bootstrap from 'bootstrap'
import "../Css/page/NavBar.css"

export default function NavBar() {
    const [staffInfo, setStaffInfo] = useState("")

    useEffect(() => {
        const staff = localStorage.getItem("staffInfo")
        const json = JSON.parse(staff)
        setStaffInfo(json)
    }, [])

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/Login" className="btn btn-outline-dark" style={{ margin: '5px' }}>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Register" className="btn btn-outline-dark" style={{ margin: '5px' }}>Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="AddNewProduct" className="btn btn-outline-dark" style={{ margin: '5px' }}>Add New Product</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/OrderPage" className="btn btn-outline-dark" style={{ margin: '5px' }}>Create New Order</Link>
                            </li>

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-secondary" type="submit">Search</button>
                            <UserOutlined className="site-form-item-icon" style={{ margin: '15px' }} />
                            <p>{staffInfo.agencyaccount}</p>
                        </form>
                    </div>
                </nav>
            </header>
            <Link to="/"><img src={require("../assets/images/ATN.jpg")} alt="" width="150px" /></Link>
        </div>
    )
}


