import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './style.css';

export default function Organizer_EventCreate() {
    const navigate = useNavigate();

    const title = useRef(null);
    const description = useRef(null);
    const category = useRef(null);
    const image = useRef(null);
    const date = useRef(null);

    function createEvent() {
        if (title.current.value.trim(),
            description.current.value.trim(),
            category.current.value.trim(),
            date.current.value.trim()
        ) {
            alert('Preencha todos os campos');
            return;
        }
        axios.post(`${API_BASEURL}/event`,
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
            <h1>Cadastro de Evento</h1>

            <hr />

            <form>
                <input type="text" placeholder='Título' ref={title} />
                <textarea id="" placeholder='Descrição' cols="30" rows="5" maxLength={350} ref={description} />
                <input type="text" placeholder='Categoria' ref={category} />

                <label>Insira uma Imagem:</label>
                <input type="file" id="formFile" ref={image} />

                <label>Quando Será?</label>
                <input type="date" ref={date} />
            </form>

            <div className="d-grid">
                <Link
                    className={'btn btn-success text-success fs-6 my-1'}
                    onClick={() => {createEvent()}}
                    to={'/'}
                >
                    Criar
                </Link>
                <hr />
                <Link to={'/'}>Voltar</Link>
            </div>
        </div>
    )
}