let score = 100;

let balance = new Number(200);
// console.log(balance);
// console.log(typeof balance.toString());
// console.log( balance.toString().length);
// console.log(typeof balance);
// console.log(balance.toFixed(2)); // 200.00 add( .00)

// let number = 119.75742;
// number = 119.345;
// console.log(number.toPrecision(4)); // returns 119.3
// console.log(number.toPrecision(3)); // returns 120 & (second returns 119 becouse .3 is less then .5) 

let otherNumber = 1123.36637;
// console.log(otherNumber.toPrecision(3)); // returns 1.12e+3

let number = 100000000;
// console.log(number.toLocaleString()); // returns value as well as us standerds
number = 1000000000000000;
// console.log(number.toLocaleString('en-IN')); returns indian standerds

// +++++++++++++++++++++++++     maths     +++++++++++++++++++++++++++
// console.log(Math); // retuns object

// console.log(Math.abs(-4)); // returns 4 (because abs returns = absolute value)
// console.log(Math.abs(4));  // returns 4 (because abs returns = absolute value)
// console.log(Math.round(4.3)); // returns rounded() to the nearest integer. (4)
// console.log(Math.round(4.8)); // returns rounded() to the nearest integer. (5)
// console.log(Math.floor(4.3)); // returns 4 because floor method returns lower value
// console.log(Math.floor(2.9)); // returns 2 because floor method returns lower value
// console.log(Math.min(3,5,7,12,5,9,)); // returns 3 because min method returns min value of an array
// console.log(Math.max(3,5,7,12,5,9,)); // returns 12 because max method returns max value of an array
// console.log(Math.random()); // allmost Returns a pseudo random number between 0 and 1.
// console.log(Math.random() * 10);
// console.log((Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

let min = 100;
let max = 200;

console.log(Math.floor((Math.random() * ((max - min) + 1))) + min);
