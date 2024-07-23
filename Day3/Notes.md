# Node.js Library/Framework

**Objectives**
- Identify 3 types of modules that can be used in Node.js application.
- Identify some of the most commonly used Node.js core modules and describe how to use them.
- Describe how to use the local machine in Node.js
- Describe how to use 3rd party modules in Node.js

**Node.jsModules**
A module is a package comprising a set of functions that can be included in a Node.js application for a specific use case.
1. Core Modules
- these are built iin modules that are defined in the Node.js source they need not to be installed they run automatically the the application runs.

- *Examples*
URL - this provides classes, methods and properties that can be used for URL resolution and parsing such as getting host name portion of the URL.
Events - this basically classes, methods and properties that allows working with events i.e. emitting or handling events.
UTIL - this provides various utilities that are used for supporting the internal APIs i.e. checking value of an object.
QueryString - provides utilities for parsing and formatting URL query strings.
Assert - this module provides access to functions that can be used for assertion testing. assert.strictEqual() tests strict equality between the provided actual and expected parameters.
Process - this is used to gather information about and control the current node.js process. process.exit() can be used to exit a process.
Console - this enables simple debugging console similar to the JS console functionality provided by the web browsers.
Stream -  this module provides an API for implementing the stream interface. examples are request to an HTTP server or process.stdout property.
OS - this provides operating system related utility methods and properties such as getting host name, home directory of the current user, name of the OS etc.


2. Local Modules
- these are custom created by the developer locally in the application package and they are packaged and distributed via npm.
3. 3rd Party Modules 
- these are developed by others and can be accessed via npm website and these need to be downloaded and installed before they are used.

- *Installations*
NPM Website(npmjs.com) can be used to search for 3rd party modules and access their documentation.
Purpose - a module can be installed for the purpose of development or running the app.
Require - this function loads module after it has been installed. 

- *Benefits*
Open-Source there are hundreds of thousands of open source packages that can be installed and used in an application easily using just the CLI.
PreDefined Code
Instead of developing new code, a third party module containing predefined code is available and can be utilised to meet a particular requirement. i.e  a module can be installed for input validation.
Frameworks JS frameworks like react/angular can be used to make it easier to develop apps as they offer strong community and good documentation.

- *Examples*

Lodash => this library makes it easier to work with objects, arrays, integers(numbers), strings etc.
React => this library is used for building user interfaces by defining components.
Express => is a web framework that allows building a webserver and handling HTTP requests via routes.
Axios => is an HTTP client that allows making XMLHttpRequests from the browser and http requests from Node.js.
Webpack => can be used to bundle JavaScript modules for usage in the browser and also transform, bundle, or package other resources or assets.
Chalk => is used for styling the messages logged in the terminal e.g. console.log() statement can display a blue message with a white background 
Moment => this library can be installed to parse, validate, manipulate, and display dates fro various use cases.
Jest => is a testing framework that can be used for creating unit tests for testing JS code.

**CommonJS Modules**
1. NamedExports 
- to use named export, an additional property cna be specified on the exports object for the function/object that needs to be exported from a module i.e. exports.user = user;
2. DefaultExports 
- to use a default export, the module.exports property can be assigned to the new value such as a function or object. i.e. module.exports = User (where user is a class)
3. UsingExports
- the require() function can be added in the main file to use an exported feature. i.e. const User = require("./helper.js"); can be added to use the User class that is exported in the helper.js file .
