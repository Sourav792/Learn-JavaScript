// IIFE = Immediately Invoked Function Expressions 

// IIFE => IIFE stands for Immediately Invoked Function Expression. It's a common pattern in JavaScript where a function is defined and immediately executed. This pattern is often used to create a local scope for variables and avoid polluting the global namespace

// Besic IIFE: 
// In this example, the function is defined inside parentheses, and () immediately follows the closing curly brace, which invokes the function.
(function() {
    // This function is immediately invoked
    console.log("Hello from inside the IIFE!");
  })();

// IIFE with parameters:
// Here, the IIFE accepts a parameter name, and it's passed "John" when invoking the function.
(function(name) {
    console.log("Hello, " + name);
  })("John");

// Returning values from IIFE:
// In this example, the IIFE takes two parameters a and b, adds them, and returns the result. The result is immediately stored in the result variable.
let result = (function(a, b) {
    return a + b;
  })(5, 10);
  
  console.log(result); // Output: 15
  
// IIFE for creating private variables:
// Here, an IIFE is used to create a counter object with private count variable. The functions increment, decrement, and getCount are returned as part of an object, allowing controlled access to the count variable.
var counter = (function() {
    var count = 0;
  
    return {
      increment: function() {
        count++;
      },
      decrement: function() {
        count--;
      },
      getCount: function() {
        return count;
      }
    };
  })();
  
  counter.increment();
  counter.increment();
  console.log(counter.getCount()); // Output: 2

// IIFE for avoiding variable conflicts: 
// This example demonstrates how an IIFE can be used to ensure that the $ symbol refers to the jQuery library within a limited scope, even if another library or custom code has overridden it globally. This helps avoid variable conflicts.
let jQuery = "My custom jQuery";

(function($) {
  // Inside this IIFE, $ refers to the jQuery library
  console.log($);
})(jQuery); // Passing the custom jQuery as an argument

// Outside the IIFE, $ still refers to "My custom jQuery"
console.log(jQuery);


// IIFEs are a powerful tool in JavaScript for creating encapsulated and reusable code while minimizing global scope pollution.


//  Connect to database using IIFE

(function database() {
  // named IIFE
  console.log("DB CONNECTED");
})();
// database()

(() => {
  console.log("DB CONNECTED TWO");
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("s1354@");

// 1. 
// This example demonstrates how to use the connection object exported from db.js to execute SQL queries on your database.

const dbConnection = require('./db');
// Now you can use dbConnection to query your database 
dbConnection.query('SELECT * FROM your_table', (error, results, fields) => {
  if (error) {
    console.error('Error querying database: ' + error.stack);
    return;
  }
  console.log('Query results:', results);
});

// 2. 
//In this example, we're using an IIFE to create a database connection using the mysql package. Replace 'localhost', 'your_username', 'your_password', and 'your_database' with your actual database details.

//The connection object is immediately created and connected to the database within the IIFE. The connection object is then exported so that it can be used in other parts of your application.

//You can now use this db.js file to connect to your database from other JavaScript files in your application:
const mysql = require('mysql');

const dbConnection = (function() {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database'
  });

  // Connect to the database
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database: ' + err.stack);
      return;
    }
    console.log('Connected to database as id ' + connection.threadId);
  });

  // Return the connection object
  return connection;
})();

// Export the connection object
module.exports = dbConnection;
