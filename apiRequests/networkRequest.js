// ------------- Network Request ------------------------

// In JavaScript, network requests are made to fetch data from a server or send data to a server asynchronously.
//  meaning that they don't block the execution of the rest of the code while waiting for a response.

// There are several ways to make network requests in JavaScript:

// 1. XMLHttpRequest (XHR): This is the traditional way of making network requests in JavaScript. It provides a way to communicate with servers using HTTP or HTTPS.
// Here's a basic example:
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error('Request failed:', xhr.status);
    }
  }
};
xhr.send();

// 2. Fetch API: The Fetch API provides a more modern and flexible interface for making network requests.
//  It returns Promises, which makes it easier to work with asynchronous code.
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
    console.error('Fetch error:', error);
  });

// 3. Axios: Axios is a popular third-party library for making HTTP requests in JavaScript. It provides a simple and intuitive API and supports features like request and response interceptors, automatic JSON parsing, and more.
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Axios error:', error);
  });
