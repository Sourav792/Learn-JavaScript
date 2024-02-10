// []
// {}


const box1 = document.getElementById('box-1');
box1.innerHTML = "hello world";

const box2 = document.getElementById('box-2');
box2.innerHTML = "<h1>wow</h1>";

const box4 = document.getElementById('box-4');
box4.style.backgroundColor = 'yellow';


// box4.classList.add('round-border');

const random = document.querySelectorAll('.box');

for( let i = 0;i<random.length ; i++ ) {
    random[i].classList.add('round-border'); 
}

box2.classList.remove('round-border');

const para = document.createElement('a');

para.innerText = 'click me!';

const container = document.getElementById('container');

container.appendChild(para)

// const mybody = document.body;
// mybody.style.backgroundColor = "yellow";

// console.log(mybody);

// const box2 = document.getElementById('box-2');

// console.log(box2);

// const divs = document.getElementsByTagName('div');

// console.log(divs);

// const classes = document.getElementsByClassName('box');

// console.log(classes);

// const randomm = document.querySelectorAll('.container .random');

// console.log(randomm);