import 'mapbox-gl/dist/mapbox-gl.css'
import { useCallback } from 'react'
import Map, { Layer, Source } from 'react-map-gl'

function Mapa({ resultados, mapRef }) {
  // const mapRef = useRef()
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
        coordinates: [parseFloat(result.longitud), parseFloat(result.latitud)]
      },
      properties: {
        incidenceId: result.idIncidencia, //cambiar result por incidencia
        incidenceType: result.tipoIncidencia,
        autonomousRegion: result.regionAutonoma,
        province: result.provincia,
        //carRegistration: registroVehiculo,
        cityTown: result.ciudad,
        startDate: result.fechaInicio,
        incidenceLevel: result.nivelIncidencia,
        //road: result.road,
        //pkStart: result.pkStart,
        //pkEnd: result.pkEnd,
        //direction: result.direction
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

    latitude: '43.20105',
    longitude: '-2.10282',
    zoom: 9
  }
  return (
    <div className="maincontenedor">
      <Map
        ref={mapRef}
        minZoom={7}
        style={{ width: '100%', height: '100%' }}
        mapboxAccessToken={
          'pk.eyJ1IjoibWlsa3lraXdpIiwiYSI6ImNscTB4c3NjbTAzNzcyanFpam8wbTgyanIifQ.KMVbExqE-wQwpkcHxJKxrQ'
        }
        initialViewState={startingPoint}
        mapStyle="mapbox://styles/milkykiwi/clqb6kbnt009y01qv2sat065i"
      >
        {resultados?.map((result) => (
          <div key={result.incidenceId}>
            <Source id="incidencias-data" type="geojson" data={geoJSON}>
              <Layer {...capaIncidencias} />
            </Source>
          </div>
        ))}
      </Map>
    </div>
  )
}

export default Mapa