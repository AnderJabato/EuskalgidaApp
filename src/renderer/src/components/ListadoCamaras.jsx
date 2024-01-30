import React from 'react';
import Camara from './Camara'; // Asumiendo que tienes un componente para cada cámara

function ListadoCamaras({ resultados, onSelectCamera }) {

  return (
    <div>
      {resultados?.map((camara) => (
        <Camara
          key={camara.cameraId} // Asegúrate de que 'cameraId' sea la propiedad correcta
          data={camara}
          onSelectCamera={onSelectCamera}
        />
      ))}
    </div>
  );
}

export default ListadoCamaras;
