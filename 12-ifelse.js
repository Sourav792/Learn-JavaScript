// conditonal ifElse

// comparison operators ( <, >, <=, >=, ==, ===, !=, !==,   )

// if (condition) { // condition === true
//     // code are executed but conditon === false code are not executed
// }

// let temperature = 31;
// if (temperature <= 50) {
//      console.log(`temperature less than 50 (${temperature})`);
// } else {
//     console.log(`temperature greature than 50 (${temperature})`);
// }

// let score = 200;
// if (score >= 100) {
//     let power = "fly"
//     console.log(`user power ${power}`);
// }
// console.log(`user power ${power}`); // returns error (scope error)

// var ka scope = global scope

// let balance = 1000;

// implecit scope

// if (balance > 5000) console.log(`you are rich`); // not use because code are not clean

// if (balance < 500) {
//  console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 1000) {
//     console.log("less than 1000");
// } else {
//     console.log("wallet full");
// }
const userLoggedIn = true;
const debitCart = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// if (userLoggedIn && debitCart) {
//   // && = AND operator ( & = ampersand)
//   console.log("allow to buy courses");
// } else if (loggedInFromEmail || loggedInFromGoogle) {
//   // ( || = OR operator ) [ | = pipe ]
//   console.log("user logged in");
// } else {
//   console.log("you are not loggedd in website");
// }

// switch case

// switch (key) {
//   case value:

//     break;

//   default:
//     break;
// }

// let month = "mar";
// switch (month) {
//   case "jan":
//     console.log("jan");
//     break;
//   case "feb":
//     console.log("feb");
//     break;
//   case "mar":
//     console.log("march");
//     break;
//   case "april":
//     console.log("april");
//     break;
//   case "may":
//     console.log("may");
//     break;

//   default:
//     console.log("hello world");
// }

// truthy value and falsey value

// let userEmail = "sourav@google.com"; // execute if statement
//let userEmail = ""; // execute else statement 
// if (userEmail) {
//   console.log("got user email");
// } else {
//   console.log("don't have user email");
// }

// truthy value = "0", "false", " ", [], {}, function() {}, 
// falsey value = false, 0, -0, BigInt 0n, "". null, undefined, NaN 

// let userEmail = [];
// if (userEmail.length === 0) {
//   console.log("array is empty");
// }

// let emptyObject = {};
// if (Object.keys(emptyObject).length === 0) {
//   console.log("object is empty");
// }

// false == 0 (returns true)
// false == "" (returns true)
// 0 == "" (returns true)


// Nullish Coalescing Operator (??): null, undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15
val1 = null ?? 2 ?? 4
// console.log(val1);


// Ternory operator
// condition ? true : false

let number = 100;
number >= 50 ? console.log("greater than") : console.log("less than");