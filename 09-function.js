
/*
let name = function () {
  console.log("s");
  console.log("a");
  console.log("h");
  console.log("o");
};
name()
function addTwoNumber(num1, num2) { // function defination (parameter) 
  //    return num1 + num2
  return Number(num1) + Number(num2)
}
// console.log(addTwoNumber(3, "a")); // function call (argument)
let result = addTwoNumber(3,7);
console.log(result);

function userName() {
    let user =  prompt("are you coder? ans will be yes or no")
    return user
}
userName()

function loginUser(user = "saho") {
    if (user === undefined) {
        console.log("please enter a user name");
        return
    }
    return `${user} just logged in`
}
// console.log(loginUser("saho")); returns saho just logged
console.log(loginUser()); // please enter a user name (undefined)
 */

// part 2

// ... = rest & spread operator 

/* 
function calculateCartPrize(num1) {
  return num1
}
function calculateCartPrize(...num1) {
  return num1
}

function calculateCartPrize(val1, val2, ...num1) {
  return num1
}
 console.log(calculateCartPrize(2)); 
 console.log(calculateCartPrize(240, 200, 300, 5000, 2300000)); // returns [300, 5000, 230000] because val1 and val2 are defined

let user = {
  name: "sourav",
  email: "sourav@google.com"
}

function handleObject(anyObject) {
  console.log(`username is ${anyObject.username} & email is ${anyObject.email}`);
}
handleObject(user)
handleObject({
  username: "sourav",
  email: "sourav@google.com"
})

let myArray = [200, 300, 560, 1000];

function handleArray(getArray) {
  return getArray[2] // returns second value on second index in array  
}
console.log(handleArray(myArray));
console.log(handleArray([2000, 230, 54, 100, 230]));
*/

// part 3 (arrow function)

let user = {
  username: "sourav",
  email: "sourav@google.com",
  welcomeMassage: function() {
    console.log(`${this.username}, welcome to google`);
    // console.log(this);
  }
}
// user.welcomeMassage()
// user.username = "gourav"
// user.welcomeMassage()

// console.log(this); // returns a empty object
// browser ka global object = window object

// function chai() {
//   let username = "sourav"
//   // console.log(this);  returns global object
//   // console.log(this.username); // returns undefined (this keyword used in object not function)
// }
// chai()

// let chai = function() {
//   let usernmae = "sourav"
//   console.log(this.username); // returns undefined
// }
// chai()

// let chai = () => {
//   let usernmae = "sourav"
//   console.log(this.username); // returns undefined
//   console.log(this); // returns empty object
// }
// chai()

// explecit returns
// let addTwo = (num1, num2) => {
//   return num1 + num2;
// }
// curly braces me rap kiya to returns keyword likhna padega
// let addTwo = (num1, num2) => num1 + num2 ; 

// parenthesis me rap kiya to returns keyword nahi likhna padega
// implecit returns
// let addTwo = (num1, num2) => (num1 + num2) ;
let returnsObject = () => ({username: "sourav"}); // arrow function ke ander object ko returns kerne k liye object ({object}) ko parenthesis ke under rap kerna padega
// console.log(returnsObject());

// IIFE = Immediately Invoked Function Expressions (IIFE)
// (function defination) (execution) // Avoid polluting the global namespace

(function database() {
  // named IIFE
  console.log('DB CONNECTED');
}) ();
// database()

(() => {
  console.log("DB CONNECTED TWO");
}) ();


((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
}) ("s1354@");