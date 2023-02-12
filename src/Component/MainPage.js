import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

export default function MainPage() {

    return (
        <div>
            <Navbar />
            <div>
                <h4 style={{ margin: "10px", marginLeft: "45%" }}>
                    <i className="bi bi-brightness-alt-high-fill" style={{ color: "green" }}></i> Welcome <i className="bi bi-brightness-alt-high-fill" style={{ color: "green" }}></i>
                </h4>
            </div>
            <Outlet />
        </div>
    )
}
