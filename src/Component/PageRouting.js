import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddStudent from './AddStudent';
import MainPage from './MainPage';
import Search from './Search';

export default function PageRouting() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} >
                        <Route path="/addStudent" element={<AddStudent />} />
                        <Route path="/search" element={<Search />} />
                    </Route >
                </Routes>
            </BrowserRouter>
        </div>
    )
}

