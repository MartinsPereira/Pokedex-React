import style from './Home.module.css'
import Pokemon from './Pokemon';
import React from 'react';

function Home() {
  const [dados,setDados] = React.useState([]);
  const [pagina,setPagina] = React.useState(20);
  const [pokemon, setPokemon] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  
  async function activePokemon(){
    setLoading(true)
    for(let i = pagina - 20; i < pagina; i++){
      console.log('teste: ' + i)
      const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
      const json = await request.json()
      let data = {
        id: json.id,
        name: json.name, 
        sprite: json.sprites.other["official-artwork"].front_default, 
        spriteAnimated: json.sprites.versions["generation-v"]["black-white"].animated.front_default,
        type: [...json.types],
      }
      pokemon.push(data)
    }
    Promise.all(pokemon).then(poke => {
      setDados(poke)
      setLoading(false)
    })
  }
 
  React.useEffect(() => {
    activePokemon();
  },[pagina])

  if(dados !== undefined){
  return (
    <section className={style.pokemons}>
      <div className="container">
        <ul className={style.ulPokemon}>
          {dados.map((i, index) => <Pokemon key={i.id} item={i} index={index} />)}
        </ul>
        {loading ? (
        <button className={style.buttonMore} disabled onClick={() => setPagina(pagina + 20)}>Carregando..</button>) : 
        (<button className={style.buttonMore} onClick={() => setPagina(pagina + 20)}>Ver Mais</button>)}
      </div>
    </section>
  );
  }
  else return null
}

export default Home;