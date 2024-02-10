/* class is program-code template for creating (similar) object .
those object will have some state (variables) & some behaviour (functions) inside it .

class myClass {
 constructor() {...}
 myMethod() {....}
}

let myObject = new myClass() ; 
*/

class car{
    constructor(brand, mialage) {
        // console.log("create a new object");
        this.brandName = brand;
        this.carMialage = mialage;

    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
   /* setBrand(brand) {
        this.brandName = brand; // this = each indiviual object
    } */
}

let toyoto = new car("toyoto", 10); // constructor
console.log(toyoto);
// toyoto.setBrand("toyoto"); 
let varna = new car("verna"); // constructor
console.log(varna);
// varna.setBrand("verna");

/* constructor() method is :
. automatically invoked by new
. initializes objects 
*/


// inheritance in js 

/* inheritance is passing down properties and methods from parent class to child class
class parent {} 
class child extends parent {} 

if child and parent have same metthod, child's method will be used. [method overriding] 
*/

class parent {
    hello() {
        console.log("hello everyone");
    }
};

class child extends parent {}

let obj = new child();
// inheritancer in js 
class human {
    constructor() {
        this.speces = "homo sapiens"
    }
    eat() {
        console.log("eating");
    }
    lunch() {
        console.log("eating fast foods");
    }
    sleep() {
        console.log("slepping");
    }
    work() {
        console.log("do nothing");
    }
}

class coder extends human{
    work() {
        console.log("solve problems , build sonethings");
    }
}
class designer extends human{
    work() {
        console.log(" make sonethings");
    }
}

let sourav = new coder();

// super keyword 
/* the super keyword is used to call the constructor of its parent class to access the parent's properties and methods

super(args) // calls parent's constructor

super.parentMethod(args) 
*/
class baby {
    constructor(name) {
        console.log("enter parent constructor");
        this.speces = "homo sapiens";
        this.name = name;
    }
    eat() {
        console.log("eating");
    }
}

class programer extends baby{
    constructor(branch, name) {
        console.log("enter child constructor");
        super(name);  // to invoked parent class 
        this.branch = branch;
        console.log("exit child constructor");
    }
    work() {
        super.eat();
        console.log("solve problems , build sonethings");
    }
}

let person = new programer("computer enginner", "gourav");
