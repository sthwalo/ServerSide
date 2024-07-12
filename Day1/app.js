/**
 * Create a JS file to build a web server using the built-in http module.
 */

//Include the 'http' module to create a server
const http = require("http");
const port = 3000; //Initialize the port number

//Create an instance of the server using the createServer() method.
const server = http.createServer((req, res) => {
   /*  //Define a callback function to handle incoming requests
    res.statusCode = 200; //Set the HTTP status code to 200 (OK)
    res.setHeader("Content-Type", "text/plain"); //Set the content type to plain text

    //Send a response to the client
    res.end("Hello, Welcome to the Node.js app!\n");
 */
    //Define a callback function to handle incoming GET requests to '/users' endpoint

    if(req.url === '/users' && req.method === 'GET') {
        //Get the data from the database
        const data = getUsers(); 

        res.statusCode = 200; //Set the HTTP status code to 200 (OK)
    res.setHeader("Content-Type", "text/plain"); //Set the content type to plain text

    //Send a response to the client
    res.end("Hello, Welcome to the Node.js app!\n");

    }
});

//Function to fetch user data from the database
function getUsers(){
    //Assuming we have a database connection and a method to fetch user data
    //For now, we'll just return a hardcoded array of user objects
    return "Sthwalo, Nyoni, and Tshelela";
}

//Use server.listen() method to start listening for connections.
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);//Log a message to the console when the server is started
});
