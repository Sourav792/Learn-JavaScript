// javascript master =>  Learning (objects and browsers events)

// DataTypes => 2 types

// primitive

// 7 Types : string, number(2**53), boolean, null, undefined, BigInt( basically scintific value or big number), symbols

let score = 100;
let scoreValue = 100.3;
// console.log(typeof scoreValue); 


let isLoggedIn = false;
let outSideTemprture = null;
// console.log(typeof outSideTemprture); // object

let userEmail;

// symbol is unique
let id = Symbol('123');
let anotherId = Symbol('123');

// console.log(id === anotherId);

let bigNumber = 24686458597854n;
// console.log(typeof bigNumber);

// Reference (Non Primitive) 

// Arrays, objects, functions

let myrray = ["hello", "sourav", 'sourav'];

let myObject = {
    name: "sourav",
    age: 21,
    idLogin: false
}

let myFunction = () => {
    console.log("hello world");
}
// console.log(typeof myFunction);


// +++++++++++++++++  Stack and Heap memory ++++++++++++++
// Stack (Primitive) , Heap (Non Primitive)

// Stack Memory:

/* The stack is a special region of memory that stores variables created by functions.
When a function is called, a new stack frame is created on top of the stack, which contains the function's arguments, local variables, and any other function-specific data.
When the function finishes executing, its stack frame is removed from the stack, and control returns to the calling function.
Variables with primitive data types like numbers, booleans, and references to objects are stored on the stack.
Example:

function foo() {
    let x = 10; // x is stored on the stack
    console.log(x);
}
foo();


// Heap Memory:

The heap is a larger region of memory used for dynamic memory allocation.
Objects and data structures in JavaScript are allocated memory on the heap.
When an object is created, memory is allocated for it on the heap, and a reference to that memory location is stored on the stack or within another object.
JavaScript engine automatically handles memory allocation and deallocation (garbage collection) for objects on the heap.
Example:

let obj = { name: "John", age: 30 }; // Object is stored on the heap, reference to object is stored on the stack

// garbage collection 

Garbage collection in JavaScript is an automatic memory management process carried out by JavaScript engines to reclaim memory occupied by objects that are no longer needed or referenced. The goal of garbage collection is to free up memory that is no longer in use, thereby preventing memory leaks and ensuring efficient memory usage
*/

let myYoutubeName = "sourav43";

let anotherName = myYoutubeName;
anotherName = "gourav43";

console.log(myYoutubeName);
console.log(anotherName);

// Heap memory

let userOne = {
    email: "sourav@google.com",
    id: 1243321,
    LoggediN: true
}

let userTwo = userOne;
userTwo.email = "souravSingh@google.com";

console.log(userOne.email);
console.log(userTwo.email);

