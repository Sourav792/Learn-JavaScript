const accessToken = "J916BZuQah3mUu-BpJztcIYtaxkFqAA8J1Q46mdRKig";

let inputText = document.querySelector("#inputText");
let searchBtn = document.querySelector("#searchBtn");
let imagesDiv = document.querySelector(".images");
let showMoreBtn = document.querySelector("#showMoreBtn");

let searchForm = document.querySelector("#searchForm");

let keywords = "";
let page = 1;

async function searchImage() {
  try {
    let URL = `https://api.unsplash.com/search/photos?page=${page}&query=${keywords}&client_id=${accessToken}&per_page=12;`;
    let apiRequest = await fetch(URL);
    let data = await apiRequest.json();
    console.log(data);
    let resultArray = data.results;
    // console.log(resultArray);

    if (page === 1) {
      imagesDiv.innerHTML = "";
    }

    resultArray.map((result) => {
      let img = document.createElement("img");
      img.src = result.urls.small;
      let imageLink = document.createElement("a");
      imageLink.href = result.links.html;
      imageLink.target = "_blank";
      imageLink.appendChild(img);
      imagesDiv.appendChild(imageLink);
    });

    showMoreBtn.classList.add("active");

  } catch (error) {
    console.error("Error:", error); // Log any errors that occur during the fetch;
  }
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
