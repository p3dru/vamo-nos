import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './style.css';
import EventsList from '../../../assets/EventsList';

export default function Admin_Events() {
    const navigate = useNavigate();

    const data = [
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
        },
        {
            id: 3,
            title: 'Doação de alguma coisa',
            description: 'Lorem ipsun alguma coisa',
            category: 'aaaaaaaaaaaaaaa',
            date: new Date('2023-12-25'),
            picture: null,
            organizer: 'irineu',
            followers: 50,
        },
        {
            id: 4,
            title: 'Sem ideias',
            description: 'Lorem ipsun alguma coisa',
            category: 'uuuuuuu',
            date: new Date('2023-11-30'),
            picture: null,
            organizer: 'zeca',
            followers: 50,
        },
    ]
    const [dataFiltered, setDataFiltered] = useState([])
    const [searchInput, setSearchInput] = useState('');
    const [searchCloseds, setSearchCloseds] = useState(false);

    useEffect(() => {
        const today = new Date();

        if (searchCloseds) {
            setDataFiltered(data.filter((item) => 
                item.title.toLowerCase().includes(searchInput.toLowerCase()) &&
                item.date < today
            ));
            return;
        }
        setDataFiltered(data.filter((item) => 
            item.title.toLowerCase().includes(searchInput.toLowerCase()) &&
            item.date >= today
        ));
        return;
    },[searchInput, searchCloseds])

    return (
        <div className='w-100'>
            <h1>Eventos</h1>

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
                <div className="d-flex justify-content-evenly">
                    <div className="form-check">
                        <input
                            className="form-check-input mb-0"
                            type="checkbox"
                            checked={!searchCloseds}
                            value={!searchCloseds}
                            onChange={(e) => setSearchCloseds(!searchCloseds)}
                        />
                        <label>Em andamento</label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input mb-0"
                            type="checkbox"
                            checked={searchCloseds}
                            value={searchCloseds}
                            onChange={(e) => setSearchCloseds(!searchCloseds)}
                        />
                        <label>Encerrados</label>
                    </div>
                </div>
            </form>

            <EventsList events={dataFiltered}/>
        </div>
    )
}