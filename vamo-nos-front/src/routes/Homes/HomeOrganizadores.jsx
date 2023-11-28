import React from "react";
import './styles/HomeOrganizadores.css'
import { Link } from "react-router-dom";

const HomeOrganizadores = () => {
    return (
        <div className="eventos">
            <Link to={'/meus-eventos/id-organizador'} className="meus-eventos">Meus eventos [criar um local que exiba todos os eventos do usuário]</Link>
            <Link to={'/criar-evento'} className="meus-eventos">Criar Evento</Link>
        </div>
    )
} 

export default HomeOrganizadores;