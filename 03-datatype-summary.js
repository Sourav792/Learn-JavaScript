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

