import style from './Pokemon.module.css'

function Pokemon({item,index}) {
  return (
    <li className={style.liPokemon}>
      <img src={item.sprite} alt=""/>
      <h3>{item.name}</h3>
    </li>
  );
}

export default Pokemon;
