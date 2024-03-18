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
      <h1>Mis series favoritas</h1>
      <Perfil 
        nombre='Rick & Morty'
        imagen='RyM'
        genero='Comedia/Ficcion'
        perfil='Rick y Morty es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon en 2013.'
        youtube='https://www.youtube.com/watch?v=58-gZTQ36LU&ab_channel=HBOMaxLatinoam%C3%A9rica'
        netflix='https://www.netflix.com'
        hbo='https://www.hbomax.com/co/es/series/urn:hbo:series:GXkRjxwjR68PDwwEAABKJ'
      />
      <Perfil 
        nombre='Game Of Thrones'
        imagen='GOT'
        genero='Acción, Drama, Ficción, Aventuras'
        perfil='Su argumento está inspirado en la serie de novelas Canción de hielo y fuego, escrita por el estadounidense George R. R. Martin, y relata las vivencias de un grupo de personajes de distintas casas nobiliarias en el continente ficticio de Poniente para tener el control del Trono de Hierro y gobernar los siete reinos.'
        youtube='https://www.youtube.com/watch?v=bjqEWgDVPe0&ab_channel=HBOUK'
        netflix='https://www.netflix.com'
        hbo='https://www.hbomax.com/co/es/series/urn:hbo:series:GVU2cggagzYNJjhsJATwo'
      />
      <Perfil 
        nombre='The Office'
        imagen='theoff'
        genero='Comedia/RomCom'
        perfil='The Office es una serie de televisión estadounidense de humor ambientada en una oficina regional de venta de papel radicada en la localidad de Scranton, en Pensilvania (Estados Unidos)'
        youtube='https://www.youtube.com/watch?v=6EfzpP2II6M&ab_channel=NetflixLatinoam%C3%A9rica'
        netflix='https://www.netflix.com/co/title/70136120'
        hbo='https://www.hbomax.com/co/es/series/urn:hbo:series:GYRsKbA3gmIjDwgEAAAMH'
      />
      {/* Contador y botones para incrementarlo */}
      {/* <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador+1)}>Click para contar</button> */}

      
     </div>
    </div>
  );
}

export default App;