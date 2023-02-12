import './data.css';
import React, { useEffect, useContext, createContext } from 'react';
import { useState } from "react";
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import Navbar from './Navbar';

const initialData = {
    name: "",
    email: "",
    mobileNo: "",
    ctc: "",
    dob: "",
    location: "",
}

export default function AddStudent() {

    const UserContext = createContext();
    const initialState = JSON.parse(localStorage.getItem("Data")) || []
    const [Data, setData] = useState(initialState)
    const [currentData, setCurrentData] = useState(initialData)
    const [addEmp, setAddEmp] = useState(false)
    const [edit, setEdit] = useState(false)
    const [status, setStatus] = useState(true)
    const [idforeidt, setIdforedit] = useState(false)
    const [error, setError] = useState(false)

    const { name, email, mobileNo, ctc, dob, location } = currentData;
    const heading = ['Name', 'Email', 'Mobile No', "DOB", 'Location', 'Fee']

    const handleChange = (e) => {
        setCurrentData({
            ...currentData,
            [e.target.name]: [e.target.value]
        })
    }

    useEffect(() => {
        window.localStorage.setItem("Data", JSON.stringify(Data))
    }, [Data])

    const Submit = (e) => {
        if (!edit) {
            e.preventDefault();
            if (!name || !email || !mobileNo || !ctc || !dob || !location) {
                setError(true)
                return false
            }
            setData([...Data, {
                id: `${uuidv4()}`,
                name: `${name}`,
                email: `${email}`,
                mobileNo: `${mobileNo}`,
                ctc: `${ctc}`,
                dob: `${dob}`,
                location: `${location}`,
                status: status
            }]);
            window.alert("Student details saved successfully")
            setCurrentData(initialData)
        }
        else if (edit) {
            e.preventDefault();
            if (!name || !email || !mobileNo || !ctc || !dob || !location) {
                setError(true)
                return false
            }

            const updateStudent = () => {
                const newData = Data.map((data) =>
                    data.id === idforeidt ? {
                        id: idforeidt,
                        name: `${name}`,
                        email: `${email}`,
                        mobileNo: `${mobileNo}`,
                        ctc: `${ctc}`,
                        dob: `${dob}`,
                        location: `${location}`
                    }
                        : data
                )
                setData(newData);
                window.alert("Student details updated successfully")
                setCurrentData(initialData)
                setEdit(false)
            }

            updateStudent();
        }
    }
    // console.log(Data);

    const AddEmp = () => {
        setAddEmp(true);
    }

    const Cancel = () => {
        setAddEmp(false);
    }

    const OnDelete = (id) => {
        if (window.confirm("Do you want to delete this data")) {
            setData(() => {
                return Data.filter((element, index) => {
                    return element.id !== id;
                })
            })
        }
    }

    const onEdit = (id) => {
        const findEmp = Data.find((emp) => emp.id === id);
        console.log(findEmp);
        setCurrentData(findEmp);
        setEdit(true);
        setIdforedit(id);
        setAddEmp(true);
    }

    const deleteAll = () => {
        if (window.confirm("Do you want to delete all data")) {
            window.localStorage.clear(false);
            window.location.reload();
        }
    }


    return (
        <>
            {/* <UserContext.Provider value={Data}>
                <Navbar Data={Data} />
            </UserContext.Provider> */}

            <div >
                <div className='title'>
                    <h4 style={{ marginTop: '15px' }}>Student List</h4>
                    <button className='AddStudent' onClick={AddEmp}>Add Student</button>
                    <button className='DeleteStudent' onClick={deleteAll}>Delete All</button>
                </div>

                <hr />

                {addEmp
                    ? (
                        <div>
                            <form onSubmit={Submit}>
                                <div className='MainForm'>
                                    <div className='LeftSide'>
                                        <label > Name : </label>
                                        <input className='form-control  w-75' value={name} name="name" type="text" onChange={handleChange} />
                                        {error && !name && <p className='errormsg'>Please Enter Name</p>}

                                        <label> Email Id : </label>
                                        <input className='form-control  w-75' value={email} name="email" type="email" onChange={handleChange} />
                                        {error && !email && <p className='errormsg'>Please Enter Email</p>}

                                    </div>

                                    <div className='LeftSide'>
                                        <label> Location</label>
                                        <select className='form-select  w-75' value={location} name="location" onChange={handleChange}  >
                                            <option >
                                                select
                                            </option >
                                            <option >
                                                Bengluru
                                            </option >
                                            <option >
                                                Pune
                                            </option >
                                            <option >
                                                Noida
                                            </option >
                                            <option >
                                                Gurugram
                                            </option >
                                            <option >
                                                Hyderabad
                                            </option >
                                            <option >
                                                Indore
                                            </option >
                                        </select>
                                        {error && !location && <p className='errormsg'>Please Enter Location</p>}

                                        <label> Date of Birth :</label>
                                        <input className='form-control  w-75' value={dob} name="dob" type="date" onChange={handleChange} />
                                        {error && !dob && <p className='errormsg'>Please Enter Date of Birth</p>}

                                    </div>

                                    <div className='LeftSide'>
                                        <label> Mobile No :</label>
                                        <input className='form-control  w-75' value={mobileNo} name="mobileNo" type="text" onChange={handleChange} />
                                        {error && !mobileNo && <p className='errormsg'>Please Enter Mobile No</p>}

                                        <label> Fee :</label>
                                        <input className='form-control  w-75' value={ctc} name="ctc" type="number" onChange={handleChange} />
                                        {error && !ctc && <p className='errormsg'>Please Enter Fee</p>}

                                    </div>

                                </div>
                                <div style={{ marginTop: "20px" }}>
                                    <button type='submit' className='btn btn-success submitbtn' >Submit</button>
                                    <button className='btn btn-warning cancelbtn' onClick={Cancel}>Cancel</button>
                                </div>
                            </form>
                            <hr />

                        </div>

                    )
                    : ""
                }

                <div className='Border'>
                    <table className="table table-sm table-hover mb-0 tablecontent">
                        <thead>
                            <tr>
                                {
                                    heading.map((data, index) => (

                                        <th key={index} style={{ fontWeight: '600', color: '#252F40' }}>{data}</th>

                                    ))
                                }
                            </tr>
                        </thead>

                        <tbody>
                            {
                                Data.map((data, index) => (
                                    <tr
                                        key={data.id}
                                    >
                                        <td> {data.name}</td>
                                        <td> {data.email}</td>
                                        <td> {data.mobileNo}</td>
                                        <td> {data.dob}</td>
                                        <td> {data.location}</td>
                                        <td> {data.ctc}</td>
                                        <td className='bi bi-trash3-fill' style={{ color: "red", cursor: "pointer" }} onClick={() => OnDelete(data.id)}></td>
                                        <td className='bi bi-pen-fill' style={{ color: "blue", cursor: "pointer" }} onClick={() => onEdit(data.id)}></td>

                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>
                </div>
            </div >
        </>
    );
}
