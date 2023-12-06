import React from "react";
import { Link } from "react-router-dom";
import SeletorDeImagem from "../Geral/SeletorDeImagem";

const EditarEvento = () => {
    return (
        <div className="evento-form">
            <input className="evento-input" placeholder="Titulo"/>
            <input className="evento-input" placeholder="Descrição"/>
            <input className="evento-input" placeholder="Categoria"/>
            <SeletorDeImagem/>
            <input className="evento-input" placeholder="Data"/>
            <input className="evento-input" placeholder="Hora"/>

            <div className="btn">
                <Link to={'/meus-eventos/id-organizador/titulo-evento'} className="btn-cadastro">Voltar</Link>
                <Link to={'/editar-evento/id-evento'} className="btn-cadastro">Salvar</Link>
                <p>[criar lógica para salvar as alterações]</p>
                <Link to={'/editar-evento/id-evento'} className="btn-cadastro">Excluir</Link>
                <p>Lógica para excluir o evento [inserir mecanismo para evitar exclusões sem querer]</p>
            </div>
        </div>
    )
}

export default EditarEvento;