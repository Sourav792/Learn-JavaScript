# javascript and classes
### Yes, JavaScript does have classes. However, it's important to understand that JavaScript's class syntax is somewhat different from other programming languages like Java or C++. JavaScript's classes are essentially syntactic sugar over its existing prototype-based inheritance model.

### Classes in JavaScript were introduced in ECMAScript 6 (ES6), also known as ECMAScript 2015. They provide a more familiar syntax for defining objects and dealing with inheritance. Here's an example of how classes are defined in JavaScript:


## OOP -- object oriented programming

## object 
- collection of properties and methods

## why use OOP

## parts of OOP
- object literal

- Constructor function -- returns every time new intensh
- prototypes
- classes
- instances (new, this)

## 4 pillars
abstraction -- means details hide ker lena (ex:- fetch)
encapsulation -- 
inheritance --
polymorphism --

## new Keyword functionality 
here's what happens behind the scenes  when the new keyword is used:

a new object is created: the new keyword initiates the creation of a new javascript object.

a prototype is linked: the newly created object gets linked to the prototype property of the cunstructor function. this means that it has access to propertise and method defined on the constructor's prototype.

the constructor is called: the constructor function is called with the specified argument and this is bound to the newly created object. if no explicit  returns value is specified from the constructor, javascript assume this, the newly created object, to be the intended returns value,

the new object is returned: after the constructor function has been called if it doesn't returns a non primitive value (object, array, function, etc.), the newly created object is returned.