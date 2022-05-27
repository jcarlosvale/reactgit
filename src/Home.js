import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

export default function Home() {

  const [user, setUser] = useState("");

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${user}/repos`)
    .then(response => 
      {
        console.log(response.data)
      });
    }

  return (
    <>
      <input className='usuarioInput' placeholder='Usuario' value={user} onChange={e => setUser(e.target.value)}/>
      <button type='button' onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}