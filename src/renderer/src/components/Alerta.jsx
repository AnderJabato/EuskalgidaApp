import { Button } from '@chakra-ui/react';
import React from 'react';

function Alerta({data}) {
  const handleClick = (punto) => {
  };

  return (
    <div>
      <p>{data?.province}{' '}{data?.cityTown}</p>
      <p>{data?.incidenceType}</p>
      <Button colorScheme='green'>
          Validar
      </Button>
    </div>
  );
}
export default Alerta;