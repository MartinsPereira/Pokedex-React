

function choseColor(item) {
  let color;
  switch(item.type.name){
    case "grass":
      color = 'linear-gradient(to right, #20ba20, #21d121)'
    break;
    case "fire":
      color = 'linear-gradient(to right, #e33719,#e86a20)'
    break;
    case "poison":
     color = 'linear-gradient(to right, #6510b5, #8217e8)'
    break;
    case "water":
      color = 'linear-gradient(to right, #2951d6, #3f6bfc)'
    break;
    case "bug":
      color = 'linear-gradient(to right, #d99e30, #e6aa3c)'
    break;
    case "dark":
      color = 'linear-gradient(to right, #1c1c1b, #3d3d3b)'
    break;
    case "dragon":
      color = 'linear-gradient(to right, #0d52db, #1463ff)'
    break;
    case "electric":
      color = 'linear-gradient(to right, #ded90b, #e3df27)'
    break;
    case "fairy":
      color = 'linear-gradient(to right, #e67cd7, #f090e2)'
    break;
    case "fighting":
      color = 'linear-gradient(to right, #6b4f16, #806021)'
    break;
    case "flying":
      color = 'linear-gradient(to right, #0b65b3, #1d85de)'
    break;
    case "ghost":
      color = 'linear-gradient(to right, #652eb3, #7339c4)'
    break;
    case "ground":
     color = 'linear-gradient(to right, #bf8a4d, #d49a57)'
    break;
    case "ice":
      color = 'linear-gradient(to right, #17bdb8, #19d1cc)'
    break;
    case "normal":
      color = 'linear-gradient(to right, #9e9e9e, #ababab)'
    break;
    case "psychic":
      color = 'linear-gradient(to right, #cf0c6a, #e60e76)'
    break;
    case "rock":
      color = 'linear-gradient(to right, #b38000, #bf8900)'
    break;
    case "steel":
      color = 'linear-gradient(to right, #7e8b8c, #92a0a1)'
    break;
    default: 
      color = 'linear-gradient(to right, #9e9e9e, #ababab)'
    break;
  }
  const styleBackPokemon = {
    background: color
  };
  return styleBackPokemon;
}


export default choseColor;
