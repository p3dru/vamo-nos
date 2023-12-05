import { Link, useNavigate } from 'react-router-dom';

import './style.css';

export default function Organizer_Home() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Eventos </h1>

            <hr />

            <div className="d-flex justify-content-between">
                <section>
                    lista
                </section>
                <Link className='btn'><i class="bi bi-plus-lg" /> Evento</Link>
            </div>
        </div>
    )
}