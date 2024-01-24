import React, { useRef, useCallback, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Controles from './Menu';
import Controles2 from './ListadoIncidencias';
import Header from './Header';
import Mapa from './Mapa';
import ListadoIncidencias from './ListadoIncidencias';
import axios from 'axios';
function SeccionIncidencias() {
    const [traficoData, setTraficoData] = useState(null)
    async function fetchTrafico() {
      // El endpoint de la API que queremos llamar, en este caso la última página de incidentes
      const apiUrl = 'https://api.euskadi.eus/traffic/v1.0/incidences?_page=1'
  
      try {
        // realiza la llamada a la API
        const response = await axios.get(apiUrl)
        const data = response.data
        console.log(data.incidences)
        setTraficoData(data.incidences)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    useEffect(() => {
      // La API es llamada cuando se monta el componente
      fetchTrafico()
      console.log("Hola")
    }, [])
    
    const mapRef = useRef()
    const onSelectPoint = useCallback(({ longitude, latitude }) => {
        console.log(longitude, latitude)
        mapRef.current?.flyTo({ center: [longitude, latitude], zoom: 12, duration: 2000 })
    }, [])
    return (
        <div className='seccionIncidencias'>
            <ListadoIncidencias resultados={traficoData} onSelectPoint={onSelectPoint} />
            <Mapa resultados={traficoData} mapRef={mapRef} />
        </div>

    );

}

export default SeccionIncidencias;
