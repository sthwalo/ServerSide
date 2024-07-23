/**
 * Additional property named user has been assigned to the exports object to define a named export.
 */
/* const user = {
    name: "Hulk",
    email: "hulk@gmail.com",
    title: "Superhero",
};

exports.user = user;
 */
/**
 * A new value has been assigned to the module exports property.
 * 
 */
class User {
    constructor(name, email, title) {
        this.name = name;
        this.email = email;
        this.title = title;
    }

    // Method to log user details
    displayDetails() {
        console.log(`Name: ${this.name}, Email: ${this.email}, Title: ${this.title} `);
    }
}
module.exports = User;

const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Sthwalo',
  title: 'Software Engineer',
  database: 'your_database'
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database!');
});

// Function to fetch data from the database
async function getDataFromDatabase() {
  const query = 'SELECT * FROM employees';
  const result = await new Promise((resolve, reject) => {
    connection.query(query, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
  return result;
}

module.exports = {
  getDataFromDatabase
};

