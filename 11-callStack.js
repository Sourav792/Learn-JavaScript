// interview foundation 

// javascript execution context (2 types)
// 1. global execution context (global execution ko (this) ke ander alocate kiya jata hai)
// 2. function execution context
// mongoDB 3. eval execution context

// javascript code (2 execution phase) => 
// 1. memory creation phase
// 2. execution phase

// 1. global execution
let val1 = 10;
let val2 = 2;
function addNumber(num1, num2) {
    let total = num1 + num2;
    return total;
}
let result1 = addNumber(val1, val2);
let result2 = addNumber(5,6);

// 2. memory phase
// val1 = undefined
// val2 = undefined
// addNumber = defination (function defination)
// result1 = undefined
// result2 = undefined

// 3. execution phase
// val1 - 10
// val2 - 2
// addNumber = defination hold  
// result1 =  addNumber (new variable environment + execution thread) => memory phase(val1 - undefined , val2 - undefined , total - undfined) + execution context(num1 - 10 , num2 - 2 , total - 12) total returns ho jayega global execution context me (intna kam hone k baad executional context delete bhi hota hai)
// result1 = 15 

// result2 = addNumber(new variable environment + execution thread) => memory phase(val1 - undefined , val2 - undefined , total - undfined) + execution context(num1 - 5 , num2 - 6 , total - 11) total returns ho jayega global execution context me (intna kam hone k baad executional context delete bhi hota hai)

// LIFO = last in first out
// call stack = lifo 