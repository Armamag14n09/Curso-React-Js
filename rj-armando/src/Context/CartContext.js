import {  createContext, useContext, useEffect, useState} from "react"
import Swal from 'sweetalert2'

export const CartContext = createContext ()

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState(init)

    const addToCart = (item) => {
      setCart([...cart, item])
    }
  
    const removeItem = (id) =>{
        setCart( cart.filter((item) => item.id !== id) )

    }
  
    const isInCart = (id) => {
      return cart.some((item) => item.id === id)
    } 
  
    const cartQuantity = () => {
      return cart.reduce ((acc, item) => acc + item.cantidad, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc +item.cantidad * item.precio, 0)
    }

    const  empyCart = () =>{
        Swal.fire({
            title: 'Estas Seguro?',
            text: "No podrás revertirlo!",
            icon: 'Advertencia',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Borrar!'
          }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
              
            }
          })
       
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            cartQuantity,
            cartTotal,
            empyCart,
            removeItem
          }}>
             {children}
        </CartContext.Provider>
    )
}

export default CartContext