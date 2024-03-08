// closure --- A closure gives you access to an outer function's scope from an inner function. (the lexical environment).

// lexical scoping

// function init() {
//   let name = "Mozilla";
// console.log(secret);  // error
// function displayName() {
//   let secret = "my123";
//   console.log(name);
// }

// function displayNameTwo() {
//   console.log(name);
// console.log(secret);  // error
//   }
//   displayName();
//   displayNameTwo();
// }
// init();

// closure -- returns a function or lexical function scope


// function makeFunc() {
//   const name = "sourav";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();


