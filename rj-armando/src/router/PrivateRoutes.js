import { NavBar } from '../components/NavBar' 
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDatailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Nosotros from '../components/Nosotros/Nosotros';
import Contacto from '../components/Contacto/Contacto';
import Cart from '../components/Cart/Cart';
import { Route, Routes, Navigate } from 'react-router-dom'
import Checkout from '../components/Checkout/Checkout'



 const PrivateRoutes = () => {
    return(
        <>
            <NavBar/>

                <Routes>
                    
                    <Route path='/' element={ <ItemListContainer/> }/>
                    <Route path='/productos/:categoryId' element={ <ItemListContainer/> } />
                    <Route path='/item/:itemId' element={ <ItemDatailContainer/> }/>
                    <Route path='/cart' element={<Cart/>} />
                    <Route path='/Checkout' element={<Checkout/>} />
                    <Route path= "/nosotros" element={<Nosotros/>}/>
                    <Route path= "/contacto" element={<Contacto/>}/>
                    <Route path='*' element={<Navigate to="/" />} />
                    
                </Routes> 
        </>
    )
 }

 export default PrivateRoutes