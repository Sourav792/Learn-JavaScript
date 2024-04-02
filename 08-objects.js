// singleton object = constructer make a singleton objects (but literals not make singleton object)
// Object.create() // cunstructer method 
let objectName = new Object() // singleton object
/* 
let mySymbol = Symbol("key1"); // $$$$$$$$$$$$$$$$$$$$ important js interview $$$$$$$$$$$$$$$
 
let jsUser = {
    name: 'saho',
    "full name": "sourav singh",
    age: 21,
    [mySymbol]: "myKey1",
    email: "sourav@google.com",
    isLoggedIn: true,
    lastLoggedDays: ['monday', 'saturday']
}

console.log(jsUser.email);
console.log(jsUser['email']); // access email using square brackets notation
console.log(jsUser["full name"]);

console.log(jsUser[mySymbol]); // $$$$$$$$$$$$$$$$$$$  important   $$$$$$$$$$$$$$$$$

jsUser.email = "sourav@amazon.com";
Object.freeze(jsUser);  // $$$$$$$$$$$$$$$$$$$  important   $$$$$$$$$$$$$$$$$

jsUser.email = "sourav@microsoft.com";

console.log(jsUser);

jsUser.greeting = function() {
    console.log('hello js user');
}

jsUser.greetingTwo = function() {
    console.log(`hello my name is ${this.name}`);
}

console.log(jsUser.greeting); // function reference  =>  returns  [Function]
console.log(jsUser.greeting()); // function call  => returns hello js user 

console.log(jsUser.greetingTwo()); // returns hello my name is saho
*/

// part 2 
/*
let tinderUser = new Object();
let tinderUser = {};
console.log(tinderUser); // returns {} empty object both cases

tinderUser.email = 'saho@google.com';
tinderUser.id = 'saho123';
tinderUser.password = '************';
tinderUser.isLoggedIn = true;

console.log(tinderUser);

let regularUser = {
    email: 'saho@google.com',
    userName: {
        fullName: {
            firstName: 'sourav',
            lastName: 'singh'
        }
    }
}

console.log(regularUser.userName);
console.log(regularUser.userName.fullName);
console.log(regularUser.userName.fullName.lastName);

let obj1 = {1: 'A', 2: 'B'};
let obj2 = {3: 'C', 4: 'D'};
// let obj2 = {1: 'C', 2: 'D'};


let obj3 = Object.assign(obj1, obj2);
let obj3 = Object.assign({}, obj1, obj2); // {} = target , obj1, obj2 = source
let obj3 = {...obj1, ...obj2}; // spreed method
console.log(obj3);

let googleUser = [
    {
        email: 'saho@google.com',
        id: '123abc'
    },
    {
        email: 'saho@google.com',
        id: '123abc'
    },
    {
        email: 'saho@google.com',
        id: '123abc'
    },
    {
        email: 'saho@google.com',
        id: '123abc'
    }
];

googleUser[1].email;

let tinderUser = {};

tinderUser.email = 'saho@google.com';
tinderUser.id = 'saho123';
tinderUser.password = '************';
tinderUser.isLoggedIn = true;

console.log(Object.keys(tinderUser)); // returns dataType is Array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // returns a ket + value pair Array

console.log(tinderUser.hasOwnProperty('email')); // returns boolean value
 */

// part 3

let course = {
    course: "web development",
    time: "5am-9pm",
    courseInstructor: "saho"
}
// course.courseInstructor

// object de-structure
// let {courseInstructor} = course
let {courseInstructor: instructor} = course

console.log(instructor);

// JSON = javascript object notation
// {
//     "name": "saho",
//     "email": "saho@google.com",
// }

// [
//     {},
//     {},
//     {}
// ]


let user = {
    username: "sourav",
    email: "sourav@google.com",
    welcomeMassage: function () {
      console.log(`${this.username}, welcome to google`);
      // console.log(this);
    },
  };
  // user.welcomeMassage()
  // user.username = "gourav"
  // user.welcomeMassage()
  
  // console.log(this); // returns a empty object
  // browser ka global object = window object