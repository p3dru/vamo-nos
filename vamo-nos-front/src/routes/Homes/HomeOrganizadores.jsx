import React from "react";
import './styles/HomeOrganizadores.css'
import { Link } from "react-router-dom";
import EventosLista from "../../components/EventosLista";

const HomeOrganizadores = () => {
    const data = [
        {
            title: "evento 1",
            description: "alguma coisa...",
            category: "categoria 1",
            photo: null,
            date: new Date("2023-12-30"),
            inscribers: 0,
        },
        {
            title: "mais um evento",
            description: "mais alguma coisa...",
            category: "categoria 2",
            photo: null,
            date: new Date("2023-12-20"),
            inscribers: 20,
        },
        {
            title: "um outro evento",
            description: "alguma coisa lorem ipsun sei lá das quantas...",
            category: "categoria 3",
            photo: null,
            date: new Date("2023-12-25"),
            inscribers: 100,
        },
        {
            title: "um outro evento",
            description: "alguma coisa lorem ipsun sei lá das quantas...",
            category: "categoria 3",
            photo: null,
            date: new Date("2023-12-25"),
            inscribers: 100,
        },
        {
            title: "um outro evento",
            description: "alguma coisa lorem ipsun sei lá das quantas...",
            category: "categoria 3",
            photo: null,
            date: new Date("2023-12-25"),
            inscribers: 100,
        },
    ]

    return (
        <div>
            <div className="d-flex">
                <input type="text" className="border border-2 rounded mx-2" placeholder="Buscar evento" />
                <Link to={'/criar-evento'} className="btn-cadastro mx-2">
                    <i class="bi bi-plus-lg" /> Evento
                </Link>
            </div>

            <EventosLista eventos={data}/>
            
            <Link to={'/meus-eventos/id-organizador'} className="meus-eventos">Meus eventos [criar um local que exiba todos os eventos do usuário]</Link>
            
        </div>
    )
} 

export default HomeOrganizadores;