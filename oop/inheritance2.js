// -------------------------- Inheritance -----------------------------
// inheritance is a mechanism that allows a new object to inherit properties and methods from an existing object. inheritance provides the idea of reusability. JavaScript uses prototype-based inheritance, where objects inherit properties and methods directly from other objects.

// Let's break down inheritance in JavaScript with examples:

// 1. Prototypal Inheritance:
// In JavaScript, each object has an internal property called [[Prototype]] (accessible via __proto__ in modern JavaScript). When you try to access a property or method on an object.

let parent = {
    greet: function() {
        console.log("Hello from parent!");
    }
};

// Child object inheriting from parent
let child = Object.create(parent);

// Child object can access parent's method
child.greet(); // Output: Hello from parent!

// 2. Constructor Functions and Prototypes:
// You can use constructor functions along with prototypes to implement inheritance in JavaScript.
// Parent constructor function
function Parent(name) {
    this.name = name;
}
// Adding a method to Parent prototype
Parent.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
};
// Child constructor function inheriting from Parent
function Child(name, age) {
    Parent.call(this, name); // Call parent constructor
    this.age = age;
}

// Inherit methods from Parent prototype
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
// Instantiate Child object
let anotherChild = new Child("Alice", 10);
// Access inherited method
anotherChild.greet(); // Output: Hello, my name is Alice

// 3. ES6 Classes:
// With ES6, JavaScript introduced a more familiar syntax for implementing inheritance using classes.
// Parent class
class Parent {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

// Child class inheriting from Parent
class Child extends Parent {
    constructor(name, age) {
        super(name); // Call parent constructor
        this.age = age;
    }
}

// Instantiate Child object
let thirdChild = new Child("Bob", 12);
// Access inherited method
thirdChild.greet(); // Output: Hello, my name is Bob
