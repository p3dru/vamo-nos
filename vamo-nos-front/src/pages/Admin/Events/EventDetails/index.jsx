import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import EventDetails from '../../../../assets/EventDetails';
import { useAuth } from '../../../../contexts/useAuth';

import './style.css';

export default function Admin_EventDetails() {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();

    const [event, setEvent] = useState(
        // Implemantar Get com API
        //
        // axios.get(`${API_BASEURL}/event/${id}`)
        // .then((res) => {
        //     console.log(res);
        //     return(res.data);
        // })
        // .catch((err) => {
        //     console.error(err);
        //     alert('Erro Interno 500');
        // })
        {
            id: 2,
            title: 'DOIS',
            description: 'Lorem ipsun alguma coisa',
            category: 'doisss',
            date: new Date('2023-12-20'),
            followers: 50,
        }
    );

    function deleteEvent() {
        if (window.confirm(`Deseja deletar o Evento ${id}`)) {
            axios.delete(`${API_BASEURL}/event/${id}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.error(err);
            })
        }
    }

    return (
        <div>
            <EventDetails event={event} />

            <hr />

            <div className="d-inline-grid">
                <Link
                    className='btn btn-info text-info my-2'
                    to={`/${user.type}/edit-event/${id}`}
                >
                    <i className="bi bi-pencil-square me-2" /> Editar
                </Link>
                <Link
                    className='btn btn-danger text-danger my-2'
                    onClick={() => {deleteEvent()}}
                    to={'/admin/events'}
                >
                    <i className="bi bi-trash me-2" /> Deletar
                </Link>
            </div>

            <hr />

            <Link to={'/admin/events'}>Voltar</Link>
        </div>
    )
}