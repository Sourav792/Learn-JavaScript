let Quate = document.querySelector("#quate");
let Author = document.querySelector("#authorName");
let newQuate = document.querySelector("#new-quate");
let shareTwitter = document.querySelector("#shareTwitter");

function getQuate() {
  const URL = fetch("https://api.quotable.io/random");
  URL.then((response) => response.json())
    .then((data) => {
      console.log(data);
      Quate.innerText = data.content;
      Author.innerText = data.author;
    })
    .catch((error) => {
      console.error("Error occured:", error);
    });
}

  shareTwitter.addEventListener("click", () => {
    window.open(
      `${"https://twitter.com/intent/tweet?text="}${Quate.innerText}   ___${Author.innerText}`,
      "Tweet Window",
      "width:500px, height:500px"
      );
  });
