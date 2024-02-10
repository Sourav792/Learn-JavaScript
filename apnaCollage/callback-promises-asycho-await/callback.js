/* callback 
a callback is a function passed as an argument to another function 
*/

/* function sum(a,b) {
    return a+b;
}

function mul(a,b, sumFunction) {
   sumFunction(a*b);
}

mul(3,5,sum); */

/* callback hell
callback hell: nested callbacks stacked below one another forming a pyramid structure.
(pyramid of doom) 

this style of programming becomes difficult to understand & manage */

// nesting 
/* let age = 19;
if(age>18) {
  if (age>60) {
    console.log("seniour");
  } else {
    console.log("middle");
  }
} else {
    console.log("child");
}

for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 0; j < 5; j++) {
     str = str + j ;
    }
    console.log(i, str);
} */

 /* function getData(dataId) {
    console.log("data", dataId);
} */

/* function getData(dataId) {
    setTimeout(() => {
    console.log("data", dataId);
    }, 3000);
} */

function getData(dataId, getNextData) {
    setTimeout(() => {
    console.log("data", dataId);
    if(getNextData) {
        getNextData();
    }
    }, 2000);
};


// callback hell

getData(1, () => {
    console.log("getting data2 .....");
    getData(2, () => {
    console.log("getting data3 .....");
        getData(3, () => {
    console.log("getting data4 .....");
            getData(4);
        });
    });
});