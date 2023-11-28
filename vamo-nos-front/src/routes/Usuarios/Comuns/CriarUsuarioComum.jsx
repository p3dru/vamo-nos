import React from "react";
import { Link } from "react-router-dom";
import SeletorDeImagem from "../../Geral/SeletorDeImagem";
import '../Comuns/styles/CriarUsuarioComum.css'

const CriarUsuarioComum = () => {
    return (
        <div className="cadastro-participantes">
            <input className="input-participantes" placeholder="Nome"/>
            <input className="input-participantes" placeholder="Email"/>
            {/* fazer lógica para validar a senha*/}
            <input className="input-participantes" placeholder="Senha"/>
            <input className="input-participantes" placeholder="Confirmar Senha"/>
            <SeletorDeImagem />

            <div className="btn">
                <Link to={'/cadastrar'} className="btn-cadastro">Voltar</Link>
                {/*botão para enviar os dados, criar rota para validar os dados e retornar direto para o login*/}
                <Link to={''} className="btn-cadastro">Enviar</Link>
            </div>
        </div>
    )
}

export default CriarUsuarioComum;