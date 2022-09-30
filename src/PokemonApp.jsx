import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon/thunks"

const PokemonApp = () => {
    const dispatch = useDispatch()
    const { isLoading, pokemons = [], page } = useSelector( state => state.pokemons)

    useEffect(() => {
        dispatch(getPokemons())
    },[])
    return (
        isLoading ? <p>Loading ...</p> : 
        (
            <>
                <h1>Pokemons App</h1>
                {pokemons.map((pokemon, index) => (
                    <div key={index}>
                        <p>{pokemon.name}</p>
                    </div>
                ))}
                <button onClick={() => dispatch(getPokemons(page))}>
                    Next
                </button>
            </>
        )
    )
}

export default PokemonApp