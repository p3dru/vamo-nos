import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/useAuth';
import EventsList from '../../../assets/EventsList';

import './style.css';

export default function Admin_Home() {
    const { user } = useAuth()
    const navigate = useNavigate();

    return (
        <div className='mx-5'>
            <h1>Olá, Admin @{user.email}!</h1>

            <hr />

            <div className="d-flex flex-wrap justify-content-center my-5">
                <div
                    className="card text-bg-dark border-black border-2 my-3 mx-4"
                    style={{"width":" 20rem"}}
                >
                    <div className="card-body">
                        <Link to={`/${user.type}/events`} className="btn">Eventos</Link>
                    </div>
                </div>

                <div
                    className="card text-bg-dark border-black border-2 my-3 mx-4"
                    style={{"width":" 20rem"}}
                >
                    <div className="card-body">
                        <Link to={`/${user.type}/organizers`} className="btn">Organizadores</Link>
                    </div>
                </div>

                <div
                    className="card text-bg-dark border-black border-2 my-3 mx-4"
                    style={{"width":" 20rem"}}
                >
                    <div className="card-body">
                        <Link to={`/${user.type}/participants`} className="btn">Participantes</Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}