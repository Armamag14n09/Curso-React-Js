import './App.css'
import { Link  } from 'react-router-dom'
import CartWidget from './CartWidget/CartWidget'

export const NavBar = () => {
    return(
        <header className="bg-NavBar">
          <div className="NavBar-container">

              <Link to='/' ><h1 className="NavBar-title">Mundo del Gamer</h1></Link>

            <nav className="header">

              <Link to='/productos/teclados' className="NavBar-navlink">Teclados</Link>
              <Link to='/productos/monitor' className="NavBar-navlink">Monitor</Link>
              <Link to='/productos/bocina' className="NavBar-navlink">Bocina</Link>
              <Link to='/nosotros' className="NavBar-navlink">Nosotros</Link>
              <Link to='/contacto' className="NavBar-navlink">Contacto</Link>
            </nav> 
            
              <CartWidget/>


          </div>
      </header>
    )
}