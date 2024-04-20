// -------------------------- Encapsulation ----------------------------
// It's a way to bundle up pieces of code, like variables and functions, into a single package. It's helps keep things organized and safe. Encapsulation is a wrapping up data (variables) and the methods (functions) that work on the data together.

// Benefits of Encapsulation:
// 1. Data Hiding: Encapsulation hides the internal state of objects, preventing direct modification from outside.
// 2. Modularity: Objects encapsulate their data and behavior, promoting modularity and reusability.
// 3. Security: By hiding implementation details, encapsulation enhances security by preventing unauthorized access and modification of data.
// 4. Flexibility: It allows for easier maintenance and modification of code since changes to the internal implementation do not affect the external interface


// Here's a detailed explanation of encapsulation in JavaScript with examples:

class BankAccount {
    constructor(accountNumber, balance) {
        this._accountNumber = accountNumber; // Private property
        this._balance = balance;
    }

    deposit(amount) {
        this._balance += amount;
    }
    withdraw(amount) {
        if (amount <= this._balance) {
            this._balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }
    getBalance() {
        return this._balance;
    }
}
// Create an instance of BankAccount
let account = new BankAccount("123456", 1000);
account.deposit(500);
console.log(account.getBalance()); // Output: 1500
account.withdraw(200);
console.log(account.getBalance()); // Output: 1300
// Try accessing private property directly
console.log(account._accountNumber); // Output: undefined


// 1. Using Function Constructors and Prototypes:
function Car(make, model, year) {
    // Private variables
    let _make = make;
    let _model = model;
    let _year = year;

    // Public methods to access private variables
    this.getMake = function () {
        return _make;
    };
    this.getModel = function () {
        return _model;
    };
    this.getYear = function () {
        return _year;
    };
}

// Create an instance of Car
let myCar = new Car("Toyota", "Camry", 2020);
console.log(myCar.getMake());  // Output: Toyota
console.log(myCar.getModel()); // Output: Camry
console.log(myCar.getYear()); // Output: 2020
// Trying to access private variables directly
console.log(myCar._make); // Output: undefined

// using classes:
class Car {
    constructor(make, model, year) {
        // Private variables
        this._make = make;
        this._model = model;
        this._year = year;
    }
    // Public methods to access private variables
    get make() {
        return this._make;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
}

// Create an instance of Car
let Car = new Car("Toyota", "Camry", 2020);

// Accessing properties using public methods
console.log(Car.make);  // Output: Toyota
console.log(Car.model); // Output: Camry
console.log(Car.year); // Output: 2020
// Trying to access private variables directly
console.log(Car._make); // Output: undefined
