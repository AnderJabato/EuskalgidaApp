import { Button } from '@chakra-ui/react';
import React from 'react';
import axios from 'axios';


function Alerta({alerta}) {
  const handleClick = async () => {
    const urlAlerta = `http://localhost:3002/api/incidencia/${alerta.idIncidencia}`
  
    try {
      const respuesta = await axios.put(urlAlerta,  {
        "incidenciaValidada": 1
        })
      console.log(respuesta)
    } catch (error) {
      console.log(error) 
    }
   
  };
  
  return (
    <div>
      <p>{alerta?.nombreIncidencia}</p>
      <p>{alerta?.tipoIncidencia}</p>
      <Button colorScheme='green' onClick={handleClick}>
          Validar
      </Button>
    </div>
  );
}
export default Alerta;