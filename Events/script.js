// let owl = document.querySelector("#owl")
// owl.onclick = () => {
//     alert("you are owl ")
// }
// let images = document.querySelector("#images")
// let owl = document.querySelector("#owl")
// let river = document.querySelector("#river")
// owl.addEventListener("click", () => {
//     alert("hello you are so cute")
// })

// attachEvent() method
// jQuary - on

// owl.addEventListener("click", (e) => {
//     console.log(e);
// })

// learn
// types, timestamp, defaultPrevented
// target, toElemet, srcElement, currTarget
// clientX, clientY, screenX, screen
// altKey, ctrlKey, shiftKey, KeyCode

// event propogation -- 2 context
// event bubbling = false (bottom to top)
//  event capturing = true (top to bottom)
// owl.addEventListener("click", () => {
//     alert("hello you are so cute")
// }, false)

// owl.addEventListener("click", () => {
//     alert("hello you are so cute")
// }, true)

// event bubbling
// images.addEventListener("click", (e) => {
//     console.log("clicked inside the ul")
// }, false)
// owl.addEventListener("click", (e) => {
//     console.log("owl clicked")
// }, false)

// event capturing
// images.addEventListener("click", (e) => {
//     console.log("clicked inside the ul")
// }, true)
// owl.addEventListener("click", (e) => {
//     console.log("owl clicked")
// }, true)

// stopPropogation() method (stop the bubbling)
// images.addEventListener("click", (e) => {
//     console.log("clicked inside the ul")
// }, false)
// owl.addEventListener("click", (e) => {
//     console.log("owl clicked")
//     e.stopPropagation()
// }, false)

// let google = document.querySelector("#google")
// google.addEventListener("click", (e) => {
//     e.preventDefault()
//     e.stopPropagation()
//    console.log('google clicked');
// }, false)

let images = document.querySelector("#images");
images.addEventListener(
  "click",
  (e) => {
    //   console.log(e);
    // console.log(e.target);
    // console.log(e.target.parentNode);
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode;
        removeIt.remove()
    }

  },
  false
  );
  
  // removeIt.parentNode.removeChild(removeIt)