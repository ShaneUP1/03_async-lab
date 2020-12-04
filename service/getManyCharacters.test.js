const { getManyCharacters } = require('./getMany.js');
const fetch = require('node-fetch');
const mockResponse = require('./api-response.json');

jest.mock('node-fetch');

describe('getManyCharacters fn', () => {
    it('takes in an array of ids and returns the corresponding characters', async () => {
        fetch.mockResolvedValue({
            json: () => Promise.resolve(mockResponse)
        });
        const actual = await getManyCharacters([2, 4, 5, 6]);
        console.log(actual);

        expect(actual).toEqual([
            { name: 'Morty Smith', species: 'Human', status: 'Alive' },
            { name: 'Morty Smith', species: 'Human', status: 'Alive' },
            { name: 'Morty Smith', species: 'Human', status: 'Alive' },
            { name: 'Morty Smith', species: 'Human', status: 'Alive' }
        ]);
    });
});
