const fetch = require('node-fetch');

async function getCharacter(id) {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const json = await res.json();
    const character = {
        name: json.name,
        status: json.status,
        species: json.species
    };
    return character;
}


module.exports = {
    getCharacter
};