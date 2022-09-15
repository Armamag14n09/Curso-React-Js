import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"


const Cart = () => {

    const { cart } = useContext(CartContext)

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
                <hr/>
                
            </div>
            ))}
        </div>
    )
}

export default Cart