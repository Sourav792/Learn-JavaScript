// []
// {}

// sycincrons code

// console.log('hello');

// setTimeout(function() {
//    console.log('hi buddy');
// },4000 )


// console.log('world');
// console.log('three');

// asycronins code

function getcheese(callback) {
    setTimeout(() => {
        const cheese = ('hahaha');
        console.log('here is a cheese', cheese);
        callback(cheese);
    }, 1000);
}

// getcheese((cheese) => {
//    console.log('got the cheese', cheese);
// })
// {}

function makeDough(cheese, callback) {
    setTimeout(() => {
        const dough = cheese + "dough";
        console.log('here is a dough', dough);
        callback(dough);
    }, 1000);
}

function bakePizza(dough, callback) {
    setTimeout(() => {
        const pizza = dough + "pizza";
        console.log('here is a pizza', pizza);
        callback(pizza);
    }, 1000);
}

getcheese((cheese) => {
    //    console.log('got the cheese', cheese);
    makeDough(cheese, (dough) => {
        // console.log('got my dough', dough);
        bakePizza(dough, (pizza) => {
            console.log('got my pizza', pizza);
        })
    })
})