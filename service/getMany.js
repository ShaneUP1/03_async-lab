const { getCharacter } = require('./rickAndMortyApi.js');

async function getManyCharacters(ids) {
    let characters = [];
    for (let id of ids) {
        const character = await getCharacter(id);
        characters.push(character);
    }
    return characters;
}




//     return await (ids.map(async (id) =>
//         await getCharacter(id)));
// }



module.exports = {
    getManyCharacters
};
