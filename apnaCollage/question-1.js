// question 1
// create a h2 heading element with text "hello javascript".append "from apna collage student" to this text using js.

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " from apna collage student";


// question 2
// crate 3 divs with common class name - "box" access them & add some unique text to each of them. 

// let divs = document.querySelectorAll(".box");

// console.log(divs[0].innerText = "hello");
// console.log(divs[1].innerText = "world");
// console.log(divs[2].innerText = "by sourav singh");

// question 3 
// create a new button element. give it a text "click me!", background color is red and text color is white.
// insert the button as the first element inside the body tag.

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

let body = document.body;
body.prepend(newBtn);

// question 4
// create a <p> tag in html, give it is a class & some styling
// now create a newclass in css and try to append this to the <p> element. 
// did you notice, how you overwrite the class when you add a new one ? class  solve the problem using classlist. 

let para = document.querySelector("p");
para.getAttribute("class");
// para.setAttribute("class", "newPara");
para.classList.add("newPara")
