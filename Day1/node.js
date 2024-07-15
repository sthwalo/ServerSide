/**
 * Node.js is a backend JavaScript runtime environment that allows executing JavaScript code outside of a web browser. 
 * It is designed to build scalable network applications, handle multiple requests simultaneously, and efficiently utilize asynchronous I/O operations (non-blocking processes). 
 * Node.js can be used to write server-side code using an event-driven architecture, enabling the development of various applications, including:

	•	Dynamic web page content generation
	•	Real-time applications or single-page applications
	•	API and Microservice development
 */

//Server side code in Node.js

const http = require("http");//require the built-in http module
const port = 3000; //Initialize the port number

//Create an HTTP server
const server = http.createServer((req, res) => {//Create a server that listens for incoming requests
    res.statusCode = 200; //Set the HTTP status code to 200 (OK)
    res.setHeader("Content-Type", "text/plain"); //Set the content type to plain text

    //Send a response to the client
    res.end("Hello, Welcome to the Node.js app!\n");
});

//Start the server and listen for incoming requests
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);//Log a message to the console when the server is started
})

/**
 * FEATURES:
 * •	V8 Engine 
 * •	Single thread non-blocking processing
 * •	ECMAScript (ES6+) support
 * •	NPM (Node Package Manager) 
 */

/**
 * USE CASES:
 * •	Dynamic web page content generation
 * •	Real-time applications 
 * •	Single-page applications
 * •	API development
 */

/**
 * GLOBAL OBJECTS
 * 
 * - Node has the global object instead of the window object which the browser uses.
 * - It provides many useful methods and properties which can be utilised without using require() function.
 * 
 * Console:
 * => The console object provides methods such as console.log which can be used to write to standard output of any node.js stream.
 * 
 * Process:
 * => The process object allows getting information about the current Node.js process. for example, process env property which provides environment variables.
 * 
 * Timers:
 * => methods such a setImmediate(), setInterval(), and setTimeout() can be used to execute functions after a specified delay or at regular intervals.
 * 
 * WebAssembly:
 * The WebAssembly object provides Web Assembly related functionality to work with low-level code. It is used to run code written in multiple languages on the web. 
 * 
 */