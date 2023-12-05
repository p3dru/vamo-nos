import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/useAuth.js';

import Home from '../pages/Home/index.jsx';
import Login from '../pages/Login/index.jsx';
import Signup from '../pages/Signup/index.jsx';

import Participant_Home from '../pages/Participant/Home/index.jsx';

import Organizer_Home from '../pages/Organizer/Home/index.jsx';
import Organizer_EventForm from '../pages/Organizer/EventForm/index.jsx';
import Organizer_EventDetails from '../pages/Organizer/EventDetails/index.jsx';

import NotFounded from '../pages/NotFounded/index.jsx';
import Participant_EventDetails from '../pages/Participant/EventDetails/index.jsx';

const Private = ({ Logged }) => {
    const { user, logged } = useAuth();
    const location = useLocation().pathname;

    console.log(location, user);
    
    if (logged) {
        if (user.type == 'participant' && (location == '/' || location == '/login' || location == '/signup')) {
            return <Participant_Home />
        }
        else if (user.type == 'organizer' && (location == '/' || location == '/login' || location == '/signup')) {
            return <Organizer_Home />
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
                <Route path='' element={<Private Logged={Home}/>}/>
                <Route path='/login' element={<Private Logged={Login}/>}/>
                <Route path='/signup' element={<Private Logged={Signup}/>}/>

                <Route path='/participant' element={<Private Logged={Participant_Home}/>}/>
                <Route path='/participant/event/:id' element={<Private Logged={Participant_EventDetails}/>}/>

                <Route path='/organizer' element={<Private Logged={Organizer_Home}/>}/>
                <Route path='/organizer/event-form' element={<Private Logged={Organizer_EventForm}/>}/>
                <Route path='/organizer/event/:id' element={<Private Logged={Organizer_EventDetails}/>}/>

                <Route path='*' element={<NotFounded/>}/>
            </Routes>
        </main>
    )
};
