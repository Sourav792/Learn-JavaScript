// {}  []

let name = "sourav";
let marks = 50;

// console.log(name + marks + " value");  => not use for this way

// console.log(`my name is ${name} and marks is ${marks} `); => best way to defined string
// (``) => name Backticks
const gameName = new String('Pubg-battle-ground');

// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('b'));

let newStr = gameName.substring(0, 6);
// console.log(newStr);

let anotherStr = gameName.slice(-17, 10);
// console.log(anotherStr);

let newAnotherStr = "   sourav    ";
// console.log(newAnotherStr);
// console.log(newAnotherStr.trim()); // => remove extra space

let url = "https://souravsingh%20webdeveloper";
// console.log(url.replace('%20', '__'));
// console.log(url.includes('sourav'));
// console.log(url.includes('hello'));

console.log(gameName.split('-'));
