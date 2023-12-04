import React from "react";
import { Link } from "react-router-dom";
import SeletorDeImagem from "../Geral/SeletorDeImagem";

const CriarEvento = () => {
    return (
        <div className="criar-evento py-5 px-4">
            <h2 className="text-center mb-3 fs-1">Cadastro de Evento</h2>

            <div className="d-grid">
                <input className="evento-input" placeholder="Titulo"/>
                <textarea cols="30" rows="3" placeholder="Descrição" maxLength={350} />
                <input className="evento-input" placeholder="Categoria"/>
                <SeletorDeImagem/>
                <input className="evento-input" type="date"/>
                <input className="evento-input" type="time"/>
            </div>

            <hr />

            <div className="btn">
                <Link to={'/criar-evento'} className="btn-cadastro">Salvar</Link>
                <Link to={'/home-organizadores'} className="btn-cadastro">Voltar</Link>
                <p>[criar lógica para salvar as alterações, mandar uma mensagem de que foi criado e redirecionar para a tela de
                    eventos criados]</p>
            </div>
        </div>
    )
}

export default CriarEvento;