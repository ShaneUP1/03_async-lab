const { getCharacter } = require('./rickAndMortyApi.js');

const getManyCharacters = ids => {
    return Promise.all(ids.map(id => getCharacter(id)));
};

module.exports = {
    getManyCharacters
}