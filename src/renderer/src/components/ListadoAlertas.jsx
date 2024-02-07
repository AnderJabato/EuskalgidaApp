import React from 'react';
import Alerta from './Alerta';
function ListadoAlertas({alertas}) {
    
  return (
    <div >
       
       {alertas?.map((alerta) => (
        <Alerta key={alerta.idIncidencia} alerta={alerta} /> ))}
    </div>
  );
}


export default ListadoAlertas;