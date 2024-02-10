// {}
// []

// const words = ['h','e','l','l','o']

// console.log(words);
// // first  element
// console.log(words [0]);

// console.log(words [2]);

// console.log(words [4]);

// console.log(words [6]);

// const words = ['h','e','3','l','o',true,6]

// console.log(words);

//  console.log(words [4]);

//  console.log(words [3]);

//  console.log(words [6]);

// console.log(words.length);

// const words = ['h','e','l','l','o']


// const newwords = words;

// newwords[2] = 'forest';
// newwords[4] = 'hahaha';

// console.log(words);
// console.log(newwords);

const nums = [1,5,3,6,8,4,9,1];

console.log(nums.length);

console.log(nums.indexOf(4));

console.log(nums.includes(3));

console.log(nums.push('sourav'));

console.log(nums.pop());

console.log(nums.shift());

console.log(nums.sort());

console.log(nums);

const subarray = nums.slice(2,6);

subarray[2] = 'forest';
subarray[4] = 'hahaha';
console.log(subarray);