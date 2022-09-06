import { useEffect, useState } from "react"
//import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams } from 'react-router-dom'
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemDetail from "../ItemDatail/ItemDetail"


const ItemDatailContainer = () =>{

    const [item, setItem] = useState(null)
    const [loading, setLoadin] =useState(true)

    const{itemId} = useParams ()

    console.log(itemId)
    console.log(item)

    useEffect(() => {
        setLoadin(true)

        pedirDatos( )
            .then((res)=>{
                setItem(res.find((prod) => prod.id === Number(itemId)))
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoadin(false)
            })
    },[])

    return(
        <div  className="NavBar-container">
            {
            loading
            ? <h2>Loading....</h2>
            : <ItemDetail item={item} />
            }
        </div>
    )
}

export default ItemDatailContainer