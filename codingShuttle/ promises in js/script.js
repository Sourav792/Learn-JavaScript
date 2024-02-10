// []
// {}


// syncronus function
// const ticket = new Promise(function (resolve, reject) {
//     const isboard = true;
//     if (isboard) {
//         resolve('you are in the flight');
//     } else {
//         reject('your flight has been cancelled');
//     }
// });

// ticket.then((data) => {
//     console.log('oh wow', data);
// })
//     .catch((data) => {
//         console.log('oh no', data);
//     })
//     .finally(() => {
//         console.log('always executed');
//     }); 

// promise pizza 

function getcheese () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const cheese = 'oh';
            resolve(cheese);
        }, 2000);
    });
}

function makedough (cheese) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const dough = cheese +'ha';
            // resolve(dough);
            reject('bad cheese');
        }, 2000);
    });
}

function bakepizza (dough) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const pizza = dough +'fa';
            resolve(pizza);
        }, 2000);
    });
}

async function orderpizza () {
    try{
        const cheese = await getcheese();
        console.log('here is the cheese', cheese);

        const dough = await makedough(cheese);
        console.log('here is the dough', dough);

        const pizza = await bakepizza(dough);
        console.log('here is the pizza', pizza);

    }catch(err){
      console.log('error ocured',err);
    }
    console.log('process ended');
}

orderpizza();

// getcheese()
//      .then((cheese) => {
//         console.log('here is the cheese', cheese);
//         return makedough(cheese);
//      }).then((dough)=> {
//         console.log('here is the dough', dough);
//         return bakepizza(dough);
//      }).then((pizza) =>  {
//         console.log('here is the pizza', pizza);
//      }).catch((data) => {
//         console.log('error occured', data);
//      }).finally(() => {
//         console.log('process ended');
//      });