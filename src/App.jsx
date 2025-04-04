import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Menu from './componentes/menu'
import Aleatorio from './componentes/aleatorios'
import Capturados from './componentes/capturados'
import Favoritos from './componentes/favoritos'
import Listas from './componentes/listas'
import Pokemon from './componentes/pokemon'
import Usuario from './componentes/usuario'

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path='/' element={<Listas />} />
        <Route path='/favoritos' element={<Favoritos />} />
        <Route path='/usuario' element={<Usuario />} />
        <Route path='/capturados' element={<Capturados />} />
        <Route path='/aleatorios' element={<Aleatorio />} />
        <Route path='/pokemon' element={<Pokemon />} />
      </Routes>
    </Router>
  )
}

export default App
