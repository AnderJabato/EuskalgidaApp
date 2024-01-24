import React, { useRef, useCallback } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Controles from './Menu';
import Controles2 from './ListadoIncidencias';
import Header from './Header';
import Mapa from './Mapa';
import ListadoIncidencias from './ListadoIncidencias';

function SeccionIncidencias({ resultados }) {
    const mapRef = useRef()
    const onSelectPoint = useCallback(({ longitude, latitude }) => {
        console.log(longitude, latitude)
        mapRef.current?.flyTo({ center: [longitude, latitude], zoom: 12, duration: 2000 })
    }, [])
    return (
        <div className='seccionIncidencias'>
            <ListadoIncidencias resultados={resultados} onSelectPoint={onSelectPoint} />
            <Mapa resultados={resultados} mapRef={mapRef} />
        </div>

    );

}

export default SeccionIncidencias;
