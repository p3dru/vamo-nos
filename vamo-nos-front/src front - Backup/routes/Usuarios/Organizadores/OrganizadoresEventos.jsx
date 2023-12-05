import React from "react";
import { Link } from "react-router-dom";

const OrganizadoresEventos = () => {
    return (
        <div className="eventos-criados">
            <h2>Meus eventos criados</h2>
            <p>[Listar aqui em forma de card, todos os eventos criados pelo usuário]</p>
            <p>[Cada evento deve ter um link, onde renderizará a página com detalhes de cada evento]</p>
            <Link to={`/meus-eventos/id-organizador/titulo-evento`}>[link de exemplo de como será a exibição]</Link>
            <Link to={`/home-organizadores`}>Voltar</Link>
        </div>
    )
}

export default OrganizadoresEventos;