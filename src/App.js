import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Perfil from './componentes/Perfil';
import Contador from './componentes/Contador';


function App() {
  //Contador
  const [contador, setContador]= useState(0);
  return (
    <div className="App">
     <div class ='contenedor-principal'>
      <h1>Mis desarrolladores favoritos son</h1>
      <Perfil 
        nombre='Brais Moure'
        pais='España'
        imagen='brais'
        cargo='Ingeniero de Software'
        empresa='MoureDev'
        perfil='Es un Youtuber español, es el fundador de la empresa de desarrollo de software MoureDev'
        linkedin='www.linkedin.com' 
        youtube='https://www.youtube.com/@mouredev'
        Instagram='https://www.instagram.com/devsenspringfield/?hl=es-la'
      />
      {/* Contador y botones para incrementarlo */}
      {/* <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador+1)}>Click para contar</button> */}

      <Contador/>
     </div>
    </div>
  );
}

export default App;