import React, { useRef, useCallback, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Controles from './Menu';
import Controles2 from './ListadoIncidencias';
import Header from './Header';
import Mapa from './Mapa';
import ListadoIncidencias from './ListadoIncidencias';
import axios from 'axios';
import { Button } from '@chakra-ui/react';
function SeccionIncidencias() {
    const [traficoData, setTraficoData] = useState(null)
    const [hora, setHora] = useState(null)
    async function fetchTrafico() {
      // El endpoint de la API que queremos llamar, en este caso la última página de incidentes
      const apiUrl = 'https://api.euskadi.eus/traffic/v1.0/incidences?_page=1'
      const bbddUrl = 'http://localhost:3002/api/incidencia'
      try {
        // realiza la llamada a la API Oen Data
        const response = await axios.get(bbddUrl)
        const data = response.data.data
        //const responseBBDD = await axios.get(bbddUrl)
        //const dataBBDD = responseBBDD.data
        //console.log(dataBBDD)
        //console.log(data.incidences)
        setTraficoData(data)
        setHora(new Date().toLocaleString())
        //console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    useEffect(() => {
      // La API es llamada cuando se monta el componente
      fetchTrafico()
    }, [])
    
    const mapRef = useRef()
    const onSelectPoint = useCallback(({ longitud, latitud }) => {
        console.log(longitud, latitud)
        mapRef.current?.flyTo({ center: [longitud, latitud], zoom: 12, duration: 2000 })
    }, [])
  return (
    <div className='seccionIncidencias'>

      <div className='incidenciasA'>
        <p>última hora de los datos: {hora}</p>
        <Button onClick={fetchTrafico}>
          Actualizar
        </Button>
      </div>
      <div className='incidenciasB'>
        <ListadoIncidencias resultados={traficoData} onSelectPoint={onSelectPoint} />
        <Mapa resultados={traficoData} mapRef={mapRef} />
      </div>
    </div>

  );

}

export default SeccionIncidencias;
