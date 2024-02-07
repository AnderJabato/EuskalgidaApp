import { Button } from '@chakra-ui/react';
import React from 'react';

function Alerta({alerta}) {
  const handleClick = (punto) => {
  };
  console.log(alerta)
  return (
    <div>
      <p>{alerta?.provincia}{' '}{alerta?.ciudad}</p>
      <p>{alerta?.tipoIncidencia}</p>
      <Button colorScheme='green'>
          Validar
      </Button>
    </div>
  );
}
export default Alerta;