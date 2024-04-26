// ---------------------------------   Bind Method -------------------------------
// the bind() method is used to create a new function that, when called, has its this keyword set to a specific value, regardless of how the function is actually called. This allows you to explicitly specify the context in which a function is executed.

// The syntax for the bind() method is:
// function.bind(thisArg[, arg1[, arg2[, ...]]])

// Examples: 
const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function() {
      return `${this.firstName} ${this.lastName}`; 
    }
  };

  const name = person.fullName.bind(person);
  console.log(name()); // Output: John Doe

// In this example, bind() is used to create a new function name that will always have its this value set to the person object. Even if name is called in a different context, it will still have access to the properties of the person object.

// Example 2: Using bind with setTimeout
const person1 = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function() {
      console.log('Hello, ' + this.firstName + ' ' + this.lastName);
    }
  };
  
  setTimeout(person1.greet.bind(person), 1000);
  // After 1 second, it will log: Hello, John Doe
  
// Example 3: Passing Arguments with bind
  function greet(greeting) {
    console.log(greeting + ', ' + this.firstName);
  }
  
  const person2 = {
    firstName: 'John'
  };
  
  const greetJohn = greet.bind(person2, 'Hello');
  greetJohn(); // Output: Hello, John
  

// Example 4: Binding in Class Methods

class Counter {
    constructor() {
      this.count = 0;
      this.increment = this.increment.bind(this);
    }
  
    increment() {
      this.count++;
      console.log(this.count);
    }
  }
  
  const counter = new Counter();
  const incrementFunc = counter.increment;
  incrementFunc(); // Error: Cannot read property 'count' of undefined
  