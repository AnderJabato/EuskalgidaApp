
import icons from './assets/icons.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Incidencia from './components/Incidencia'
import Mapa from './components/Mapa'
import data from  './data.json'
import SeccionIncidencias from './components/SeccionIncidencias'
import Header from './components/Header'
import Menu from './components/Menu'
import { Outlet } from "react-router-dom";

function App() {
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

  return (
    <div >
      <Header />
      <div className='test'>
        <Menu /> 
        {/* <SeccionIncidencias resultados={traficoData} />  */}
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App