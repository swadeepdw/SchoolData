import React, { useContext } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; import Search from './Search'

export default function Navbar() {

    const navigate = useNavigate();

    const handleAdd = () => {
        navigate("/addStudent")
    }
    const handleSearch1 = (e) => {
        navigate("/search")
    };

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/" style={{ color: "yellow" }}> <i className="bi bi-buildings" style={{ color: "yellow" }}></i> High School</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div style={{ marginLeft: "70%" }} className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div>
                            <button onClick={handleAdd} className="btn btn-success" style={{ height: "40px", width: "200px" }}>Show Student Data</button>
                        </div>

                        <div style={{ display: "flex", marginLeft: "10px" }}>

                            <div>
                                <button className="btn btn-outline-success my-2 my-sm-0" onClick={handleSearch1}>Search</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
