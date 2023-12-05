import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './style.css';
import EventsList from '../../../assets/EventsList';

export default function Organizer_Home() {
    const navigate = useNavigate();

    const data = [
        {
            id: 1,
            title: 'Evento Um',
            description: 'Lorem ipsun alguma coisa',
            category: 'categoria 1',
            date: new Date('2023-12-15'),
            followers: 50,
        },
        {
            id: 2,
            title: 'DOIS',
            description: 'Lorem ipsun alguma coisa',
            category: 'doisss',
            date: new Date('2023-12-20'),
            followers: 50,
        },
        {
            id: 3,
            title: 'Doação de alguma coisa',
            description: 'Lorem ipsun alguma coisa',
            category: 'aaaaaaaaaaaaaaa',
            date: new Date('2023-12-25'),
            followers: 50,
        },
        {
            id: 4,
            title: 'Sem ideias',
            description: 'Lorem ipsun alguma coisa',
            category: 'uuuuuuu',
            date: new Date('2023-12-30'),
            followers: 50,
        },
    ]

    return (
        <div>
            <h1>Eventos </h1>

            <hr />

            <div className="d-flex justify-content-between">
                <input className='m-2' type="text" placeholder='Pesquise aqui...' />
                <Link className='btn m-2' to={'/organizer/event-form'}><i className="bi bi-plus-lg" /> Evento</Link>
            </div>

            <EventsList events={data}/>
        </div>
    )
}