import React from 'react';
import { Button } from '@chakra-ui/react';

function Incidencia({ data, onSelectPoint }) {
  const handleClick = (punto) => {
    onSelectPoint(punto);
  };

  return (
    <Button colorScheme='blue' onClick={() => handleClick(data)}>
      {data?.incidenceType}
    </Button>
  );
}
export default Incidencia;
