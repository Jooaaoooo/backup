import { useState } from 'react';

import Perfil from './components/perfil';
import Formulario from './components/Formulario';
import RepoList from './components/RepoList';

/*function App() {
  /*const nome = "gian"

  function retornaNome(){
    return nome
  }

  const pessoa = {
    nome: 'Maria'
  }

  let estaDeDia = true;*/
/*
  const [FormularioEstaVisivel, setFormularioEstaVisivel] = useState(true);

  return(
    <>
    <Perfil nome='gian' endereco='' />
    <RepoList />

    {FormularioEstaVisivel && (
      <Formulario />
    )}
    
    <button onClick={() => setFormularioEstaVisivel(!FormularioEstaVisivel)} type="button">toggle form</button>
    </>
  )
}

export default App
*/

/*aula 2*/

function App() {
  const [FormularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return(
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

    {nomeUsuario.length > 4 && (
      <>
      <Perfil nomeUsuario={nomeUsuario} />
      <RepoList nomeUsuario={nomeUsuario} />
      </>
    )}

    {/*FormularioEstaVisivel && (
      <Formulario />

    )*/}
    
    <button onClick={() => setFormularioEstaVisivel(!FormularioEstaVisivel)} type="button">toggle form</button>
    </>
  )
}

export default App

