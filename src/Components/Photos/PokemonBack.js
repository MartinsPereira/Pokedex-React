import backBug from '../../Assets/backBug.jpg'
import backDark from '../../Assets/backDark.jpg'
import backDragon from '../../Assets/backDragon.jpg'
import backElectric from '../../Assets/backElectric.jpg'
import backFairy from '../../Assets/backFairy.jpg'
import backFighting from '../../Assets/backFighting.jpg'
import backFire from '../../Assets/backFire.jpg'
import backFlying from '../../Assets/backFlying.jpg'
import backGhost from '../../Assets/backGhost.jpg'
import backGrass from '../../Assets/backGrass.jpg'
import backGround from '../../Assets/backGround.jpg'
import backIce from '../../Assets/backIce.jpg'
import backNormal from '../../Assets/backNormal.jpg'
import backPichic from '../../Assets/backPichic.jpg'
import backPoison from '../../Assets/backPoison.jpg'
import backRock from '../../Assets/backRock.jpg'
import backSteel from '../../Assets/backSteel.jpg'
import backWater from '../../Assets/backWater.jpg'


function choseColor(item) {
  let color;
  switch(item.type[0].type.name){
    case "grass":
      color = backGrass
    break;
    case "fire":
      color = backFire
    break;
    case "poison":
     color = backPoison
    break;
    case "water":
      color = backWater
    break;
    case "bug":
      color = backBug
    break;
    case "dark":
      color = backDark
    break;
    case "dragon":
      color = backDragon
    break;
    case "electric":
      color = backElectric
    break;
    case "fairy":
      color = backFairy
    break;
    case "fighting":
      color = backFighting
    break;
    case "flying":
      color = backFlying
    break;
    case "ghost":
      color = backGhost
    break;
    case "ground":
     color = backGround
    break;
    case "ice":
      color = backIce
    break;
    case "normal":
      color = backNormal
    break;
    case "psychic":
      color = backPichic
    break;
    case "rock":
      color = backRock
    break;
    case "steel":
      color = backSteel
    break;
    default: 
      color = backWater
    break;
  }
  const styleBackPokemon = {
    background: 'url(' + color + ') no-repeat center',
    backgroundSize: 'cover'
  };
  return styleBackPokemon;
}


export default choseColor;
