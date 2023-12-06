import React from "react";
import { Link } from "react-router-dom";
import SeletorDeImagem from "../Geral/SeletorDeImagem";

const CriarEvento = () => {
    return (
        <div className="criar-evento">
            <input className="evento-input" placeholder="Titulo"/>
            <input className="evento-input" placeholder="Descrição"/>
            <input className="evento-input" placeholder="Categoria"/>
            <SeletorDeImagem/>
            <p>[Usar um seletor de data estilizado]</p>
            <input className="evento-input" placeholder="Data"/>
            <p>[Usar um seletor de horas estilizado]</p>
            <input className="evento-input" placeholder="Hora"/>

            <div className="btn">
                <Link to={'/home-organizadores'} className="btn-cadastro">Voltar</Link>
                <Link to={'/criar-evento'} className="btn-cadastro">Salvar</Link>
                <p>[criar lógica para salvar as alterações, mandar uma mensagem de que foi criado e redirecionar para a tela de
                    eventos criados]</p>
            </div>
        </div>
    )
}

export default CriarEvento;