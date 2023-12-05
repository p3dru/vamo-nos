import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/useAuth';

import './style.css';

export default function EventsList({events}) {
    const { user } = useAuth();
    const navigate = useNavigate();

    return (
        <section className='d-flex flex-wrap justify-content-center my-4'>
            {events ? (
                events.map((event) => {
                return(
                    <div
                        className="card text-bg-dark border-black border-2 m-2"
                        style={{"width":" 20rem"}}
                        key={event.id}
                    >
                        <img src="https://picsum.photos/300/200" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{event.title}</h5>
                            <p className="card-text">{event.description}</p>
                        </div>
                        <div className="card-footer">
                            <p className="card-text">{event.date.toLocaleString('pt-BR', { timeZone: 'UTC' })}</p>
                        </div>
                        <div className="card-footer">
                            <Link to={`/${user.type}/event/${event.id}`} className="btn">Mais detalhes</Link>
                        </div>
                    </div>
                )})
            ) : (
                <h1>Você ainda não possui Eventos criados.</h1>
            )}
        </section>
    )
}