const select =  document.getElementById('type');
const filterBtn =  document.getElementById('filter-btn');
const resetBtn =  document.getElementById('reset-btn');
const SearchInput =  document.getElementById('input');
let cards =  document.getElementsByClassName('cards')[0];
let categories = [];
const fetchApi = () => {
     fetch('https://pokeapi.co/api/v2/type/').then(res => res.json()).then(data => {
         select.innerHTML += data.results.map(item =>  `<option value=${item.name}>${item.name}</option>`).join(" ");
     })
 }


 fetchApi()

 
 const createPokeMon = (pokemons) => {
    const getBackgroundColor = (type) => {
        switch (type) {
            case 'grass':
                return '#4ADE80'
    
            case 'fire':
                return '#F87171'
    
            case 'water':
                return '#121212'
    
            case 'bug':
                return '#282A36'
    
            case 'normal':
                return '#9CA3AF'
    
            case 'poison':
                return '#9CA3AF'
    
            case 'electric':
                return '#FDE047'
    
            case 'ground':
                return '#A16207'
    
            case 'fairy':
                return '#A16207'
    
            case 'fighting':
                return '#F87171'
    
            case 'psychic':
                return '#F87171'
    
            case 'rock':
                return '#E4DE9E'
    
            case 'ghost':
                return '#DB2777'
    
            case 'ice':
                return '#DB2777'
    
            case 'dragon':
                return '#33343E'
    
            case 'dark':
                return '#DC2626'
    
            case 'steel':
                return '#4B5563'
    
            case 'flying':
                return '#FCB8B8'
    
            case 'unknown':
                return '#DC2626'
    
            case 'shadow':
                return '#DB2777'
        }
    }

    console.log(pokemons);
    
    const color = getBackgroundColor(pokemons.types[0].type.name);
    

    let versionName = "color"

    let html = `<div class="card" style="background-color:${color}">
                        <span class="span-text">#${pokemons.id}</span>
                        <img src=${pokemons.sprites.front_default} alt="">
                         <h3>${pokemons.name}</h3>
                         <p>${versionName}</p>
                        <p>${pokemons.abilities.map(poke => poke.ability.name).join(" ")}</p>
                        <button>${pokemons.types[0].type.name}</button>
                      </div>`;
                      return html;
                    }
                    

 

 const fetchAllPokemon = (id) => {
     return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
     .then(res => res.json())
}

const arrayOfPokemonDetails = [];

for(let i = 1; i <= 151; i++){
    const pokemonDetails   = fetchAllPokemon(i);
    arrayOfPokemonDetails.push(pokemonDetails);
}
// console.log(arrayOfPokemonDetails)

Promise.all(arrayOfPokemonDetails).then(pokemons => {
   console.log(pokemons)
    pokemons.forEach(pokemon => {
        const poke = createPokeMon(pokemon);
        cards.innerHTML += poke; 
    })
})

function filterPoke(e){
  console.log(e)
}

select.addEventListener('change'  , filterPoke);