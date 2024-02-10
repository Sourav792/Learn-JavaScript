/* post increment (a++) 
pre increment (++a)

post decrement (a--) 
pre decrement (--a)
*/


// arthmetic operators

/* let a = 10;
let b = 25; 
console.log("a =", a , "& b =" , b);
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a / b = ", a/b);
console.log("a * b = ", a*b);
// modulus = %
console.log("a % b = ", a%b);
// exponentiation = **
console.log("a ** a = ", a**a); */


// unary operators

/* // post increment = a++
console.log("a ++  = ", a++);
console.log("a  = ", a);
// post decrement = a--
console.log("a -- = ", a--);
console.log("a  = ", a);
// pre increment = ++a
console.log(" ++ a = ", ++a);
console.log("a = ", a);
//  pre decrement = --a
console.log(" --a  = ", --a);
console.log(" a = ", a); */


// assignment operators ( = , += , -= , %= , /= , **=)

/* let a = 10;
  a+= 1;
  console.log("a += ", a);
  a-= 1;
  console.log("a -= ", a);
  a*= 1;
  console.log("a *= ", a);
  a%= 1;
  console.log("a %= ", a);
  a/= 1;
  console.log("a /= ", a);
  a**= 2;
  console.log("a **= ", a); */
 
  
//   comparison operators ( == , === , != , !== , < , <= , > , >= ) return boolean value 

/* let a = 10 ;
let b = 12;
console.log("a == b", a==b);  // equal to 
console.log("a === b", a===b); // equal to & type of
console.log("a != b", a!=b);  // not equal to
console.log("a !== b", a!==b); // not equal to & type of
console.log("a < b", a<b);     // less then
console.log("a <= b", a<=b);  // less then & equal to
console.log("a > b", a>b);    // greater then 
console.log("a >= b", a>=b);  // greater then & equal to */

// logical operators ( logical and = && , logical or = || , logical and = !) returns true & false

/* let a = 3;
let b = 10 ; 
let con1 = a > b; // false
let con2 = a === 3; // true
console.log(" a && b = ", con1&&con2); // ( condition 1 and condition 2 ) both are true returns true another  false
let c = 10;
let d = "10" ; 
let con3 = c === d; // false
let con4 = c == d; // true
console.log(" c || d = ", con3||con4); // ( condition 1 and condition 2 ) anyone true returns true another  false ( both are false returns false)
let e = 124;
let f = 15 ; 
// false
console.log(" !(e<f) = ", !(e<f)); //  condition  true returns false & condition  false returns true */

//  conditional statement (if -else , else-if , swicth statement)

let mode = "light mode";
let color;

if ( mode === "dark mode") {
    color = " black"
} else {
    color = " white"
}

console.log(color);

let age = 54;
if ( age < 18) {
    console.log("you go to school");
}else if (age >= 50){
  console.log("you go to job");
} else {
    console.log("you go to collage");
}

// ternory operators

let rs = 10;

rs >= 50 ? console.log("you go to shopping") : console.log(" you need to collect money");
 

