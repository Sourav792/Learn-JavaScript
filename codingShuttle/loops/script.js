// {}

// for loop
// for (initial expression; condition; update expression) {
//    for loop body 
// }

// for (let index = 1; index < 10; index++) {
//     console.log("hi everyone", index);
// }

// while loop

// while (condition) {
//     body of loop
// }

// let step = 0;
// while (step < 5) {
//     console.log("hello", step);
//     step += 1;
// }

// do while loop

// do {
//     body of loop
// } while (condition)


// let step = 0;
// do {
//     console.log("hello", step);
//        step += 1;
// } while (step < 5 )

// break and continue

// let step = 0;
// while (step < 5) {
//     console.log("hello", step);
//     step += 1;
//     if ( step === 3) {
//         break;
//     }

// }

let step = 0;
while (step < 5) {
    step += 1;
    if ( step === 3) {
        continue;
    }
    console.log("hello", step);
}


