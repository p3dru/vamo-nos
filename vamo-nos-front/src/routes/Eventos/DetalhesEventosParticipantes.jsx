import React from "react";
import { Link } from "react-router-dom";

const DetalhesEventosParticipantes = () => {
    return (
        <div>
            <h1>Titulo Evento</h1>
            <p>[Aqui ficará o carroussel de imagens]</p>
            <h2>Descrição</h2>
            <p>[Descrição]</p>
            <p>[Comentários]</p>
            <Link to={'/eventos/titulo-evento'}>Inscrever-se</Link>
            <p>[criar lógica para fazer o usuário ser inscrito no evento]</p>
            <Link to={'/home-participantes'}>Voltar</Link>
        </div>
    )
}

export default DetalhesEventosParticipantes;