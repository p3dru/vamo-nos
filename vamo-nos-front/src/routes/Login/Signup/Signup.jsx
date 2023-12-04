import React from "react";
import { Link } from "react-router-dom";
import SeletorDeImagem from "../../Geral/SeletorDeImagem";
import '../styles/Login.css';

const Signup = () => {
    return (
        <div className="login">
            <div className="login-div">
                <h2 className="mb-3 fs-1">Signup</h2>

                <input className="login-inputs" placeholder="Nome"/>
                <input className="login-inputs" placeholder="Email"/>
                {/* fazer lógica para validar a senha*/}
                <input className="login-inputs" placeholder="Senha"/>
                <input className="login-inputs" placeholder="Confirmar Senha"/>
                <SeletorDeImagem />

                <hr />
                <Link to={'/login'} className="text-decoration-underline">Já tenho cadastro, ir para login</Link>
                <hr />

                <div className="btn">
                    {/*botão para enviar os dados, criar rota para validar os dados e retornar direto para o login*/}
                    <Link to={''} className="btn-cadastro">Cadastrar</Link>
                </div>
            </div>

            <div className="btn">
                <Link to={'/login'} className="btn-cadastro">Voltar</Link>
            </div>
        </div>
    )
}

export default Signup;