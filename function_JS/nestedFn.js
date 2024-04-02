// ************** Nested functions and closures ***************

// Nested Function => Nested functions are functions defined within another function. They have access to the variables and parameters of their outer (parent) function. These inner functions can be invoked only within the scope of their containing function.

// Examples ---

// 1.
function outerFunction() {
    const outerVariable = 'I am from outer function';

    function innerFunction() {
      console.log(outerVariable); // Inner function has access to outerVariable
    }
    innerFunction(); // Invoke the inner function
  }
//   outerFunction(); // Invoke the outer function
// 2. 
function sayHello(userName) {
  function welcomeUser() {
    let welcomeMassege = `welcome ${userName}`;
    return welcomeMassege;
  }
  return welcomeUser()
}
console.log(sayHello('gourav')); // returns welcome gourav

// Name conflicts: 
// When two arguments or variables in the scopes of a closure have the same name, there is a name conflict. the innermost scope takes the highest precedence, while the outermost scope takes the lowest. This is the scope chain. The first on the chain is the innermost scope, and the last is the outermost scope.

function outside() {
  const x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

console.log(outside()(10)); // 20 (instead of 10)


//          ********** Closures  *****************
// A closure is when a function remembers the variables from its outer scope even after the outer function has finished executing. It "closes" over the variables it needs.

// Examples ---

// 1. In this example, innerFunction is returned from outerFunction and assigned to closure. Even though outerFunction has finished executing, closure still has access to outerVariable. This is possible because closure forms a closure over the outerVariable.
function outerFunction() {
    const outerVariable = 'I am from outer function';
  
    function innerFunction() {
      console.log(outerVariable); // Inner function has access to outerVariable
    }
  
    return innerFunction;
  }
  
  const closure1 = outerFunction();
  closure1(); // Even though outerFunction has finished executing, closure still has access to outerVariable
  
// 2. In this example, outerFunction takes an outerParam, and innerFunction takes an innerParam. When closure is invoked, it adds both the outerParam and innerParam together.
function outerFunction(outerParam) {
    function innerFunction(innerParam) {
      return outerParam + innerParam;
    }
  
    return innerFunction;
  }
  
  const closure2 = outerFunction(10);
  console.log(closure2(5)); // Outputs: 15
  
// 3. 
// The outer function defines a variable called "name"
const pet = function (name) {
  const getName = function () {
    // The inner function has access to the "name" variable of the outer function
    return name;
  };
  return getName; // Return the inner function, thereby exposing it to outer scopes
};
const myPet = pet("Vivie");

console.log(myPet()); // "Vivie"


// In summary, nested functions and closures in JavaScript provide a way to encapsulate logic, create private variables, and maintain data integrity by accessing variables from outer scopes. They are essential concepts in functional programming and can greatly enhance the flexibility and readability of your code.

