import Counter from "../Counter/Counter"
import { useState } from "react"
import Select from "../Select/Select"


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

    const [cantidad, setCantidad,] = useState(1)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            cantidad
        }
        console.log(itemToCart)
       // console.log({
       //     ...item,
       //     cantidad
       // })
    }


    return (
        <div className="container my-5">
            <img class="pequeña" src= {item.img}/>
            <h3>{item.nombre} </h3>
            <p>{item.desc} </p>
            <p>{item.category} </p>
            <h5>{item.precio} </h5>
            <hr/>
            <Select options={options}/>
            <hr/>

            <Counter 
                max={item.stock} 
                counter={cantidad}
                setCounter={setCantidad}
                handleAgregar={handleAgregar}
            />

        </div>
    )


}

export default ItemDetail