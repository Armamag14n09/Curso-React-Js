import './App.css'
//import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar' 
import { Contenedor } from './ejemplos/Contenedor';
import UserContainer from './ejemplos/UserContainer';
import Container from './ejemplos/ItemListContainer'
import { CartWidget } from './ejemplos/CartWidget';



const App = () =>{

  return (
  <div>
    <NavBar/>
    <Container>
      <h4>Algun contenido</h4>
    </Container>
    <CartWidget/>

    <Contenedor accesorio="Articulos!!" promos="Paquetes!!"/>

    <UserContainer/>


  </div>
  );
}

export default App;
