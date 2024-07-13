// Node.js can also be used for making outbound requests to retrieve data from external web servers.
const http = require('http');

// Set up the request options
const options = {
    hostname: 'jsonplaceholder.typicode.com', // The hostname of the server to which the request will be sent
    path: '/todos/1', // The path to the resource on the server
    method: 'GET', // The HTTP method for the request
    headers: {
        'Content-Type': 'application/json' // The content type of the request
    }
};

// Create an HTTP request
const request = http.request(options, (response) => {
    // Log the status code of the response
    console.log(`Status Code: ${response.statusCode}`);

    // Handle the incoming data chunks
    response.on('data', (data) => {
        // Write the data to the standard output
        process.stdout.write(data);
    });
});

// Handle any errors during the request
request.on('error', (error) => {
    // Log the error message
    console.error(`Error: ${error.message}`);
});

// End the request
request.end();