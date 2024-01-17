import React from 'react';
import Incidencia from './Incidencia';

function Controles2({ resultados, onSelectPoint }) {

  return (
    <div style={buttonStyle}>
      {resultados?.map((incidencia) => (
        <Incidencia
          key={incidencia.incidenceId}
          data={incidencia}
          onSelectPoint={onSelectPoint}
          
        />
      ))}
    </div>
  );
}
const buttonStyle = {
  flexDirection: 'column', // Esto coloca los botones en una fila vertical
  
};

const buttonProps = {
  width: '100%',
};
export default Controles2;
