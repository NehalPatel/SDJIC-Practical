const fs = require('fs');

fs.rename('newfile.txt', 'mynewfile.txt', (err) => {
    if (err) throw err;
    console.log('File renamed successfully!');
});