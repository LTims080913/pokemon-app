import React from 'react';
import './App.css';


//components
import PokemonList from './components/PokemonList'
import Pokedex from './components/Pokedex'
import { PokemonProvider } from './context/PokemonContext';
import PokemonForm from './components/PokemonForm';


function App() {
  return (
    <PokemonProvider>
      <div className="main">
        <h1>Pokemon App coming soon!</h1>
        <p>....under construction....</p>
        <PokemonList/>
        <Pokedex/>
      </div>
      <div className="form-wrapper">
        <PokemonForm/>
      </div>
    </PokemonProvider>
  );
}

export default App;
