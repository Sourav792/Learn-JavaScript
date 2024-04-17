// -------------------------- XMLHttpRequest ------------------------
// XMLHttpRequest is an API used in web development to make HTTP requests from a web page to a server and receive data in response.
//  It's commonly used to fetch data from a server asynchronously without having to reload the entire page.

// Here's an explanation along with an example:

// 1. Creating an XMLHttpRequest object:
// To use XMLHttpRequest, you first need to create an instance of it. You can do this by using the new operator:
let xhr = new XMLHttpRequest();

// 2. Setting up the request:
// After creating the object, you need to specify the details of the request, such as the HTTP method (GET, POST, etc.) and the URL of the resource you want to request.
xhr.open('GET', 'https://api.example.com/data', true);
// The first parameter is the HTTP method (e.g., GET, POST, PUT, DELETE).
// The second parameter is the URL of the resource you want to request.
// The third parameter indicates whether the request should be asynchronous (true) or not (false).

// 3. Handling response:
// You need to define a function that will be called when the response is received from the server.
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        // Request was successful
        console.log(xhr.responseText);
    } else {
        // Request failed
        console.error('Request failed with status:', xhr.status);
    }
};
// In this example, xhr.responseText contains the response data returned from the server.

// 4. Sending the request:
// After setting up the request, you need to send it to the server.
xhr.send();
// This method initiates the request.

// example:
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        console.log(xhr.responseText);
    } else {
        console.error('Request failed with status:', xhr.status);
    }
};

xhr.send();

// Example 1: Making a GET request to fetch data from a server
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        let responseData = JSON.parse(xhr.responseText);
        console.log('Data:', responseData);
    } else {
        console.error('Request failed with status:', xhr.status);
    }
};

xhr.send();

// Example 2: Sending form data using a POST request
let xhr = new XMLHttpRequest();
xhr.open('POST', 'https://api.example.com/submit-form', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

let formData = 'name=John&email=john@example.com';

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        console.log('Form submitted successfully!');
    } else {
        console.error('Form submission failed with status:', xhr.status);
    }
};

xhr.send(formData);

// Example 3: Uploading a file using a POST request with FormData
let xhr = new XMLHttpRequest();
xhr.open('POST', 'https://api.example.com/upload', true);

let form = new FormData();
formData.append('file', fileInputElement.files[0]);

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        console.log('File uploaded successfully!');
    } else {
        console.error('File upload failed with status:', xhr.status);
    }
};

xhr.send(formData);


// example:---
let url = 'https//api.example.com'
const xhr = new XMLHttpRequest() // new keyword(class --> new object)
xhr.open('GET', url); // send request
