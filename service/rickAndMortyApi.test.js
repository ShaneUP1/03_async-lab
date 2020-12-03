const { getCharacter } = require('./rickAndMortyApi.js');

describe('getCharacter fn', () => {
    it('takes an id and returns a character with a specified format', async () => {
        const actual = await getCharacter(2);
        expect(actual).toEqual({ name: 'Morty Smith', status: 'Alive', species: 'Human' });
    });
});