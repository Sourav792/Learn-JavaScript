// filter

// let number = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10];

// filter method returns value (callback function lata hai)
// let storeNumber = number.filter((num) => num > 4) // returns [5, 6, 7, 8 ,9 10]

// let storeNumber = number.filter((num) => {
//     // num > 4 // returns empty array ([])
//     return num > 4;
// })
// console.log(storeNumber);

let books = [
  { title: "book one", genre: "fiction", publish: 1981, edition: 2004 },
  { title: "book two", genre: "non-fiction", publish: 1992, edition: 2021 },
  { title: "book three", genre: "history", publish: 1941, edition: 2003 },
  { title: "book four", genre: "non-fiction", publish: 1979, edition: 1944 },
  { title: "book five", genre: "science", publish: 1921, edition: 2034 },
  { title: "book six", genre: "fiction", publish: 1941, edition: 2014 },
  { title: "book seven", genre: "history", publish: 1961, edition: 2023 },
];

// let userBooks = books.filter((book) => book.genre === "history");

// let userBooks = books.filter((book) => book.publish >= 1975);
// let userBooks = books.filter((book) => {
//   return book.publish <= 1975 && book.genre === 'fiction'
// });

// console.log(userBooks);

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let addNumber = number.map((num) => num + 10 )
// let addNumber = number.map((num) => { return num + 10} )
// console.log(addNumber);

// map chaning

// let newNumber = number
//   .map((num) => num * 10)
//   .map((num) => {
//     return num + 1;
//   })
//   .filter((num) => num >= 40);
// console.log(newNumber);

// Reduce method -- The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.


// reduce method used for ------- shoping cards ------

// const array1 = [1, 2, 3, 4];
// print the sum of an array(0 + 1 + 2 + 3 + 4)
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// Expected output: 10

let num = [1,2,3,4,5,6,7,8,9,10];

// let totalNum = num.reduce((acc, currVal) => {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//    return acc + currVal
// }, 0 ) // returns 55 (sum of an array)

// console.log(totalNum);

let shoppingCart = [
    {course: 'python', price: 1999},
    {course: 'javascript', price: 3999},
    {course: 'frontend developer', price: 499},
    {course: 'html', price: 199},
    {course: 'mern', price: 19999},
    {course: 'full stack developer', price: 14999}
];

let totalShoppingPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(totalShoppingPrice);



