import Item from "../item/item"


const ItemList = ({productos = []}) => {

        return (
            <div className="my-container" >
                <h2>Bienvenidos Productos</h2>
                <p>Tedamos la bienvenida al sitio Gamer con mas estilos para ti.</p>
                    <hr/>
                {productos.map( (prod) => <Item producto={prod} key={prod.id} /> )}
            </div>
    )
}
export default ItemList