import React from 'react';
import { useRef, useState } from 'react';
import { useAuth } from '../../contexts/useAuth';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
    const [showPass, setShowPass] = useState(false);

    return (
    <div>
        <h1>Cadastro</h1>
        <p className='p-2 border-bottom rounded'>Vamos mudar o mundo juntos</p>

        <hr />

        <form>
            <input type="email" placeholder='Email' />
            <input type={showPass ? "text" : "password"} placeholder='Senha' />
            <div className="form-check form-switch">
            <input
                defaultValue={false}
                className="form-check-input"
                type="checkbox"
                role="switch"
                onChange={() => setShowPass(!showPass)}
            />
            <label
                className="form-check-label"
            >
                Mostrar Senha
            </label>
            </div>
            <input type="password" placeholder='Confirme a senha' />
        </form>

        <hr />

        <div className="d-grid">
            <Link className={'btn fs-6 my-1'} to={'/login'}>Cadastrar</Link>
            <hr />
            <Link to={'/login'}>Já tenho conta</Link>
        </div>
    </div>
    )
}