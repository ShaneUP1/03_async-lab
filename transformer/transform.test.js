
const { transform } = require('./transform.js');

describe('transform fn', () => {

    it('reads a file, changes all letters to lowercase, then uppercase, then reverses it', () => {
        return transform('./README.md')
            .then(data => {
                expect(data).toEqual(`!!EREH NI DAER OT HCUM OS SI EREHT

BAL-CNYSA_30 #`);
            });

    });
});