const fs = require('fs');

// rename file
fs.rename('temp1.txt', 'file.txt', err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('file renamed successfully');
});

// write file Async
const content = 'Content for the file';
fs.writeFile('temp2.txt', content, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('file written successfully');
});
console.log('write file async');

fs.writeFileSync('temp1.txt', 'sync write file');
console.log('write file sync');

fs.writeFile('file.txt', 'new file', { flag: 'r+' }, err => {})
