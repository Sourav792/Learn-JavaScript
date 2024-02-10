// acche developer ->  redundancy minimise (repeation kam kerne)

// function -> block of code that performs a spacific task, can be invoked(call) whenever needed

// function defination ->  
// function functionName() {
    // block of code
// }

// function call ->
// functionName();

function sou() {
    console.log("hello world");
    console.log("hhhhhhhhhhhhhhhhhhhhhhhh");
}

sou();

// normal funtion
function sum (a,b) {
    return a + b;
}

console.log(sum(3,7));

// arrow funtion
const cube = (a) => {
    return a*a*a;
}

console.log(cube(5));

// for each loop in array
// arr.forEach(callBackFunction)
// callback funtion -> here, it is a funtion to execute for each element in the array
// a callback is a funtion  passed as an argument to another funtion 

// arr.forEach((val) => {
//     console.log(val);
// });

// let arr = [1,2,3,4,5,6,7,8,9,10];
// arr.forEach((val) => { // value at each index
//     console.log(val);
// });

// let array = ["delhi","mumbai","pune","maharastra","banguluru"];
// array.forEach((val , idx , arr) => { // value at each index
//     console.log(val.toUpperCase());
//     console.log(val.toUpperCase() , idx , arr.toString());
// });

// higher order function/ method -> to use another as a parameter & returns (callback)

// array method
// map method -> create a new array with the result of some operation. the value its callback returns are used to form new array
// arr.map(callback fnx(value, idx , array))

// let arr = [5,10,15,20,25];

// let newArr = arr.map ((val) => {
//     return val*2;
// })
// console.log(newArr);

// filter method -> creates a new array of elements that gives true for a condition/filter
// eg. all even number

// let num = [1,2,3,4,5,6,7,8,9,10];
// let newNum = num.filter((val) => {
//   return val%2===0;
// })
// console.log(newNum);

// reduce method -> performs some operations & reduces the array to a single value. it retuns that single value. (eg. sum calculate & average) 

const array = [1,2,3,4,5,6,7,8,9,10];

let initialValue = 0;
const sumOfArray = array.reduce((accumulator,currentValue) => {
      return accumulator + currentValue;
})

console.log(sumOfArray);

let large = [1,2,3,4,5,6,7,8,9,10];
const largeVlaue = large.reduce((result,curr)=>{
    return result > curr ? result :  curr;
})
console.log(largeVlaue);