import React from "react";
import { Link } from "react-router-dom";

const DetalhesEvento = () => {
    return (
        <div className="detalhes-evento">
            <h1>Titulo Evento</h1>
            <p>[Aqui ficará o carroussel de imagens]</p>
            <h2>Descrição</h2>
            <p>[Descrição]</p>
            <p>[Comentários]</p>
            <Link to={'/editar-evento/id-evento'}>Editar Evento</Link>
            <Link to={'/meus-eventos/id-organizador'}>Voltar</Link>
        </div>
    )
}

export default DetalhesEvento;