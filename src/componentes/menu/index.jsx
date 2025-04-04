import "./style.css"
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <nav className="c-menu">
      <Link to="/">Pagina Principal</Link>
      <Link to="/favoritos">Favoritos</Link>
      <Link to="/usuario">Usuario</Link>
      <Link to="/aleatorios">Aleatorio</Link>
      <Link to="/capturados">Capturados</Link>
    </nav>
  )
}

export default Menu
