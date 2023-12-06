import React from "react";
import { Link } from "react-router-dom";

const HomeAdmins = () => {
    return (
        <div className="home-admins">
            <Link to={'/admin/gerenciar-participantes'}>Gerenciar Participantes</Link>
            <Link to={'/admin/gerenciar-organizadores'}>Gerenciar Organizadores</Link>
            <Link to={'/admin/gerenciar-eventos'}>Gerenciar Eventos</Link>
        </div>
    )
}

export default HomeAdmins;