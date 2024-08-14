


async function fetchData(){
    try{
        const PokemonName = document.getElementById('pokemon').value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonName}`);
        
        if(!response.ok){
            throw new Error ("not fetiching");  
        }
        const data = await response.json();
        const pokemonSprites = data.sprites.front_default;
        const imgElement = document.getElementById("PokemonReplace");

        imgElement.src = pokemonSprites;
        imgElement.style.display = "block";
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}