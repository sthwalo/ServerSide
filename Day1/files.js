/**
 * The fs module allows accessing and interacting with the file system on the computer.
 */

// Import the 'fs' module
const fs = require('fs');

const content = '{"name": "Sthwalo", "age": 30, "city": "New York"}';

// Read the content from a file
fs.readFile('./user.json', 'utf8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    // Output the data returned from a file
    console.log(data);
});

// Replace the content of the file with the value of the 'content' variable using fs.writeFile() async method.
fs.writeFile('./user.json', content, (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log('Content updated successfully!');
});