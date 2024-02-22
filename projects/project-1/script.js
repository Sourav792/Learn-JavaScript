const documentBody = document.querySelector('body')
const buttons = document.querySelectorAll('.button')

// console.log(buttons);
buttons.forEach((btn) => {
//   console.log(btn);
  btn.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    // if (e.target.id === 'red') {
    //     documentBody.style.backgroundColor = 'red'
    // } else if(e.target.id === 'white') {
    //     documentBody.style.backgroundColor = 'white'
    // } else if(e.target.id === 'blue') {
    //     documentBody.style.backgroundColor = 'blue'
    // } else if(e.target.id === 'yellow') {
    //     documentBody.style.backgroundColor = 'yellow'
    // } else {
    //     console.log('error');
    // }
    let eventTarget = e.target.id
    switch (eventTarget) {
        case 'red':
            documentBody.style.backgroundColor = 'red'
            break;
            case 'aqua':
            documentBody.style.backgroundColor = 'aqua'
            break;
            case 'blue':
            documentBody.style.backgroundColor = 'blue'
            break;
            case 'yellow':
            documentBody.style.backgroundColor = 'yellow'
            break;
    
        default:
            documentBody.style.backgroundColor = 'black'
            break;
    }
  })
})