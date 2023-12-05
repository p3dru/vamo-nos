import React from 'react';
import { HashRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/auth';

import './App.css';

import Header from './components/header/index';
import AppRoutes from './routes/routes';
import Footer from './components/footer';

export default function App() {
  return (
    <AuthProvider>
      <HashRouter>

        <Header />
        <AppRoutes />
        <Footer />

      </HashRouter>
    </AuthProvider>
  )
}