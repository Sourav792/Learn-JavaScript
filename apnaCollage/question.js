// question 1
// get user to input a number using promt ("enter a number;"). check if the number is a multiple of 5 or not.
//  number % 5 = 0

/* let number =  prompt("enter a number");
console.log(number);
if (number % 5 === 0) {
    console.log(" number is multiple of 5");
} else {
    console.log(" number is not multiple of 5");
} */

// question 2
// write a code which can give  grade to students according to their numbers ?
// 90 - 100 A
// 70 - 89 B
// 50 - 69 C
// 40 - 49 D
// 0 - 39 FAIL

// let marks = prompt("emter your marks(0-100):");
// if (marks >= 90 && marks <= 100) {
//     console.log("A");
// } else if (marks >= 70 && marks <= 89) {
//     console.log("B");
// }  else if (marks >= 50 && marks <= 59) {
//     console.log("C");
// }  else if (marks >= 40 && marks <= 49) {
//     console.log("D");
// } else if (marks >= 0 && marks <= 39) {
//     console.log("FAIL");
// } else {
//         console.log(" you are fail");
// }

// print all the even number 0 to 100.

// for (let index = 0; index <= 10; index++) {
//     console.log("index = ", index);
// }

// for (let index = 0; index <= 100; index++) {
//     if (index%2 === 0) {  // even number
//         console.log("index = ", index);
//     }

// }

// for (let index = 0; index <= 100; index++) {
//     if (index%2 !== 0) {  // odd number
//         console.log("index = ", index);
//     }

// }

// question 3
// create a game where you start with any random game number. ask the user to keep guessing the game number until the user enterscorrect value.

// let gameNum = 20;
// let userNum = prompt("enter the game number :");

// while (userNum != gameNum) {
//      userNum = prompt("you enter wrong number , guess again :");
// }

// console.log("congratulations , you enter right number ");

// question 4 // prompt the user to enter their full name . gernate a username for them based on the input. start username with @ , followed by their full name and ending with the fullname length.
// eg :- username = "souravsingh" , username should be = "@souravsingh11"

// let fullName = prompt(`enter the fullname without spaces`);
// let userName = `@${fullName}${fullName.length}`;
// console.log(userName);

// question 5
// for a given array with marks of students -> [ 24 , 76, 56, 64 , 45]
// find the avarge marks of the entire class.  // ns = 265 % 5 = 53

//let marks = [24, 76 ,56 , 64 , 45] ;
// let sum = marks[0] + marks[1] + marks[2]+ marks[3] + marks[4] ;
// console.log(sum / marks.length);
// let sum = 0 ;
// for (let val of marks) {
//     sum += val;
// }
// let avr = sum / marks.length;
// console.log(`the avrage of marks = ${avr}`);

// question 6
// for a given array with prices of 5 items -> [ 250, 645, 300, 900, 50]
// all items have an offers of 10% off on them. change the array to store final price after applying offer

// let items = [ 250 , 645 , 300 , 900 , 50];

// let i = 0;
// for (let val of items) {
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }

// for (let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }
// console.log(items);

// question 7
// create an array to store companies -> [bloomberg, microsoft, uber, google, ibm , netflix]
// a. remove the first company an array
// b. remove uber and add ola in its place
// c. add amazon at the end

// let companies = ["bloomberg","microsoft","uber","google","ibm","netflix"];
// let spliceCompany = companies.splice(2,1, "ola");
// let pushCompany = companies.push("amazon");
// let deleteCompany = companies.shift();
// console.log(companies);
// console.log(spliceCompany);
// console.log(deleteCompany);
// console.log(pushCompany);

// question 8
// create a function using the "funtion" keyword that take a string as an argument & returns the no. of vowel in the string.

// function countVowel(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowel("sourav singh"));

// question 8(a)
// create a arrow function to performs the same task.

// const countVowel = (str) => {
//     let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowel("spiro note book"));

// question 9
// for a given array of number, print the square of each value using the forEach loop

// let num = [10,20,30,40,50];
// method 1

// const square = (a) => {
//     return a*a;
// }
// num.forEach((val) => {
//     console.log(val,square(val));
// });

// method 2 
// let cubeNum = (num) => {
//    console.log(num*num*num);
// }
// num.forEach(cubeNum);

// method 3

// num.forEach((num) => {
//     console.log(num*num); // num**;
// });

// question 10
// we are given array of marks of students. filter out of the marks of student that scored 90+ .

let marks = [70.93,35,57,99,91,90,96,45,98];
const scoreValue = marks.filter((val) => {
    return val >= 90;
})
console.log(scoreValue);

// question 11
// take a number n as input form user. create an array of number from 1 to n. 
// use the reduce method to calculate sum of all the number in the array
// use the reduce method to calculate product of all the numbers in the array.

let n = prompt("enter a number : ");
let arr = [];
for(let i = 1; i<=n; i++) {
    arr[i-1] = i; // 1(0), 2(1), 3(2), 4(3)
}
// console.log(arr);
 const sumOfArray = arr.reduce((prev, curr) => {
    return prev + curr; 
})
console.log(sumOfArray);

const productOfArray = arr.reduce((prev, curr) => {
    return prev*curr; 
})
console.log(productOfArray);




