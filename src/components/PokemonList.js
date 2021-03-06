import React, {useContext} from 'react'
import {PokemonContext} from '../context/PokemonContext'

const PokemonsList = () => {
    const {
        pokemons, 
        setPokemons, 
        capturedPokemons, 
        setCapturedPokemons
    } = useContext(PokemonContext);

    const removePokemonFromList = (removedPokemon) => 
    pokemons.filter((pokemon) => pokemon !== removedPokemon);

    const capture = (pokemon) => () => { 
        //update captured Pokemon list
        setCapturedPokemons([...capturedPokemons, pokemon]);
        //update available Pokemon list
        setPokemons(removePokemonFromList(pokemon));
    };


    return (
        <div className='pokemons-list'>
            <h2>Pokemons List</h2>

            {pokemons.map((pokemon) =>
            <div key={`${pokemon.id}-${pokemon.name}`}>
                <div>
                    <span>{pokemon.name}</span>
                    <button onClick={capture(pokemon)}>+</button>
                </div>

                
            </div>)}
        </div>
    )
}

export default PokemonsList;