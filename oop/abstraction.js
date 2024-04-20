// ----------------------------- Abstraction ----------------------------
// Abstraction is a way to reduce complexity and allow efficient design and implementation in complex software systems. It (hides the technical complexity) of systems behind simpler APIs.

// Advantages of Data Abstraction

// 1. Helps the user to avoid writing low-level code.
// 2. Avoids code duplication and increases reusability.

class ImplementAbstraction {
    // method to set values of internal members
    set(x, y) {
      this.a = x;
      this.b = y;
    }
  
    display() {
      console.log(`a = ${this.a}`);
      console.log(`b = ${this.b}`);
    }
  }
  
  const obj = new ImplementAbstraction();
  obj.set(10, 20);
  obj.display();
  console.log(obj.x); // returns undefined
  // a = 10
  // b = 20

// 1. Abstract Data Types (ADTs):
// ADTs encapsulate data and operations that can be performed on that data. JavaScript doesn't have built-in support for traditional ADTs like other languages (e.g., Java)

  // Example: Stack ADT
class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
    unshift() {
        this.items.unshift();
    }
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  // Usage:
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  console.log(stack.peek()); // Output: 20
  console.log(stack.pop()); // Output: 20
  
// 2. Function Abstraction:
// Functions themselves can be considered as abstractions, hiding implementation details and exposing only their interface.

// Example: Function abstraction for adding two numbers
function add(a, b) {
    return a + b;
  }
  // Usage:
  console.log(add(5, 3)); // Output: 8
  
// 3. Object Abstraction:
// Objects encapsulate related properties and methods, hiding internal details and exposing only necessary functionalities.

// Example: Object abstraction for a Car
const Car = {
    brand: 'Toyota',
    model: 'Camry',
    start() {
      console.log("Engine started");
    },
    stop() {
      console.log("Engine stopped");
    }
  };
  // Usage:
  console.log(Car.brand); // Output: Toyota
  Car.start(); // Output: Engine started
  
// 4. Class Abstraction:
// ES6 introduced class syntax, enabling the creation of objects with encapsulated data and behaviors.

// Example: Class abstraction for a Shape
class Shape {
    constructor(color) {
      this.color = color;
    }
  
    getColor() {
      return this.color;
    }
  
    // Abstract method - needs to be implemented by subclasses
    getArea() {
      throw new Error('Method not implemented');
    }
  }
  // Usage:
  const shape = new Shape('yellow');
  console.log(shape.getColor()); // Output: red
  
// 5. Interface Abstraction:
// JavaScript doesn't have explicit support for interfaces like some other languages, but you can achieve interface-like behavior using documentation and conventions.

// Example: Interface-like abstraction for a Printable object
class Printable {
    constructor() {
      if (this.constructor === Printable) {
        throw new Error("Cannot instantiate abstract class");
      }
    }
  
    print() {
      throw new Error("Method 'print()' must be implemented");
    }
  }
  
  // Usage:
  class Document extends Printable {
    print() {
      console.log("Printing document...");
    }
  }
  
  const document = new Document();
  document.print(); // Output: Printing document...
  
//   Abstraction is crucial for writing clean, modular, and maintainable code. By abstracting away unnecessary details, developers can focus on higher-level concepts and build more scalable applications.
