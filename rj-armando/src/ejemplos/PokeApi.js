import { useEffect, useState } from "react" 


const PokeApi = () =>{

    const [id, setId] = useState(1)
    const [pokemon, setPokemon] = useState(null)

        console.log(id)

    const handleSiguiente = () => {
        setId(id+1)
    }
    const handleAnterior = () => {
        if (id>1){
            setId(id-1)
        }
    }



    useEffect(() => {
        fetch( `https://pokeapi.co/api/v2/pokemon/${id}` )
            .then((resp) => resp.json())
            .then((data) => {
                setPokemon(data)
            })

    },[id])

    return(
        <div className="container my-5">
            <h2> Poke Api</h2>
            <hr/>

            {
                pokemon
                ?
                    <div>
                        <h3> {pokemon.name} </h3>
                        <img src= {pokemon.sprites.front_default} alt={pokemon.name} />
                    </div>

                : null
            }

                <button onClick={handleAnterior} 
                className="btn btn-outline-primary"
                disabled={id === 1}
                >
                    Siguiente
                </button>
                <button onClick={handleSiguiente} 
                className="btn btn-primary mx-2"
                >
                Siguiente
                </button>
            
        </div>
    )
}

export default PokeApi