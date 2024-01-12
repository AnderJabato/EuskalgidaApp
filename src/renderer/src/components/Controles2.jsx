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
          buttonProps={buttonProps}
        />
      ))}
    </div>
  );
}
const buttonStyle = {
  display: 'flex',
  flexDirection: 'column', // Esto coloca los botones en una fila vertical
  alignItems: 'stretch', // Esto permite que los botones ocupen todo el ancho del contenedor
};

const buttonProps = {
  width: '100%',
};
export default Controles2;
