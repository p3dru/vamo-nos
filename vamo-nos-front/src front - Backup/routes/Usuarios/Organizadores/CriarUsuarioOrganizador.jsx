import React from "react";
import { Link } from "react-router-dom";
import './styles/CriarUsuarioOrganizador.css'
import SeletorDeImagem from "../../Geral/SeletorDeImagem";

const CriarUsuarioOrganizador = () => {
    return (
        <div className="cadastro-organizadores">
            <input className="input-organizadores" placeholder="Nome"/>
            <input className="input-organizadores" placeholder="Email"/>
            {/* fazer lógica para validar a senha*/}
            <input className="input-organizadores" placeholder="Senha"/>
            <input className="input-organizadores" placeholder="Confirmar Senha"/>
            <SeletorDeImagem />

            <div className="btn">
                <Link to={'/cadastrar'} className="btn-cadastro">Voltar</Link>
                {/*botão para enviar os dados, criar rota para validar os dados e retornar direto para o login*/}
                <Link to={''} className="btn-cadastro">Enviar</Link>
            </div>
        </div>
    )
}

export default CriarUsuarioOrganizador;