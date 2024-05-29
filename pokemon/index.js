let pokemon = {
    name: "Pikachu",
    type: "Electric",
    level: 5,
    hp: 50,
    atk: 10,
    def: 5
};

function attack() {
    // Simulate an attack reducing opponent's HP
    let opponent = getRandomOpponent();
    let damage = Math.floor(Math.random() * pokemon.atk);
    opponent.hp -= damage;
    if (opponent.hp < 0) {
        opponent.hp = 0;
    }
    updatePokemonStats();
    console.log(`${pokemon.name} attacked! ${opponent.name} took ${damage} damage.`);
}

function defend() {
    // Increase Pokémon's defense
    pokemon.def += 2;
    updatePokemonStats();
    console.log(`${pokemon.name} defended! Defense increased.`);
}

function updatePokemonStats() {
    document.getElementById("pokemon-hp").textContent = pokemon.hp;
    document.getElementById("pokemon-atk").textContent = pokemon.atk;
    document.getElementById("pokemon-def").textContent = pokemon.def;
}

function getRandomOpponent() {
    // Simulate a random opponent for demonstration purposes
    let opponents = [
        { name: "Opponent1", hp: 50 },
        { name: "Opponent2", hp: 40 },
        { name: "Opponent3", hp: 60 }
    ];
    return opponents[Math.floor(Math.random() * opponents.length)];
}