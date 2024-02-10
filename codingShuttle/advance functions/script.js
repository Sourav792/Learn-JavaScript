// {}

// function greet () {
//     console.log('hello world');
// }

// arrow functions

// greet();

// const greet = (count) => {
//     for ( let i = 0; i < count; i++)
//     console.log('hello world');
// }
// greet(4);

// const variable = () => {

// }
// variable();

// const square = (num) => num*num;

// console.log(square(5));

const square = (num) =>  {
    return num*num;
 };
 console.log(square(4));

//  callback functions


const calculate = (a,b,operation) => {
    return operation (a,b);
} 

// method 1

const add = calculate (5,9, function (num1,num2) {
    return num1 * num2;
})

console.log(add);

// method 2

const subtraction = (a,b) => a - b;

const subresult = calculate(10,5, subtraction);

console.log(subresult);

// method 3

function multiply(a,b)  {
    return a*b;
} 
const mulresult = calculate(4,6,multiply);

console.log(mulresult);