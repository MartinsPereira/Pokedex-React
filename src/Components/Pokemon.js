import './Pokemon.css'
import React from 'react'
import PokemonBack from './Photos/PokemonBack'
import { Link } from 'react-router-dom';

function Pokemon({item,index}) {
  const pokemonColor = PokemonBack(item)
  
  return (
    <Link to={`/pokemon/${item.id}`}>
      <li key={item.key} style={pokemonColor} className="liPokemon">
        <img src={item.sprite} alt=""/>
        <h3>{item.name}</h3>
      </li>
    </Link>
  );
}

export default Pokemon;
