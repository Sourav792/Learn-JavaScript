// event  -> the change in the state of an object as an event

// node.event = () => {
    // handle here
// }

let btn = document.querySelector("#btn-1");
btn.onclick = () => {
    console.log("btn was pressed");
} 

let btn2 = document.querySelector("#btn-2");
// btn2.ondblclick = () => {
//     console.log("btn was 2 times pressed");
// }  

// let div = document.querySelector("#div");
// div.onmouseover = () => {
    
//     console.log(" you are inside the div");
// } 

// event object 
// it is a spacial object that has details about th event 
/// all event handler have access to the event object's properties an method.
// node.event = (e) => {
    // handle here
// }

// e.target , e.type , e.clientx , e.clienty
//  let div = document.querySelector("#div");
// div.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientx, evt.clienty);  // undefined
// } 

// event listner

// Node.addEventListener(event, callback)
// Node.removeEventListener(event, callback)
// note -> the callback reference should be same to remove 

let div = document.querySelector("#div");
div.addEventListener("click", (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
})

// btn2.addEventListener("click", (evt) => {
//     console.log(evt);
//     // console.log(evt.type);
//     // console.log(evt.target);
// })
btn2.addEventListener("click", () => {
    console.log("btn war clicked by mouse handler 1");
})
btn2.addEventListener("click", () => {
    console.log("btn war clicked by mouse handler 2");
})
const handler3 = () => {
    console.log("btn war clicked by mouse handler 2");
}
btn2.addEventListener("click", handler3)

btn2.addEventListener("click", () => {
    console.log("btn war clicked by mouse handler 4");
})

btn2.removeEventListener("click", handler3);

// create a toggle button that changes the screen to dark mode when clicked as light mode when click again.

let modeChangeBtn = document.querySelector("#modeChangeBtn");
let body = document.querySelector("body")
let mode = "light"; // cange dark
modeChangeBtn.addEventListener("click", () => {
    if(mode === "light") {
        mode ="dark";
        // document.body.style.backgroundColor = "black"
         document.body.classList.add("dark");

    } else {
        mode = "light";
        // document.body.style.backgroundColor = "white";
        body.classList.add('light');
    }

    console.log(mode);
});
