import React from 'react';
import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/useAuth';

import './style.css';

export default function Admin_Login() {
  const { login } = useAuth();
  const [showPass, setShowPass] = useState(false);
  
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

  function adminLogin(typeUser) {
    if (!email.current.value.trim() || !password.current.value.trim()) {
      alert('Informe seu Email e Senha');
      return;
    }
    try {
      if (typeUser == 'admin') {
        login(email.current.value, password.current.value, typeUser, '3281');

        navigate('/admin');
        return;
      }
    } catch (error) {
      alert('Erro 404 ou 501');
    }
  }

  return (
    <div>
      <h1>Área do Admin</h1>

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
        <Link
          className={'btn fs-6 my-1'}
          onClick={() => {adminLogin('admin')}}
          to={'/admin'}
        >
          Acessar
        </Link>
      </div>
    </div>
  )
}