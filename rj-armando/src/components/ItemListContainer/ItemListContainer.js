import { useEffect, useState } from "react" 
import ItemList from "../itemList/itemList"
import { useParams } from 'react-router-dom'
import Loader from "../Loader/Loader"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from '../Firebase/config'


const ItemListContainer = () => {

const [productos, setProductos] = useState ([])
const [loading, setLoading] = useState(true)

const {categoryId} = useParams()
        
        useEffect(() =>{
            setLoading(true)
            
            const productosRef = collection(db, 'productos')
            const q = query(productosRef, where('category','==', categoryId) )

            getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map( (doc) => ({id: doc.id, ...doc.data()}) )
                console.log(productosDB)

                setProductos(productosDB)
            })
                .finally(() => {
                setLoading(false)
                })

        }, [categoryId])

        return(
            <div>

                { 
                    loading 
                    ? <Loader/>
                    
                    :<ItemList productos={productos}/>
                }
            </div>
        )
}
export default ItemListContainer

