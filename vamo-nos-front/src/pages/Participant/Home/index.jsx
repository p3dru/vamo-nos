import { Link, useNavigate } from 'react-router-dom';

import './style.css';

export default function Participant_Home() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Eventos</h1>

            <hr />

            <div className="d-flex">
                <section>
                    lista
                </section>
            </div>
        </div>
    )
}