import React from 'react';
import './App.css';
import {useContext} from 'react';
import {PokemonContext} from './context/PokemonContext'

//components
import PokemonList from './components/PokemonList'
import Pokedex from './components/Pokedex'
import { PokemonProvider } from './context/PokemonContext';



function App() {
  return (
    <PokemonProvider>
      <div className="App">
        <h1>Pokemon App coming soon!</h1>
        <p>....under construction....</p>
        <PokemonList/>
        <Pokedex/>
      </div>
    </PokemonProvider>
  );
}

export default App;
