import React from 'react';
import '../estilos/Perfil.css';
import Contador from './Contador';

function Perfil(props){
    return(
        <div className='contenedor-perfil'>
            <img className='imagen-perfil'
            src={require(`../imagenes/perfil-${props.imagen}.png`)}
            alt='Foto de desarrollador' />
        <div className='contenedor-texto-perfil'>
            <p className='nombre-perfil'>
               <strong>{props.nombre}</strong> en {props.pais}
            </p>        
        <p className='cargo-perfil'>
            {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-perfil'>"{props.perfil}" </p>
        </div>
        {/* ***************Botones redes sociales**************** */}

          <button onClick={()=> window.open(props.linkedin, '')}>
          <h3>Seguir en Linkedin</h3>
          <Contador/>
          
          </button>

          <button onClick={()=> window.open(props.youtube, '')}>
            <h3>Seguir en YouTube</h3>
          <Contador/>
          </button> 

          <button onClick={()=> window.open(props.Instagram, '')}>
          <h3>Seguir en Instagram</h3>
          <Contador/>
          </button>     
    </div>
    );
}
export default Perfil;