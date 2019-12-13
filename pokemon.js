let pokeObj = {};

window.onload = function() {
  getPokemon();
}

const getUsers = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/3/')
    .then(res => res.json())
    .then(pokemon => pokeObj = pokemon)
}

const showPokemon() = () => {

  const pokemon1 = document.getElementById
  pokeObj.map((pic, );

  const pic = document.createElement('img')
  // const button = document.createElement('button')
  
  pic.src = pokemon.fo
  const text = document.createTextNode(`#${index}, First Name: ${user.name.first}, Last Name: ${user.name.last} `)
    
  li.appendChild(pic)
  li.appendChild(text)
    
  allUsers.append(li)
  })
}
