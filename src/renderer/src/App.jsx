import axios from 'axios'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Menu from './components/Menu'

function App() {
 
  return (
    <div>
      <Header />
      <div className="test">
        <Menu />
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App