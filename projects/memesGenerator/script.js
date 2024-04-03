let container = document.querySelector('container');
let image = document.querySelector('#memes_img');
let title = document.querySelector('#title');
let nextBtn = document.querySelector('#next_btn');
let previousBtn = document.querySelector('#previous_btn');

const URL = fetch(`https://meme-api.com/gimme/wholesomememes`);
  URL.then((response) => response.json())
    .then((data) => {
      console.log(data);
      title.innerText = data.title
      image.src = data.url
    })
    .catch((error) => {
      console.error("Error occured:", error);
    });