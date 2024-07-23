/**
 * This example shows how the util module can be used to determine the type of function.
 */
const util = require('util');

async function fetchData() {
    //Code that performs a GET request
    
   return 'Data fetched';  
}
const isAsync = util.types.isAsyncFunction(fetchData);
const message = `The function fetchData is ${isAsync? 'async' :'sync'}`;
console.log(message);
