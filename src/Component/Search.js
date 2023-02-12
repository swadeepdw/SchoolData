import React, { useContext } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Search() {

    const [values, setValues] = useState([]);
    const [state1, setState1] = useState(false);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const heading = ['Name', 'Email', 'Mobile No', "DOB", 'Location', 'Fee']

    const Data = JSON.parse(window.localStorage.getItem("Data"))

    const handleSearch = (e) => {
        const getName = e.target.value;
        setSearch(getName)
        if (getName.length > 0) {
            // console.log(Data);
            const searchData = Data.filter((data) =>
                data.name.toLowerCase().includes(getName)
            )
            // console.log(searchData);
            setValues(searchData);
        } else {
            setValues([]);
        }
    };
    console.log("values", values.map((data) => (data.name)));

    return (
        <div>
            <div>
                <input className="form-control mr-sm-2 w-25" style={{ marginLeft: "38%" }} type="search" placeholder="Search" onChange={handleSearch} name="search"
                    value={search} aria-label="Search" />
            </div>
            <hr />
            <h4>Search Data will be here </h4>

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
                            values.map((data, index) => (
                                <tr
                                    key={data.id}
                                >
                                    <td> {data.name}</td>
                                    <td> {data.email}</td>
                                    <td> {data.mobileNo}</td>
                                    <td> {data.dob}</td>
                                    <td> {data.location}</td>
                                    <td> {data.ctc}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table >
            </div>
        </div>
    )
}
