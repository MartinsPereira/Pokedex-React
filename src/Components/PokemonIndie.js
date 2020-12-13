import React from 'react';
import { useParams } from 'react-router-dom';
import './PokemonIndie.css'
import useFetch from './Hooks/useFetch'
import ColorsType from './Photos/ColorsType'
import ColorsAbilities from './Photos/ColorAbilities'

function PokemonIndie() {
  const [dados, setDados] = React.useState({})
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false)
  const { error, request } = useFetch();
  const [dataChain, setDataChain] = React.useState([])
  const [chain, setChain] = React.useState([])

  async function pokemonSpecie(){
    const {json} = await request(`https://pokeapi.co/api/v2/pokemon-species/${id}/`,null)
    pokemonSearchChain(json.evolution_chain.url)
  }

  async function pokemonSearchChain(url){
    const {json} = await request(url,null)
    let path = json.chain;
    let dataPath = [];
      if(path.evolves_to.length > 1){
        path.evolves_to.map((item,index) => {
          return dataPath.push(item.species.url);
        })
        path = path.evolves_to[0];
      }
      else {
        for(let i=0;i < 10;i++){
          if(path === undefined){
          }
          else if(path.hasOwnProperty('evolves_to')){
            dataPath.push(path.species.url)
            path = path.evolves_to[0];
          }
        }
      }
    pokemonChain(dataPath)
  }
  async function pokemonChain(url){
    for(let i =0;i < url.length;i++){
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${url[i].split('/')[url[i].split('/').length - 2]}/`)
      const json = await response.json()
      let dataPokeChain = {
        id: json.id,
        name: json.name,
        sprite: json.sprites.other["official-artwork"].front_default,
      }
      dataChain.push(dataPokeChain)
    }
    Promise.all(dataChain).then(poke => {
      setChain(poke)
      setLoading(false)
    })
  }

  async function activePokemon(item){
    setLoading(true)
    const {json} = await request(`https://pokeapi.co/api/v2/pokemon/${id}`,null)
    let data = {
      id: json.id,
      name: json.name, 
      sprite: json.sprites.other["official-artwork"].front_default, 
      type: [...json.types],
      abilities: [...json.abilities],
      backColor: ColorsAbilities(json.types[0]),
      chain: [],
      stats: {
        hp: json.stats[0].base_stat,
        attack: json.stats[1].base_stat,
        defense: json.stats[2].base_stat,
        specialAttack: json.stats[3].base_stat,
        specialDefense: json.stats[4].base_stat,
        speed: json.stats[5].base_stat,
      },
      height: json.height.toString().length < 2 ? `0,${json.height}m` : json.height.toString().substring(0,json.height.toString().length -1 ) + ',' + json.height % 10 + 'm',
      weight: json.weight.toString().length < 2 ? `0,${json.weight}kg` : json.weight.toString().length < 3 ? json.weight.toString().replace(json.weight.toString().slice(-1),',')+ json.weight.toString().substr(-1) + 'kg' : json.weight.toString().substring(0, json.weight.toString().length - 1) + ',' + json.weight % 10  + 'kg',
    }
    setDados(data)
    
  }
  
  React.useEffect(() => {
    activePokemon()
    pokemonSpecie()
  },[])
  
  if(loading) return "Carregando.."
  if(dados.stats === undefined) return null 
  if(dados !== undefined)
  return (
    <section className="sectionPokemonIndie">
      <div className="container">
        <div>
          <header className="headerPokemonIndie">
            <h1>{dados.name}</h1>
          </header>
          <article className="articlePokemonIndie">
            <div className="perspective">
              <div className="PokemonAtributes">
                <ul>
                  <li>ID</li>
                  <li>Height</li>
                  <li>Weight</li>
                  <li>Abilities</li>
                  <li>Type</li>
                </ul>
                <ul>
                  <li>#{dados.id}</li>
                  <li>{dados.height}</li>
                  <li>{dados.weight}</li>
                  <ul>
                    {dados.abilities && dados.abilities.map(i => (
                      <li key={i.slot} style={{background: `${dados.backColor.colorAbilitie}`}}>{i.ability.name}</li>
                    ))}
                  </ul>
                  <ul className="typeAttribute">
                    {dados.type && dados.type.map(i => (
                      <li key={i.slot} style={ColorsType(i)}>{i.type.name.replace(/\w/, c => c.toUpperCase())}</li>
                    ))}
                  </ul>
                </ul>
              </div>
            </div>
            <div>
              <img src={dados.sprite} alt={dados.name}/>
            </div>
            <div className="perspective">
              <div className="PokemonAtributes PokemonStat">
                <ul>
                  <li>HP</li>
                  <li>Attack</li>
                  <li>Defense</li>
                  <li>Sp.Attack</li>
                  <li>Sp.Defense</li>
                  <li>Speed</li>
                </ul>
                <ul className="statsPokemon">
                  <li><span style={{width: `${dados.stats.hp}px`, background: `${dados.backColor.colorAbilitie}` }}>{dados.stats.hp}</span></li>
                  <li><span style={{width: `${dados.stats.attack}px`, background: `${dados.backColor.colorAbilitie}` }}>{dados.stats.attack}</span></li>
                  <li><span style={{width: `${dados.stats.defense}px`, background: `${dados.backColor.colorAbilitie}` }}>{dados.stats.defense}</span></li>
                  <li><span style={{width: `${dados.stats.specialAttack}px`, background: `${dados.backColor.colorAbilitie}` }}>{dados.stats.specialAttack}</span></li>
                  <li><span style={{width: `${dados.stats.specialDefense}px`, background: `${dados.backColor.colorAbilitie}` }}>{dados.stats.specialDefense}</span></li>
                  <li><span style={{width: `${dados.stats.speed}px`, background: `${dados.backColor.colorAbilitie}` }}>{dados.stats.speed}</span></li>
                </ul>
              </div>
            </div>
          </article>
          <article className="evolutionChain">
            <div className="headerPokemonIndie">
              <h1>Evolution Chain</h1>
            </div>
            <div>
              <ul className="listaEvolution">
                {chain.map(item => (
                  <li key={item.id}><img src={item.sprite} alt=""/><h3>{item.name}</h3></li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
  else return null
}

export default PokemonIndie;
