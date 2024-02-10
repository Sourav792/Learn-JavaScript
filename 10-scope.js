/* 
let a = 10;
const b = 20;
var c = 30;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  d = 40
}

console.log(a);
console.log(b);
console.log(c);


Global scope: The default scope for all code running in script mode.

Module scope: The scope for code running in module mode.

Function scope: The scope created with a function.

Block scope: The scope created with a pair of curly braces (a block).

*/
function one() {
    const username = "sourav";
    function two() {
        let website = "youtube";
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if (true) {
    let user = "sourav";
    if (true) {
        let website = "instagram";
        console.log(user);
    }
    // console.log(website);
}
// console.log(user);

// +++++++++++++++++++++++++ insteresting++++++++++++++++++++

console.log(addOne(5)); // returns 6 
 function addOne(number) {
    return number + 1;
 }
//  addOne(5)

addTwo(10) // returns error because function store in variable
 let addTwo = function(number) {
    return number + 2;
 }
//  addTwo(10);