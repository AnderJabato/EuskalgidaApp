import React from 'react'
import ListadoAlertas from './ListadoAlertas'
import { useState, useEffect } from 'react'
import axios from 'axios'

function SeccionAlertas() {
  const [alertas, setAlertas] = useState(null)
  useEffect(() => {
    
    const obtenerData = async ()=> { 
      try {
        const endpoint = 'http://localhost:3002/api/alertas'
        const peticion =  await axios.get(endpoint) //se le pone wait para que espere conexion asincrona
        console.log(peticion)
        setAlertas(peticion.data.data)
      } catch (error) {
          console.log(error)  
      }
      
    }  
    obtenerData()
    console.log(alertas)
  }, [])
  
  return (
    <ListadoAlertas alertas={alertas}/>//paso props que es la alerta 
  )
}

export default SeccionAlertas