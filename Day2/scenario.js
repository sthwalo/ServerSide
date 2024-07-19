/**
 * A developer at a software company is building a Node.js application for which she requires certain libraries. 
 * Some libraries such as lodash and express are required for running the application. 
 * On the other hand, there are libraries like jest and webpack which are required for the purposes of development only. 
 * She needs to install these libraries while making sure that only the libraries that are required for running the application can be easily installed in the production later. 
 * Furthermore, once lodash is installed she would like to quickly evaluate the following JS code using the CL to check if the library could be used to meet specific requirement. 
 * 

*/

//Define two arrays 
const data1 = ["Thor", "Loki", "Odin", "Norse", "IronMan"];
const data2 = ["Thor", "Loki", "Norse", "Hulk", "Hawkeye"];

//Require lodash library using the require function
const _ = require('lodash');

//Use the _.uniq method to remove duplicates from the intersection array
const deduped_data1 = _.uniq(data1);

//Using lodash to find the intersection of the two arrays
const commonData = _.intersection(deduped_data1, data2);


//Log the intersection array and deduped array
console.log(commonData);