//  {}

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const discripter = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(discripter);

// const chai = {
//     name: 'ginger chai',
//     price: 100,
//     isAvailable: true
// }


// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

//  Object.defineProperty(chai, 'name', {
//   writable: false,
//   enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// for (let [key, value] of chai) {
// console.log(` ${key}  ${value}`);
// }

const chai = {
    name: 'ginger chai',
    price: 100,
    isAvailable: true,

    order: function() {
        console.log('code ft gaya'); 
    }
}

 Object.defineProperty(chai, 'name', {
//   writable: false,
//   enumerable: false,
     enumerable: true
})
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// for (let [key, value] of Object.entries(chai)) {
//     console.log(` ${key}  ${value}`);
//     }

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(` ${key}  ${value}`);
    }
    }

// []