import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import '../Login/styles/LoginsStyles.css';
import axios from  'axios';

const LoginOrganizador = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post('http://localhost:3000/auth/login-organizadores',{email, senha});
            console.log(response);
            const token = response.data.access_token;
            if(token){
                console.log("Token encontrado");
                localStorage.setItem('token', token);
                setRedirect(true);
            } else {
                console.log("Token não encontrado");
                setRedirect(false);
            }
        } catch(error){
            console.error("Erro de autenticação: ", error);
        }
    };

    if(redirect){
        return <Navigate to='/home-organizadores'/>
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
            <Link to={'/alterar-senha-organizadores'} className="btn-login">Alterar senha</Link>


            <div className="btn">
                <Link to={'/login'} className="btn-cadastro">Voltar</Link>
                <Link /*to={'/home-organizadores'}*/ onClick={handleSubmit} className="btn-cadastro" type="submit">Acessar</Link>
            </div>
            </div>
        </form>
        
    )
}

export default LoginOrganizador;