// loops
// let number = 1;

// for (let index = 0; index < 10; index++) {
//   let element = index;
//   // console.log(`loops sr. ${index}`);
//   if (element == 5) {
//       console.log(`5 is the best number`);
//   }
//   console.log(element);
// }

// for (let i = 0; i < 5; i++) {
//   console.log(`outer loop value ${i}`);
//   for (let j = 0; j < 5; j++) {
//     // console.log(`inner loop value ${j} and inner loop ${i}`);
//     // console.log(i + '*' + j + " = " + i*j);
//     console.log(`${i} * ${j} = ${i * j} `);
//   }
// }

// let myArray = ["superman", "spiderman", "daberman"];
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(`superhero name : ${element}`);
// }

// break and continue

// break -- The break statement terminates the current loop

// for (let index = 1; index <= 20; index++) {
//     if (index === 5) {
//         console.log(`detected 5`);
//         break
//     }
//     console.log(`value of i is ${index}`);
// }

// continue -- The continue statement terminates execution of the statements in the current iteration

// for (let index = 1; index <= 20; index++) {
//   if (index === 5) {
//     console.log(`detected 5`);
//     continue;
//   }
//   console.log(`value of i is ${index}`);
// }

// while and do-while loop

// let index = 0;
// while (index <= 10) {
//     console.log(`value of index : ${index}`);
//     index = index + 2;
// }

// let myArray = ["superman", "spiderman", "batman"];

// let arr = 0;
// while (arr < myArray.length) {
//     console.log(`array index value of  ${myArray[arr]}`);
//     arr = arr + 1;
// }

// let score = 1;
// do {
//     console.log(`score is ${score}`);
//     score++
// } while (score <= 10);

let score = 11;
do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);