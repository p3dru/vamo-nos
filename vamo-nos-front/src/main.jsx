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

import Signup from './routes/Login/Signup/Signup.jsx'
import Login from "./routes/Login/Login.jsx"
import AlterarSenha from './routes/Login/AlterarSenha/AlterarSenha.jsx'
import OrganizadoresEventos from './routes/Usuarios/Organizadores/OrganizadoresEventos.jsx'
import DetalhesEvento from './routes/Eventos/DetalhesEvento.jsx'
import DetalhesEventosParticipantes from './routes/Eventos/DetalhesEventosParticipantes.jsx'
import LoginAdmin from './routes/Login/LoginAdmin.jsx'
import HomeAdmins from './routes/Homes/HomeAdmins.jsx'
import GerenciarParticipantes from './routes/Usuarios/Admin/GerenciarParticipantes.jsx'
import GerenciarOrganizadores from './routes/Usuarios/Admin/GerenciarOrganizadores.jsx'
import GerenciarEventos from './routes/Usuarios/Admin/GerenciarEventos.jsx'
import Not_Found from './routes/Geral/Not_Found.jsx'


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
        path: "/admin/login",
        element: <LoginAdmin />
      },
      {
        path: "/alterar-senha",
        element: <AlterarSenha/>
      },
      {
        path: "/cadastrar",
        element: <Signup />
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
        path: '/eventos/titulo-evento',
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
        path: '/admin/gerenciar-eventos',
        element: <GerenciarEventos/>
      },
      {
        path: "*",
        element: <Not_Found />
      }, 
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
