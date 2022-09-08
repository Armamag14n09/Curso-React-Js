
import { Link } from 'react-router-dom'


const Item = ({producto}) => {
    return(
        <div>
            <img class="pequeña" src={producto.img}/>
            <h4>{producto.nombre }</h4>               
            <p>Precio:{producto.precio}</p>                
            <small>Stock disponoble:{producto.stock}</small>                
            <p>{producto.desc}</p>
            <Link to={`/item/${producto.id}`} type="button" class="btn btn-lg btn-primary" >Ver más</Link>   


        </div>
    )
}

export default Item