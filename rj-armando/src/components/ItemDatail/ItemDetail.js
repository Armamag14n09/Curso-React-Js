

const ItemDetail = ({item} ) => {

    return (
        <div className="container">
            <img class="pequeña" src= {item.img}/>
            <h3>{item.nombre} </h3>
            <p>{item.desc} </p>
            <p>{item.category} </p>
            <h5>{item.precio} </h5>

        </div>
    )


}

export default ItemDetail