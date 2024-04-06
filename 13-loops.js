// +++++++++++++++++ loops ++++++++++++++++
// Loops offer a quick and easy way to do something repeatedly. There are many different kinds of loops. 1. for loop, 2. while loop, 3. do-while loop, 4. for-in loop, for-of loop, for-each loop.

for (initialization; condition; afterthought)
  statement

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

// while loop
// A while statement executes its statements as long as a specified condition evaluates to true

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

let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
console.log(n);
console.log(x);
// With each iteration, the loop increments n and adds that value to x. Therefore, x and n take on the following values:

// After the first pass: n = 1 and x = 1
// After the second pass: n = 2 and x = 3
// After the third pass: n = 3 and x = 6
// After completing the third pass, the condition n < 3 is no longer true, so the loop terminates.

// Do While loop 
// statement is always executed once before the condition is checked
let score = 10;
do {
    console.log(`score is ${score}`);
    score++
} while (score < 10);

// Breaking to a label
let a = 0;
let b = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops:", a);
  a += 1;
  b = 1;
  while (true) {
    console.log("Inner loops:", b);
    b += 1;
    if (b === 10 && a === 10) {
      break labelCancelLoops;
    } else if (b === 10) {
      break;
    }
  }
}

// continue to a label
let i = 0;
let j = 10;
checkiandj: while (i < 4) {
  console.log(i);
  i += 1;
  checkj: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 === 0) {
      continue checkj;
    }
    console.log(j, "is odd.");
  }
  console.log("i =", i);
  console.log("j =", j);
}
