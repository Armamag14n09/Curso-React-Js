import { stock } from "../components/data/data"
export const pedirDatos = () =>{
        return new Promise((resolve, reject) => {
                //Cuerpo de la promesa
                setTimeout(() =>{
               
            resolve(stock)
            //reject("Promesa rechazada")
            },1000)
        })
    }
