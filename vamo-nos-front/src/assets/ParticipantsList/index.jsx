import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/useAuth';

import './style.css';

export default function ParticipantsList({participants}) {
    const { user } = useAuth();
    const navigate = useNavigate();

    return (
        <section className='d-flex flex-wrap justify-content-center my-4'>
            {participants ? (
                participants.map((participant) => {
                return(
                    <div
                        className="card text-bg-dark border-black border-2 m-2"
                        style={{"width":" 20rem"}}
                        key={participant.id}
                    >
                        <img src="https://picsum.photos/300/200" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{participant.email}</h5>
                        </div>
                        <div className="card-footer">
                            <p className="card-text">Participações: {participant.events_followed.length}</p>
                        </div>
                        <div className="card-footer">
                            <Link to={`/${user.type}/user/${participant.id}`} className="btn">Mais detalhes</Link>
                        </div>
                    </div>
                )})
            ) : (
                <h1>Ainda não há Usuários criados.</h1>
            )}
        </section>
    )
}