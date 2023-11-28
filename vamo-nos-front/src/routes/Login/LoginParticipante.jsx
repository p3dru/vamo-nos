import React from "react";
import { Link } from "react-router-dom";

const LoginParticipante = () => {
    return (
        <div className="login-div">
            <input className="login-inputs" placeholder="Email"/>
            <input className="login-inputs" placeholder="Senha"/>
            <Link to={'/alterar-senha-participantes'} className="btn-login">Alterar senha</Link>


            <div className="btn">
                <Link to={'/login'} className="btn-cadastro">Voltar</Link>
                <Link to={'/home-participantes'} className="btn-cadastro">Acessar</Link>
            </div>
        </div>
    )
}

export default LoginParticipante;