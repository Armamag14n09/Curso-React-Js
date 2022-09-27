import { useState } from "react"
import { useCartContext } from "../../Context/CartContext"



const Checkout = () => {

    const {cart,  cartTotal} =  useCartContext()

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: '',
    })

    const handleInputChange = (e) => {
       setValues({
           ...values,
           [e.target.name]:e.target.value
       })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const orden= {
            comprador:values, 
            items:cart,
            total:cartTotal()
        }
        if (values.nombre.length < 2) {
            alert("Nombre no valido!")
            return
         }

        if (values.email.length < 2) {
            alert("Email incorrecto")
            return
         }
         console.log("submit del form")
         console.log(orden)
 
 
    }

    return(
        <div className="container my-5">

            <h2>Checkout</h2>
            <hr/>
 
            <form onSubmit={handleSubmit}>
                <input 
                    name="nombre"
                    onChange={handleInputChange}
                    value={values.nombre} 
                    type={'text'} 
                    className="my-3 form-control" 
                    placeholder="Tu nombre" 
                /> 
                <input
                    name="email"
                    onChange={handleInputChange}
                    value={values.email} 
                    type={'email'} 
                    className="my-3 form-control" 
                    placeholder="Email"
                />
                <input
                    name="direccion"
                    onChange={handleInputChange}
                    value={values.direccion} 
                    type={'text'} 
                    className="my-3 form-control" 
                    placeholder="Dirección"
                />

                <button type="submit" className="btn btn-primary" >Enviar</button>
            </form>

        </div>
    )
}

export default Checkout