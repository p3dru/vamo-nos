import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './style.css';

export default function Organizer_EventForm() {
    const navigate = useNavigate();

    const title = useRef(null);
    const description = useRef(null);
    const category = useRef(null);
    const image = useRef(null);
    const date = useRef(null);

    return (
        <div>
            <h1>Formulário de Eventos</h1>

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
                    className={'btn fs-6 my-1'}
                    onClick={() => {}}
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