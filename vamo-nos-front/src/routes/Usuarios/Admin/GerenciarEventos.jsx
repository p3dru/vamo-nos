import React from "react";
import { Link } from "react-router-dom";

const GerenciarEventos = () => {
    return(
        <div>
            <h1>Eventos criados</h1>
            <p>[Para cada evento, um card]</p>
            <p>[Cada card deve conter um botão de visualização]</p>
            <p>[Dentro de cada card deve conter um botão para visualizar o evento]</p>
            <p>[um botão para editar o evento]</p>
            <p>[um botão para excluir o evento]</p>
            <Link to={'/admin/home'}>Voltar</Link>
        </div>
    )
}

export default GerenciarEventos;