import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'


const LoginParticipante = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post('http://localhost:3000/auth/login-participante', {email, senha});
            const token = response.data.token;
            //armazenar o token como cookie
            console.log(token);
        } catch (error){
            console.error('Erro de autenticação: ', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="login-div">
                <label>
                    Email:
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="login-inputs"/>
                </label>

                <label>
                    Senha:
                    <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} className="login-inputs"/>
                </label>

                <Link to={'/alterar-senha-participantes'} className="btn-login">Alterar senha</Link>


                <div className="btn">
                    <Link to={'/login'} className="btn-cadastro">Voltar</Link>
                    <Link to={'/home-participantes'} className="btn-cadastro" type="submit">Acessar</Link>
                    {/*<button onClick={handleSubmit}>Obter Dados</button>*/}
                </div>
            </div>
        </form>
    )
}

export default LoginParticipante;