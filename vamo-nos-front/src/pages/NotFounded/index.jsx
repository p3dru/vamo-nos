import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NotFounded() {
  return (
    <div className='d-grid'>
        <h1>404 <i class="bi bi-emoji-frown fs-1" /></h1>
        <h4>Página Não encontrada!</h4>
        
        <hr />
        
        <Link to={'/'}>Ir para a Home</Link>
    </div>
  )
}