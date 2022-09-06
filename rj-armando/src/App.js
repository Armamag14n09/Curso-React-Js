import './App.css'
import ItemDatailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar' 
import Container from './ejemplos/ItemListContainer';
import { BrowserRouter} from 'react-router-dom';



const App = () =>{

  return (


  <div>
    
    <BrowserRouter/>

    <NavBar/>
    {/*PokeApi/*/}
    <Container/>
    <ItemDatailContainer/>

  </div>
  );
}

export default App;
