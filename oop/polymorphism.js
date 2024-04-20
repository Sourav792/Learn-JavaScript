// -------------------------------- Polymorphism ------------------------------------
// Polymorphism is a fundamental concept in object-oriented programming (OOP) that allows objects of different types to be treated as objects of a (common superclass). It enables methods to be invoked on objects without needing to know the specific class of the object.

// There are several ways polymorphism can be achieved in JavaScript:

// Method Overriding:  This involves redefining a method in a subclass that already exists in the superclass.
class Animal {
    speak() {
      console.log('Animal makes a sound');
    }
  }
  
class Dog extends Animal {
    speak() {
      console.log('Dog barks');
    }
  }
  
  const animal = new Animal();
  const dog = new Dog();
  animal.speak(); // Output: Animal makes a sound
  dog.speak();    // Output: Dog barks
  
// Function Overloading(Simulated): While JavaScript doesn't directly support function overloading, you can achieve similar behavior by checking the number and types of arguments within the function.
function calculateArea(shape, ...args) {
    if (shape === 'square') {
      if (args.length === 1) {
        const [side] = args;
        return side * side;
      } else {
        throw new Error('Invalid number of arguments for square');
      }
    } else if (shape === 'rectangle') {
      if (args.length === 2) {
        const [length, width] = args;
        return length * width;
      } else {
        throw new Error('Invalid number of arguments for rectangle');
      }
    } else {
      throw new Error('Unsupported shape');
    }
  }
  
  console.log(calculateArea('square', 5)); // Output: 25
  console.log(calculateArea('rectangle', 4, 6)); // Output: 24
  
// Duck Typing: This is a concept where the suitability of an object for a particular operation is determined by the presence of certain properties or methods, rather than the actual type of the object.
const duck = {
    sound: 'Quack',
    makeSound() {
      console.log(this.sound);
    }
  };
const cat = {
    sound: 'mieo mieo',
    makeSound() {
      console.log(this.sound);
    }
  };
  // Function that works with any object that has a makeSound method
  function performSound(object) {
    object.makeSound();
  }
  
  performSound(duck); // Output: Quack
  performSound(dog);  // Output: mieo mieo
  
  
// Example 
// 1. Shape Hierarchy:
class Shape {
    constructor() {}
  
    area() {
      throw new Error('Shape must implement area method');
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  // Usage
  const circle = new Circle(5);
  const rectangle = new Rectangle(4, 6);
  console.log(circle.area()); // Output: 78.53981633974483
  console.log(rectangle.area()); // Output: 24
  

// 2. HTML Element Rendering:
class HTMLElement {
    constructor(tagName) {
      this.tagName = tagName;
    }
  
    render() {
      return `<${this.tagName}></${this.tagName}>`;
    }
  }
  
  class Div extends HTMLElement {
    constructor() {
      super('div');
    }
  }
  
  class Span extends HTMLElement {
    constructor() {
      super('span');
    }
  }
  
  // Usage
  const div = new Div();
  const span = new Span();
  console.log(div.render()); // Output: <div></div>
  console.log(span.render()); // Output: <span></span>
  
