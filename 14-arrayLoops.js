// ++++++++++++++++ High Order Array Loops +++++++++++++

// for...in iterates over property names.
//  for...of iterates over property values.

// for of loop
// The for...of loop iterates over iterable objects such as arrays, strings, maps, sets, etc.
for (variable of object)
  statement

  const arr = [3, 5, 7];
  arr.foo = "hello";
  
  for (const i in arr) {
    console.log(i);
  }
  // "0" "1" "2" "foo"
  
  for (const i of arr) {
    console.log(i);
  }
  // Logs: 3 5 7
  

let myArray = [1, 2, 3, 4, 5];
// for (const iterator of myArray) {
//     console.log(`array index of: ${iterator}`);
// }

// let greetings = "hello world"
// for (const greet of greetings) {
//     console.log(greet);
// }

// let greetings = "hello world"
// for (const greet of greetings) {
//     if (greet === " ") {
//         continue;
//     }
//     console.log(greet);
// }

const obj = { foo: 1, bar: 2 };

for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}
// "foo" 1
// "bar" 2

// Maps -- The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

// let map = new Map();
// map.set("IN", "India");
// map.set("USA", "United States of Amarica");
// map.set("FR", "France");
// map.set("CA", "Canada");
// map.set("IN", "India"); // 2 entries not allowed (becouse map is unique value)

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

// array destructure
// for (const [key, value] of map) {
//     console.log(`${key} :- ${value}`);
// }

// let myObject = {
//     'game1': "NFS",
//     'game2': "FOOTBALL"
// }

// for (const [key, value] of myObject) { // objects are not iterable
//     console.log(`${key} :- ${value}`);
// }

// for of loop (objects test)
// let myObject = {
//     'js': "javascript",
//     'cpp': "c++",
//     'rb': "ruby",
//     'swift': "swift by apple"
// }

// for in loop
// The for...in loop iterates over the enumerable properties of an object.
for (variable in object)
  statement


// for (const key in myObject) {
//      console.log(`${key} shortcut of for ${myObject[key]}`);
// }

// let programingArray = ["js", "rb", "java", "c++", "python"]

// for (const key in programingArray) {
// //   console.log(key);
//      console.log(programingArray[key]);
// }

// let map = new Map();
// map.set("IN", "India");
// map.set("USA", "United States of Amarica");
// map.set("FR", "France");
// map.set("CA", "Canada");
// map.set("IN", "India");

// for (const key in map) { // maps are  not itreable (loops are not working in map)
//     console.log(key);
// }

// for of used for array
// for in used for objects

// for each loop

// let codingLanguage = ["js", "python", "c++", "c#", "java"];

// codingLanguage.forEach( function(item) { // callback function ka name nahi hota
//     console.log(item);
// } )
// codingLanguage.forEach( (item) => { // callback function ka name nahi hota
//     console.log(item);
// } )

// function printMe(item) {
//     console.log(item);
// }
// codingLanguage.forEach(printMe) //  function ka reference

// codingLanguage.forEach( (item, index, array) => {
//     console.log(item, index, array);
// } )

// let myCoding = [
//   {
//     codingLanguage: "javascript",
//     fileName: ".js",
//   },
//   {
//     codingLanguage: "python",
//     fileName: ".py",
//   },
//   {
//     codingLanguage: "java",
//     fileName: ".java",
//   },
// ];

// myCoding.forEach((item) => {
//    console.log(item.codingLanguage);
// //    console.log(item.fileName);
// })



// let codingLanguage = ["js", "python", "c++", "c#", "java"];

// forEach loop koi bhi (value) returns nahi karta
// let values = codingLanguage.forEach((item) => {
//     // console.log(item);
//     return item
// })

// console.log();
// console.log(values);

let number = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10];

// filter method returns value (callback function lata hai)
// let storeNumber = number.filter((num) => num > 4) // returns [5, 6, 7, 8 ,9 10]

// let storeNumber = number.filter((num) => {
//     // num > 4 // returns empty array ([])
//     return num > 4;
// })
// console.log(storeNumber);

let newNum = [];
number.forEach((num) => { 
    if (num > 4) { // returns [5, 6 ,7 ,8, 9, 10]
        newNum.push(num)
    }
}) 
console.log(newNum);