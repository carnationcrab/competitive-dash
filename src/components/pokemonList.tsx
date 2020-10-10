import React from "react";
import Pokemon from "./pokemon";

function PokemonList(props: any) {
  return (
    <div>
      {props.pokemons.map((c: any) => (
        <Pokemon name={c.name} typing={c.type} />
      ))}
    </div>
  );
}

export default PokemonList;
