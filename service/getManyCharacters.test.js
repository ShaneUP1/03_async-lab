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

        expect(actual).toEqual([
            { name: "Morty Smmith", species: "Human", status: "Alive" },
            { name: "Beth Smith", species: "Human", status: "Alive" },
            { name: "Jerry Smith", species: "Human", status: "Alive" },
            { name: "Abadango Cluster Princess", species: "Alien", status: "Alive" }
        ]);
    });
});
