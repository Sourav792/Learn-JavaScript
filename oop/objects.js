function multiply(num) {
    return num * 5
}

multiply.power = 2
// console.log(multiply(5));
// console.log(multiply.power);
// console.log(multiply.prototype); // returns empty object 

function createUser(userName, score) {
    // userName = userName  // create confusion
    this.userName = userName // set current context
    this.score = score
}

createUser.prototype.increment = function() {
    this.score++
}
createUser.prototype.printMe = function() {
    console.log(`score is ${this.score}`);
}
const course1 = new createUser('sourav', 25)
const course2 = new createUser('gourav', 250)
course1.printMe()

/*
new Keyword functionality :---

here's what happens behind the scenes  when the new keyword is used:

a new object is created: the new keyword initiates the creation of a new javascript object.

a prototype is linked: the newly created object gets linked to the prototype property of the cunstructor function. this means that it has access to propertise and method defined on the constructor's prototype.

the constructor is called: the constructor function is called with the specified argument and this is bound to the newly created object. if no explicit  returns value is specified from the constructor, javascript assume this, the newly created object, to be the intended returns value,

the new object is returned: after the constructor function has been called if it doesn't returns a non primitive value (object, array, function, etc.), the newly created object is returned.
*/

