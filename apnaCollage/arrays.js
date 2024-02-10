// array = collection of data ( arrays is mutable (change yes))

// let marks = [98, 98 , 989, 377 , 984];
// console.log(marks);
// console.log(marks.length);  // property
// console.log(typeof marks);
// console.log(marks[2],marks[1], marks[4]); // array indices
// marks[2] = 222;
// console.log(marks);

// looping over the array 
// loop --- iterable ( strings , arrays , objects)

// let rs = [12 ,34, 64, 75, 86, 93, 56, 354 ,867 ,34 ,754, 9, 7, 23 ,564 ,76 ,75 ,8 ,767 ,96,9 ,4 ,7, ];
// console.log(rs.length);
// for (let i = 0; i < rs.length; i++) {
//     console.log(rs[i]);
// }

// for of loop
// let cities = [ "delhi","rohtak","india","usa","dehradun","haryana","punjab","canada","south coria","khidwali","katwara","malasyia","rohtak","keral","tamilnadu","punjab","kiloi","delhi","dubey","canada","us","australia","kathura","ganure","sonipat","panipat"];

// for (const city of cities) {
//     console.log(city.toUpperCase());
// }

// array method 

// let cities = ["hadrabad","haryana","bangluru","delhi"]
// let marks = [ 23 ,65, 45 ,87, 34]; 
// let foodItem = ["pizza","burger","juice","choumin","fingerchipps","banana"];
// foodItem.push("apple"); // add to end
// foodItem.push("tamato", "paner", "litchi");
//  let deletedValue = foodItem.pop() // delete to end
// console.log(foodItem , foodItem.length);
// console.log(deletedValue);
// console.log(foodItem.toString()); //  convert  to string

// let deleteStartValue = foodItem.shift(); // delete for start & returns 
// foodItem.unshift("hello"); // add to start 
// console.log(deleteStartValue);
// console.log(foodItem);

// let newArray = foodItem.concat(marks , cities);  // concat = joint the multiple array & return result
// console.log(newArray);

let foodItem = ["pizza","burger","juice","choumin","fingerchipps","banana"];
 let sliceVal = foodItem.slice(2,4); // return a piece of an array
 let spliceVal = foodItem.splice(1,2,"hi","sourav"); // replace an original array (add, remove, replace)
 let deleteSplice = foodItem.splice(4);
 console.log(deleteSplice);
// console.log(foodItem);
// console.log(sliceVal);
// console.log(spliceVal);

