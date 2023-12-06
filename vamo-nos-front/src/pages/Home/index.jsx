import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './style.css';

export default function Home() {
    const navigate = useNavigate();

    const landingPage = '/landing-page.jpg?url';

    return (
        <div>
            <h1>Um clique, um passo e uma mudança</h1>

            <hr />

            <div className="d-flex justify-content-evenly align-items-center">
                <div className="text-center mx-3" style={{'maxWidth':'25rem'}}>
                    <h2>VamoNos, um convite</h2>
                    <p>[Texto motivacional explicando brevemente
                        o projeto, explicar também diferenças entre
                        usuário organizador e usuário participante]
                    </p>

                    <div className="d-inline-grid">
                        <Link to={'/login'} className="btn btn-dark my-1">Acessar</Link>
                        <Link to={'/signup'} className="btn btn-dark my-1">Cadastrar-se</Link>
                    </div>
                </div>

                <img
                    id='img-home'
                    className="mx-3"
                    src={landingPage}
                    alt="landing-image"
                />
            </div>
        </div>
    )
}