const fetch = require('node-fetch');

function getCharacter(id) {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => {
            return res.json();
        })
        .then(character => {
            return {
                name: character.name,
                status: character.status,
                species: character.species
            };
        });

}


module.exports = {
    getCharacter
};