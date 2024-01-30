import React from 'react';
import Alerta from './Alerta';
function ListadoAlertas() {
    const incidencia ={autonomousRegion
        : 
        "Euskadi",
        carRegistration
        : 
        "SS",
        cause
        : 
        "Avería",
        cityTown
        : 
        "Eibar",
        direction
        : 
        "SANTANDER",
        incidenceId
        : 
        "228514",
        incidenceLevel
        : 
        "Blanco",
        incidenceType
        : 
        "Seguridad vial",
        latitude
        : 
        "43.19074",
        longitude
        : 
        "-2.450571",
        pkEnd
        : 
        "62.0",
        pkStart
        : 
        "62.0",
        province
        : 
        "GIPUZKOA",
        road
        : 
        "N-634",
        sourceId
        : 
        "1",
        startDate
        : 
        "2024-01-25T16:12:17"}
  return (
    <div >
       <Alerta
          key={8}
          data={incidencia}
          
        />
    </div>
  );
}


export default ListadoAlertas;