import React, {useState} from "react";

export default function Contador(){
    const [numero, setNumero] = useState(0);
    
    const aumentar = () => {
        setNumero(numero + 1)
    }

    const disminucion = () => {
        if (setNumero(numero - 1)){

        }
    }

    return(
        <div>
            {/* <h1>Contador</h1> */}
            <p>Ingresado {numero} veces</p>
            <button onClick={aumentar}></button>
            {/* <button onClick={disminucion}>Disminuir</button> */}
        </div>
    ) 
}