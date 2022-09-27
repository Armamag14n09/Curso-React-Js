import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import {BsFillTrashFill} from 'react-icons/bs'
import { Link } from "react-router-dom"


const Cart = () => {

    const { cart, cartTotal, empyCart, removeItem } = useContext(CartContext)

    if (cart.length === 0) {

        return( 

        <div className="container my-5">
            <h2>Tu Carrito esta vacio</h2>
            <hr/>
            <Link to="/" className="btn btn-primary" >Ir a comprar</Link>
          </div>
          )
        
    }

    return (
        <div className="container my-5">


            <h2>Tu Carrito</h2>
            <hr/>

            {cart.map((item) => ( 
                
            <div key={item.id}>
                <h3> {item.nombre} </h3>
                <p>Precio: {item.precio} </p>
                <p>Cantidad: {item.cantidad} </p>
                <p>Categoria: {item.category} </p>
                <button onClick={() =>removeItem(item.id) } className="btn btn-danger mx-2"><BsFillTrashFill/></button>
                <hr/>
                
            </div>
            ))}

            <h4>Total: $ {cartTotal() } </h4>
            <button onClick={empyCart} className="btn btn-danger">Vaciar Carrito</button>
            <Link className="btn btn-success mx-3" to="/checkout" >Terminar mi compra</Link>
        </div>
    )
}

export default Cart