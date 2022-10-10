import Counter from "../Counter/Counter"
import { useContext, useState } from "react"
import Select from "../Select/Select"
import { useCartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"


const options = [
    {
        value: 'L',
        texto: 'Large'
    },
    {
        value: 'M',
        texto: 'Medium'
    },
    {
        value: 'S ',
        texto: 'Small'
    },

]

const ItemDetail = ({item} ) => {

    const {  addToCart, isInCart } = useCartContext()

    const [cantidad, setCantidad,] = useState(1)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            cantidad,
            
        }
        console.log(isInCart(item.id))
        addToCart(itemToCart)
    }


    return (
        <div className="container my-5">
            <img class="pequeña" src= {item.img}/>
            <h3>{item.nombre} </h3>
            <p>{item.desc} </p>
            <p>{item.category} </p>
            <h5>{item.precio} </h5>

            {item.promo && <h5 style={{colo: 'red'}}> {item.promo}% Off </h5> }
            <hr/>
            <Select options={options}/>
            <hr/>

            {isInCart(item.id) && <p>El item ya está agregado</p>}

            {
                isInCart(item.id)
                 ?  <Link to="/cart" className="btn btn-success my-2">Terminar mi compra</Link>
                :   <Counter 
                max={item.stock} 
                counter={cantidad}
                setCounter={setCantidad}
                handleAgregar={handleAgregar}
            

          
            />
}

        </div>
    )


}

export default ItemDetail