import { Button } from '@chakra-ui/react';
import React from 'react';

function Incidencia({ data, onSelectPoint, onDeleteIncidencia }) {
  const handleClick = (punto) => {
    onSelectPoint(punto);
  };

  const handleDelete = async (idIncidencia) => {
    const response = await fetch(`http://localhost:3002/incidencia/${idIncidencia}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      onDeleteIncidencia(idIncidencia);
    } else {
      // Manejar el error
    }
  };

  return (
    <div>
      <p>{data?.province}{data?.cityTown}</p>
      <p>{data?.incidenceType}</p>
      {data.latitude !== "0.0" && (
        <div style={{ marginBottom: '10px' }}>
          <Button colorScheme='blue' onClick={() => handleClick(data)}>
            Ver en el mapa
          </Button>
        </div>
      )}
      <div style={{ marginBottom: '10px' }}>
        <Button colorScheme='blue' onClick={() => handleDelete(data.idIncidencia)}>
          Borrar
        </Button>
      </div>
    </div>
  );
}

export default Incidencia;
