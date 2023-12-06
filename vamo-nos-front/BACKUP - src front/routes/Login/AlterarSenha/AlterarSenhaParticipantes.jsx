import React from "react";
import { Link } from "react-router-dom";

const AlterarSenhaParticipantes = () => {
    return(
        <div className="alterar-senha">
            <input className="login-inputs" placeholder="Email"/>
            <input className="login-inputs" placeholder="Senha"/>
            <input className="login-inputs" placeholder="Confirmar Senha"/>

            <div className="btn">
                <Link to={'/login-participante'} className="btn-cadastro">Voltar</Link>
                {/*esse btn tem que mandar a nova senha pro servidor e alterar a senha*/}
                <Link to={'/alterar-senha-participantes'} className="btn-cadastro">Alterar senha</Link>
            </div>
    </div>
    )
}

export default AlterarSenhaParticipantes;