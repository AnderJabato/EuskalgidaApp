import { Button } from '@chakra-ui/react';
import React from 'react';

function Incidencia({ data, onSelectPoint }) {
  const handleClick = (punto) => {
    onSelectPoint(punto);
  };

  return (
    <div>
      <p>{data?.province}{data?.cityTown}</p>
      <p>{data?.incidenceType}</p>
      {data.latitude === "0.0" ? null :
        <Button colorScheme='blue' onClick={() => handleClick(data)}>
          Ver en el mapa
        </Button>}
    </div>
  );
}
export default Incidencia;