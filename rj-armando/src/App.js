import './App.css'
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import { LoginProvider, useLoginCotext } from './Context/LoginContext';
import AppRouter from './router/AppRouter';

const App = () =>{

  return (
    <LoginProvider>
    <CartProvider>
      <AppRouter/>
   </CartProvider>
  </LoginProvider>
  );
}

export default App;
