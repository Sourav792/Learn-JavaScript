// let array = [1, 2, 3, 4, 5];
// let myHeroes = ['skhtiman', 'spiderman', 'maharaja', 'saho'];

// array.push('hello'); // add 'hello' end of an array 
// array.pop(); // remove last element of an array 
// array.unshift('saho'); // add first element of an array 
// array.shift(); // remove first element of an array 
// console.log(array);
// console.log(array.length); // returns 5
// console.log(array.indexOf(1)); // returns index 0th index ( but not find value returns -1)
// console.log(array.concat(myHeroes)); // [1, 2, 3, 4, 5, ''hello', 'skhtiman', .........]

// question based metthod returns true & false

// console.log(array.includes('hi buddy')); // Determines whether an array includes a certain element, returning true or false as appropriate.
// console.log(array);

// let newArray = array.join() // Adds all the elements of an array into a string
// console.log(newArray);
// console.log(typeof newArray); // returns type of = string

// let myHeroes = ['skhtiman', 'spiderman', 'maharaja', 'saho'];
// console.log(myHeroes);

// slice and splice 

// let myarray = [1, 2, 3, 4, 5];
// console.log('a', myarray);  // returns a [1, 2, 3, 4, 5]
 
// let myn1 = myarray.slice(0, 3) // Returns a copy of a section of an array (but range is not include )

// console.log(myn1); // returns  [1, 2, 3]
// console.log('b', myarray); // returns b [1, 2, 3, 4, 5]

// let myn2 = myarray.splice(0, 3) // range is include ( but splice method manupulate the original array)

// console.log(myn2); // returns [1, 2, 3]
// console.log('c', myarray); // returns c [4, 5]

// part 2

// let marval_heroes = ['spiderman', 'superman', 'batman']

// let dc_heroes = ['saho', 'naagraj', 'skhtiman']

// marval_heroes.push(dc_heroes) // returns ['spiderman', 'superman', 'batman', ['saho', 'naagraj', 'skhtiman']]

// let all_Heroes = marval_heroes.concat(dc_heroes); // returns ['spiderman', 'superman', 'batman', 'saho', 'naagraj', 'skhtiman']
// console.log(all_Heroes);


// let all_Heroes = [...marval_heroes, ...dc_heroes]; // returns ['spiderman', 'superman', 'batman', 'saho', 'naagraj', 'skhtiman'] (best way to concat two arrays) (spread operator)
// console.log(all_Heroes);

// let myArray = [1, 2, 3, 4, [1, 2, 3], 5, 6, 7, [1, 2, 3,[1, 2, 3 ,4]]];

// console.log(myArray);

// let newArray = myArray.flat(Infinity) // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. ( flat(include depth))
// console.log(newArray);

// console.log(Array.isArray('sourav')); // returns false because 'sourav' is string not array
// console.log(Array.from('souravsingh')); // Creates an array from an iterable object. ['s', 'o', 'u', 'r','a', 'v', 's', 'i', 'n', 'g', 'h']

// console.log(Array.from({name: 'sourav'})); // intrusting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Returns a new array from a set of elements.