import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles/Login.css'

const Login = () => {
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
        <div className="login">
            <div className="login-div">
                <h2 className="mb-3 fs-1">Login</h2>

                <input className="login-inputs" placeholder="Email"/>
                <input className="login-inputs" placeholder="Senha"/>

                <hr />
                <Link to={'/alterar-senha'} className=" mt-0 text-decoration-underline">Esqueci minha senha</Link>
                <Link to={'/cadastrar'} className="text-decoration-underline">Não tenho conta, cadastrar-se</Link>
                <hr />

                <div className="btn">
                    <Link to={'/home-participantes'} /*onClick={handleSubmit}*/ className="btn-cadastro" type="submit">Acessar como Participante</Link>
                    <Link to={'/home-organizadores'} className="btn-cadastro">Acessar como Organizador</Link>
                </div>
            </div>

            <div className="btn">
                <Link to={'/'} className="btn-cadastro">Voltar</Link>
            </div>
        </div>
    );
}

export default Login;