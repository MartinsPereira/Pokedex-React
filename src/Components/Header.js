import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import svg from '../Assets/loupe.svg'
import Home from './Home';
import useFetch from './Hooks/useFetch'


function Header() {
  const { loading, error, request } = useFetch();
  const [dado, setDado] = React.useState({})
  const [input, setInput] = React.useState('')

  /*
  async function search(name){
    const {json} = await request(`https://pokeapi.co/api/v2/pokemon/${name}`,null)
    let data = {
      id: json.id,
      name: json.name, 
      sprite: json.sprites.other["official-artwork"].front_default, 
      spriteAnimated: json.sprites.versions["generation-v"]["black-white"].animated.front_default,
      type: [...json.types],
    }
    setDado(data)
  }*/

  function handleClick(event){
    if(!document.querySelector('.pesquisar > input').classList.contains('active')){
      event.preventDefault()
      document.querySelector('.pesquisar > input').classList.add('active')
    }else if(document.querySelector('.pesquisar > input').value.length === 0){
      event.preventDefault()
      document.querySelector('.pesquisar > input').classList.remove('active')
    }
  }
  
  return (
    <>
    <header className="header">
      <div className="container">
        <nav className="navHeader">
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
        <div className="pesquisar">
          <input type="text" value={input} onChange={(({target}) => setInput(target.value))}/>
          <Link to={"pesquisa/" + input}><img onClick={handleClick} src={svg} alt="Pesquisar"/></Link>
        </div>
      </div>
    </header>
    </>
  );
}

export default Header;
