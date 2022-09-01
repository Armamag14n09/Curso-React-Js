import './App.css'
import { NavBar } from './components/NavBar' 
import { Contenedor } from './ejemplos/Contenedor';
import UserContainer from './ejemplos/UserContainer';
import Container from './ejemplos/ItemListContainer'
import { CartWidget } from './ejemplos/CartWidget';
import {useState} from 'react';   //4.1k (gzipped: 1.8k)
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () =>{

  const[show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }


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
