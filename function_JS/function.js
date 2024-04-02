
let name = function () {
  console.log("s");
  console.log("o");
  console.log("u");
  console.log("r");
  console.log("a");
  console.log("b");
  console.log("h");
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
// userName()

function loginUser(user = "saho") {
    if (user === undefined) {
        console.log("please enter a user name");
        return
    }
    return `${user} just logged in`
}
// console.log(loginUser("saho")); returns saho just logged
console.log(loginUser()); // please enter a user name (undefined)

function myFunc(theObject) {
  theObject.make = "Toyota";
}

const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(mycar.make); // "Honda"
myFunc(mycar);
console.log(mycar.make); // "Toyota"


// ... = rest & spread operator


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


function map(func, arr) {
  const result = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    result[i] = func(arr[i]);
  }
  return result;
}

let arr = [1, 3, 5, 7, 9]; 
function func(num) {
  return num * num * num;
}
console.log(map(func,arr));

// const factorial = function fac(num) {
//     return num < 2 ? 1 : num * fac(num - 1);
  
//     function map(f, a) {
//     const result = new Array(a.length);
//     for (let i = 0; i < a.length; i++) {
//       result[i] = f(a[i]);
//     }
//     return result;
//   }
  
//   const cube = function (x) {
//     return x * x * x;
//   };
  
//   const numbers = [0, 1, 2, 5, 10];
//   console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]
//   };
  
//   console.log(factorial(3)); // 6

// Using the arguments object Function
// The arguments of a function are maintained in an array-like object. Within a function, you can address the arguments passed to it as follows:

function myConcat(separator) {
  let result = ""; // initialize list
  // iterate through arguments
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}

// console.log(myConcat(", ", "red", "orange", "blue"));
// "red, orange, blue, "

// console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// "elephant; giraffe; lion; cheetah; "

// console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
// "sage. basil. oregano. pepper. parsley. "

// Function parameters
// There are two special kinds of parameter syntax: default parameters and rest parameters.

// Default parameters => In JavaScript, parameters of functions default to undefined. However, in some situations it might be useful to set a different default value

function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

console.log(multiply(5)); // 5

// With default parameters, a manual check in the function body is no longer necessary. You can put 1 as the default value for b in the function head:

function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5

// Rest parameters
// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.  
// In the following example, the function multiply uses rest parameters to collect arguments from the second one to the end. The function then multiplies these by the first argument.

function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const array = multiply(2, 1, 2, 3);
console.log(array); // [2, 4, 6]

