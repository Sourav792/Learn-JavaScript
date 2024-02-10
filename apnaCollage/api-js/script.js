
let URL = "https://cat-fact.herokuapp.com/facts";
const fectPara = document.querySelector("#fact");
const Btn = document.querySelector("#btn");

/* const getFacts = async () => {
    console.log("geting data .... ");
    let response = await fetch(URL);
    console.log(response); // JSON format
    let Data = await response.json();
    // console.log(Data[0].text);
    // fectPara.innerText = Data[0].text;
    // fectPara.innerText = Data[1].text;
    // fectPara.innerText = Data[2].text;
    // fectPara.innerText = Data[3].text;
    fectPara.innerText = Data[4].text;
} */

function getFacts () {
    fetch(URL).then(() => {
        
    })
}

Btn.addEventListener("click", getFacts);
