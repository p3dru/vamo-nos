import React from "react";
import logo from '../../images/landing-page.jpg'
import './styles/Home.css'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <h1>Um clique, uma mudança</h1>
            <div className="apresentacao">
                <div className="chamado">
                    <h2>VamoNos, um convite</h2>
                    <p>[Texto motivacional explicando brevemente
                        o projeto, explicar também diferenças entre
                        usuário organizador e usuário participante]
                    </p>
                    <div className="btn">
                        <Link to={'/login'} className="btn-cadastro">Acessar</Link>
                        <Link to={'/cadastrar'} className="btn-cadastro">Cadastrar-se</Link>
                    </div>
                </div>
                <img className="image-home" src={logo} alt="Logo"/>
            </div>
        </div>
    )
}

export default Home;