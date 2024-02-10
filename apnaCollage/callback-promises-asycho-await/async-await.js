/* sync in js

synchronous 
synchronous means the code runs in a particular sequance of instructions in the program. Each insstuction waits for the privious instruction to complete  its exicution

asynchronous 
do to synchronous programming something impo instructions get blocked do to same previous instruction which causes a delay in the UI. Asynchronous code exicution allow to exicute next instructions immediately and does't block the flow

                                  async awit >> promise >> callback hell
 */

/* function hello () {
    console.log("hello");
}
setTimeout(hello, 3000); // timeout 2s = 2000ms

setTimeout(() => {
    console.log("hello");
}, 2000); */

/* console.log("one");
console.log("two");
setTimeout(() => {
console.log("wow hello");
}, 4000);
console.log("three");
console.log("four"); */

/* async - await 
async function always returns a promise 

async function myFunction() {.....} 

await pauses the execution of its surrounding async function until yhe promise is settled
 */

/* async function hello() {
    console.log("hello");
} */

function api() {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        console.log("weather data");
        resolve("success (200)")
       }, 2000);
    });
};

async function getWeatherData() {
    await api(); // 1st time
    await api(); // 2nd time
}
// use async - await
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            // reject("error occured");
            }, 2000);
    });
};

async function getAllData() {
    console.log("getting data 1 .....");
    await getData(1);
    console.log("getting data 2 .....");
    await getData(2);
    console.log("getting data 3 .....");
    await getData(3);
    console.log("getting data 4 .....");
    await getData(4);
    console.log("getting data 5 .....");
    await getData(5)
}

/* IIFE : immediately invoked function Expression (single time use)

IIFE is a function that is called immediately as soon as it is defined (efi) 
1. ( function() {
    // ....
}) ();

2. ( () => {
    // ....
}) (); 

3. ( async () => {
    // ....
}) (); 

*/

(async function () {
    console.log("getting data 1 .....");
    await getData(1);
    console.log("getting data 2 .....");
    await getData(2);
    console.log("getting data 3 .....");
    await getData(3);
    console.log("getting data 4 .....");
    await getData(4);
    console.log("getting data 5 .....");
    await getData(5)
}) ();

