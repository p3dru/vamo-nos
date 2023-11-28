import React from "react";
import { Link } from "react-router-dom";

const HomeParticipantes = () => {
    return (
        <div className="home-participantes">
            <h1>Eventos disponíveis</h1>
            <p>[Aqui estarão todos os eventos criados em forma de card]</p>
            <p>[Alterar a navbar para que possa ter um botão para que os usuários verifiquem apenas os seus eventos inscritos]</p>
            <p>[O botão de exibição para eventos inscritos pode ser apenas um filtro sobre todos os eventos]</p>
            <Link to={'/eventos/titulo-evento'}>[Exemplo de link para exibição do card]</Link>
        </div>
    )
}

export default HomeParticipantes;