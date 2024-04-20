// ---------------------------- Fetch Global Method -------------------------
// The global fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

// interview Important:---
// A fetch() promise only rejects when the request fails,
// for example, because of a badly-formed request URL or a network error.
// A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.).
//  Instead, a then() handler must check the Response.ok and/or Response.status properties.

// const myImage = document.querySelector("img");
// const myRequest = new Request("flowers.jpg");
// fetch(myRequest)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     return response.blob();
//   })
//   .then((response) => {
//     myImage.src = URL.createObjectURL(response);
//   });


// const myImage = document.querySelector("img");
// const myHeaders = new Headers();
// myHeaders.append("Accept", "image/jpeg");

// const myInit = {
//   method: "GET",
//   headers: myHeaders,
//   mode: "cors",
//   cache: "default",
// };

// const myRequest = new Request("flowers.jpg");

fetch(myRequest, myInit).then((response) => {
  // …
});

// const myRequest = new Request("flowers.jpg", myInit);

const myInit = {
  method: "GET",
  headers: {
    Accept: "image/jpeg",
  },
  mode: "cors",
  cache: "default",
};

const myRequest = new Request("flowers.jpg", myInit);


  