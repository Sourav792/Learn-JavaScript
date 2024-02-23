const clock = document.querySelector('#clock');


setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
    // console.log(date.toLocaleTimeString());
}, 1000);