/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Features from '../Pages/Features';
import Booking from '../Pages/Booking';
import Admin from '../Pages/Admin';
import CustomerService from '../Pages/CustomerService';
import StatusUser from '../Pages/StatusUser';
import Updates from '../Pages/Updates';


function Islogin (element) {
    const login = localStorage.getItem('login');
    if (!login) {
        return (
            <Navigate to = "/login"/>
        )
    }
    return element;
}

function WebRouting() {    
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/login" element={<Login />} />
                    {/* <Route path="/booking" element={<Islogin element={<Booking />} />} /> */}
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/service" element={<CustomerService />} />
                    <Route path="/statususer" element={<StatusUser />} />
                    <Route path="/update/:username" element={<Updates />} />

                </Routes>
            </div>
        </Router>
    );
}
export default WebRouting;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<WebRouting />);