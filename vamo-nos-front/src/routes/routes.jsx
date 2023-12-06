import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/useAuth.js';

// Rotas Públicas
import Home from '../pages/Home/index.jsx';
import Login from '../pages/Login/index.jsx';
import Signup from '../pages/Signup/index.jsx';

// Rotas Participantes
import Participant_Home from '../pages/Participant/Home/index.jsx';
import Participant_EventDetails from '../pages/Participant/EventDetails/index.jsx';

// Rotas Organizadores
import Organizer_Home from '../pages/Organizer/Home/index.jsx';
import Organizer_EventForm from '../pages/Organizer/EventForm/index.jsx';
import Organizer_EventDetails from '../pages/Organizer/EventDetails/index.jsx';

// Rotas Admin
import Admin_Login from '../pages/Admin/Login/index.jsx';
import Admin_Home from '../pages/Admin/Home/index.jsx';
import Admin_Events from '../pages/Admin/Events/index.jsx';
import Admin_EventDetails from '../pages/Admin/Events/EventDetails/index.jsx';

// Rota Não Encontrada
import NotFounded from '../pages/NotFounded/index.jsx';
import Admin_Organizers from '../pages/Admin/Organizers/index.jsx';
import Admin_Participants from '../pages/Admin/Participants/index.jsx';

const Private = ({ Logged }) => {
    const { user, logged } = useAuth();
    const location = useLocation().pathname;

    if (logged && user.type == 'participant') {
        if (location.split('/')[1] !== 'participant') {
            return <Participant_Home />
        }
        return <Logged />
    }
    else if (logged && user.type == 'organizer') {
        if (location.split('/')[1] !== 'organizer') {
            return <Organizer_Home />
        }
        return <Logged />
    }
    else if (logged && user.type == 'admin') {
        if (location == '/admin/login' || location.split('/')[1] !== 'admin') {
            return <Admin_Home />
        }
        return <Logged />
    }
    else {
        if (location == '/' || location == '/login' || location == '/signup') {
            return <Logged />
        }
        if (location.split('/')[1] == 'admin') {
            return <Admin_Login />
        }
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

                <Route path='/admin/login' element={<Private Logged={Admin_Login}/>}/>
                <Route path='/admin' element={<Private Logged={Admin_Home}/>}/>
                <Route path='/admin/events' element={<Private Logged={Admin_Events}/>}/>
                <Route path='/admin/event/:id' element={<Private Logged={Admin_EventDetails}/>}/>
                
                <Route path='/admin/organizers' element={<Private Logged={Admin_Organizers}/>}/>
                <Route path='/admin/participants' element={<Private Logged={Admin_Participants}/>}/>

                <Route path='*' element={<NotFounded/>}/>
            </Routes>
        </main>
    )
};
