let imgBox = document.querySelector('.qrCode-box');
let qrImg = document.querySelector('#qrCode');
let input = document.querySelector('#input');
let generateBtn = document.querySelector('#generate-btn');




generateBtn.onclick = function() {
    const dataURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
    if (input.value == undefined || input.value.length < 3) {
        alert('please enter your full name or email')
    } else {
        imgBox.classList.add('active')
        qrImg.src = dataURL;
    }
}

  