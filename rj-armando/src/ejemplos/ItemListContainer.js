import { useEffect, useState } from "react" 
import { pedirDatos } from "../helpers/pedirDatos"
import ItemList from "../components/itemList/itemList"

const Container = () => {

const [productos, setProductos] = useState ([])
        
        useEffect(() =>{
            pedirDatos( )
            .then((res) => {
                setProductos(res)
            })
            .catch((error) =>{
                console.log(error)
            } )
            .finally(() => {
            },)

        }, [])

        return(
            <div>
                <ItemList productos={productos} />
            </div>
        )
}
export default Container

