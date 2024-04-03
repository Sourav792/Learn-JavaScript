
// In JavaScript, the this keyword refers to the object that is currently executing the function where it's used. The value of this is determined dynamically based on how the function is called, and it can change depending on the context in which the function is invoked. Understanding this is crucial for writing object-oriented JavaScript code and dealing with various execution contexts.

// Here's a detailed explanation of this with examples:

// 1. Global Context:
// When this is used in the global scope (outside of any function), it refers to the global object, which is window in web browsers and global in Node.js.

// Examples:

console.log(this === window); // true in browsers
console.log(this === global); // true in Node.js

// 2. Function Context:
// When this is used inside a function, its value depends on how the function is invoked:

// a. Regular Function Invocation:
// When a function is called as a standalone function, this refers to the global object in non-strict mode, and it's undefined in strict mode.

function greet() {
  console.log(this.name);
}

let name = "Global Name";
greet(); // Output: "Global Name"
// b. Method Invocation:
// When a function is called as a method of an object, this refers to the object that owns the method.

const objOne = {
  name: "Object Name",
  greet: function() {
    console.log(this.name);
  }
};

objOne.greet(); // Output: "Object Name"
// c. Constructor Invocation:
// When a function is used as a constructor with the new keyword, this refers to the newly created object.

function Person(name) {
  this.name = name;
}

const person1 = new Person("John");
console.log(person1.name); // Output: "John"
// d. Indirect Invocation:
// Using methods like call(), apply(), or bind() allows us to explicitly specify the value of this.

function greet() {
  console.log(this.name);
}

const obj1 = { name: "Object 1" };
const obj2 = { name: "Object 2" };

greet.call(obj1); // Output: "Object 1"
greet.apply(obj2); // Output: "Object 2"

const greetObj1 = greet.bind(obj1);
greetObj1(); // Output: "Object 1"
// 3. Arrow Functions:
// Arrow functions do not have their own this context. They lexically bind this to the value of this in the surrounding code.

const objTwo = {
  name: "Object Name",
  greet: () => {
    console.log(this.name); // this will refer to the outer scope (window/global)
  }
};

objTwo.greet(); // Output: "Global Name"
// Understanding the dynamic nature of this in JavaScript is essential for writing robust and maintainable code, especially in object-oriented programming and event-driven architectures.


// This Keyword in Arrow Function

// In JavaScript, arrow functions have a unique behavior with respect to the this keyword. Unlike regular functions, arrow functions do not have their own this context. Instead, they inherit the this value from the surrounding lexical scope. This behavior is called lexical scoping.

// Here's a detailed explanation of how this works in arrow functions:

// Lexical Scoping:
// No Binding of this: Arrow functions do not bind their own this value. Instead, they inherit the this value from the enclosing lexical context.

// Enclosing Context: The value of this inside an arrow function is determined by the surrounding code where the arrow function is defined, not where it's executed.

// Example:
// The arrow function arrowFunc is defined within the greet method of the obj.
// Even though arrowFunc is executed separately, it inherits the this value from the obj context where it's defined.
// So, when arrowFunc is invoked, this.name refers to obj.name.
const obj = {
  name: "Object Name",
  greet: function() {
    const arrowFunc = () => {
      console.log(this.name); // Inherits 'this' from the enclosing 'obj' context
    };
    arrowFunc();
  }
};

obj.greet(); // Output: "Object Name"
