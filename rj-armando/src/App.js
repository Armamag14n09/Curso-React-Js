import './App.css'
import { Header } from './components/NavBar' 
import { Contenedor } from './ejemplos/Contenedor';
import UserContainer from './ejemplos/UserContainer';
import Container from './ejemplos/ItemListContainer'


const App = () =>{


  return (
  <div>
    <Header/>
    <Container>
      <h4>Algun contenido</h4>
    </Container>

    <Contenedor accesorio="Articulos!!" promos="Paquetes!!"/>

    <UserContainer/>


  </div>
  );
}

export default App;
