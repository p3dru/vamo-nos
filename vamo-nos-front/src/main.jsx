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
import HomeUsuarios from './routes/Homes/HomeUsuarios.jsx'
import HomeOrganizadores from './routes/Homes/HomeOrganizadores.jsx'

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/sobre",
        element: <Sobre />
      },
      {
        path: "/home",
        element: <HomeUsuarios />
      },
      {
        path: "/home-organizadores",
        element: <HomeOrganizadores />
      },
      {
        path: "/cadastrar-usuario",
        element: <CriarUsuarioComum />
      },
      {
        path: "/editar-usuario",
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
        path: "/editar-evento",
        element: <EditarEvento />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
