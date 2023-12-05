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

  function participantLogin() {
    if (!email.current.value.trim() || !password.current.value.trim()) {
      alert('Informe seu Email e Senha');
      return;
    }
    try {
      login(email.current.value, password.current.value, 'participant', '3281');
    } catch (error) {
      alert('Erro 404 ou 501');
    }
  }

  function organizerLogin() {
    if (!email.current.value.trim() || !password.current.value.trim()) {
      alert('Informe seu Email e Senha');
      return;
    }
    try {
      login(email.current.value, password.current.value, 'organizer', '3281');
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
      </form>

      <hr />

      <div className="d-grid">
        <strong className='m-0 fs-5'>Acessar como</strong>
        <Link
          className={'btn fs-6 my-1'}
          onClick={() => {participantLogin()}}
          to={'/participant'}
        >
          Participante
        </Link>
        <Link
          className={'btn fs-6 my-1'}
          onClick={() => {organizerLogin()}}
          to={'/organizer'}
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