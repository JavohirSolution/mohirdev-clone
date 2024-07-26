import React from 'react';
import { Routes, Route, } from "react-router-dom"
import Dashboard from './components/Dashboard';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Dashboard />}></Route>
            </Routes >
        </>
    )
}

export default App