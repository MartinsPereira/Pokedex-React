import './Pokemon.css'
import React from 'react'
import PokemonBack from './Photos/PokemonBack'

function Pokemon({item,index}) {
  function clickFora(event){
    if(event.target === this) closeWindow()
  }
  function closeWindow(){
    document.querySelector('.sectionPokemonIndie').style.opacity = 0;
    setTimeout(()=> {document.querySelector('.sectionPokemonIndie').style.display = 'none'},200)
  }
  document.querySelector('.sectionPokemonIndie').addEventListener('click', clickFora)
  function showPokemon(){
    document.querySelector('.sectionPokemonIndie').style.display = 'flex';
    setTimeout(()=> {document.querySelector('.sectionPokemonIndie').style.opacity = '1'},200)
    document.querySelector('.sectionPokemonIndie > div img').src = item.sprite
  }
  const pokemonColor = PokemonBack(item)
  
  return (
    <li style={pokemonColor} onClick={showPokemon} className="liPokemon">
      <img src={item.sprite} alt=""/>
      <h3>{item.name}</h3>
    </li>
  );
}

export default Pokemon;
