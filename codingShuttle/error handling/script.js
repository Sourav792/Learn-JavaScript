// try {
//     console.log(age);
// } catch(err) {
//     console.log(err.name);
//     console.log(err.message);
// }

// const a = 10+4;

// console.log('important', a);

// try {
//   const res = prompt("are you a robot");
//   if (res === "y") {
//     throw {
//       name: 'sourav',
//     };
//   }
// } catch (error) {
//   console.log(error);
// }


// try {
//     const res = prompt("are you a robot");
//     if (res === "y") {
//       throw new Error ('robot found')
//     }
//   } catch (error) {
//     console.log(error.name, error.message);
//   }

try {
    console.log('before the error');
    const age = 14;
    console.log(age);
    console.log('after the error');
} catch(err) {
    console.log(err.name);
    console.log(err.message);
} finally {
    console.log('from finally');
}

  
const a = 10+4;

console.log('important', a);