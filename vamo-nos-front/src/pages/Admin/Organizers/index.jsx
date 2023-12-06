import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './style.css';
import OrganizersList from '../../../assets/OrganizersList';

export default function Admin_Organizers() {
    const navigate = useNavigate();

    const data = [
        {
            id: 1,
            email: 'orga01',
            password: '123',
            picture: null,
            events_created: [
                {
                    id: 1,
                    title: 'Evento Um',
                    description: 'Lorem ipsun alguma coisa',
                    category: 'categoria 1',
                    date: new Date('2023-12-15'),
                    picture: null,
                    organizer: 'orga01',
                    followers: 50,
                },
                {
                    id: 2,
                    title: 'DOIS',
                    description: 'Lorem ipsun alguma coisa',
                    category: 'doisss',
                    date: new Date('2023-12-20'),
                    picture: null,
                    organizer: 'orga01',
                    followers: 50,
                }
            ],
        },
        {
            id: 2,
            email: 'irineu',
            password: '123',
            picture: null,
            events_created: [
                {
                    id: 3,
                    title: 'Doação de alguma coisa',
                    description: 'Lorem ipsun alguma coisa',
                    category: 'aaaaaaaaaaaaaaa',
                    date: new Date('2023-12-25'),
                    picture: null,
                    organizer: 'irineu',
                    followers: 50,
                }
            ],
        },
        {
            id: 3,
            email: 'zeca',
            password: '123',
            picture: null,
            events_created: [
                {
                    id: 4,
                    title: 'Sem ideias',
                    description: 'Lorem ipsun alguma coisa',
                    category: 'uuuuuuu',
                    date: new Date('2023-11-30'),
                    picture: null,
                    organizer: 'zeca',
                    followers: 50,
                }
            ],
        },
    ]
    const [dataFiltered, setDataFiltered] = useState([])
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        setDataFiltered(data.filter((item) => 
            item.email.toLowerCase().includes(searchInput.toLowerCase())
        ));
        return;
    },[searchInput])

    return (
        <div className='w-100'>
            <h1>Organizadores</h1>

            <hr />

            <form>
                <div className="d-flex justify-content-between">
                    <input 
                        className='m-2'
                        type="text"
                        placeholder='Pesquise aqui...'
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                </div>
            </form>

            <OrganizersList organizers={dataFiltered}/>
        </div>
    )
}