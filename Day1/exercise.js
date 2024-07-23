/* const https = require('https');
const fs = require('fs');


const options = {
    hostname: 'cosmicsolutionsemployees.free.beeceptor.com',
    path: '/' + employeeId, //const employeeId = 713;
    method: 'GET'
};

const request = https.request(options, response => {

    response.on('data', data => {
        fs.appendFile('./employees.txt', '\n' + data, err => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Employee data added to the file.');
        });
    });

    response.on('error', (error) => {
        console.error(error);
    });

});

request.end();

 */

const https = require('https');
const fs = require('fs');

let employeeId = 713; // Assuming this is the employee ID you want to fetch

if (typeof employeeId !== 'undefined') {
    const options = {
        hostname: 'cosmicsolutionsemployees.free.beeceptor.com',
        path: '/' + employeeId,
        method: 'GET'
    };

    const request = https.request(options, response => {

        response.on('data', data => {
            fs.appendFile('./employees.txt', '\n' + data, err => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('Employee data added to the file.');
            });
        });

        response.on('error', (error) => {
            console.error(error);
        });

    });

    request.end();
} else {
    console.error('employeeId is not defined.');
}