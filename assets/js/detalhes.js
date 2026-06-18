// assets/js/detalhes.js

document.addEventListener("DOMContentLoaded", async () => {
    const pokemonDetails = document.getElementById("pokemonDetails");

    const urlParams = new URLSearchParams(window.location.search);
    const pokemonId = urlParams.get('id');

    if (!pokemonId) {
        pokemonDetails.innerHTML = `<p>Pokémon não encontrado.</p>`;
        return;
    }

    try {
       const pokemon = await pokeApi.getPokemonByName(pokemonId);

        pokemonDetails.innerHTML = `
            
            <div class="pokedetails ${pokemon.type}">
                <a href="index.html">⬅ Voltar</a>
                <h2>${pokemon.name} #${pokemon.number}</h2>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
                <p><strong>Tipo:</strong> ${pokemon.types.join(", ")}</p>
                <p><strong>HP:</strong> ${pokemon.hp}</p>
                <p><strong>Ataque:</strong> ${pokemon.attack}</p>
                <p><strong>Defesa:</strong> ${pokemon.defense}</p>
                <p><strong>Altura:</strong> ${pokemon.height}</p>
                <p><strong>Peso:</strong> ${pokemon.weight}</p>
                <p><strong>Habilidades:</strong> ${pokemon.abilities.join(", ")}</p>
            </div>
        `;
    } catch (error) {
        console.error("Erro ao buscar detalhes do Pokémon:", error);
        pokemonDetails.innerHTML = `<p>Erro ao carregar os detalhes.</p>`;
    }
});