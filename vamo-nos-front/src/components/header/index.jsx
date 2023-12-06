import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/useAuth';

import './style.css';

export default function Header() {
    const { user, logged, logout } = useAuth();
    
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 px-5">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>
                    VamoNos
                </Link>
                {logged && (
                    <>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link">@{user?.email}</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/'} onClick={() => {logout()}} className="nav-link">Sair</Link>
                            </li>
                        </ul>
                    </div>
                    </>
                )}
            </div>
        </nav>
    )
}