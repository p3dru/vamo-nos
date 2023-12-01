import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';

const LoginParticipante = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post('http://localhost:3000/auth/login-participantes', {email, senha});
            console.log(response);
            const token = response.data.access_token;
            if(token){
                console.log("Token encontrado");
                setRedirect(true);
            } else {
                console.log("Token não encontrado");
                setRedirect(true);
            }
        } catch (error){
            //return <Navigate to='/login-participante'/>
            console.error('Erro de autenticação: ', error);
        }
    };

    if(redirect){
        return <Navigate to='/home-participantes'/>
    }

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
                    <Link /*to={'/home-participantes'} */ onClick={handleSubmit} className="btn-cadastro" type="submit">Acessar</Link>
                    {/*<button onClick={handleSubmit} className="btn-cadastro">Obter Dados</button>*/}
                </div>
            </div>
        </form>
    )
}

export default LoginParticipante;