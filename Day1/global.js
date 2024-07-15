/**
 * The global object object stores global variables, A global variable can be set explicitly or implicitly using the var, let, or const keywords which sets the variable scope to the module (script).
 */

firstName = "Immaculate"; //a global can be set implicitly.
global.lastName = "Clementine"; //a global can be set explicitly using the global object
//When the var, let, or const keyword is used, the variable is scoped to the module (script).
var position = "Software Engineer";
const company = "Global Hope Consortium";
let salary = 80000;
console.log(`My name is ${global.firstName} ${global.lastName}`); // Trying to access a non global variables using the global object returns undefined.
console.log(`Global Position: ${global.position}`); // Trying to access a global variable
console.log(`Global Company: ${global.company}`); // Trying to access a global variable
console.log(`Global Salary: ${global.salary}`); // Trying to access a global variable
console.log("------------------------------");
//A global variable can be accessed without using the global object.(implicitly).
console.log(`Global Name: ${firstName} ${lastName}`);
 console.log(`Module Position: ${position}`); // Trying to access a module variable
 console.log(`Module Company: ${company}`); // Trying to access a module variable
 console.log(`Module Salary: ${salary}`); // Trying to access a module variable