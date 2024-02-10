// for loop 

// for (let index = 0; index <= 3; index++) {
//     console.log('hello world', index);
// }


// calculate sum of 1 to 10

// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//     sum = sum + i;
// }
// console.log("sum is = ", sum);


// calculate sum of 1 to 10

// let sum = 1;
// let n = 10;
// for (let i = 1; i <= n; i++) {
//     sum = sum * i;
// }
// console.log("sum is = ", sum);


// while loop

// let i = 10;
// while (i >= 1) {
//     console.log("hihihihi", i);
//     i--;
// }

// let i = 1;
// while (i <= 10) {
//     console.log("hihihihi", i);
//     i++;
// }


// do while loop

// let i = 10;
// do {
//     console.log("hello buddy", i);
// } while (i<=5);


// for of loop (used for string )

// let str = "sourav singh (frontend developer)";
// let size = 0;
// for (const val of str) {
//     console.log(" val = ", val);
//     size++;
// }

// console.log("size is = ",size); // 33 (include spaces)


//  for in loop (used for arrays and objects)

// let sourav = {
//     name: "gourav",
//     class: "bca 1st",
//     age: 20,
//     cgpa: 5.5,
//     rollno: 121
// };

// for (let key in sourav) {
//     console.log("key = ", key , "value = ", sourav[key]);
// }

// for (let key in sourav) {
    
//     console.log("key = ", key , "value = ", sourav[key]);
// }

// strings  (backtic = ``)

// let str = "sourav singh";
// console.log(str.length);  // string length
// console.log(str[0], str[4]);  // string indices

// template literals

// let sentance = `this is a spacial string`;
// console.log(sentance);
// console.log(typeof sentance);

// let obj = {
//     title: "book",
//     price: 25
// }
// console.log("the price of this",obj.title,"is",obj.price);
// console.log(`the price of this ${obj.title} is ${obj.price}`);

// let str = `this calculate num is ${1 + 2 + 5 - 10}`;
// console.log(str);

console.log( "sourav\nsingh");
console.log( "sourav\tsingh");
let sin = `sourav\nsingh` // length = 13
console.log(sin.length);
let sou = `        hello  world         `; // immutiable = no change in original string
console.log(sou.toLowerCase());
console.log(sou.toUpperCase());
console.log(sou.trim()); // remove whitespace

let str = `abcdefghijklmnopagaqauvwxayz`;
let str2 = ` by sourav singh`
console.log(str.slice(3, 10));  // return part of string
console.log(str.concat(str2)); // joint two strings 
console.log(str + str2); // joint two strings 
console.log(str.replace("a", "hello"));
// console.log(str.replace("a", "hello"));
console.log(str.charAt(15));

