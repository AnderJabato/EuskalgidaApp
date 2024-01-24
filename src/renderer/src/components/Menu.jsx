import React from 'react';
import { Button } from '@chakra-ui/react';
import { Outlet, Link } from "react-router-dom";
function Menu({ resultados, onSelectPoint }) {
 
  const opciones = ['Incidencias', 'Crear incidencia', 'Alertas', 'Camaras'];

  return (
    <div >
      {/* {opciones.map((opcion, index) => (
        <a href="/alertas">
          <Button key={index} colorScheme='blue' style={buttonProps}>
            {opcion}
          </Button>
        </a>

      ))} */}
      <nav>
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
    </div>
  );
}

const buttonProps = {
  width: '100%',
};

export default Menu;
