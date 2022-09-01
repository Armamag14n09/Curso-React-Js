


const stock =[
    {
        id: 1,
        nombre: 'Silla RGB',
        precio: 2500,
        img: './public/assets/silla1.jpeg',
        stock: 20,
        desc: 'Un exelente producto'
    },
    {
        id: 2,
        nombre: 'CPU',
        precio: 500,
        img: './public/assets/cpu1.jpg',
        stock: 20,
        desc: 'Un exelente producto'
    },
    {
        id: 3,
        nombre: 'Teclado',
        precio: 250,
        img: './public/assets/teclado1.jpg',
        stock: 20,
        desc: 'Un exelente producto'
    },

    {
        id: 4,
        nombre: 'Bocina',
        precio: 380,
        img: './public/assets/bocina1.jpg',
        stock: 20,
        desc: 'Un exelente producto'
    },

    {
        id: 5,
        nombre: 'Monitor',
        precio: 1520,
        img: './public/assets/monitor1.jpg',
        stock: 20,
        desc: 'Un exelente producto'
    },

]

    const pedirDatos = () =>{
            return new Promise((resolve, reject) => {
                    //Cuerpo de la promesa
                    setTimeout(() =>{
                   
                resolve(stock)
                //reject("Promesa rechazada")
                },3000)
            })
        }


const Container = () => {

const [productos, setProductos] = useState([])
    console.log(productos)
        
   pedirDatos( )
        .then((res) => {
            //console.log(res)
            setProductos(res)
            productos = res
        })
        .catch((error) =>{
            console.log(error)
        } )
        .finally(() => {
            console.log("Fin del proceso")
        },)

    return (
        <div className="my-container" >
            <h2>Bienvenidos a Gamer</h2>
            <p>Tedamos la bienvenida al sitio Gamer con mas estilos para ti.</p>


        </div>
)

}

export default Container