import React, {useContext} from 'react'
import {PokemonContext} from '../context/PokemonContext'


const CapturedPokemons = () => {
    const {
        pokemons, 
        setPokemons, 
        capturedPokemons, 
        setCapturedPokemons
    } = useContext(PokemonContext)

    const releasePokemon = (releasedPokemon) =>
        capturedPokemons.filter((pokemon) => pokemon !== releasedPokemon);

    const release = (pokemon) => () => {
        //update captured Pokemon list
        setCapturedPokemons(releasePokemon(pokemon));
        //update available Pokemon list
        setPokemons([...pokemons, pokemon]);
    };

    return(
        <div className='pokedex'>
            <h2>Captured Pokemon</h2>

            {capturedPokemons.map((pokemon) =>
            <div key={`${pokemon.id}-${pokemon.name}`}>
                <div>
                    <span>{pokemon.name}</span>
                    <button onClick={release(pokemon)}>-</button> 
                </div>
            </div>)}
        </div>
    )
}


export default CapturedPokemons;