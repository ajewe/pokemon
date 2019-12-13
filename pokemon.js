let pokeObj = {};

window.onload = function() {
  getPokemon();
}

const getPokemon = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/3/')
    .then(res => res.json())
    .then(pokemon => pokeObj = pokemon)
}

// eventually do math.random to pull in a random set of pokemon


const showPokemon = () => {
  console.log('clicked');

  const pokemon1 = document.getElementById('pokemon1')

  // pokeObj.sprites ((pokemon, index) => {
    console.log(pokeObj);

    const li = document.createElement('li')
    const pic = document.createElement('img')
    
    pic.src = pokeObj.sprites.front_default
    // const text = document.createTextNode(`#${index}, First Name: ${user.name.first}, Last Name: ${user.name.last} `)
    
    li.appendChild(pic)
    // li.appendChild(text)
    
    pokemon1.append(li)

  // })

}