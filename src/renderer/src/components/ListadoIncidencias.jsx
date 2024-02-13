import React from 'react';
import Incidencia from './Incidencia';
import axios from 'axios';

function ListadoIncidencias({ resultados, onSelectPoint, manejarModal }) {
  const  datosOrdenados= resultados?.sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
  console.log(datosOrdenados)
  const editarIncidencia = async (idIncidencia, datosEditados)=>{
    const urlEditar = `http://localhost:3002/api/incidencia/${idIncidencia}`
  try {
    const response = await axios.put(urlEditar, datosEditados)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
  }
  const borrarIncidencia = async (idIncidencia)=>{
    const urlBorrar = `http://localhost:3002/api/incidencia/${idIncidencia}`
  try {
    const response = await axios.delete(urlBorrar)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
  }
  return (
    <div className='scrollIncidencias'>
      {datosOrdenados?.map((incidencia) => (
        <Incidencia 
          key={incidencia.idIncidencia}
          data={incidencia}
          onSelectPoint={onSelectPoint}
          borrar={borrarIncidencia}
          editar={editarIncidencia}
          manejarModal={manejarModal}
          
        />
      ))}
    </div>
  );
}


export default ListadoIncidencias;