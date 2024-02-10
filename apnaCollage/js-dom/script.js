//  window object -> is a global object 


// let sou = alert("hello");
// prompt("hello whats your name : ");
// window.console.log("hello world");
// console.dir(window.document);
// console.dir(window.document);
// console.log(document.body);
// console.dir(document.body);
// console.dir(document.body.childNodes[1]);
// document.body.childNodes[1].innerText = "hello";


// DOM Manipulation

// select by id
// select by class
// select by TagName
// select by QuarySelect
// document.quarySelector("myId , className ,tagName") // retuns first element
// document.quarySelectorAll("myId , className ,tagName");  // retuns a nodelist


// let headings = document.getElementsByClassName("heading");
// console.dir(headings);
// console.log(headings);

// let paras = document.getElementsByTagName("p");
// console.dir(paras);
// console.log(paras);

// dom 2

// attributes -> (elements ke ander axtra information) 
// .getAttribute(attr) // to get the attribute value
// .setAttribute(attr,value) // to et the attribute val th

// let div = document.querySelector("#box");
// console.log(div);

// let id = div.getAttribute("id")
// console.log(id);
// let p = document.querySelector("p");
// console.log(p.setAttribute("class","newClass"));

// let classVal = p.getAttribute("class")
// console.log(classVal);

// node
// node.style

// let div = document.querySelector("box") 

// insert element 
// let el = document.createElement("div")

// node.append(el) // adds at the end of the node (inside)
// node.prepend(el) // adds at the start of the node (inside)
// node.after(el)  // adds after the node (outside)
// node.before(el) // adds before the node (outside)

// delete element
// node.remove() // removes the node
let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
newBtn.style.padding = "10px 20px";
newBtn.style.backgroundColor = "yellow";

let img = document.createElement("img");
img.style.backgroundColor =  "aqua";
newBtn.style.padding = "10px 10px";
img.style.height = "100px";
img.style.width = "100px";

let newHeading = document.querySelector("h1");
newHeading.innerText = " hello world !"
newHeading.style.fontFamily = "arial";

let div = document.querySelector("#box");
div.append(newBtn);

let para = document.querySelector("p");
para.after(img);
para.before(newHeading);










