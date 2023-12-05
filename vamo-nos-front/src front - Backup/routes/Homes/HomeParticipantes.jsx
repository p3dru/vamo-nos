import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';


const DataDisplay = () => {
    const [data, setData] = useState([]);
    const [redirect, setRedirect] = useState(false);
    const {id} = useParams;
  
    useEffect(() => {
      // Use uma função assíncrona para buscar os dados quando o componente montar
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/eventos');
          setData(response.data);
        } catch (error) {
          console.error('Erro ao buscar dados:', error);
        }
      };
  
      fetchData();
    }, []); // O array vazio assegura que a chamada seja feita apenas uma vez, quando o componente montar
  
    return (
      <div>
        <h1>Dados do Banco de Dados:</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
                {item.id}
                {item.titulo}
                {item.descricao}
                {item.categoria}
                <br/>
                <Link to={`/eventos/${item.id}`}>Acessar</Link>

                {/* Renderize seus dados aqui */}</li>
          ))}
        </ul>
      </div>
    );
  };

export default DataDisplay

/*
const HomeParticipantes = () => {
    return (
        <div className="home-participantes">
            <h1>Eventos disponíveis</h1>
            <p>[Aqui estarão todos os eventos criados em forma de card]</p>
            <p>[Alterar a navbar para que possa ter um botão para que os usuários verifiquem apenas os seus eventos inscritos]</p>
            <p>[O botão de exibição para eventos inscritos pode ser apenas um filtro sobre todos os eventos]</p>
            <Link to={'/eventos/titulo-evento'}>[Exemplo de link para exibição do card]</Link>
        </div>
    )
}

export default HomeParticipantes;
*/