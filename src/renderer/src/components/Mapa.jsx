import { useRef, useCallback } from 'react'
import React from 'react'
import Map, { Marker, Source, Layer } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import Controles from './Controles'
import Controles2 from './Controles2'
import Header from './Header'




function Mapa({ resultados }) {
  const mapRef = useRef()
  const onSelectPoint = useCallback(({ longitude, latitude }) => {
    console.log(longitude, latitude)
    mapRef.current?.flyTo({ center: [longitude, latitude], zoom: 12, duration: 2000 })
  }, [])
  //4. Crear geoJSON
  const geoJSON = {
    type: 'FeatureCollection',
    features: resultados?.map((result) => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [parseFloat(result.longitude), parseFloat(result.latitude)]
      },
      properties: {
        incidenceId: result.incidenceId,//cambiar result por incidencia
        incidenceType: result.incidenceType,
        autonomousRegion: result.autonomousRegion,
        province: result.province,
        carRegistration: result.car,
        cause: result.cause,
        cityTown: result.cityTown,
        startDate: result.startDate,
        incidenceLevel: result.incidenceLevel,
        road: result.road,
        pkStart: result.pkStart,
        pkEnd: result.pkEnd,
        direction: result.direction
      }
    }))
  }
  const colorMapping = {
    Verde: '#7CD127',
    Blanco: '#FFFFFF',
    Amarillo: '#FFCC00',
    Rojo: '#FF5E42',
    Negro: '#000000'
  }
  const capaIncidencias = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 10,
      'circle-color': [
        'match',
        ['get', 'incidenceLevel'],
        'Verde',
        colorMapping.Verde,
        'Blanco',
        colorMapping.Blanco,
        'Amarillo',
        colorMapping.Amarillo,
        'Rojo',
        colorMapping.Rojo,
        'Negro',
        colorMapping.Negro,
        '#007cbf' // default color if no match
      ]
    }
  }
  const startingPoint = {

    latitude: "43.20105",
    longitude: "-2.10282",
    zoom: 9
  }
  return (
    <div className='maincontenedor'>
      <Header className="header" />
      <div className='contenedor'>
        <Controles />
        <Controles2 resultados={resultados} onSelectPoint={onSelectPoint} />

        <Map
          ref={mapRef}
          minZoom={7}
          mapboxAccessToken={
            'pk.eyJ1IjoibWlsa3lraXdpIiwiYSI6ImNscTB4c3NjbTAzNzcyanFpam8wbTgyanIifQ.KMVbExqE-wQwpkcHxJKxrQ'
          }
          initialViewState={startingPoint}
          style={{ width: 1000, height: 600 }}
          mapStyle="mapbox://styles/milkykiwi/clqb6kbnt009y01qv2sat065i"

        >{resultados?.map((result) => (
          <div key={result.incidenceId}>
            <Source id="incidencias-data" type="geojson" data={geoJSON}>
              <Layer {...capaIncidencias} />
            </Source>
          </div>
        ))}</Map>
      </div>
    </div>

  )
}

export default Mapa