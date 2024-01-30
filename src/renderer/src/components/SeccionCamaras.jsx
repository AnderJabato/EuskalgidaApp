import React, { useRef, useCallback, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Mapa from './Mapa';
import ListadoCamaras from './ListadoCamaras'; // Asumiendo que tienes este componente
import axios from 'axios';

function SeccionCamaras() {
    const [traficoData, setTraficoData] = useState(null);

    async function fetchCamaras() {
        // El endpoint de la API que queremos llamar, en este caso el endpoint de cámaras
        const apiUrl = 'https://api.euskadi.eus/traffic/v1.0/cameras?_results=100'; // Reemplaza con la URL real

        try {
            // Realiza la llamada a la API
            const response = await axios.get(apiUrl);
            const data = response.data;
            console.log(data.cameras); // Asegúrate de que 'data.camaras' sea la estructura correcta
            setTraficoData(data.cameras);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        // La API es llamada cuando se monta el componente
        fetchCamaras();
    }, []);

    const mapRef = useRef();
    const onSelectPoint = useCallback(({ longitude, latitude }) => {
        console.log(longitude, latitude)
        mapRef.current?.flyTo({ center: [longitude, latitude], zoom: 12, duration: 2000 })
    }, [])

    return (
        <div className='seccionCamaras'>
            <ListadoCamaras resultados={traficoData}/>
            {/* <Mapa resultados={traficoData} mapRef={mapRef} /> */}
        </div>
    );
}

export default SeccionCamaras;