// ********* Arrow Function ****************
// An arrow function expression (also called a fat arrow to distinguish from a hypothetical -> syntax in future JavaScript) has a shorter syntax compared to function expressions and does not have its own [ this, arguments, super, or new.target ]. Arrow functions are always anonymous.

// Two factors influenced the introduction of arrow functions: shorter functions and non-binding of this.

// Shorter functions
const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
  return s.length;
});

console.log(a2); // [8, 6, 7, 9]

const a3 = a.map((s) => s.length);

console.log(a3); // [8, 6, 7, 9]

// No separate this
// Until arrow functions, every new function defined its own this value (a new object in the case of a constructor, undefined in strict mode function calls, the base object if the function is called as an "object method", etc.). This proved to be less than ideal with an object-oriented style of programming.

function Person() {
  // The Person() constructor defines `this` as itself.
  this.age = 0;

  setInterval(function growUp() {
    // In nonstrict mode, the growUp() function defines `this`
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

const person1 = new Person();

function Person() {
  // Some choose `that` instead of `self`.
  // Choose one and be consistent.
  const self = this;
  self.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `self` variable of which
    // the value is the expected object.
    self.age++;
  }, 1000);
}

function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // `this` properly refers to the person object
  }, 1000);
}

const person2 = new Person();

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

let chai = () => {
  let usernmae = "sourav";
  console.log(this.username); // returns undefined
  console.log(this); // returns empty object
};
chai();

// explecit returns
let addTwo = (num1, num2) => {
  return num1 + num2;
};
// curly braces me rap kiya to returns keyword likhna padega
// let addTwo = (num1, num2) => num1 + num2 ;

// parenthesis me rap kiya to returns keyword nahi likhna padega
// implecit returns
// let addTwo = (num1, num2) => (num1 + num2) ;
let returnsObject = () => ({ username: "sourav" }); // arrow function ke ander object ko returns kerne k liye object ({object}) ko parenthesis ke under rap kerna padega
console.log(returnsObject());
