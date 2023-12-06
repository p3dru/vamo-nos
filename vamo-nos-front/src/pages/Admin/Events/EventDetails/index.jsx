import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './style.css';
import EventDetails from '../../../../assets/EventDetails';

export default function Admin_EventDetails() {
    const navigate = useNavigate();

    const data = {
        id: 2,
        title: 'DOIS',
        description: 'Lorem ipsun alguma coisa',
        category: 'doisss',
        date: new Date('2023-12-20'),
        picture: null,
        organizer: 'orga01',
        followers: 50,
    }

    return (
        <div>
            <EventDetails event={data} />

            <hr />

            <Link to={'/admin/events'}>Voltar</Link>
        </div>
    )
}