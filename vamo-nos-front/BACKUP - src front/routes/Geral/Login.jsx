import React from "react";
import { Link } from "react-router-dom";
import './styles/Login.css'

const Login = () => {
    return (
        <div className="login">
            <Link to={'/login-organizador'} className="btn-login">Login Organizador</Link>
            <Link to={'/login-participante'} className="btn-login">Login Participante</Link>
            <Link to={'/cadastrar'} className="">Cadastrar-se</Link>

            <div className="btn">
                <Link to={'/'} className="btn-cadastro">Voltar</Link>
            </div>
        </div>
    );
}

export default Login;