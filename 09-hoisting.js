// +++++++++++++++++++++++        Hosting         ++++++++++++++++++++++

// "hosting" refers to the process by which variables and functions are hoisted(declared) to the top of their containing scope during the compilation(execution) phase.

// Examples: 
// 1.  Variable(var, let, const) Hosting: var, let and const are not hoisted to the top of their containing block.

console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;
var y = 10;
const name = 'gourav' 

// 2.  Function Hosting: Function Hosting: Similarly, function declarations are also hoisted to the top of their containing scope. This means that you can call a function before it's defined in the code.

hello(); // "Hello, world!"

function hello() {
    console.log("Hello, world!");
}

example(); // returns error -- Cannot access 'example' before initialization

let example = function() {
    console.log("Hello, world!");
}

// 3. Class Hosting: class are not hoisted before it is declaration. which means you cannot use a class before it is declared.
new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {}

// Import Hositing:  



