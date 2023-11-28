import React from "react";
import { Link } from "react-router-dom";

const Cadastro = () => {
    return (
        <div className="login">
            <Link to={'/cadastrar-organizador'} className="btn-login">Cadastrar-se como Organizador</Link>
            <Link to={'/cadastrar-participante'} className="btn-login">Cadastrar-se como Participante</Link>

            <div className="btn">
                <Link to={'/'} className="btn-cadastro">Voltar</Link>
            </div>
        </div>
    )
}

export default Cadastro;