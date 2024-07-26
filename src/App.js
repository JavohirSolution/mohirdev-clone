import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom"
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import { getToken, validateToken } from './helpers/token.helpers';

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = getToken("token");
        if (token && validateToken(token)) {
            navigate("/");
        } else {
            navigate("/login");
        }
    }, [navigate]);
    return (
        <>
            <Routes>
                <Route path='/' element={<Dashboard />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
            </Routes >
        </>
    )
}

export default App