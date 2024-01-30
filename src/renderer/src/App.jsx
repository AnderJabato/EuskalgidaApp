import axios from 'axios'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Menu from './components/Menu'

function App() {
  const [traficoData, setTraficoData] = useState(null)
  async function fetchTrafico() {
    try {
      // realiza la llamada a la API
      const response = await axios.get('https://api.euskadi.eus/traffic/v1.0/incidences?_page=1')
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
  }, [])

  return (
    <div>
      <Header />
      <div className="test">
        <Menu />
        {/* <SeccionIncidencias resultados={traficoData} />  */}
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App