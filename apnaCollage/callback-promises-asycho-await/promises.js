/* 
promises in js
promises is for "eventual" completion of task. it is an object in JS. it is a soluction to callback hell

let promise = new promise((resolve, reject) => {...}) 

resolve & reject are callback provided by js 
*/

/* let promise = new Promise ((resolve, reject) => {
    console.log("i am a promise");
    // resolve(123);
    // reject("some error");
}) */

/* function getData(dataId, getNextData) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            reject("error occured");
            if(getNextData) {
                getNextData();
            }
            }, 5000);
    });
}; */

/* a javascript promise object can be:
pending: the result is undefined 
resolved: the result is a value (fulfilled)
rejected: the result is an error object 

* promise has state (pending, fulfilled) and some result (result for resolve & error for reject) 

.then() & .catch()

Promise.then((result) => {......})
Promise.catch((error) => {......})
*/

/* const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("i am a promise");
    resolve("success");
    // reject("some error");
  });
};

let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled", res);
});
promise.catch((err) => {
    console.log("promise rejected", err);
}) */

/* function asycnFunction1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data 1");
      resolve("success");
      // reject("error occured");
    }, 2000);
  });
}
function asycnFunction2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data 2");
      resolve("success");
      // reject("error occured");
    }, 2000);
  });
}
console.log("fecthing data 1 ...");

let p1 = asycnFunction1(); */
 
/* p1.then((res) => {
    console.log("fulfilled", res);
    console.log("fecthing data 2 ...");
    let p2 = asycnFunction2();
    p2.then((res) => {
      console.log("fulfilled", res);
    })
}); */
/* console.log("fecthing data 1 ...");
asycnFunction1().then((res) => {
  console.log("fulfilled", res);
  console.log("fecthing data 2 ...");
  asycnFunction2().then((res) => {
    console.log("fulfilled", res);
  });
});


p1.catch((err) => {
  console.log("rejected", err);
}); */

/* let p2 = asycnFunction2();

p2.then((res) => {
    console.log("fulfilled", res);
});

p2.catch((err) => {
    console.log("rejected", err);
});  */


function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            // reject("error occured");
            }, 2000);
    });
};

// promise chain 

/* getData(1).then((res) => {
    console.log(res);
    getData(2).then(() => {
        console.log(res);
    })
}); */


getData(1).then((res) => { 
  return getData(2);;
}).then((res) => {
    return getData(3);
}).then((res) => {
    console.log(res);
})