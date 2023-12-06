import React from "react";
import { Link } from "react-router-dom";

const GerenciarOrganizadores = () => {
    return (
        <div>
            <h1>Lista de Organizadores</h1>
            <p>[Criar um filtro dinâmico para acharmos o e-mail]</p>
            <p>[Apresentar listas de todos Organizadores]</p>
            <p>[Para cada um deles, criar a opção de visualizar, editar e excluir]</p>
            <Link to={'/admin/home'}>Voltar</Link>
        </div>
    )
}

export default GerenciarOrganizadores;