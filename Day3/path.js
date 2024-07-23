/**
 * This example shows how the path module can be used to get information about a file path.
 */

const path = require('path');

// Get the file name from a path
const file = "./path/to/file.txt";

const directory = path.dirname(file);
const last = path.basename(file);


console.log(`The directory of the file path is: ${directory}`);
console.log(`The last component of the file path is : ${last}`);