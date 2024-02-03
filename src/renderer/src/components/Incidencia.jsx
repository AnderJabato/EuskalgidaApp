import { Button } from '@chakra-ui/react';
import React from 'react';

function Incidencia({ data, onSelectPoint, borrar }) {
  const handleClick = (punto) => {
    onSelectPoint(punto);
  };
  return (
    <div>
      <p>{data?.provincia}{': '}{data?.ciudad}</p>
      <p>{data?.tipoIncidencia}</p>
      <p>{data?.fechaInicio}</p>
      {data.latitude !== "0.0" && (
        <div style={{ marginBottom: '10px' }}>
          <Button colorScheme='blue' onClick={() => handleClick(data)}>
            Ver en el mapa
          </Button>
        </div>
      )}
      <div style={{ marginBottom: '10px' }}>
        <Button colorScheme='blue' onClick={() => borrar(data.idIncidencia)}>
          Borrar
        </Button>
      </div>
    </div>
  );
}

export default Incidencia;
