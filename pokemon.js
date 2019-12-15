let pokeObj1 = {};
let pokeObj2 = {};

window.onload = function() {
  getRandomPokemon1();
  getRandomPokemon2();
}

function getRandomInt(max) {
  console.log(Math.floor(Math.random() * Math.floor(max)));
  return Math.floor(Math.random() * Math.floor(max))
}

const getRandomPokemon1 = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomInt(807)}/`)
    .then(res => res.json())
    .then(pokemon => pokeObj1 = pokemon)
}

const getRandomPokemon2 = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomInt(807)}/`)
  .then(res => res.json())
  .then(pokemon => pokeObj2 = pokemon)
}

const getPokemon1 = () => {

  const pokemon1 = document.getElementById('pokemon1')
  const li = document.createElement('li')
  const pic = document.createElement('img')
  const text = document.createTextNode(`Name: ${pokeObj1.species.name}, Type: ${pokeObj1.types[0].type.name}, Weight: ${pokeObj1.weight}`)
  
  pic.src = pokeObj1.sprites.front_default
  
  li.appendChild(pic)

  pokemon1.append(li);
  pokemon1.append(text);
}


const getPokemon2 = () => {

  const pokemon1 = document.getElementById('pokemon1')
  const li = document.createElement('li')
  const pic = document.createElement('img')
  const text = document.createTextNode(`Name: ${pokeObj1.species.name}, Type: ${pokeObj1.types[0].type.name}, Weight: ${pokeObj1.weight}`)
  
  pic.src = pokeObj1.sprites.front_default
  
  li.appendChild(pic)

  pokemon1.append(li);
  pokemon1.append(text);
}