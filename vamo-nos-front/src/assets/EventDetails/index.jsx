import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/useAuth';

import './style.css';

export default function EventDetails({event}) {
    const { user } = useAuth();
    const navigate = useNavigate();

    return (
        <div>
            <h1>{event.title}</h1>
            <p>Organizador: {event.organizer}</p>

            <hr />

            <div className="d-flex justify-content-evenly align-items-center">
                <div className="text-start mx-3" style={{'maxWidth':'25rem'}}>
                    <p>Descrição: {event.description}</p>
                    <p>Categoria: {event.category}</p>

                    <hr />

                    <p>Quando vai ser: {event.date.toLocaleString('pt-BR', { timeZone: 'UTC' })}</p>
                    <p>Seguidores: {event.followers}</p>

                    <hr />

                    {user.type == 'participant' && (
                        <div className="d-inline-grid">
                            <Link className='btn btn-info text-info my-2' to={'/'}><i className="bi bi-box-arrow-in-right me-2" />Participar</Link>
                        </div>
                    )}
                    {user.type == 'admin' || user.type == 'organizer' && (
                        <div className="d-inline-grid">
                            <Link className='btn btn-info text-info my-2' to={'/'}><i className="bi bi-pencil-square me-2" />Editar</Link>
                            <Link className='btn btn-danger text-danger my-2' to={'/'}><i className="bi bi-trash me-2" /> Deletar</Link>
                        </div>
                    )}
                </div>

                <img
                    className="img-event mx-3"
                    src={'https://picsum.photos/300/200'}
                    alt="Imagem"
                />
            </div>
        </div>
    )
}