import style from './Home.module.css'
import Pokemon from './Pokemon';
import React from 'react';

function Home() {
  const [dados,setDados] = React.useState([]);
  const [pagina,setPagina] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  async function activePokemonLista(){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${pagina}&limit=20`)
    const request = await response.json()  
    request.results.map((i,index) => {
        setLoading(true)
        return activePokemon(i)
    })
  }
  async function activePokemon(item){
    const request1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
    const response1 = await request1.json()
    /*response1.sprites.versions["generation-v"]["black-white"].animated.front_default*/
    let data = {name: response1.name, sprite: response1.sprites.front_default}
    setDados((d) => [...d,data])
    setLoading(false);
  }
 
  React.useEffect(() => {
    activePokemonLista();
  },[pagina])
  
  if(dados !== undefined){
  return (
    <section>
      <div>
        <ul className={style.ulPokemon}>
          {dados.map((i, index) => <Pokemon key={i.name} item={i} index={index} />)}
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