import React from "react";
import { Link } from "react-router-dom";

const Not_Found = () => {
    return(
        <div className="d-flex h-100 justify-content-center align-items-center">
            <div>
                <h1>404</h1>
                <p>Página não Encontrada</p>
                <Link to={''} className="text-decoration-underline">Ir para Home</Link>
            </div>
        </div>
    )
}

export default Not_Found;