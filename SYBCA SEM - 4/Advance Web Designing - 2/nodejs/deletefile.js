const fs = require('fs');

fs.unlink('example.txt', (err) => {
    if (err) throw err;
    console.log('File deleted!');
});
