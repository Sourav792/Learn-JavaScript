const accessToken = "J916BZuQah3mUu-BpJztcIYtaxkFqAA8J1Q46mdRKig";

let inputText = document.querySelector("#inputText");
let searchBtn = document.querySelector("#searchBtn");
let imagesDiv = document.querySelector(".images");
let showMoreBtn = document.querySelector("#showMoreBtn");

let searchForm = document.querySelector("#searchForm");

let keywords = "";
let page = 1;

function searchImage() {
  keywords = inputText.value;

  let URL = `https://api.unsplash.com/search/photos?page=${page}&query=${keywords}&client_id=${accessToken}&per_page=12`;
  let apiRequest = fetch(URL);
  apiRequest
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Logs the data received from the API
      let resultArray = data.results;
      console.log(resultArray);

      if (page === 1) {
        imagesDiv.innerHTML = "";
      }

      resultArray.map((result) => {
        console.log(result.urls.regular);
        let img = document.createElement("img");
        img.src = result.urls.small;
        let imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(img);
        imagesDiv.appendChild(imageLink);
      });

      showMoreBtn.classList.add("active");
    })
    .catch((error) => {
      console.error("Error:", error); // Logs any errors that occur during the fetch
    });
}

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  keywords = inputText.value;
  console.log(keywords);
  page = 1;
  searchImage();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImage();
});
