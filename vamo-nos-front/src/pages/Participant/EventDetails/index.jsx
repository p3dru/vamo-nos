import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './style.css';

export default function Participant_EventDetails() {
    const navigate = useNavigate();

    const data = {
        id: 3,
        title: 'Doação de Alguma coisa',
        description: 'Lorem ipsun alguma coisa',
        category: 'aaaaaaaaaaaaaaa',
        date: new Date('2023-12-25'),
        followers: 50,
    }

    return (
        <div>
            <h1>{data.title}</h1>

            <hr />

            <div className="d-flex justify-content-evenly align-items-center">
                <div className="text-start mx-3" style={{'maxWidth':'25rem'}}>
                    <p>Descrição: {data.description}</p>
                    <p>Categoria: {data.category}</p>
                    <p>Quando vai ser: {data.date.toLocaleString('pt-BR', { timeZone: 'UTC' })}</p>
                    <p>Seguidores: {data.followers}</p>

                    <div className="d-inline-grid">
                        <Link className='btn my-2' to={'/'}><i className="bi bi-box-arrow-in-right" /> Participar</Link>
                    </div>
                </div>

                <img
                    className="img-event mx-3"
                    src={'https://picsum.photos/300/200'}
                    alt="Imagem"
                />
            </div>

            <hr />

            <Link to={'/'}>Voltar</Link>
        </div>
    )
}