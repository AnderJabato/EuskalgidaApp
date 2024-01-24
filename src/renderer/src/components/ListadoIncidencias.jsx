import React from 'react';
import Incidencia from './Incidencia';

function ListadoIncidencias({ resultados, onSelectPoint }) {

  return (
    <div >
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


export default ListadoIncidencias;
