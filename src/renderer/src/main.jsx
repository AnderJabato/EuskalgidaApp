import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import SeccionAlertas from './components/SeccionAlertas'
import SeccionIncidencias from './components/SeccionIncidencias'
import SeccionCamaras from './components/SeccionCamaras'
import SeccionCrear from './components/SeccionCrear'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: '/incidencias',
      element: <SeccionIncidencias />,},
      {path: '/crear',
      element: <SeccionCrear />,},
      {
        path: '/alertas',
        element: <SeccionAlertas />,
        // children: [
        //   {
        //     path: '/alertas/:id',
        //     element: <Alerta />,
        //     loader: alertLoader
        //   }
        // ]
      },
      {path: '/camaras',
      element: <SeccionCamaras />,},
    ]

  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
)
