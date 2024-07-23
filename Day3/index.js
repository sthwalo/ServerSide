//The exported object from helper.js is used by utilizing the require() function.
/* const helper = require('./helper.js');
const user = helper.user;

console.log(user);
 */
/**
 * The exported class is used by utilizing the require() function.
 * 
 */
const User = require('./helper.js');
const user = new User('Sthwalo Immaculate', 'sthwaloe@gmail.com', 'Software Engineer');
console.log(user.displayDetails());


// Importing local module using the require function
const getCurrentDate = require('./local.js');
const currentDate = getCurrentDate();
console.log(`The current date is : ${currentDate}`);