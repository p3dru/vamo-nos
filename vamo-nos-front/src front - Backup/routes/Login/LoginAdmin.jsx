import React from "react";
import { Link } from "react-router-dom";
import './styles/LoginsStyles.css'

const LoginAdmin = () => {
    return (
        <div className="login-div">
            <input className="login-inputs" placeholder="Email"/>
            <input className="login-inputs" placeholder="Senha"/>
            <Link to={'/alterar-senha-organizadores'} className="btn-login">Alterar senha</Link>


            <div className="btn">
                <Link to={'/admin/home'} className="btn-cadastro">Acessar</Link>
            </div>
        </div>
    )
}

export default LoginAdmin;