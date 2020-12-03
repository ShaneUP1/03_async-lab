const fetch = require('node-fetch');

function getCharacter(id) {
    return fetch('https://rickandmortyapi.com/api/character/')
        .then(res => {
            console.log(res.json());
        });

}

getCharacter(2);

module.exports = {
    getCharacter
};