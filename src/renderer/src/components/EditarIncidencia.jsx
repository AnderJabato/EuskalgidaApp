import React, {useState} from 'react'
import axios from 'axios';
import 'mapbox-gl/dist/mapbox-gl.css'
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@chakra-ui/react';
function EditarIncidencia() {
  const [tipoIncidencia, setTipoIncidencia] = useState('');
  const [provincia, setProvincia] = useState('');
  const [latitud, setLatitud] = useState('');
  const [longitud, setLongitud] = useState('');
  const [fechaInicio, setFecha] = useState('');

//   o Meteorológica
// o Accidente
// o Retención
// o Seguridad vial
// o Otras incidencias
// o Puertos de montaña
// o Vialidad invernal tramos
// o Pruebas deportivas
  const handleSubmit = async (e) => {
    e.preventDefault();
    const randomId = uuidv4();
  //se presiona al pulsar eniviar
  const nuevaIncidencia ={
    idIncidencia : randomId,
    tipoIncidencia : tipoIncidencia,
    fechaInicio : fechaInicio,
    provincia : provincia,
    latitud : latitud,
    longitud : longitud

  }
  try {
    //const respuesta = await axios.post("http://localhost:3002/api/incidencia", nuevaIncidencia)
  } catch (error) {
    console.log(error)
  }
}
const handleChange = (e) => {
  setTipoIncidencia(e.target.value);
  console.log('Opción seleccionada:', tipoIncidencia);
}

const handleProvinciaChange = (e) =>{
  setProvincia(e.target.value);
  console.log( provincia);
}
const handleFechaChange = (e) =>{
  setFecha(e.target.value);
  console.log( fechaInicio);
}
const handleLatitudeChange = (e) =>{
  setLatitud(e.target.value);
  console.log( latitud);
}
const handleLongitudChange = (e) =>{
  setLongitud(e.target.value);
  console.log( longitud);
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label form onSubmit={handleSubmit}>
        Tipo incidencia:
        <select value={tipoIncidencia} onChange={handleChange}>
          <option value="">Selecciona...</option>
          <option value="Meteorológica"> Meteorológica</option>
          <option value="Accidente">Accidente</option>
          <option value="Retención">Retención</option>
          <option value="Seguridad vial"> Seguridad vial</option>
          <option value="Puertosde montaña">Puertos de montaña</option>
          <option value="Vialidad invernal tramos">Vialidad invernal tramos</option>
          <option value="Otras incidencias">Otras incidencias</option>
        </select>
      </label>
      <label>
        Provincia:
        <select value={provincia} onChange={handleProvinciaChange}>
          <option value="">Selecciona...</option>
          <option value="Gipuzkoa"> Gipuzkoa</option>
          <option value="Arava">Arava</option>
          <option value="Bizkaia">Bizkaia</option>
          
        </select>
      </label>
      <label>
        Fecha de inicio:
        <input type="text" value={fechaInicio} onChange={handleFechaChange} />
      </label>
      
      <label>
        Latitud:
        <input type="text" value={latitud} onChange={handleLatitudeChange} />
      </label>
      <label>
        Longitud:
        <input type="text" value={longitud} onChange={handleLongitudChange} />
      </label>
      <Button colorScheme='blue' type='submit'>
          Enviar
        </Button>
    </form>
    </div>
  )
}

export default EditarIncidencia