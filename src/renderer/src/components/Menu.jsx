import React from 'react'
import { Link } from 'react-router-dom'
function Menu({ resultados, onSelectPoint }) {
  return (
    <nav className="padding">
      <ul>
        <li>
          <Link to={`/incidencias`}>Incidencias</Link>
        </li>
        <li>
          <Link to={`/crear`}>Crear incidencia</Link>
        </li>
        <li>
          <Link to={`/alertas`}>Alertas</Link>
        </li>
        <li>
          <Link to={`/camaras`}>Camaras</Link>
        </li>
      </ul>
    </nav>
  )
}

const buttonProps = {
  width: '100%'
}

export default Menu