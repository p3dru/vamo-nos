import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import Home from './routes/Homes/Home.jsx'
import CriarEvento from './routes/Eventos/CriarEvento.jsx'
import EditarEvento from './routes/Eventos/EditarEvento.jsx'
import CriarUsuarioComum from './routes/Usuarios/Comuns/CriarUsuarioComum.jsx'
import EditarUsuarioComum from './routes/Usuarios/Comuns/EditarUsuarioComum.jsx'
import CriarUsuarioOrganizador from './routes/Usuarios/Organizadores/CriarUsuarioOrganizador.jsx'
import EditarUsuarioOrganizador from './routes/Usuarios/Organizadores/EditarUsuarioOrganizador.jsx'
import Sobre from './routes/Geral/Sobre.jsx';
import HomeParticipantes from './routes/Homes/HomeParticipantes.jsx'
import HomeOrganizadores from './routes/Homes/HomeOrganizadores.jsx'
import Login from "./routes/Geral/Login.jsx"
import Cadastro from './routes/Geral/Cadastro.jsx'
import LoginOrganizador from './routes/Login/LoginOrganizador.jsx'
import AlterarSenhaOrganizadores from './routes/Login/AlterarSenha/AlterarSenhaOrganizadores.jsx'
import LoginParticipante from './routes/Login/LoginParticipante.jsx'
import AlterarSenhaParticipantes from './routes/Login/AlterarSenha/AlterarSenhaParticipantes.jsx'
import OrganizadoresEventos from './routes/Usuarios/Organizadores/OrganizadoresEventos.jsx'
import DetalhesEvento from './routes/Eventos/DetalhesEvento.jsx'
import DetalhesEventosParticipantes from './routes/Eventos/DetalhesEventosParticipantes.jsx'
import LoginAdmin from './routes/Login/LoginAdmin.jsx'
import HomeAdmins from './routes/Homes/HomeAdmins.jsx'
import GerenciarParticipantes from './routes/Usuarios/Admin/GerenciarParticipantes.jsx'
import GerenciarOrganizadores from './routes/Usuarios/Admin/GerenciarOrganizadores.jsx'
import GerenciarEventos from './routes/Usuarios/Admin/GerenciarEventos.jsx'

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login /> 
      },
      {
        path: "/login-organizador",
        element: <LoginOrganizador/>
      },
      {
        path: "/login-participante",
        element: <LoginParticipante/>
      },
      {
        path: "/admin/login",
        element: <LoginAdmin />
      },
      {
        path: "/alterar-senha-organizadores",
        element: <AlterarSenhaOrganizadores/>
      },
      {
        path: "/alterar-senha-participantes",
        element: <AlterarSenhaParticipantes/>
      },
      {
        path: "/cadastrar",
        element: <Cadastro />
      },
      {
        path: "/sobre",
        element: <Sobre />
      },
      {
        path: "/home-participantes",
        element: <HomeParticipantes />
      },
      {
        path: "/home-organizadores",
        element: <HomeOrganizadores />
      },
      {
        path: "/admin/home",
        element: <HomeAdmins/>
      },
      {
        path: "/meus-eventos/id-organizador",
        element: <OrganizadoresEventos/>
      },
      {
        path: "/cadastrar-participante",
        element: <CriarUsuarioComum />
      },
      {
        path: "/editar-participante",
        element: <EditarUsuarioComum />
      },
      {
        path: "/cadastrar-organizador",
        element: <CriarUsuarioOrganizador />
      },
      {
        path: "/editar-organizador",
        element: <EditarUsuarioOrganizador />
      },
      {
        path: "/criar-evento",
        element: <CriarEvento />
      },
      {
        path: "/editar-evento/id-evento",
        element: <EditarEvento />
      },
      {
        path: "/meus-eventos/id-organizador/titulo-evento",
        element: <DetalhesEvento/>
      },
      {
        path: 'eventos/titulo-evento',
        element: <DetalhesEventosParticipantes/>
      },
      {
        path: '/admin/gerenciar-participantes',
        element: <GerenciarParticipantes/>
      },
      {
        path: '/admin/gerenciar-organizadores',
        element: <GerenciarOrganizadores/>
      },
      {
        path: 'admin/gerenciar-eventos',
        element: <GerenciarEventos/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
