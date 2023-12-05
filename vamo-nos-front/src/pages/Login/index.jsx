import React from 'react';
import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/useAuth';

import './style.css';

export default function Login() {
  const { login } = useAuth();
  const [showPass, setShowPass] = useState(false);
  
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

  function userLogin(typeUser) {
    if (!email.current.value.trim() || !password.current.value.trim()) {
      alert('Informe seu Email e Senha');
      return;
    }
    try {
      login(email.current.value, password.current.value, typeUser, '3281');

      switch (typeUser) {
        case 'participant':
          navigate('/participant');
          return;
        case 'organizer':
          navigate('/organizer');
          return;
        default:
          break;
      }
    } catch (error) {
      alert('Erro 404 ou 501');
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <hr />

      <form>
        <input type="email" placeholder='Email' ref={email} />
        <input type={showPass ? "text" : "password"} placeholder='Senha' ref={password} />
        <div className="form-check form-switch">
          <input
            defaultValue={false}
            className="form-check-input mt-2"
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
      </form>

      <hr />

      <div className="d-grid">
        <strong className='m-0 fs-5'>Acessar como</strong>
        <Link
          className={'btn fs-6 my-1'}
          onClick={() => {userLogin('participant')}}
        >
          Participante
        </Link>
        <Link
          className={'btn fs-6 my-1'}
          onClick={() => {userLogin('organizer')}}
        >
          Organizador
        </Link>
        <hr />
        <Link to={'/recover-pass'}>Esqueci minha senha</Link>
        <Link to={'/signup'}>Cadastrar-se</Link>
      </div>
    </div>
  )
}