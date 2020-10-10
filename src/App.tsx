import React from 'react';
import logo from './logo.svg';
import './App.css';
import {pokemons} from './components/data/pokemon'
import PokemonList from './components/pokemonList';

function App() {
  return (
    <div className="App">
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

export default App;
