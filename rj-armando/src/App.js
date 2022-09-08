import './App.css'
import { NavBar } from './components/NavBar' 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import ItemDatailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Contenedor } from './ejemplos/Contenedor';


const App = () =>{

  return (


  <div>

    <BrowserRouter>

      <NavBar/>

      <Routes>
        
        <Route path='/' element={ <ItemListContainer/> }/>
        <Route path='/productos/:categoryId' element={ <ItemListContainer/> } />
        <Route path='/item/:itemId' element={ <ItemDatailContainer/> }/>
        <Route path='*' element={<Navigate to="/" />} />

      </Routes>

      <Contenedor/>
    </BrowserRouter>
  </div>
  
  );
}

export default App;
