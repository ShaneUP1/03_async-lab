const fs = require('fs').promises;
const { copy } = require('./copy.js');

describe('copy fn', () => {

    afterEach(() => {
        return fs.rm('./copiedFile.txt');
    });

    it('creates a copy of an existing file', () => {
        return copy('./README.md', './copiedFile.txt')
            .then(() => {
                return fs.readFile('./copiedFile.txt', 'utf-8');
            })
            .then(data => {
                expect(data).toEqual(`# 03_async-lab

There is so much to read in here!!`);
            });
    });
});
