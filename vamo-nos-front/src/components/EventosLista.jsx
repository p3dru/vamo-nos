import React from "react";
import { Link } from "react-router-dom";

const EventosLista = (eventos) => {
    console.log(eventos.eventos);
    return (
        <div className="d-flex flex-wrap justify-content-center">
        {eventos.eventos.length > 0 ? (
            eventos.eventos.map((evento) => {
                return(
                    <div className="card text-bg-dark m-2" style={{"width":"18rem"}}>
                        <img src="https://picsum.photos/318/180" class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">{evento.title}</h3>
                            <p className="card-text">{evento.description}</p>
                            <p className="card-text">{evento.category}</p>
                        </div>
                        <div class="card-footer">
                            <h4 className="card-text">Inscritos: <strong>{evento.inscribers}</strong></h4>
                            <h5 className="card-text">{evento.date.toLocaleString('pt-BR', { timeZone: 'UTC' })}</h5>
                        </div>
                        <div class="card-footer">
                            <a href="#" className="btn-cadastro">Go somewhere</a>
                        </div>
                    </div>
                )
            })
        ) : (
            <h2>Você ainda não tem eventos cadastrados.</h2>
        )}
        </div>
    )
}

export default EventosLista;