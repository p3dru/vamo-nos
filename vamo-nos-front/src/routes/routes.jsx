import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/useAuth.js';

import Home from '../pages/Home/index.jsx';
import Login from '../pages/Login/index.jsx';
import Signup from '../pages/Signup/index.jsx';

import Participant_Home from '../pages/Participant/Home/index.jsx';
import Organizer_Home from '../pages/Organizer/Home/index.jsx';

import NotFounded from '../pages/NotFounded/index.jsx';

const Private = ({ Logged }) => {
    const { logged } = useAuth();
    const location = useLocation().pathname;

    if (logged) {
        console.log(1221221);
        if (location === "/") {
            return <Home />
        }
        return <Logged />
    } else {
        return <Login />
    }
};

export default function AppRoutes() {
    return (
        <main className='d-flex justify-content-center align-items-center'>
            <Routes>
                <Route path='' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>

                <Route path='/participant' element={<Private Logged={Participant_Home}/>}/>

                <Route path='/organizer' element={<Private Logged={Organizer_Home}/>}/>

                <Route path='*' element={<NotFounded/>}/>
            </Routes>
        </main>
    )
};
