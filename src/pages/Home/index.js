import '../../App.css';
import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

export default function Home(props) {

  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [error, setError] = useState(false);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${user}/repos`)
    .then(response => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map(repository => repositoriesName.push(repository.name));
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        console.log(repositoriesName);
        setError(false);
        navigate('/repositories');
      })
    .catch(error => {
        setError(true)
      });
    }

  return (
    <S.HomeContainer>
      <S.Container>
        <S.Input className='usuarioInput' placeholder='Usuario' value={user} onChange={e => setUser(e.target.value)}></S.Input>
        <S.Button type='button' onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Container>
      {
        error ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : ' '
      }
      
    </S.HomeContainer>
  );
}