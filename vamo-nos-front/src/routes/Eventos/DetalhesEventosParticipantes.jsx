import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';


const DetalhesEventosParticipantes = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const {id} = useParams();
    const [inscrito, setInscrito] = useState([false]);

    //Aqui é onde vou testar pegar os dados dos usuários, com o header de autorização e tentar decodificar o token
    //const usuarioAtual =
    const token = localStorage.getItem('token');
    axios.get('http://localhost:3000/auth/profile', {
    headers: {
       Authorization: `Bearer ${token}`
    }
    }).then(response => {
        console.log('Dados do usuário: ', response.data);
    }).catch(error => {
        console.error('Erro ao recuperar os dados do usuário: ', error);
        navigate('/login-participante');
    });


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/eventos/${id}`);
                setData(response.data);
                console.log(response.data)
            } catch(error){
                console.error('Erro ao buscar dados:', error);
                navigate('/login-participante');
            }
        };
        fetchData();
    }, []);

    useEffect(() => {

    })

    return (
        <div>
            <h1>{data.titulo}</h1>
            <p>[Aqui ficará o carroussel de imagens]</p>
            <h2>Descrição</h2>
            <p>{data.descricao}</p>
            <p>[Comentários]</p>
            <Link to={'/eventos/:id/inscrever'}>Inscrever-se</Link>
            <p>[criar lógica para fazer o usuário ser inscrito no evento]</p>
            <Link to={'/home-participantes'}>Voltar</Link>
        </div>
    )
}

export default DetalhesEventosParticipantes;