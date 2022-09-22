import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDatail/ItemDetail"
import Loader from "../Loader/Loader"
import { doc, getDoc } from "firebase/firestore"
import { db } from '../Firebase/config'



const ItemDatailContainer = () =>{

    const [item, productos, setItem] = useState([])
    const [loading, setLoadin] =useState(true)

    const{itemId} = useParams ()


    useEffect(() => {
        setLoadin(true)
        const docRef = doc( db, 'productos', itemId )

        getDoc(docRef)
            .then((doc) => {
                setItem({id: doc.id, ...doc.data()})
            })
            .finally(() => {
                setLoadin(false)
            })

    },[itemId])

    return(
        <div  className="NavBar-container">
            {
            loading
            ? <Loader/>
            : <ItemDetail item={item} />
            }
        </div>
    )
}

export default ItemDatailContainer