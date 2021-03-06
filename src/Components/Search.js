import style from './Home.module.css'
import Pokemon from './Pokemon';
import React from 'react';
import NotFound from './NotFound';
import useFetch from './Hooks/useFetch'
import { useParams } from 'react-router-dom';

function Search() {
  let {name} = useParams();
  let [dados,setDados] = React.useState([]);
  let { loading, error, request } = useFetch();

  async function SearchPokemon(item){
    try{
      const {json} = await request(`https://pokeapi.co/api/v2/pokemon/${name}`,null)
      let data = {
        id: json.id,
        name: json.name, 
        sprite: json.sprites.other["official-artwork"].front_default, 
        spriteAnimated: json.sprites.versions["generation-v"]["black-white"].animated.front_default,
        type: [...json.types],
      }
      setDados([data])
    }catch(errors){
    }
  }
 
  React.useEffect(() => {
    SearchPokemon();
  },[name])
  
  if(error) return <NotFound></NotFound>
  if(loading) return <div className="loading"><div></div></div>
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