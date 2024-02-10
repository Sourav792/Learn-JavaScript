// prototype in js

/* a javascript object is an entity having state and behavier (properties and methods)
js object have a spacial property called prototype 
we can set prototype using __proto__ (set a pototype) */

const student = {
    name: "sourav",
    class: 10,
    marks: 90.5,
    printMarks: () => {
        console.log("marks = ", this.marks); // ( this.marks = student.marks )
    },
};
// console.log(student);

const fruits = ["mango", "lichi", "banana"];
fruits.push("hello");
// console.log(fruits);

let employee = {
    calcTax1 () {
        console.log("tax rate  is 10%")
    },
   /* calcTax2 : function () {
        console.log("tax rate  is 10%");
    } */
}
const arjun = {
    salery: 10000,
    calcTax1 () {
        console.log("tax rate  is 20%")
    },
}
/* if object and prototype have same method ,
object method will we used */

/* const karan = {
    salery: 10000,
}
const anuj = {
    salery: 10000,
}
const ankit = {
    salery: 10000,
}
const gourav = {
    salery: 10000,
} */

arjun.__proto__ = employee;
/* karan.__proto__ = employee;
 ankit.__proto__ = employee;
 anuj.__proto__ = employee;
 gourav.__proto__ = employee; */

 