

function choseColor(item) {
  let color;
  switch(item.type.name){
    case "grass":
      color = '#15c269'
    break;
    case "fire":
      color = '#ff4242'
    break;
    case "poison":
     color = '#A2589A'
    break;
    case "water":
      color = '#56AEFF'
    break;
    case "bug":
      color = '#C2D21F'
    break;
    case "dark":
      color = '#7A5D4B'
    break;
    case "dragon":
      color = '#8674FF'
    break;
    case "electric":
      color = '#f2d71d'
    break;
    case "fairy":
      color = '#F9AEFF'
    break;
    case "fighting":
      color = '#A85644'
    break;
    case "flying":
      color = '#79A4FF'
    break;
    case "ghost":
      color = '#7874D5'
    break;
    case "ground":
     color = '#E6C653'
    break;
    case "ice":
      color = '#96F1FF'
    break;
    case "normal":
      color = '#BCBCAD'
    break;
    case "psychic":
      color = '#F361B0'
    break;
    case "rock":
      color = '#CDBC72'
    break;
    case "steel":
      color = '#C1BED3'
    break;
    default: 
      color = '#BCBCAD'
    break;
  }
  const colorAbilitie = color;
  return {colorAbilitie};
}


export default choseColor;
