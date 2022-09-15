import './App.css'
import { NavBar } from './components/NavBar' 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import ItemDatailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';
import { CartProvider } from './Context/CartContext';
import Cart from './components/Cart/Cart';

const App = () =>{



  return (

    <CartProvider>

    <div>

      <BrowserRouter>

        <NavBar/>

        <Routes>
          
          <Route path='/' element={ <ItemListContainer/> }/>
          <Route path='/productos/:categoryId' element={ <ItemListContainer/> } />
          <Route path='/item/:itemId' element={ <ItemDatailContainer/> }/>

          <Route path='/cart' element={<Cart/>} />
          <Route path= "/nosotros" element={<Nosotros/>}/>
          <Route path= "/contacto" element={<Contacto/>}/>
          <Route path='*' element={<Navigate to="/" />} />

        </Routes>

      </BrowserRouter>
      
    </div>

  </CartProvider>

  
  );
}

export default App;
