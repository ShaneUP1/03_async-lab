const fsPromises = require('fs').promises;

fsPromises.readFile('./README.md', 'utf-8')
    .then(data => {
        fsPromises.writeFile('./copiedFile.txt', data, 'utf-8')
    })
    .catch(err => {
        console.log(err);
    });