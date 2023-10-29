import React, {useEffect, useState} from "react";
import axios from 'axios';
import { response } from "express";


const ListaDeUsuarios: React.FC = () => {
    const [usuarios, setUsuario] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:3000/usuarios')
        .then((response) => {
            setUsuario(response.data);
        })
        .catch((error) => {
            console.error('Erro ao buscar usuário: ', error);
        });
    }, []);

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <ul>
                {usuarios.map((tarefa: any) => (
                <li key={tarefa.id}>{tarefa.nome}</li>
            ))}
            </ul>
        </div>
    );
};
export default ListaDeUsuarios;