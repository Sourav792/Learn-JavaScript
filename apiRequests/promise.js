//  promise

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:

//  pending: initial state, neither fulfilled nor rejected.
//  fulfilled: meaning that the operation was completed successfully.
//  rejected: meaning that the operation failed.

// fetch('https://something.com').then().catch().finally()

//  [] {}
// let promise1 = new Promise(function(resolve, reject) {
// do an async task
// DB calls, Cryptography(the process of hiding or coding information so that only the person a message was intended for can read it), network call
//     setTimeout(() => {
//         console.log('async task is complete');
//         resolve()
//     }, 1000);
// })
// resolve ka conection then k sath hai
// promise1.then(function() {
//     console.log('promise consumed');
// })

// new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       console.log('async task 2');
//       resolve()
//     }, 2000);
// }).then(function() {
//     console.log('async 2 resolved');
// })

// new ---  used to create an instance of an object by calling the constructor method.

// let promise3 = new Promise(function(resolve, reject) { // data conjumstion
//     setTimeout(() => {
//         resolve({user: 'sourabh', email: 'sourav@example.com'})
//     }, 1500);
// })

// promise3.then(function(user) {
//     console.log(user);
// })

// let promise4 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = false; /*true */
//     if (!error) {
//       resolve({ username: "sourabh", email: "sourav@example.com" });
//     } else {
//       reject("ERROR: something went wrong");
//     }
//   }, 1000);
// });

// promise chaning
// promise4
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then(function (username) {
//     // upper wale then se returns value ayegi
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function() {
//     console.log('the promise is either resolve or rejected');
//   })

// let promise5 = new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         let error = true; /*true */
//         if (!error) {
//           resolve({ username: "javascript", password: "23fswf34"});
//         } else {
//           reject("ERROR: js went wrong");
//         }
//       }, 1000);
//     })

// async function consumePromise5() {
//     let response = await promise5
//     console.log(response);
// }

// async function consumePromise5() {
//     try {
//         let response = await promise5
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// console.log(consumePromise5); // function refernce
// console.log(consumePromise5()); // function call

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//      console.log('error occured', error);
//     }
// }
// getAllUsers()

// let userData = fetch('https://jsonplaceholder.typicode.com/users')
// userData
// .then((response) => {
//    return response.json()
// })
// .then(function(data) {
//     console.log(data);
// })
// .catch((error) => console.log(error))
// .finally('user data')

// console.log(userData);

//  [] {}

let userData = fetch('https://api.github.com/users/Sourav792')
userData
.then((response) => {
   return response.json()
})
.then(function(data) {
    console.log(data);
})
.catch((error) => console.log(error))
.finally('user data')

// console.log(userData);