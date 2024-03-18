"use strict"; // treat all JS code as newer version
// alert(3 +3 -2); // we are using node JS not browser
// alert("hello");

/* data type :-
number => 12 // 2 ki power 53 
bigInt => 
string => ""
boolean => true/false
null => standalone value // empty value

symbol => unique 
*/
/* 
let age = 13;
let name = "sourav"

console.log(typeof "hitesh");
console.log(typeof 123);
console.log(typeof null); // object
console.log(typeof undefined); // undefined
*/


/*
// datatypes conversion confusion

 let no = "12"; => 12
 let score = "12abc"; => NaN 
 let score = null; => 0
 let score = undefined;  => NaN
 let score = true; => 1
 let score = false; => 0
 let score = "sourav"; => NaN

console.log(typeof score);
console.log(typeof (score)); // write as a method

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN 

*/

/*
 let isLoggedIn = 1; => true
 let isLoggedIn = "";  => false
 let isLoggedIn = "sourav"; => true
 let isLoggedIn = undefined; => false;
 let isLoggedIn = null; => false

let booleanInLoggedIn = Boolean(isLoggedIn);
console.log( booleanInLoggedIn);
console.log(typeof booleanInLoggedIn);
*/
/* 
 let number = 33; => 33
 let number = true; => true
 let number = null; => null 
 let number = undefined; => undefined 

let stringNumber = String(number);
console.log(stringNumber);
console.log(typeof stringNumber);
*/

// string to number conversion confusion

// ************************* oprations***************************

let value = 4;
let negValue = -value;
// console.log(negValue);
// console.log(2**3);

let str1 = "sourav";
let str2 = " singh";
let str3 = str1 + str2;
// console.log(str3);

/* 
console.log("1" + 2); // returns 12
console.log(1 + "2"); // returns 12
console.log("1" + 2 + 2); // returns 122
console.log(1 + 2 + "2"); // returns 32
*/

/* 
// Prefix nad Postfix 
let x = 5;
let y = ++x; // Increment x first, then assign to y
console.log(x); // Outputs: 6
console.log(y); // Outputs: 6
// In this example, the ++ operator is used in its prefix form. It increments the value of x by 1 and then assigns it to y.

let a = 5;
let b = a++; // Assign a to b first, then increment a
console.log(a); // Outputs: 6
console.log(b); // Outputs: 5
// In this example, the ++ operator is used in its postfix form. It assigns the current value of x to y and then increments x by 1.
*/

let gameCounter = 100;
gameCounter++;
// ++gameCounter;
// console.log(gameCounter);

// comparison of datatypes 


// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

/* 
avoid this type of  comparison 

console.log("2" > 1);
console.log("02" > 1);

console.log(null == 0); // returns false
console.log(null > 0); // returns false
console.log(null >= 0); // returns true

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);
*/

// ===

console.log(1 === "1");


