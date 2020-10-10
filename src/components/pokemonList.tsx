import React from "react";
import Pokemon from "./pokemon";

function PokemonList(props: any) {
  return (
    <div>
      {props.pokemons.map((pokemon: any) => (
        <Pokemon data={pokemon} />
      ))}
    </div>
  );
}

export default PokemonList;
