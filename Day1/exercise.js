/**
 * A developer of Global Hope Consortium is creating a Node.js app that needs to make an outbound GET request to retrieve data about a particular employee. After the data is received, it should be added to the end of the file named employees.txt. 
 */

const https = require('https');
const fs = require('fs');

const options = {
    hostname: "cosmicsolutionsemployees.free.beeceptor.com",
    path: '/' + employeeId,
    method: 'GET'
};

const request = https.request(options, (response) => {


    response.on('data',data => {
        fs.appendFile('./employees.txt', '\n',data, err => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Data appended to employees.txt');
        });
    });

    });
    response.on('error', error => {
        console.error(error);
    });

request.end();