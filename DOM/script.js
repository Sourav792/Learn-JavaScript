// DOM - Document Object Model
/*
let heading = document.getElementById('title');

// let heading = document.getElementById('title').getAttribute('id');

// let heading = document.getElementById('title').setAttribute('class', 'title-h1'); // override the previous class

// let heading = document.getElementById('title').setAttribute('class', 'title-h1 title-text'); 

heading.style.backgroundColor = 'crimson';
heading.style.padding = '20px 50px'

heading.textContent
heading.innerHTML
heading.innerText

// console.log(heading.textContent); // display all content
// console.log(heading.innerText); // display visible content
// console.log(heading.innerHTML); // display html element

// let para = document.querySelector('p')
// let para = document.querySelector('#paragraph')

let input = document.querySelector('input')
// input.querySelector(input['text'])
console.log(input.querySelector(input["text"]));

let myul = document.querySelector('ul')
myul.style.padding = '50px'
myul.style.backgroundColor = 'white'
let list = document.querySelectorAll('li'); 
// quarySelectorAll returns a nodelist 
// console.log(list);
// nodelist = maximum time use forEach loop
list[0].style.color = 'black'
list[1].style.color = 'aqua'
list[2].style.color = 'orange'

let tempList = document.getElementsByClassName('list-item')
// tempList.forEach((li) => {
//      console.log(li); returns error
// });
console.log(tempList); // returns html collection
// html collection convert in Array
let myTemplist = Array.from(tempList); // cunvert html collection to array using Array.from() method
myTemplist.forEach((li) => {
     li.style.color = 'black'
});
console.log(myTemplist);
*/

// create new element in DOM 

let parent =document.querySelector(".parent");
   // console.log(parent);
   // console.log(parent.children);
   // console.log(parent.children[1]);
   // console.log(parent.children[1].innerText);

   // for (let i = 0; i < parent.children.length; i++) {
   //    const element = parent.children[i].innerHTML;
   //    console.log(element);
   // }
   parent.children[2].style.color = "orange"
   // console.log(parent.firstElementChild);
   // console.log(parent.lastElementChild);
 
   let dayOne = document.querySelector('.day');
   // console.log(dayOne); // returns a first element
   // console.log(dayOne.parentElement);
   // console.log(dayOne.nextElementSibling); // returns next element
 
   let day = document.querySelectorAll('.day');
   // console.log(day); // returns a nodelist

   console.log(` NODES: ${parent.childNodes}`); // returns 