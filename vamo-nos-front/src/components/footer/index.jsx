import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Footer() {
    return(
        <footer>
            <p>Um projeto</p>
            <strong><Link to={'/'}> @DreamsMine</Link></strong>
        </footer>
    )
}