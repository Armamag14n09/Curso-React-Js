import './App.css'
import { Link  } from 'react-router-dom'

export const NavBar = () => {
    return(
        <header className="bg-NavBar">
          <div className="NavBar-container">

              <Link to='/' ><h1 className="NavBar-title">Mundo del Gamer</h1></Link>

            <nav className="header">

              <Link to='/productos/teclados' className="NavBar-navlink">Teclados</Link>
              <Link to='/productos/monitor' className="NavBar-navlink">Monitor</Link>
              <Link to='/productos/bocina' className="NavBar-navlink">Bocina</Link>

            </nav>
          </div>
      </header>
    )
}