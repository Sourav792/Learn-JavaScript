// {}
// basics functions

// function decreltion
const a = 12;
const b = 15;
// const aplusb = a + b;
// console.log('the result is', aplusb);
sum(a,b);

const c = 32;
const d = 25;
// const cplusd = c + d;
// console.log('the result is', cplusd);
sum(c,d);


const e = 14;
const f = 19;
// const eplusf = e + f;
// console.log('the result is', eplusf);
sum(e,f);


// function sum (a,b) {
//     const sum = a + b;
//     console.log('the result is', sum);
// }

function sum (a,b) {
    const sum = a + b;
    console.log('the result is', sum);
    return sum;
}

const g = 17;
const h = 5;
// const eplusf = e + f;
// console.log('the result is', eplusf);
 const result = sum(g,h);
 console.log('returned result', result);


//  function expression

 const square = function (num) {
    return num*num;
}

console.log(square);
console.log(square(4));
