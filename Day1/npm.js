/**
 * Node package manager (npm) is a package manager for Node.js. It consists of online registry of open source packages and a command line client.
 * 
 * Installing a package: 
 * - The command line client cna be used to install an npm package that is available in the registry.
 * 
 * Commands:
 * - the npm install <package_name> command can be used to install a specific package.
 * the npm install command can be used to install all the dependencies listed in package.json.
 * 
 * Running Scripts:
 * - The command line client can be used to run tasks by using the npm run <task_name> command. These are specified as scripts in package.json file.
 */

 // Example of installing a package using npm
 //npm install lodash
 const _ = require('lodash');

 const user1 = { name: 'Immaculate', position: "Software Engineer" };
 const user2 = { name: 'Immaculate', position: "Software Engineer" };

 const equal = _.isEqual(user1, user2);
 console.log(`The two objects are ${equal? 'equal' : 'not equal'}.`);
 