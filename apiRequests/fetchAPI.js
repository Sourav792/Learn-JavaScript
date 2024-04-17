// ----------------------- Fetch API --------------------

// The Fetch API is a modern interface in JavaScript that allows you to make HTTP requests to servers. 
// It provides a simple and more flexible way to fetch resources asynchronously across the network.
//  Fetch API is built upon Promises, making it easier to manage asynchronous data fetching and handling.

// The Fetch API provides a powerful and flexible way to work with network requests in JavaScript, enabling developers to fetch data from servers and handle responses efficiently.

// Example: --- (get request)
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

// Example: --- (post request)
fetch('https://api.example.com/save-data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'John', age: 30 })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Example: --- (error handling)
  fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

// Example: --- (Authentication)
fetch('https://api.example.com/private-data', {
  headers: {
    'Authorization': 'Bearer ' + token
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Example: --- (custom header)
  fetch('https://api.example.com/data', {
  headers: {
    'X-Custom-Header': 'value'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Here's how fetch() works:
// 1. Making a Request: You call the fetch() function with the URL you want to fetch as its first argument.

fetch('https://api.example.com/data')
  .then(response => {
    // Handle the response
  })
  .catch(error => {
    // Handle any errors
  });

// 2. Handling the Response: fetch() returns a Promise that resolves to the Response object representing the response to the request.
//  You can then use methods like .json(), .text() on this object to extract the response data in the desired format.
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Work with the JSON data
  })
  .catch(error => {
    // Handle any errors
  });

// 3. Error Handling: You should always handle errors by chaining a .catch() method after the .then() blocks. This ensures that any errors that occur during the fetch operation are properly caught and handled.
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Work with the JSON data
  })
  .catch(error => {
    // Handle any errors
  });

// 4. Async/Await Syntax: You can also use the fetch() function with async/await syntax, which can make the code more readable, especially when dealing with multiple asynchronous operations.
async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      // Work with the data
    } catch (error) {
      // Handle any errors
    }
  }
  
