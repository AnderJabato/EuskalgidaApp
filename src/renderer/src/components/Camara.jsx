import React from 'react';
import { Button } from '@chakra-ui/react';

function Camara({ data, onSelectCamera }) {
  console.log(data);

  const handleClick = () => {
    // console.log(data.longitude)
    // onSelectCamera({ longitude: parseFloat(data.longitude), latitude: parseFloat(data.latitude) });
  };

  return (
    <>
    {data.urlImage ? (
      <div>
        {data.urlImage && <img src={data.urlImage} alt={`Cámara en ${data?.cameraName}`} />}
        <p>{data?.road} Km {data?.kilometer} - {data?.cameraName}</p>
        <p>{data?.address}</p>
        {/* {data.latitude !== "0.0" && data.longitude !== "0.0" ? (
          <Button colorScheme='blue' onClick={handleClick}>
            Ver en el mapa
          </Button>
        ) : null} */}
      </div>
    ): null}
    </>
  );
}

export default Camara;
