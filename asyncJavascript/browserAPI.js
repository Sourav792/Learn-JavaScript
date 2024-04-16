// ------------------------ Browser API ----------------------
// A browser-based API in JavaScript refers to a set of built-in functions and interfaces provided by web browsers to interact with various features and functionalities of the browser environment and the web platform.
//  These APIs allow developers to access browser capabilities such as manipulating the DOM, handling user input, making HTTP requests, and accessing device features like the camera or geolocation.

// examples:

// 1. DOM Manipulation API: This API allows you to manipulate the structure and content of web pages.
document.getElementById("myElement").textContent = "New Text";

// 2. Event Handling API: This API allows you to respond to user interactions and browser events.
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});

// 3. Fetch API: This API allows you to make HTTP requests to fetch resources from a server.
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));

// 4. Geolocation API: This API allows you to retrieve the geographic location of the device.
// Example: Retrieving the user's current location
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude:", position.coords.latitude);
      console.log("Longitude:", position.coords.longitude);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

// 5. Web Storage API: This API allows you to store data in the browser's local storage or session storage.
localStorage.setItem("username", "john_doe");
console.log(localStorage.getItem("username")); // Output: "john_doe"
