import React from 'react';
import '../estilos/Perfil.css';
import Contador from './Contador';

function Perfil(props){
    return(
        <div className='contenedor-perfil'>
            <img className='imagen-perfil'
            src={require(`../imagenes/perfil-${props.imagen}.png`)}
            alt='Foto de serie' />
        <div className='contenedor-texto-perfil'>
            <p className='nombre-perfil'>
               <strong>{props.nombre}</strong>      
            </p>        
        <p className='genero-perfil'>
        {props.genero} 
        </p>
        <p className='texto-perfil'>"{props.perfil}" </p>
        </div>
        {/* ***************Botones redes sociales**************** */}

          <button className='button-youtube' onClick={()=> window.open(props.youtube, '')}>
          <h3>Ver Trailer en youtube <Contador/> </h3>
          
          
          </button>

          <button className='button-netflix' onClick={()=> window.open(props.netflix, '')}>
            <h3>Ver más series en Netflix <Contador/> </h3>
          
          </button> 

          <button className='button-hbo' onClick={()=> window.open(props.hbo, '')}>
          <h3>Ver en HBO <Contador/> </h3>
          
          </button>     
    </div>
    );
}
export default Perfil;