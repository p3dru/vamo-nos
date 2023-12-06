import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/useAuth';

import './style.css';

export default function OrganizersList({organizers}) {
    const { user } = useAuth();
    const navigate = useNavigate();

    console.log(organizers);

    return (
        <section className='d-flex flex-wrap justify-content-center my-4'>
            {organizers ? (
                organizers.map((organizer) => {
                return(
                    <div
                        className="card text-bg-dark border-black border-2 m-2"
                        style={{"width":" 20rem"}}
                        key={organizer.id}
                    >
                        <img src="https://picsum.photos/300/200" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">@{organizer.email}</h5>
                        </div>
                        <div className="card-footer">
                            <p className="card-text">Eventos Criados: {organizer.events_created.length}</p>
                        </div>
                        <div className="card-footer">
                            <Link to={`/${user.type}/user/${organizer.id}`} className="btn">Mais detalhes</Link>
                        </div>
                    </div>
                )})
            ) : (
                <h1>Ainda não há Usuários criados.</h1>
            )}
        </section>
    )
}