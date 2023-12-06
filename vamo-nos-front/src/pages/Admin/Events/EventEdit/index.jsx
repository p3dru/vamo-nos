import React, { useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_BASEURL } from '../../../../global';

import './style.css';

export default function Admin_EventEdit() {
    const { id } = useParams();
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

    const title = useRef(null);
    const description = useRef(null);
    const category = useRef(null);
    const image = useRef(null);
    const date = useRef(null);

    function updateEvent() {
        if (title.current.value.trim(),
            description.current.value.trim(),
            category.current.value.trim(),
            date.current.value.trim()
        ) {
            alert('Preencha todos os campos');
            return;
        }
        axios.patch(`${API_BASEURL}/event/${id}`,
            {
                title: title.current.value,
                description: description.current.value,
                category: category.current.value,
                image: image.current.value,
                date: date.current.value
            }
        )
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.error(err);
            alert('Erro Interno 500');
        })
    }

    return (
        <div>
            <h1>Edição de Evento</h1>

            <hr />

            {event && (
                <form>
                    <input
                        type="text"
                        defaultValue={event.title}
                        placeholder='Título'
                        ref={title}
                    />
                    <textarea
                        cols="30" 
                        rows="5" 
                        maxLength={350} 
                        defaultValue={event.description}
                        placeholder='Descrição'
                        ref={description} 
                    />
                    <input 
                        type="text" 
                        defaultValue={event.category}
                        placeholder='Categoria' 
                        ref={category}
                    />

                    <label>Insira uma Imagem:</label>
                    <input type="file" id="formFile" ref={image} />

                    <label>Quando Será?</label>
                    <input
                        type="date"
                        // Verifica se a data recebida da API é Date ou String
                        defaultValue={event.date instanceof Date ? event.date.toISOString().split('T')[0] : event.date}
                        ref={date}
                    />
                </form>
            )}
            

            <div className="d-grid">
                <Link
                    className={'btn btn-success text-success fs-6 my-1'}
                    onClick={() => {updateEvent()}}
                    to={'/admin/events'}
                >
                    Salvar
                </Link>
                <hr />
                <Link to={`/admin/event/${id}`}>Voltar</Link>
            </div>
        </div>
    )
}