const fs = require('fs');

fs.writeFile('newfile.txt', 'Hello, SDJIC!\n', (err) => {
    if (err) throw err;
    console.log('File created and content appended!');
});


fs.open('newfile2.txt', 'w', (err, file) => {
    if (err) throw err;
    console.log('File created!');
});
