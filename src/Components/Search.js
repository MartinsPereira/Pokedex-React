import style from './Home.module.css'
import Pokemon from './Pokemon';
import React from 'react';
import useFetch from './Hooks/useFetch'
import { useParams } from 'react-router-dom';

function Search() {
  let {name} = useParams();
  let [dados,setDados] = React.useState([]);
  let { loading, error, request } = useFetch();
  console.log(name)

  async function SearchPokemon(item){
    const {json} = await request(`https://pokeapi.co/api/v2/pokemon/${name}`,null)
    /*response1.sprites.versions["generation-v"]["black-white"].animated.front_default*/
    let data = {
      id: json.id,
      name: json.name, 
      sprite: json.sprites.other["official-artwork"].front_default, 
      spriteAnimated: json.sprites.versions["generation-v"]["black-white"].animated.front_default,
      type: [...json.types],
    }
    setDados([data])
  }
  
  console.log(dados)
 
  React.useEffect(() => {
    SearchPokemon();
  },[name])
  
  if(dados !== undefined){
  return (
    <section className={style.pokemons}>
      <div className="container">
        <ul className={style.ulPokemon}>
          {dados.map((i, index) => <Pokemon key={i.id} item={i} index={index} />)}
        </ul>
      </div>
    </section>
  ); 
  }
  else return null
}

export default Search;