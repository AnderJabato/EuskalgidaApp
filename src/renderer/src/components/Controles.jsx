import React from 'react';
import { Button } from '@chakra-ui/react';

function Controles({ resultados, onSelectPoint }) {
 
  const opciones = ['Incidencias', 'Crear incidencia', 'Avisos', 'Informes'];

  return (
    <div >
      {opciones.map((opcion, index) => (
        <Button key={index} colorScheme='blue' style={buttonProps}>
          {opcion}
        </Button>
      ))}
    </div>
  );
}

const buttonProps = {
  width: '100%',
};

export default Controles;
